import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type LanguageSWitcherProps = { styles?: StyleProp<ViewStyle>; testIdPrefix?: string };
export type Language = { id: string; language: string };

export type LanguageItemProps = {
  selected: boolean;
  text: string;
  disabled?: boolean;
  icon?: ImageSourcePropType;
  onPress?: () => void;
  itemStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};
