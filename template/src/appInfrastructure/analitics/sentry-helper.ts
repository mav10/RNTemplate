import {
  addBreadcrumb,
  Breadcrumb,
  captureMessage,
  init,
  nativeCrash,
  setExtra,
  Severity,
} from '@sentry/react-native';
import Config from 'react-native-config';
import { logger } from '../logging/logging';
import { NavigationState } from '@react-navigation/native';
import { routeNameRef } from '../../services/navigation-service';

function toFlatStateList(state: NavigationState): NavigationState[] {
  const currentRoute = state.routeNames[state.index];
  const possibleDeepRoute = state.routes.find(
    (x) => x.name === currentRoute,
  )?.state;

  const result: NavigationState[] = [state];
  if (
    possibleDeepRoute &&
    possibleDeepRoute.routes &&
    possibleDeepRoute.index !== undefined
  ) {
    // @ts-ignore
    const nestedRoutes = toFlatStateList(possibleDeepRoute);
    result.push(...nestedRoutes);
  }
  return result;
}

export const sentryScreenTrackHandler = (
  state: NavigationState | undefined,
) => {
  if (state) {
    const flatArray = toFlatStateList(state);
    const rootRoute = flatArray[0];
    const actualRoute = flatArray.slice(-1)[0];

    const previousRouteName = routeNameRef.current;

    if (previousRouteName !== actualRoute) {
      const breadcrumb: Breadcrumb = {
        level: Severity.Info,
        type: 'navigation',
        category: `navigation:${rootRoute.routeNames[state.index]}`,
        message: actualRoute.routes[actualRoute.index || 0].name,
        data: {
          from: previousRouteName,
          to: actualRoute.routes,
        },
      };

      addBreadcrumb(breadcrumb);
    }
  }
};

export const initializeSentry = () => {
  const { REACT_APP_SENTRY_DSN, REACT_APP_APP_ENV } = Config;
  if (REACT_APP_SENTRY_DSN.length > 0) {
    if (__DEV__) {
      logger().info('Sentry configuration will be ignored because of DEBUG.');
    } else {
      init({ dsn: REACT_APP_SENTRY_DSN, environment: REACT_APP_APP_ENV });
      logger().info('Sentry has been initialized');
    }
  } else {
    logger().info(
      'Sentry has NOT been initialized because of DSN is not configured.',
    );
  }
};

export const SetCodePushVersionIntoSentry = (version: string | undefined) => {
  setExtra('code_push_version', version || 'bare');
};

export function sendJsCrash() {
  throw new Error('Test JS error from App');
}

export function sendNativeCrash() {
  nativeCrash();
}

/**
 * Send to Sentry
 */
export const captureLog = (msg: any) => {
  if (msg) {
    if (typeof msg === 'object') {
      captureMessage(JSON.stringify(msg));
    } else {
      captureMessage(msg);
    }
  }
};
