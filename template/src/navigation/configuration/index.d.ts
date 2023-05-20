import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreenParams } from './routeParams';
import { RouteProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackScreenParams {}

    function useNavigation<T = StackNavigationProp<RootStackScreenParams>>(): T;
  }
}

export type NavigationScreenOptionParams = {
  route: RouteProp<RootStackScreenParams, keyof RootStackScreenParams>;
  navigation: any;
};
