import { analyticsService } from '../../services';
import { NavigationState } from '@react-navigation/native';

export const trackScreenHandler = async (state: NavigationState | undefined) => {
  if (state) {
    const currentRouteName = state?.routeNames[state?.index];
    await analyticsService().trackScreen(currentRouteName);
  }
};
