import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackScreenParams } from './routeParams';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackScreenParams {}

    function useNavigation<T = StackNavigationProp<RootParamList>>(): T;
  }
}
