import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({}),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
    }),
    paths: {
      base: process.env.NODE_ENV !== 'production' ? '' : '/svelte-turing-render',
      // https://krist7599555.github.io/svelte-turing-render
    },
  },
};

export default config;
