import { AppRoutes } from './routes';

export type RootStackScreenParams = {
  [AppRoutes.Dashboard]: undefined;
  [AppRoutes.NoConnection]: undefined;
  [AppRoutes.ReactNative]: undefined;
};

export type RouteParamList = RootStackScreenParams;
