import { useRootNavigation } from './navigators';
import { AppRoutes } from './routes';
import { uxTapZone } from '../../commons/styles/styles';
import { Image, Pressable } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigationScreenOptionParams } from './index';
import { navigationStyles } from './navigation.styles';
import { BackButton } from '../../components/backButton/backButton.component';

const infoIcon = require('../../../assets/images/navigation/info.png');

const InfoIcon = () => {
  const navigation = useRootNavigation();

  const onNavigate = () => {
    navigation.navigate(AppRoutes.Info);
  };

  return (
    <Pressable onPress={onNavigate} hitSlop={uxTapZone} testID={'Information_button'}>
      {({ pressed }) => <Image resizeMode={'contain'} source={infoIcon} alt={'Info icon'} />}
    </Pressable>
  );
};

const NativeCommonScreenOptions = (_: NavigationScreenOptionParams): NativeStackNavigationOptions => {
  return {
    animation: 'slide_from_right',
    headerShown: true,
    headerStyle: navigationStyles.headerStyles,

    title: '',
    headerTitleStyle: navigationStyles.headerTitleStyles,
    headerLeft: BackButton,
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    headerBackVisible: false,
    gestureEnabled: true,
  };
};

const HeaderWithInfo = (_: NavigationScreenOptionParams): NativeStackNavigationOptions => {
  return {
    headerRight: InfoIcon,
  };
};

export const CommonScreenOptions = NativeCommonScreenOptions;
export const ScreenWithInfoOptions = HeaderWithInfo;
