import AsyncStorage from '@react-native-async-storage/async-storage';
import { Query, QueryClient } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { logger } from '../appInfrastructure/logging/logging';
import { initPersister, persisterDeserialize } from './api/api-client';
import { addLogoutHandler } from '../appInfrastructure/redux-store/root-reducer';

const localStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  deserialize: persisterDeserialize,
});

export const QueryClientInstance = () => {
  const qClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        suspense: false,
        refetchInterval: 60 * 1000,
        refetchIntervalInBackground: true,
        refetchOnReconnect: 'always',
        refetchOnMount: true,
        onError: (err: any) => {
          logger().error('Something happened during internet request. Details in stack.', err);
          if (err?.message === 'Network Error') {
            logger().info('Will actualize network state');
            NetInfo.refresh();
          }
        },
      },
    },
  });

  if (__DEV__) {
    import('react-query-native-devtools').then(({ addPlugin }) => {
      addPlugin({ queryClient: qClient });
    });
  }

  addLogoutHandler(() => {
    qClient.clear();
  });

  initPersister();
  persistQueryClient({
    queryClient: qClient,
    persister: localStoragePersister,
    maxAge: Infinity,
    dehydrateOptions: {
      dehydrateMutations: false,
      dehydrateQueries: true,
      shouldDehydrateQuery: (_: Query) => {
        return true;
      },
    },
  });

  return qClient;
};
