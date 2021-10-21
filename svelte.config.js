import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { markdownIt } from './src/services/markdown/rollupPlugin.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import replace from '@rollup/plugin-replace';
const docLocation = fileURLToPath(new URL('./docs/articles', import.meta.url));

const pathToScss = (scss) =>
  fileURLToPath(new URL(`./src/styles/${scss}`, import.meta.url));

const scssPreppendData = [
  fs.readFileSync(pathToScss('_variables.scss', 'utf8')),
  fs.readFileSync(pathToScss('_mixins.scss', 'utf8')),
  fs.readFileSync(pathToScss('_fonts.scss', 'utf8')),
].join('\n');

export default {
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  kit: {
    adapter: adapter({
      pages: 'dist',
    }),

    vite: () => ({
      plugins: [
        markdownIt({
          docLocation,
        }),
        replace({
          __docsLocation: JSON.stringify(docLocation),
          preventAssignment: true,
        }),
      ],
    }),
  },

  preprocess: preprocess({ scss: { prependData: scssPreppendData } }),
};
