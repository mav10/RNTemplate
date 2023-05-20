import { ImageSourcePropType } from 'react-native';

export type AppInfoRowProps = {
  headerText?: string;
  text: string;
  icon?: ImageSourcePropType | undefined;
  testIdPrefix?: string;
};
