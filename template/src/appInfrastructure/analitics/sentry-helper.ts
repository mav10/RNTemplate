import { NavigationState } from '@react-navigation/native';

function toFlatStateList(state: NavigationState): NavigationState[] {
  const currentRoute = state.routeNames[state.index];
  const possibleDeepRoute = state.routes.find(
    x => x.name === currentRoute,
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
