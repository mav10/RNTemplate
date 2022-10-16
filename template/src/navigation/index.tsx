import React, { useCallback } from 'react';
import { AppActions } from '../features/app/app-slice';
import { useAppDispatch } from '../appInfrastructure/redux-store/store-types';
import {
  createNavigationContainerRef,
  LinkingOptions,
  NavigationContainer,
} from '@react-navigation/native';
import { CommonColors } from '../commons/styles/colors';
import { RouteParamList } from './configuration/routeParams';
import { RootStack } from './configuration/navigators';
import { NotImplementedScreen } from '../commons/NotImplementedScreen';
import { AppRoutes } from './configuration/routes';
import { ReactNativeScreen } from '../screens/ReactNative/ReactNativeScreen';

export const navigationRef = createNavigationContainerRef<RouteParamList>();

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
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={onReady}>
      <RootStack.Navigator
        screenOptions={screenOptions}
        initialRouteName={AppRoutes.ReactNative}>
        <RootStack.Screen
          name={AppRoutes.Dashboard}
          component={NotImplementedScreen}
        />
        <RootStack.Screen
          name={AppRoutes.ReactNative}
          component={ReactNativeScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
