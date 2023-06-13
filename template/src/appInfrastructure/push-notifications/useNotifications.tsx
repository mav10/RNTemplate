import { useEffect, useRef, useState } from 'react';
import { logger } from '../logging/logging';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { onFcmMessageInForeground, onFcmTokenRefresh, onNotificationOpened } from './push-handlers';

export function useNotifications() {
  const messagingSubscription = useRef<() => void>(null);
  const tokenRefreshSubscription = useRef<() => void>(null);
  const notificationOpenSubscription = useRef<() => void>(null);

  const registerRemoteNotifications = async () => {
    const grantPermissionStatus = await messaging().requestPermission();
    const isAllowed =
      grantPermissionStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      grantPermissionStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (isAllowed) {
      const fcmToken = await messaging().getToken();

      // TODO: Send it to backend
      console.log('FCM token: ', fcmToken);
    }

    logger().info(
      `Push notifications registration has finished.
         Enabled: ${isAllowed}, 
         Registered: ${messaging().isDeviceRegisteredForRemoteMessages}`
    );
  };

  const registerNotificationEvents = () => {
    // @ts-ignore
    messagingSubscription.current = messaging().onMessage(onFcmMessageInForeground);
    // @ts-ignore
    tokenRefreshSubscription.current = messaging().onTokenRefresh(onFcmTokenRefresh);
    // @ts-ignore
    notificationOpenSubscription.current = messaging().onNotificationOpenedApp(onNotificationOpened);
  };

  useState(() => {
    registerNotificationEvents();
    registerRemoteNotifications().catch((e: any) => {
      logger().error('[Push notifications]: Register notifications failed', e);
    });
  });

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then((message: FirebaseMessagingTypes.RemoteMessage | null) => {
        if (message) {
          logger().info('Notification caused app to open from quit state: ' + JSON.stringify(message));
        }
      })
      .catch((reason: any) => {
        logger().error('Failed to process notification from quit state. Reason: ' + JSON.stringify(reason));
      });

    return () => {
      messagingSubscription?.current?.();
      tokenRefreshSubscription?.current?.();
      notificationOpenSubscription?.current?.();
    };
  }, []);
}
