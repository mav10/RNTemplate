import { appReducer } from '../../features/app/app-reducer';
import { RootState } from './store-types';
import { RootAction } from './root-action';
import { authReducer } from '../../features/auth/auth-reducer';
import { getType } from 'typesafe-actions';
import { logout } from '../../features/auth/auth-events';
import { defaultAppState } from '../../features/app/app-state';
import { combineReducers } from 'redux';

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

const reducer = combineReducers<RootState>({
  app: appReducer,
  auth: authReducer as any,
});

export const rootReducer = (state: any, action: RootAction) => {
  if (action.type === getType(logout)) {
    state = {
      app: { ...defaultAppState, isInit: state.app.isInit },
    };
    _logoutHandler();
  }

  return reducer(state, action);
};
