import { AppActions } from '../../features/app/app-slice';
import { AuthActions } from '../../features/auth/auth-slice';

export type RootAction = typeof AppActions | typeof AuthActions;
