import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { RootState } from './store-types';
import { RootAction } from './root-action';

export function createPreserveStateMiddleware(
  saveStateFunction: (state: RootState) => void,
  saveTypes: any[],
) {
  const preserveStateMiddleware: Middleware =
    ({ getState }: MiddlewareAPI) =>
    (next: Dispatch) =>
    (action: RootAction) => {
      const result = next(action);

      if (saveTypes.includes(action.type)) {
        saveStateFunction(getState());
      }

      return result;
    };

  return preserveStateMiddleware;
}
