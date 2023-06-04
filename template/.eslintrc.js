module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', 'react-native', 'react-hooks', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        endOfLine: 'lf',
        printWidth: 120,
        bracketSameLine: true,
        bracketSpacing: true,
      },
    ],

    // React-hooks.
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Common
    'radix': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'es6': true,
    'node': true,
    'jest': true,
    'jest/globals': true,
    'react-native/react-native': true,
  },
  overrides: [
    {
      files: ['*.e2e.js', '*.e2e-helper.js', '*.e2e.ts', '*.e2e-helper.ts'],
      env: {
        'jest': true,
        'jest/globals': true,
      },
    },
  ],
};
