import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { appSlice } from '../../features/app/app-slice';
import { defaultAppState } from '../../features/app/app-types';
import { RootState } from './store-types';
import {AuthActions, authSlice} from "../../features/auth/auth-slice";

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
  auth: authSlice.reducer,
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === AuthActions.logout.type) {
    state = {
      app: { ...defaultAppState, isInit: state.app.isInit, splashHidden: state.app.splashHidden },
    };
    _logoutHandler();
  }

  return reducer(state, action);
};
