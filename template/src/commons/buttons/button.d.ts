import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export type colorSet = { active?: string; pressed?: string; disabled?: string };

export type ButtonProps = TouchableOpacityProps & {
  type: 'primary' | 'secondary' | 'link';
  label: string;
  labelStyles?: StyleProp<TextStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  colors?: colorSet;
  textColors?: colorSet;
};
