import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type AppModalProps = {
  icon?: ImageSourcePropType;
  isVisible: boolean;
  onClose: () => void;
  headerText?: string;
  styles?: StyleProp<ViewStyle>;
  RightHeaderComponent?: ReactNode;
};
