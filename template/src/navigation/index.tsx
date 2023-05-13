import React, { useCallback } from 'react';
import { AppActions } from '../features/app/app-slice';
import { useAppDispatch } from '../appInfrastructure/redux-store/store-types';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { CommonColors } from '../commons/styles/colors';
import { RouteParamList } from './configuration/routeParams';
import { RootStack } from './configuration/navigators';
import { NotImplementedScreen } from '../commons/NotImplementedScreen';
import { AppRoutes } from './configuration/routes';
import { ReactNativeScreen } from '../screens/ReactNative/ReactNativeScreen';
import { navigationRef } from '../services/navigation-service';
import { DashboardController } from '../screens/Dashboard/DashboardController';

const screenOptions = {
  cardStyle: { backgroundColor: CommonColors.background },
  headerShown: false,
};

const linking: LinkingOptions<RouteParamList> = {
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
      <RootStack.Navigator screenOptions={screenOptions} initialRouteName={AppRoutes.Dashboard}>
        <RootStack.Screen name={AppRoutes.Dashboard} component={DashboardController} />
        <RootStack.Screen name={AppRoutes.ReactNative} component={ReactNativeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
