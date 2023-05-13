import React, { useCallback } from 'react';
import { AppActions } from '../features/app/app-slice';
import { useAppDispatch } from '../appInfrastructure/redux-store/store-types';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { CommonColors } from '../commons/styles/colors';
import { RootStackScreenParams } from './configuration/routeParams';
import { RootStack } from './configuration/navigators';
import { AppRoutes } from './configuration/routes';
import { navigationRef } from '../services/navigation-service';
import { NotImplementedScreen } from '../screens/NotImplementedScreen';
import { TabNavigation } from './TabNavigation';

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
        <RootStack.Screen name={AppRoutes.NoConnection} component={NotImplementedScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
