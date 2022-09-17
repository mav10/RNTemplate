import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistConfig } from 'redux-persist/es/types';
import { createMigrate } from 'redux-persist';
import { migrations } from './migrations';

export const persistConfig: PersistConfig<any> = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  whitelist: [],
  migrate: createMigrate(migrations, { debug: false }),
};
