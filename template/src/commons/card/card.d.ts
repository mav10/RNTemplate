import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type CardComponentProps = {
  headerText?: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  footer?: ReactNode;
  additionalTestId?: string;
  headerRightControl?: ReactNode;
};
