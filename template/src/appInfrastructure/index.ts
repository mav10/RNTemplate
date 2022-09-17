import { rootStore } from './redux-store/root-store';
import { RootState } from './redux-store/store-types';
import { defaultAppState } from '../features/app/app-state';

const defaultStore: Partial<RootState> = {
  app: defaultAppState,
};

export const RootStore = rootStore(defaultStore);
