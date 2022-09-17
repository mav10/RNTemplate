import { applyMiddleware, createStore, Middleware } from 'redux';
import { rootReducer } from './root-reducer';
import { RootState } from './store-types';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistence/persist-config';

export function rootStore(defaultState?: Partial<RootState>) {
  // Add new middlewares here
  const middlewares: Middleware[] = [];

  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  const middlewareEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    defaultState,
    middlewareEnhancers,
  );

  return { store, persistor: persistStore(store) };
}
