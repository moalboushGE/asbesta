import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';

// Engineering- & Qualitaets-Charta (Plan Kap. 8.2/8.3): Komplexitaets- & Groessen-Budgets
// gegen "God-Components", plus SonarJS fuer kognitive Komplexitaet.
export default tseslint.config(
  { ignores: ['dist/', '.astro/', 'node_modules/', 'screenshots/', 'sitemap*.xml'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  sonarjs.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      complexity: ['error', 15],
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],
      'max-depth': ['error', 4],
      'max-params': ['error', 4],
      'max-nested-callbacks': ['error', 3],
      'sonarjs/cognitive-complexity': ['error', 15],
      // In datengetriebener UI sind wiederholte Utility-/Icon-Strings normal:
      'sonarjs/no-duplicate-string': 'off',
    },
  },
  {
    // Datendateien sind deklarativer Content (kein "God-Component") -> Groessen-Budget hier aus.
    files: ['src/data/**/*.ts'],
    rules: { 'max-lines': 'off' },
  },
);
