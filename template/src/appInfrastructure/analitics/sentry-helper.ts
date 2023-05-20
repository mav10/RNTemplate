import { NavigationState } from '@react-navigation/native';
import Config from 'react-native-config';
import { logger } from '../logging/logging';

function toFlatStateList(state: NavigationState): NavigationState[] {
  const currentRoute = state.routeNames[state.index];
  const possibleDeepRoute = state.routes.find(x => x.name === currentRoute)?.state;

  const result: NavigationState[] = [state];
  if (possibleDeepRoute && possibleDeepRoute.routes && possibleDeepRoute.index !== undefined) {
    // @ts-ignore
    const nestedRoutes = toFlatStateList(possibleDeepRoute);
    result.push(...nestedRoutes);
  }
  return result;
}

export const initializeSentry = () => {
  const { REACT_APP_SENTRY_DSN, REACT_APP_APP_ENV } = Config;
  if (typeof REACT_APP_SENTRY_DSN === 'string' && REACT_APP_SENTRY_DSN.length > 0) {
    if (__DEV__) {
      logger().info('Sentry configuration will be ignored because of DEBUG.');
    } else {
      // init({
      //   dsn: REACT_APP_SENTRY_DSN,
      //   environment: REACT_APP_APP_ENV,
      //   attachStacktrace: true,
      //   // Fix duplicate breadcrumbs
      //   // https://github.com/getsentry/sentry-react-native/issues/1409
      //   beforeSend: event => {
      //     if (event.breadcrumbs && Platform.OS === 'android') {
      //       delete event.breadcrumbs;
      //     }
      //     return event;
      //   },
      // });
      // logger().info('Sentry has been initialized');
    }
  } else {
    logger().info('Sentry has NOT been initialized because of DSN is not configured.');
  }
};

export const SetCodePushVersionIntoSentry = (version: string | undefined) => {
  // setExtra('code_push_version', version || 'bare');
};

export const setUserToSentry = (userId?: string) => {
  if (userId) {
    // setUser({ id: userId });
  }
};

export function sendJsCrash() {
  throw new Error('Test JS error from App 2');
}

export function sendNativeCrash() {
  // nativeCrash();
}
