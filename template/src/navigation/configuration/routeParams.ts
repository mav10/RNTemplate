import { AppRoutes } from './routes';

export type RootStackScreenParams = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.NoConnection]: undefined;
};

export type TabScreenParams = {
  [AppRoutes.Dashboard]: undefined;
  [AppRoutes.ReactNative]: undefined;
  [AppRoutes.Notifications]: undefined;
  [AppRoutes.Profile]: undefined;
};
