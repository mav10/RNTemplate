import React, { useCallback } from 'react';
import { AppActions } from '../features/app/app-slice';
import { useAppDispatch } from '../appInfrastructure/redux-store/store-types';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { CommonColors } from '../commons/styles/colors';
import { RootStackScreenParams } from './configuration/routeParams';
import { RootStack } from './configuration/navigators';
import { AppRoutes } from './configuration/routes';
import { navigationRef } from '../services/navigation-service';
import { TabNavigation } from './TabNavigation';
import { NoConnectionController } from '../screens/NoConnection/NoConnectionController';
import { NotImplementedScreen } from '../screens/NotImplementedScreen';
import { useNetworkState } from '../appInfrastructure/hooks/useNetworkState';

const screenOptions = {
  cardStyle: { backgroundColor: CommonColors.background },
  headerShown: false,
};

const linking: LinkingOptions<RootStackScreenParams> = {
  prefixes: ['rntemplateapp://'],
  config: {
    screens: {},
  },
};

export const ApplicationRouter = () => {
  const dispatch = useAppDispatch();

  const onReady = useCallback(async () => {
    dispatch(AppActions.initialized());
  }, [dispatch]);

  return (
    <NavigationContainer linking={linking} ref={navigationRef} onReady={onReady}>
      <RootStack.Navigator screenOptions={screenOptions} initialRouteName={AppRoutes.Home}>
        <RootStack.Screen name={AppRoutes.Home} component={TabNavigation} />
        <RootStack.Screen name={AppRoutes.NoConnection} component={NoConnectionController} />
        <RootStack.Screen name={AppRoutes.Maintenance} component={NotImplementedScreen} />
        <RootStack.Screen name={AppRoutes.ServerError} component={NotImplementedScreen} />
        <RootStack.Screen name={AppRoutes.MandatoryUpdate} component={NotImplementedScreen} />
        <RootStack.Screen name={AppRoutes.DevScreen} component={NotImplementedScreen} />
        <RootStack.Screen name={AppRoutes.Info} component={NotImplementedScreen} />
      </RootStack.Navigator>
      <HooksProvider />
    </NavigationContainer>
  );
};

const HooksProvider = () => {
  useNetworkState();
  return <></>;
};
