import messaging from '@react-native-firebase/messaging';
import { requestNotifications } from 'react-native-permissions';
import { RESULTS } from 'react-native-permissions/src/results';
import { logger } from '../appInfrastructure/logging/logging';

export class NotificationService {
  private isEnabled = false;

  constructor() {
    this.requestUserPermission()
      .then(result => {
        this.isEnabled = result;
      })
      .catch(err => logger().error('Initialization of push notification service has failed', err));
  }

  /**
   * @summary Send FCM token to server if it is allowed.
   *
   * "Allowed" - means permissions are granted.
   */
  public async sendNotificationTokenToServer() {
    if (this.isEnabled) {
      const token = await messaging().getToken();
      console.log('Token:', token);
      // TODO: send token to backend
      // await NotificationQuery.Client.savePushToken(token);
    } else {
      // await this.authClient.setPushToken('');
      logger().info('It is forbidden to send push notifications');
    }
  }

  /**
   * @summary Requests FCM token if it is allowed.
   */
  public async getToken(): Promise<string | undefined> {
    return this.isEnabled ? await messaging().getToken() : undefined;
  }

  /**
   * @summary Requests permissions for getting push-notifications on phone (OS level).
   * @remarks Platform-safe method.
   */
  public async requestUserPermission() {
    const notificationPermissionResponse = await requestNotifications(['alert', 'badge']);
    return (
      notificationPermissionResponse.status === RESULTS.GRANTED ||
      notificationPermissionResponse.status === RESULTS.LIMITED
    );
  }

  /**
   * @summary Removes FCM-token locally and sends API-request to backend.
   * @param cleanOnServer - optional flag that defines should be server endpoint (for push cleanup) called or not.
   */
  public async removeNotificationToken(cleanOnServer: boolean = true) {
    const token = await messaging().getToken();
    if (token && cleanOnServer) {
      // TODO: send cleanup request to backend
      // await NotificationQuery.Client.deletePushToken(token);
      await messaging().deleteToken();
    }
    await messaging().unregisterDeviceForRemoteMessages();
  }
}
