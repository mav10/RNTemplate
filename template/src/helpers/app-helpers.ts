import { useScopedTranslation } from '../appInfrastructure/localisation/useScopedTranslation';
import { Linking, Platform } from 'react-native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { logger } from '../appInfrastructure/logging/logging';
import { AppRoutes } from '../navigation/configuration/routes';
import { useNavigation } from '@react-navigation/native';

export function useApplicationUpdateLink() {
  const { t } = useScopedTranslation('ApplicationStateScreens.Update.Stores');
  const [isOpening, setOpening] = useState<boolean>(false);

  const link = useMemo(() => {
    return Platform.select({
      android: t('android_store'),
      ios: t('apple_store'),
      // ios and android platforms are handled always correctly.
      // We do it to avoid type-check problems.
      default: t('android_store'),
    });
  }, [t]);

  const handler = useCallback(async () => {
    try {
      setOpening(true);
      await Linking.openURL(link);
    } catch (e: any) {
      logger().error('Impossible to open link for application update. Link ' + link, e);
    } finally {
      setOpening(false);
    }
  }, [link]);

  return { handler, isOpening: isOpening };
}

export function generateUniqueId(prefix?: string) {
  return `${prefix || 'uniqueId'}_${Math.floor(Math.random() * 999)}_${Math.floor(Math.random() * 9999)}`;
}

export function useIsMaintenance(): boolean {
  // const maintenanceQuery = useMaintenanceQuery({
  //   retry: true,
  //   refetchInterval: 15 * 1000,
  //   refetchOnReconnect: true,
  // });
  //
  // return maintenanceQuery?.data?.isEnabled || false;

  return false;
}

export function useMaintenance() {
  const navigation = useNavigation();
  const isMaintenance = useIsMaintenance();

  useEffect(() => {
    if (isMaintenance) {
      navigation.navigate(AppRoutes.Maintenance);
    }
  }, [isMaintenance, navigation]);
}
