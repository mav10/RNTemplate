import React, { Suspense, useEffect, useMemo } from 'react';
import { SplashScreen } from './src/screens/Splash/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { logger } from './src/appInfrastructure/logging/logging';
import Config from 'react-native-config';
import codePush from 'react-native-code-push';
import { getCodePushConfiguration } from './src/appInfrastructure/code-push/code-push';
import { LanguageProvider } from './src/appInfrastructure/localisation/LanguageProvider';
import { Loader } from './src/components/loaders/loader.component';
import axios from 'axios';
import * as Interceptors from './src/helpers/axios-interceptors';
import { RootStore } from './src/appInfrastructure/redux-store/root-store';
import { useNotifications } from './src/appInfrastructure/push-notifications/useNotifications';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CodePushProvider } from './src/appInfrastructure/code-push/CodePushProvider';
import { ApplicationRouter } from './src/navigation';

axios.interceptors.request.use(
  Interceptors.injectAppVersionToHeaders(RootStore.store.getState),
);
axios.interceptors.request.use(Interceptors.injectLanguageInterceptor);

const Root = () => {
  const { t } = useTranslation();
  // TODO: if you wanna get notifications only for authorized user - put it somewhere deeper (under authorized screens).
  useNotifications();

  const loading = useMemo(() => {
    return <Loader inProgress={true} text={t('Common_loading')} />;
  }, [t]);

  return (
    <Suspense fallback={loading}>
      <Provider store={RootStore.store}>
        <PersistGate persistor={RootStore.persistor}>
          <CodePushProvider>
            <ApplicationRouter />
            <SplashScreen />
          </CodePushProvider>
        </PersistGate>
      </Provider>
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

  return (
    <Suspense fallback={loadingWithoutText}>
      <LanguageProvider>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </LanguageProvider>
    </Suspense>
  );
};

export default codePush(getCodePushConfiguration())(App);
