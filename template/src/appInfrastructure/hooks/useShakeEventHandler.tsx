import * as Sentry from '@sentry/react-native';
import Logger from 'js-logger';
import { useEffect, useRef } from 'react';
import { Alert, EmitterSubscription } from 'react-native';
import RNShake from 'react-native-shake';
import { useDevModeEnabled } from '../../features/app/app-selectors';

export function useShakeEventHandler() {
  const debugMessageAlertIsPresent = useRef(false);
  const isDevModeAuthorized = useDevModeEnabled();

  useEffect(
    function shakeEventHandler() {
      const shakeHandler = () => {
        // Guard to avoid system messages duplicate.
        if (debugMessageAlertIsPresent.current) {
          return;
        }
        const msg = 'Shake event message';
        try {
          debugMessageAlertIsPresent.current = true;
          Sentry.captureMessage(msg, context => {
            context.setLevel('debug');
            context.setTag('shake-event', 'shake-debug-event');
            // Show some messages about bug was sent.
            Alert.alert('Debug message sent', 'Now we know the issue is out there', [
              {
                text: 'Ok',
                onPress: () => (debugMessageAlertIsPresent.current = false),
              },
            ]);
            return context;
          });
        } catch (e) {
          Logger.error(e);
        }
      };

      let subscription: EmitterSubscription | null = null;

      if (isDevModeAuthorized) {
        subscription = RNShake.addListener(shakeHandler);
      }

      return () => {
        subscription?.remove();
      };
    },
    [isDevModeAuthorized]
  );
}
