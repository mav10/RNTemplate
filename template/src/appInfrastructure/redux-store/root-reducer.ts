import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { appSlice } from '../../features/app/app-slice';
import { defaultAppState } from '../../features/app/app-types';
import { logoutAction } from './root-action';
import { RootState } from './store-types';

let _logoutHandler = () => {
  /* no action by default */
};

export function addLogoutHandler(handler: () => void) {
  const oldLogoutHandler = _logoutHandler;
  _logoutHandler = () => {
    oldLogoutHandler();
    handler();
  };
}

const reducer: Reducer = combineReducers({
  app: appSlice.reducer,
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === logoutAction.type) {
    state = {
      app: { ...defaultAppState, isInit: state.app.isInit },
    };
    _logoutHandler();
  }

  return reducer(state, action);
};
