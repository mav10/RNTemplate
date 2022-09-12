module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    curly: 'off',
    'no-unused-vars': 'warn',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true,
    'react-native/react-native': true,
  },
  overrides: [
    {
      files: ['*.e2e.js', '*.e2e-helper.js', '*.e2e.ts', '*.e2e-helper.ts'],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
  ],
};
