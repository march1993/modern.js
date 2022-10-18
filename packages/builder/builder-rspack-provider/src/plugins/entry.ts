import type { BuilderPlugin } from '../types';

export const PluginEntry = (): BuilderPlugin => {
  return ({
  name: 'builder-plugin-entry',

  setup(api) {
    api.modifyRspackConfig(async rspackConfig => {
      const { ensureArray } = await import('@modern-js/utils');

      const { entry } = api.context;
      const finalEntry = rspackConfig.entry || {};

      Object.keys(entry).forEach(entryName => {
        ensureArray(entry[entryName]).forEach(item => {
          finalEntry[entryName] = item
        });
      });

      rspackConfig.entry = finalEntry
    });
  },
})};
