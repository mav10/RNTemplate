import { QueryClient } from '@tanstack/react-query';
import { QueryClientInstance } from './client-service';
import { NotificationService } from './pushNotification-service';

let _pushService: NotificationService | null = null;
let _clientInstance: QueryClient | null = null;

export const notificationService = () => {
  if (!_pushService) {
    _pushService = new NotificationService();
  }

  return _pushService;
};


export const queryClientInstance = () => {
  if (_clientInstance === null) {
    _clientInstance = QueryClientInstance();
  }

  return _clientInstance;
};
