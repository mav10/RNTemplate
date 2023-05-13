import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useAppRestoredFromBackground = (handler: () => void) => {
  const [, setAppState] = useState<AppStateStatus>('active');

  useEffect(() => {
    const appRestoredFromBackgroundHandler = (nextAppState: AppStateStatus) => {
      setAppState(prevState => {
        if (prevState !== 'active' && nextAppState === 'active') {
          handler();
        }
        return nextAppState;
      });
    };

    const subscription = AppState.addEventListener('change', appRestoredFromBackgroundHandler);
    return () => subscription.remove();
  }, [handler]);
};
