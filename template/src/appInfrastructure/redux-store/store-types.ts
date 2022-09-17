import { ApplicationState } from '../../features/app/app-state';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AuthState } from '../../features/auth/auth-state';

export interface RootState {
  app: ApplicationState;
  auth: AuthState;
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
