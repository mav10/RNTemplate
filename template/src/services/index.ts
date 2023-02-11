import { QueryClient } from '@tanstack/react-query';
import { QueryClientInstance } from './client-service';

let _analytics: any | null = null;
let _clientInstance: QueryClient | null = null;

export const analyticsService = () => {
  if (_analytics === null) {
    // initialize your analytics tracker here
    // e.g. Google, Yandex, Matomo, Countly etc.
  }

  return _analytics;
};

export const queryClientInstance = () => {
  if (_clientInstance === null) {
    _clientInstance = QueryClientInstance();
  }

  return _clientInstance;
};
