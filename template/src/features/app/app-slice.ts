import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultAppState } from './app-types';

export const appSlice = createSlice({
  name: 'app',
  initialState: defaultAppState,
  reducers: {
    setCodePushVersion: (state, action: PayloadAction<string | null>) => {
      return {
        ...state,
        codePushVersion: action.payload,
      };
    },
    initialized: state => {
      return {
        ...state,
        isInit: true,
      };
    },
    hideSplash: state => {
      return {
        ...state,
        splashHidden: true,
      };
    },
  },
});

export const AppActions = appSlice.actions;
