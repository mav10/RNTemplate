import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export type AppInfoRowProps = {
  headerText?: string;
  text: string;
  icon?: ImageSourcePropType | undefined;
  iconStyles?: StyleProp<ImageStyle>;
  testIdPrefix?: string;
};
