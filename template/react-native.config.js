module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./assets/fonts'], // stays the same
  dependencies: {
    ...(process.env.AGENT_ID ? { 'react-native-flipper': { platforms: { ios: null } } } : {}),
  },
};
