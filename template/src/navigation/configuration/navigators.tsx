import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenParams, TabScreenParams } from './routeParams';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const NativeRootStack = createNativeStackNavigator<RootStackScreenParams>();
const BottomTabNavigator = createBottomTabNavigator<TabScreenParams>();

export const useRootNavigation: () => StackNavigationProp<RootStackScreenParams> = useNavigation;
export const useTabNavigation: () => BottomTabNavigationProp<TabScreenParams> = useNavigation;

export const RootStack = NativeRootStack;
export const TabNavigator = BottomTabNavigator;
