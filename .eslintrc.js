/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'eslint-plugin-vue'
  ],
  extends: [
    'plugin:vue/recommended',
    '@vue/eslint-config-typescript',
    'plugin:storybook/recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'prettier/prettier': ['error', {
      singleQuote: true,
      semi: true,
      trailingComma: 'es5',
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      endOfLine: 'auto',
      jsxBracketSameLine: true,
    }],
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['.storybook/**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      }
    }
  ],
};
