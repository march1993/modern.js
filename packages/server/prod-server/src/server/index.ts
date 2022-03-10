import { IncomingMessage, ServerResponse, Server as httpServer } from 'http';
import path from 'path';
import {
  serverManager,
  AppContext,
  ConfigContext,
} from '@modern-js/server-core';
import { compatRequire, logger as defaultLogger } from '@modern-js/utils';
import {
  initAppContext,
  initAppDir,
  loadUserConfig,
  UserConfig,
} from '@modern-js/core';
import { ModernServerOptions, ServerHookRunner, ReadyOptions } from '../type';
import { metrics as defaultMetrics } from '../libs/metrics';
import { ModernServer } from './modern-server';
import {
  ModernAPIServer,
  ModernSSRServer,
  ModernWebServer,
} from './modern-server-split';

const createProdServer = (options: ModernServerOptions): ModernServer => {
  if (options.apiOnly) {
    return new ModernAPIServer(options);
  } else if (options.ssrOnly) {
    return new ModernSSRServer(options);
  } else if (options.webOnly) {
    return new ModernWebServer(options);
  } else {
    return new ModernServer(options);
  }
};

export class Server {
  public options: ModernServerOptions;

  protected serverImpl: (options: ModernServerOptions) => ModernServer =
    createProdServer;

  private server!: ModernServer;

  private app!: httpServer;

  private runner!: ServerHookRunner;

  constructor(options: ModernServerOptions) {
    this.options = options;
  }

  public getRequestHandler() {
    return (req: IncomingMessage, res: ServerResponse, next?: () => void) => {
      const requestHandler = this.server.getRequestHandler();
      return requestHandler(req, res, next);
    };
  }

  public ready(readyOptions: ReadyOptions = {}) {
    this.server.ready(readyOptions);
  }

  public async init() {
    const { options } = this;

    options.logger = options.logger || defaultLogger;
    options.metrics = options.metrics || defaultMetrics;

    // initialize server
    this.server = this.serverImpl(options);

    // create http-server
    this.app = await this.server.createHTTPServer(this.getRequestHandler());

    this.runner = await this.createHookRunner();

    // runner can only be used after server init
    await this.server.init(this.runner);

    return this;
  }

  public listen(port = 8080, listener: any) {
    this.app.listen(process.env.PORT || port, () => {
      if (listener) {
        listener();
      }

      this.listener(this.app);
    });
  }

  public listener(app: httpServer) {
    this.server.onListening(app);
  }

  public async close() {
    await this.server.close();
    await new Promise<void>(resolve =>
      this.app.close(() => {
        resolve();
      }),
    );
  }

  private async createHookRunner() {
    const { options } = this;

    serverManager.clear();

    options.plugins?.forEach(p => {
      serverManager.usePlugin(compatRequire(p.pluginPath));
    });

    const appContext = await this.initAppContext();
    serverManager.run(() => {
      ConfigContext.set(this.options.config as UserConfig);
      AppContext.set({
        ...appContext,
        distDirectory: path.join(
          options.pwd,
          options.config.output?.path || 'dist',
        ),
      });
    });

    return serverManager.init({});
  }

  private async initAppContext() {
    const appDirectory = await initAppDir();

    const loaded = await loadUserConfig(appDirectory);

    const plugins = this.options.plugins?.map(p => ({
      server: p,
      cli: undefined,
    }));

    const appContext = initAppContext(
      appDirectory,
      plugins || [],
      loaded.filePath,
    );
    return appContext;
  }
}