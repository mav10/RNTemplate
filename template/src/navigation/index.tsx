import React, { PropsWithChildren, useCallback } from 'react';
import { AppActions } from '../features/app/app-slice';
import { useAppDispatch } from '../appInfrastructure/redux-store/store-types';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { RootStackScreenParams } from './configuration/routeParams';
import { RootStack } from './configuration/navigators';
import { AppRoutes } from './configuration/routes';
import { navigationRef } from '../services/navigation-service';
import { TabNavigation } from './TabNavigation';
import { NoConnectionController } from '../screens/NoConnection/NoConnectionController';
import { NotImplementedScreen } from '../screens/NotImplementedScreen';
import { useNetworkState } from '../appInfrastructure/hooks/useNetworkState';
import { CommonScreenOptions, ScreenWithInfoOptions } from './configuration/headers';
import { DevController } from '../screens/Dev/DevController';
import { InfoController } from '../screens/Info/InfoController';
import { LoginController } from '../screens/Login/LoginController';
import { useIsAuthorized } from '../features/auth/auth-selectors';
import { useNotifications } from '../appInfrastructure/push-notifications/useNotifications';
import { useShakeEventHandler } from '../appInfrastructure/hooks/useShakeEventHandler';

const linking: LinkingOptions<RootStackScreenParams> = {
  prefixes: ['rntemplateapp://'],
  config: {
    screens: {},
  },
};

export const ApplicationRouter = () => {
  const dispatch = useAppDispatch();
  const isAuth = useIsAuthorized();

  const onReady = useCallback(async () => {
    dispatch(AppActions.initialized());
  }, [dispatch]);

  return (
    <NavigationContainer linking={linking} ref={navigationRef} onReady={onReady}>
      <RootStack.Navigator screenOptions={CommonScreenOptions} initialRouteName={AppRoutes.Home}>
        <RootStack.Screen name={AppRoutes.Home} options={ScreenWithInfoOptions} component={TabNavigation} />
        {!isAuth && (
          <RootStack.Screen name={AppRoutes.Login} options={ScreenWithInfoOptions} component={LoginController} />
        )}
        <RootStack.Screen
          name={AppRoutes.NoConnection}
          options={{ headerShown: false }}
          component={NoConnectionController}
        />
        <RootStack.Screen
          name={AppRoutes.Maintenance}
          options={{ headerShown: false }}
          component={NotImplementedScreen}
        />
        <RootStack.Screen name={AppRoutes.ServerError} component={NotImplementedScreen} />
        <RootStack.Screen
          name={AppRoutes.MandatoryUpdate}
          options={{ headerShown: false }}
          component={NotImplementedScreen}
        />
        <RootStack.Screen name={AppRoutes.DevScreen} component={DevController} />
        <RootStack.Screen name={AppRoutes.Info} component={InfoController} />
      </RootStack.Navigator>
      <HooksProvider />
    </NavigationContainer>
  );
};

const HooksProvider: React.FC<PropsWithChildren> = props => {
  useNetworkState();
  // TODO: if you wanna get notifications only for authorized user - put it somewhere deeper (under authorized screens).
  useNotifications();
  const shakeModal = useShakeEventHandler();

  return (
    <>
      {shakeModal}
      {props.children}
    </>
  );
};
