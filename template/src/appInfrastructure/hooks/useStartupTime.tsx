import { useEffect } from 'react';
import { getTimeSinceStartup } from 'react-native-startup-time';
import { logger } from '../logging/logging';

export function useStartupTime() {
  useEffect(() => {
    getTimeSinceStartup().then((time) => {
      logger().info(`App launch time: ${time}`);
    });
  }, []);
}
