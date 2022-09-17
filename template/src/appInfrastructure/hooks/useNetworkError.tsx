import { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import {
  getCurrentRoute,
  goBack,
  navigate,
} from '../../services/navigation-service';
import { Routes } from '../constants/routes';

export function useNetworkError() {
  const { isConnected } = useNetInfo();

  useEffect(() => {
    if (isConnected === null) {
      return;
    }
    const route = getCurrentRoute();

    if (!isConnected && route) {
      navigate('NetworkError');
    } else if (route && route.name === Routes.NetworkError) {
      goBack();
    }
  }, [isConnected]);
}
