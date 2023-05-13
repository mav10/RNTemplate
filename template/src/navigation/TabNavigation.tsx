import React from 'react';
import { TabNavigator } from './configuration/navigators';
import { AppRoutes } from './configuration/routes';
import { DashboardController } from '../screens/Dashboard/DashboardController';
import { ReactNativeScreen } from '../screens/ReactNative/ReactNativeScreen';
import { NotImplementedScreen } from '../screens/NotImplementedScreen';

export const TabNavigation = () => {
  return (
    <TabNavigator.Navigator initialRouteName={AppRoutes.Dashboard} screenOptions={{ headerShown: false }}>
      <TabNavigator.Screen name={AppRoutes.Dashboard} component={DashboardController} />
      <TabNavigator.Screen name={AppRoutes.ReactNative} component={ReactNativeScreen} />
      <TabNavigator.Screen name={AppRoutes.Notifications} component={NotImplementedScreen} />
      <TabNavigator.Screen name={AppRoutes.Profile} component={NotImplementedScreen} />
    </TabNavigator.Navigator>
  );
};
