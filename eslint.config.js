import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    files: ['build/*.ts', '**/*.test.ts'],
    rules: {
      'import/no-extraneous-dependencies': 'off'
    }
  },

  {
    ignores: ['node_modules', 'dist'],
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended, 
      jsxA11y.flatConfigs.recommended, 
      importPlugin.flatConfigs.recommended,
      ...tseslint.configs.recommended,
    ],

    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json']
      }
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "react-refresh/only-export-components": "warn",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  //Правила без плагинов.
  {
    rules: {
      "import/no-unresolved": "off",
      "import/no-duplicates": "error",
  
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    }
  }
)
