export type AppState = {
  app: string;
  codePushVersion: string | null;
  isInit: boolean;
  splashHidden: boolean;
};

export const defaultAppState: AppState = {
  app: 'RN Template App',
  codePushVersion: null,
  isInit: false,
  splashHidden: false,
};
