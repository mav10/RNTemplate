import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenParams } from './routeParams';

const NativeRootStack = createNativeStackNavigator<RootStackScreenParams>();

export const useRootNavigation: () => StackNavigationProp<RootStackScreenParams> =
  useNavigation;

export const RootStack = NativeRootStack;
