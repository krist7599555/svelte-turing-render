module.exports = {
  embeddedLanguageFormatting: 'off',
  // https://prettier.io/docs/en/options.html#embedded-language-formatting
  arrowParens: 'avoid',
  overrides: [
    { files: '*.svelte', options: { parser: 'svelte' } },
    {
      files: '*.ts',
      options: {
        parser: 'babel-ts',
      },
    },
  ],
  plugins: [
    './node_modules/prettier-plugin-packagejson/lib/index.js',
    './node_modules/prettier-plugin-svelte/plugin.js',
    './node_modules/prettier-plugin-tailwindcss/dist/index.js',
  ],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: false,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
