import React from 'react';
import {TabNavigator} from './configuration/navigators';
import {AppRoutes} from './configuration/routes';
import {DashboardController} from '../screens/Dashboard/DashboardController';
import {ReactNativeScreen} from '../screens/ReactNative/ReactNativeScreen';
import {NotImplementedScreen} from '../screens/NotImplementedScreen';
import {CommonColors} from '../commons/styles/colors';
import {TabBarIcon} from "./configuration/TabBarIcon";

const dashboardIcon = require('../../assets/images/navigation/app.png');
const reactIcon = require('../../assets/images/navigation/library.png');
const notificationsIcon = require('../../assets/images/navigation/bell.png');
const profileIcon = require('../../assets/images/navigation/user.png');

export const TabNavigation = () => {
    return (
        <TabNavigator.Navigator
            initialRouteName={AppRoutes.Dashboard}
            screenOptions={{headerShown: false}}
            sceneContainerStyle={{backgroundColor: CommonColors.background}}>
            <TabNavigator.Screen name={AppRoutes.Dashboard} component={DashboardController}
                                 options={{tabBarIcon: (color) => <TabBarIcon style={color} icon={dashboardIcon}/>}}/>
            <TabNavigator.Screen name={AppRoutes.ReactNative} component={ReactNativeScreen}
                                 options={{tabBarIcon: (color) => <TabBarIcon style={color} icon={reactIcon}/>}}/>
            <TabNavigator.Screen name={AppRoutes.Notifications} component={NotImplementedScreen}
                                 options={{tabBarIcon: (color) => <TabBarIcon style={color} icon={notificationsIcon}/>}}/>
            <TabNavigator.Screen name={AppRoutes.Profile} component={NotImplementedScreen}
                                 options={{tabBarIcon: (color) => <TabBarIcon style={color} icon={profileIcon}/>}}/>
        </TabNavigator.Navigator>
    );
};
