import { AppActions } from '../../features/app/app-reducer';
import { AuthActions } from '../../features/auth/auth-reducer';

export type RootAction = AppActions | AuthActions;
