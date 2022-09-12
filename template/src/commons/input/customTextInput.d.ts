import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type CustomTextInputProps = TextInputProps & {
  label: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  testIdPrefix?: string;
  isInvalid?: boolean;
};
