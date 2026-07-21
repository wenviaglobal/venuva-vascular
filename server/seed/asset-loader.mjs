// Node ESM loader hook used only by the seed script.
// It lets us import the app's real data modules (src/data/*.js) in plain Node
// by resolving image asset imports (`import img from '../assets/x.webp'`) to the
// public URL string where we copied those assets (`/cms-assets/x.webp`), instead
// of trying to parse the binary as JS.
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const ASSET_RE = /\.(webp|png|jpe?g|svg|gif|avif|ico)$/i;
const assetsRoot = path.resolve(process.cwd(), 'src/assets');

export async function resolve(specifier, context, next) {
  if (ASSET_RE.test(specifier.split('?')[0])) {
    const parent = context.parentURL ? fileURLToPath(context.parentURL) : process.cwd();
    const abs = path.resolve(path.dirname(parent), specifier.split('?')[0]);
    return { url: pathToFileURL(abs).href, shortCircuit: true, format: 'asset' };
  }
  return next(specifier, context);
}

export async function load(url, context, next) {
  if (context.format === 'asset' || ASSET_RE.test(url.split('?')[0])) {
    const filePath = fileURLToPath(url);
    const rel = path.relative(assetsRoot, filePath).split(path.sep).join('/');
    const publicUrl = '/cms-assets/' + rel;
    return {
      format: 'module',
      shortCircuit: true,
      source: `export default ${JSON.stringify(publicUrl)};`,
    };
  }
  return next(url, context);
}
