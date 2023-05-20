import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackScreenParams } from '../navigation/configuration/routeParams';

/**
 * Navigation Ref object for bounding NavigationCOntainer and out-of-context helpers.
 */
export const navigationRef = createNavigationContainerRef<RootStackScreenParams>();

/**
 * Helper for navigation out of react-context.
 * @param parameters - Name and screen params for navigation.
 */
export function navigate(parameters: { name: any; params: any }) {
  const { name, params } = parameters;
  navigationRef.current?.navigate(name, params);
}

/**
 * Helper for getting navigation-Info out of react-context
 */
export function getCurrentRoute(): any {
  if (!navigationRef?.current) {
    return false;
  }

  return navigationRef?.current?.getCurrentRoute();
}
