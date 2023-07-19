module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:svelte/recommended',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
    'unused-imports',
    'simple-import-sort',
    'tailwindcss',
  ],
  ignorePatterns: ['*.cjs', '*.mjs'],
  overrides: [{ files: ['*.svelte'], parser: 'svelte-eslint-parser' }],
  settings: {
    'svelte/typescript': () => require('typescript'),
    'svelte/ignore-styles': () => true,
    tailwindcss: {
      config: 'tailwind.config.cjs',
    },
  },
  globals: {
    $$props: true,
    $$restProps: true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
