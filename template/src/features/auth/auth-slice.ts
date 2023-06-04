import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './auth-types';

const initialState: AuthState = {
  state: 'Unauthorized',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthState,
  reducers: {
    login(state, action: PayloadAction<{ access_token: string; refresh_token: string }>) {
      return {
        ...state,
        state: 'Authorized',
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
      };
    },
    logout(state) {
      state.state = 'Unauthorized';
    },
  },
});

export const AuthActions = authSlice.actions;
