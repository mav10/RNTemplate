import { createAction } from '@reduxjs/toolkit';
import { AppActions } from '../../features/app/app-slice';

export const logoutAction = createAction('logout');
export type RootAction = typeof AppActions | typeof logoutAction;
