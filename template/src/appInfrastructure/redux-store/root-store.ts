import { rootReducer } from './root-reducer';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistence/persist-config';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customMiddlewares: any[] = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  customMiddlewares.push(createDebugger());
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(customMiddlewares),
});
const persistor = persistStore(store);

export const RootStore = {
  store,
  persistor,
};
