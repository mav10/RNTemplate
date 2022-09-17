export type AppState = {
  app: string;
  codePushVersion: string | null;
  isInit: boolean;
};

export const defaultAppState: AppState = {
  app: 'RN Template App',
  codePushVersion: null,
  isInit: false,
};
