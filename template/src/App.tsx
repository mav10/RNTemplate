import React, { Suspense, useEffect, useMemo } from 'react';
import { SplashScreen } from './screens/Splash/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { logger } from './appInfrastructure/logging/logging';
import Config from 'react-native-config';
import codePush from 'react-native-code-push';
import { getCodePushConfiguration } from './appInfrastructure/code-push/code-push';
import { LanguageProvider } from './appInfrastructure/localisation/LanguageProvider';
import { Loader } from './components/loaders/loader.component';
import axios from 'axios';
import * as Interceptors from './helpers/axios-interceptors';
import { RootStore } from './appInfrastructure/redux-store/root-store';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CodePushProvider } from './appInfrastructure/code-push/CodePushProvider';
import { ApplicationRouter } from './navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppCommonStyles } from './commons/styles/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from './services';
import { ModalPresenterProvider } from './context/ModalPresenter.provider';
import { QueryFactory } from './services/api';
import { enableFreeze } from 'react-native-screens';
import { RootErrorBoundary } from './appInfrastructure/error-handling/ErrorBoundary.component';

// React Navigation, optimize memory usage.
enableFreeze(true);

// easy to update in debug mode (do not replace twice)
const SERVER_API = Config.REACT_APP_API_URL;

QueryFactory.setBaseUrl(SERVER_API);
QueryFactory.setAxiosFactory(() => axios);

axios.interceptors.request.use(Interceptors.setupRefreshTokenInterceptor(RootStore.store.getState));
axios.interceptors.request.use(Interceptors.injectTokenInterceptor(RootStore.store.getState));
axios.interceptors.request.use(Interceptors.injectAppVersionToHeaders(RootStore.store.getState));
axios.interceptors.request.use(Interceptors.injectLanguageInterceptor);
axios.interceptors.request.use(Interceptors.createInjectTimezoneInterceptor);

const Root = () => {
  const { t } = useTranslation();

  const loading = useMemo(() => {
    return <Loader inProgress={true} text={t('Common_loading')} />;
  }, [t]);

  return (
    <Suspense fallback={loading}>
      <ModalPresenterProvider>
        <Provider store={RootStore.store}>
          <PersistGate persistor={RootStore.persistor}>
            <CodePushProvider>
              <RootErrorBoundary>
                <ApplicationRouter />
              </RootErrorBoundary>
              <SplashScreen />
            </CodePushProvider>
          </PersistGate>
        </Provider>
      </ModalPresenterProvider>
    </Suspense>
  );
};

const App = () => {
  useEffect(() => {
    logger().info(`App env variables: ${JSON.stringify(Config)}`);
  }, []);

  const loadingWithoutText = useMemo(() => {
    return <Loader inProgress={true} />;
  }, []);

  const client = queryClientInstance();

  return (
    <GestureHandlerRootView style={AppCommonStyles.block}>
      <Suspense fallback={loadingWithoutText}>
        <QueryClientProvider client={client}>
          <LanguageProvider>
            <SafeAreaProvider>
              <Root />
            </SafeAreaProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </Suspense>
    </GestureHandlerRootView>
  );
};

export default codePush(getCodePushConfiguration())(App);
