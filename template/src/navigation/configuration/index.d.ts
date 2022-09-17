import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackScreenParams {}

    function useNavigation<T = StackNavigationProp<RootParamList>>(): T;
  }
}
