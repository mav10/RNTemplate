import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect, useRef } from 'react';
import RnRestart from 'react-native-restart';
import { useTranslation } from 'react-i18next';
import { useRootNavigation } from '../../navigation/configuration/navigators';
import { AppRoutes } from '../../navigation/configuration/routes';
import { getCurrentRoute } from '../../services/navigation-service';

export function useNetworkState() {
  const { t } = useTranslation();
  const { isConnected, isInternetReachable } = useNetInfo();
  const navigation = useRootNavigation();

  const wasOffline = useRef(false);

  useEffect(() => {
    if (isConnected === null || isInternetReachable == null) {
      return;
    }
    const route = getCurrentRoute();

    if (!isConnected || !isInternetReachable) {
      wasOffline.current = true;
      navigation.navigate(AppRoutes.NoConnection);
    } else if (wasOffline.current) {
      wasOffline.current = false;
      if (route && route?.name === AppRoutes.NoConnection) {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          RnRestart.Restart();
        }
      }
    }
  }, [navigation, t, isConnected, isInternetReachable]);
}
