import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { logger } from '../logging/logging';
import {
  consumeDemoMessage,
  consumePromoMessage,
  consumeUnclassifiedMessage,
  PushActionTypes,
} from './push-consumers';

export async function onFcmMessageInForeground(
  message: FirebaseMessagingTypes.RemoteMessage,
) {
  logger().info(`A new FCM received in foreground ${JSON.stringify(message)}`);

  if (message.data && message.data.type) {
    switch (message.data.type) {
      case PushActionTypes.Demo:
        await consumeDemoMessage();
        break;
      case PushActionTypes.Promo:
        await consumePromoMessage();
        break;
      default:
        await consumeUnclassifiedMessage();
        break;
    }
  } else {
    await consumeUnclassifiedMessage();
  }
}

export function onFcmMessageInBackground(
  message: FirebaseMessagingTypes.RemoteMessage,
) {
  logger().info(`A new FCM received in background ${JSON.stringify(message)}`);
}

export function onNotificationOpened(
  message: FirebaseMessagingTypes.RemoteMessage,
) {
  logger().info('Notification caused app to open from background state');
  console.log(message);
}

export function onFcmTokenRefresh(token: string) {
  // TODO: send it to server
  logger().info(`Push notification device token has been updated to ${token}`);
  // await notificationService().sendNotificationTokenToServer();
}
