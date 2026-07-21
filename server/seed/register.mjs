// Registers the asset loader hook, then the seed runs with image imports
// resolved to /cms-assets URLs. Used as: node --import ./server/seed/register.mjs ...
import { register } from 'node:module';
register('./asset-loader.mjs', import.meta.url);
