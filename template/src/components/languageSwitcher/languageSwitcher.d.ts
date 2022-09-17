import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type Language = { id: string; language: string };

export type OwnState = {
  languages: Language[];
  isModalOpened: boolean;
  selectedLanguageIndex: number;
};

export type LanguageItemProps = {
  selected: boolean;
  text: string;
  disabled?: boolean;
  icon?: ImageSourcePropType;
  onPress?: () => void;
  itemStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};
