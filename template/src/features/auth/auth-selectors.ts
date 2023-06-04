import { useAppSelector } from '../../appInfrastructure/redux-store/store-types';

export const useIsAuthorized = (): boolean => {
  return useAppSelector(state => state.auth.state === 'Authorized');
};
