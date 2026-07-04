import astro from 'eslint-plugin-astro';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  prettierConfig,
  ...astro.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'prettier/prettier': 'off', // Disable prettier for .astro files
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
];
