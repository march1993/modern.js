import type { LoaderDefinition } from 'webpack';
import { Buffer } from 'buffer';
import { FinalOptions } from './types';
import Codecs from './shared/codecs';

/* eslint-disable @babel/no-invalid-this */
const loader: LoaderDefinition<FinalOptions> = function loader(content) {
  const callback = this.async();
  const opt = this.getOptions();
  const buf = Buffer.from(content);
  const codec = Codecs[opt.use];
  if (!codec) {
    throw new Error(`Codec ${opt.use} is not supported`);
  }
  codec
    .handler(buf, opt)
    .then(buf => callback(null, buf))
    .catch(err => callback(err));
};
/* eslint-enable */

export default loader;
