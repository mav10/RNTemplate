import { useEffect, useState } from 'react';
import { logger } from '../logging/logging';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {
  onFcmMessageInForeground,
  onFcmTokenRefresh,
  onNotificationOpened,
} from './push-handlers';
import RemoteMessage = FirebaseMessagingTypes.RemoteMessage;

export function useNotifications() {
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
         Registered: ${messaging().isDeviceRegisteredForRemoteMessages}`,
    );
  };

  const registerNotificationEvents = () => {
    messaging().onMessage(onFcmMessageInForeground);
    messaging().onTokenRefresh(onFcmTokenRefresh);
    messaging().onNotificationOpenedApp(onNotificationOpened);
  };

  useState(() => {
    registerRemoteNotifications();
    registerNotificationEvents();
  });

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then((message: RemoteMessage | null) => {
        if (message) {
          logger().info(
            'Notification caused app to open from quit state: ' +
              JSON.stringify(message),
          );
        }
      })
      .catch((reason: any) => {
        logger().error(
          'Failed to process notification from quit state. Reason: ' +
            JSON.stringify(reason),
        );
      });
  }, []);
}
