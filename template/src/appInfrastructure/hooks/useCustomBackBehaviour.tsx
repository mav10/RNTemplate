import { useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function useCustomBackBehaviour(action?: () => void) {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (action) {
          action();
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return subscription.remove;
    }, [action])
  );
}
