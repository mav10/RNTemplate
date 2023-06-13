import axios, { AxiosRequestConfig } from 'axios';
import { RootState } from '../appInfrastructure/redux-store/store-types';
import Config from 'react-native-config';
import { Platform } from 'react-native';
import i18n from 'i18next';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as RNLocalize from 'react-native-localize';

export function createId() {
  return Math.random().toString(36).substr(2, 9);
}

// it's constant while the app is running, and different after app restarts
export const sessionId = `${createId()}-${createId()}-${createId()}`;

export const injectTokenInterceptor = (getState: () => RootState) => {
  return async (config: AxiosRequestConfig) => {
    const state = getState();
    const authState = state.auth;

    // we should not overwrite Authorization headers for requests to IdentityServer, because there's Basic authorization header already
    if (
      authState.state === 'Authorized' &&
      !config.url?.endsWith('/connect/token') &&
      !config.url?.endsWith('/connect/revocation')
    ) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${authState.accessToken}`;
    }

    return config;
  };
};

export const setupRefreshTokenInterceptor = (getState: () => RootState) => {
  return async (config: AxiosRequestConfig) => {
    createAuthRefreshInterceptor(axios, async () => {
      const state = getState();
      const authState = state.demo.state === 'Authorized' ? state.demo : state.auth;
      if (authState.state === 'Authorized') {
        // TODO: add custom refresh-token logic
        // await authService().refresh(authState.accessToken, authState.refreshToken);
      }
    });
    return config;
  };
};

export const injectAppVersionToHeaders = (getState: () => RootState) => {
  return async (config: AxiosRequestConfig) => {
    const state = getState();
    const codePushVersion = state.app.codePushVersion;

    config.headers = config.headers ?? {};
    config.headers.ClientVersion = Config.REACT_APP_VERSION_NAME;
    config.headers.ClientPlatform = Platform.OS;
    config.headers.ClientSession = sessionId;
    config.headers.ClientEnvironment = Config.REACT_APP_APP_ENV;
    config.headers.CodePushVersion = `${codePushVersion && 'bare'}`;

    return config;
  };
};

export async function injectLanguageInterceptor(config: AxiosRequestConfig) {
  const language = i18n.language;
  config.headers = config.headers ?? {};
  config.headers['Accept-Language'] = language;
  return config;
}

export async function createInjectTimezoneInterceptor(config: AxiosRequestConfig) {
  const timeZone = RNLocalize.getTimeZone();
  config.headers = config.headers ?? {};
  config.headers.Timezone = timeZone;

  return config;
}
