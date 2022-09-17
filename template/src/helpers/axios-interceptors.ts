import { AxiosRequestConfig } from 'axios';
import { RootState } from '../appInfrastructure/redux-store/store-types';
import Config from 'react-native-config';
import { Platform } from 'react-native';
import i18n from 'i18next';

export function createId() {
  return Math.random().toString(36).substr(2, 9);
}

// it's constant while the app is running, and different after app restarts
export const sessionId = `${createId()}-${createId()}-${createId()}`;

export const injectAppVersionToHeaders = (getState: () => RootState) => {
  return async (config: AxiosRequestConfig) => {
    const state = getState();
    const codePushVersion = state.app.codePushVersion;
    const extraVersion = codePushVersion
      ? `(${codePushVersion.substr(1)})`
      : '';

    config.headers = config.headers ?? {};
    config.headers.ClientVersion = `${Config.REACT_APP_VERSION_NAME}${extraVersion}`;
    config.headers.ClientPlatform = Platform.OS;
    config.headers.ClientSession = sessionId;
    config.headers.ClientEnv = Config.REACT_APP_APP_ENV;

    return config;
  };
};

export async function injectLanguageInterceptor(config: AxiosRequestConfig) {
  const language = i18n.language;
  config.headers = config.headers ?? {};
  config.headers['Accept-Language'] = language;
  return config;
}
