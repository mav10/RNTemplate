import { AppRoutes } from './routes';

export type RootStackScreenParams = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Login]: undefined;
  [AppRoutes.NoConnection]: undefined;
  [AppRoutes.Maintenance]: undefined;
  [AppRoutes.ServerError]: undefined;
  [AppRoutes.MandatoryUpdate]: undefined;
  [AppRoutes.DevScreen]: undefined;
  [AppRoutes.Info]: undefined;
};

export type TabScreenParams = {
  [AppRoutes.Dashboard]: undefined;
  [AppRoutes.ReactNative]: undefined;
  [AppRoutes.Notifications]: undefined;
  [AppRoutes.Profile]: undefined;
};
