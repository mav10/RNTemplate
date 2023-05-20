import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type BlockComponentProps = {
  headerText: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;

  actionText?: string;
  action?: () => void;

  isNullData?: boolean;
  emptyComponent?: ReactNode;
  testId?: string;
};
