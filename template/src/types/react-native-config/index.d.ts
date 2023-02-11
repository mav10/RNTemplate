declare module 'react-native-config' {
  interface Env {
    REACT_APP_VERSION_NAME: string;
    REACT_APP_BUILD_ID: number;
    REACT_APP_BUILD_DATE: string;
    REACT_APP_APP_ENV: string;

    REACT_APP_CODEPUSH_KEY: string;
    REACT_APP_SENTRY_DSN: string;

    REACT_APP_DEVMODE_ENABLED: boolean;
    REACT_APP_DEVMODE_PASS: string;

    REACT_APP_API_URL: string;
    REACT_APP_CLIENT_KEY: string;
  }

  const Config: Env;

  export default Config;
}
