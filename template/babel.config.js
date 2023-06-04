module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          assets: './assets',
        },
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts', '.native.js'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
