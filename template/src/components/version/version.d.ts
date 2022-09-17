import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type VersionComponentProps = {
  styles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testIdPrefix?: string;
};
