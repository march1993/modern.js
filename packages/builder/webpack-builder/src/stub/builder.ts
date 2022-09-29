import type * as playwright from '@modern-js/e2e/playwright';
import { getTemplatePath } from '@modern-js/utils';
import _ from '@modern-js/utils/lodash';
import assert from 'assert';
import { PathLike } from 'fs';
import onChange from 'on-change';
import { URL } from 'url';
import type { BuildOptions } from '../core/build';
import {
  createDefaultBuilderOptions,
  createPrimaryBuilder,
} from '../core/createBuilder';
import { createPrimaryContext } from '../core/createContext';
import { Hooks } from '../core/createHook';
import { matchLoader } from '../shared';
import {
  applyBasicPlugins,
  applyDefaultPlugins,
  applyMinimalPlugins,
} from '../shared/plugin';
import type {
  BuilderOptions,
  BuilderPlugin,
  Context,
  PluginStore,
} from '../types';
import { STUB_BUILDER_PLUGIN_BUILTIN } from './constants';
import { filenameToGlobExpr, globContentJSON } from './utils';

export interface OptionsPluginsItem {
  builtin?: boolean | 'default' | 'minimal' | 'basic';
  additional?: BuilderPlugin[];
}

export interface StubBuilderOptions extends BuilderOptions {
  context?: Partial<Context>;
  /**
   * Setup builtin plugins and add custom plugins.
   * Automatically add builtin plugins by `process.env.STUB_BUILDER_PLUGIN_BUILTIN`.
   */
  plugins?: OptionsPluginsItem | OptionsPluginsItem[keyof OptionsPluginsItem];
  /**
   * Whether to run webpack build. By default it will be `false` and skip webpack building.
   * Set a string value to specify the `output.distPath` config.
   */
  webpack?: boolean | string;
  buildOptions?: BuildOptions;
  /** Watch and record any changes of builder configs. */
  watchConfig?: boolean;
}

export type HookApi = {
  [key in keyof Hooks]: Parameters<Parameters<Hooks[key]['tap']>[0]>;
};

export interface ServeDestOptions {
  hangOn?: playwright.TestType<any, any> | boolean;
}

export function normalizeStubPluginOptions(
  options?: StubBuilderOptions['plugins'],
) {
  const opt: Required<OptionsPluginsItem> = {
    builtin: STUB_BUILDER_PLUGIN_BUILTIN ?? false,
    additional: [],
  };
  // normalize options
  if (Array.isArray(options)) {
    opt.additional = options;
  } else if (typeof options === 'object') {
    Object.assign(opt, options);
  } else if (typeof options === 'string' || typeof options === 'boolean') {
    opt.builtin = options;
  }
  return opt;
}

export async function applyPluginOptions(
  pluginStore: PluginStore,
  options?: StubBuilderOptions['plugins'],
) {
  const opt = normalizeStubPluginOptions(options);
  // apply plugins
  if (opt.builtin === true || opt.builtin === 'minimal') {
    pluginStore.addPlugins(await applyMinimalPlugins());
  } else if (opt.builtin === 'basic') {
    pluginStore.addPlugins(await applyBasicPlugins());
  } else if (opt.builtin === 'default') {
    pluginStore.addPlugins(await applyDefaultPlugins());
  }
  pluginStore.addPlugins(opt.additional);
}

export interface ConfigChange<T> {
  path: string;
  value: T;
  prevValue: T;
  stack?: string[];
}

export const createDefaultStubBuilderOptions = (): Required<BuilderOptions> &
  StubBuilderOptions => ({
  ...createDefaultBuilderOptions(),
  validate: false,
});

/**
 * Create stub builder for testing.
 * Some behaviors will be different to common `createBuilder`.
 */
export async function createStubBuilder(options?: StubBuilderOptions) {
  // init primary builder.
  const builderOptions: Required<BuilderOptions> = {
    ...createDefaultStubBuilderOptions(),
    ...options,
  };
  // apply webpack option.
  if (options?.webpack) {
    const distPath =
      typeof options.webpack === 'string'
        ? options.webpack
        : getTemplatePath('modern-js/stub-builder/dist');
    _.set(builderOptions.builderConfig, 'output.distPath', distPath);
  }
  // init context.
  const context = await createPrimaryContext(builderOptions);
  // merge user context.
  options?.context && _.merge(context, options.context);
  // watch config changes.
  let configChanges: ConfigChange<unknown>[];
  if (options?.watchConfig) {
    configChanges = [];
    context.config = onChange(
      context.config,
      (path: string, value: unknown, prevValue: unknown) => {
        const stacks = new Error().stack?.split('\n').slice(1) || [];
        let findFirst = false;
        const effectiveStackStarts = stacks.findIndex(
          line =>
            !line.includes('/node_modules/') &&
            !line.includes('/webpack-builder/src/') &&
            !(findFirst = !findFirst),
        );
        configChanges.push({
          path,
          value,
          prevValue,
          stack: stacks.slice(effectiveStackStarts),
        });
      },
    );
  }
  // init primary builder.
  const { pluginStore, publicContext } = createPrimaryBuilder(
    builderOptions,
    context,
  );
  // add builtin and custom plugins by `options.plugins`.
  await applyPluginOptions(pluginStore, options?.plugins);

  // tap on each hook and cache the args.
  const resolvedHooks: Record<string, any> = {};
  _.each(context.hooks, ({ tap }, name) => {
    tap((...args) => {
      resolvedHooks[name] = args;
    });
  });

  /**
   * Run build and caching args of all hooks.
   * It will run actual build only first time,
   * and always return cached result until {@link reset}.
   */
  const build = _.memoize(async () => {
    const { build: buildImpl, webpackBuild } = await import('../core/build');
    const executeBuild = options?.webpack ? webpackBuild : undefined;
    await buildImpl(
      { context, pluginStore, builderOptions },
      options?.buildOptions,
      executeBuild,
    );
    return { resolvedHooks: { ...resolvedHooks } };
  });

  /**
   * Unwrap args of hook.
   *
   * The `unwrap` means it will try to run {@link build} and run some asserts before return.
   */
  const unwrapHook = async <T extends keyof HookApi>(
    hook: T,
  ): Promise<HookApi[T]> => (await build()).resolvedHooks[hook];

  /** Unwrap webpack configs. */
  const unwrapWebpackConfigs = async () => {
    const [{ webpackConfigs }] = await unwrapHook('onBeforeBuildHook');
    return webpackConfigs;
  };

  /** Unwrap normalized builder configs. */
  const unwrapNormalizedBuilderConfig = async () => {
    await build();
    const { normalizedConfig } = context;
    assert(typeof normalizedConfig === 'object');
    return normalizedConfig;
  };

  /** Unwrap webpack config, it will ensure there's only one config object. */
  const unwrapWebpackConfig = async () => {
    const webpackConfigs = await unwrapWebpackConfigs();
    assert(webpackConfigs.length === 1);
    return webpackConfigs[0];
  };

  /** Unwrap webpack compiler instance. */
  const unwrapWebpackCompiler = async () => {
    const [{ compiler }] = await unwrapHook('onAfterCreateCompilerHooks');
    return compiler;
  };

  /** Unwrap change records of builder config, require enable `watchConfigs`. */
  const unwrapConfigChanges = async () => {
    await build();
    assert(configChanges);
    return configChanges;
  };

  /** Serialize content of output files into JSON object. */
  const unwrapOutputJSON = async (
    paths: PathLike | PathLike[] = context.distPath,
    isRelative = false,
    maxSize = 4096,
  ) => {
    if (Array.isArray(paths) && isRelative) {
      throw new Error('`isRelative` is not supported for multiple paths.');
    }
    await build();
    const _paths = _(paths)
      .castArray()
      .map(filenameToGlobExpr)
      .map(String)
      .value();
    return globContentJSON(_paths, { absolute: !isRelative, maxSize });
  };

  /** Read output file content. */
  const readOutputFile = async (
    filename: string,
  ): Promise<string | undefined> => {
    const compiler = await unwrapWebpackCompiler();
    return new Promise((resolve, reject) => {
      compiler.outputFileSystem.readFile(filename, (err, data) =>
        err ? reject(err) : resolve(data?.toString('utf-8')),
      );
    });
  };

  /** Unwrap output file content, will ensure it is not empty. */
  const unwrapOutputFile = async (filename: string) => {
    await build();
    const content = await readOutputFile(filename);
    assert(content);
    return content;
  };

  /**
   * Run build and serve on `distPath`.
   * If `hangOn` is true, it will block running and let you debug the server.
   * Set `hangOn` to a {@link playwright.TestType} to automatically unset timeout of test.
   *
   * @example
   * test('should work', async () => {
   *   const builder = await createStubBuilder();
   *   const { baseurl } = builder.buildAndServe({ hangOn: test });
   *   page.goto(`${baseurl}/index.html`);
   * });
   */
  const buildAndServe = async (options?: ServeDestOptions) => {
    const [{ runStaticServer }] = await Promise.all([
      import('@modern-js/e2e'),
      build(),
    ]);
    const { port } = await runStaticServer(context.distPath);
    if (options?.hangOn) {
      // eslint-disable-next-line no-console
      console.log(
        `Successfully build, and hang on running server: http://localhost:${port}`,
      );
      typeof options.hangOn !== 'boolean' && options.hangOn.setTimeout(0);
      await new Promise(() => null);
    }
    // TODO: get real `htmlRoot` & `homeUrl` from compiler.
    const baseUrl = new URL(`http://localhost:${port}`);
    const htmlRoot = new URL('html/', baseUrl);
    const homeUrl = new URL('index/index.html', htmlRoot);
    return {
      baseUrl,
      htmlRoot,
      homeUrl,
      port,
    };
  };

  /** Match webpack plugin by constructor name. */
  const matchWebpackPlugin = async (pluginName: string) => {
    const config = await unwrapWebpackConfig();
    const result = config.plugins?.filter(
      item => item.constructor.name === pluginName,
    );
    if (Array.isArray(result)) {
      assert(result.length <= 1);
      return result[0] || null;
    } else {
      return result || null;
    }
  };

  /** Check if a file handled by specific loader. */
  const matchWebpackLoader = async (loader: string, testFile: string) =>
    matchLoader({ config: await unwrapWebpackConfig(), loader, testFile });

  /** Reset builder. @see {@link build} */
  const reset = () => {
    build.cache.clear!();
  };

  return {
    ...pluginStore,
    build,
    hooks: context.hooks,
    context,
    publicContext,
    unwrapHook,
    unwrapNormalizedBuilderConfig,
    unwrapWebpackConfigs,
    unwrapWebpackConfig,
    unwrapWebpackCompiler,
    unwrapConfigChanges,
    unwrapOutputJSON,
    unwrapOutputFile,
    readOutputFile,
    buildAndServe,
    matchWebpackPlugin,
    matchWebpackLoader,
    reset,
  };
}
