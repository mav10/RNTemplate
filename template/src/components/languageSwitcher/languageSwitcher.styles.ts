import { ImageStyle, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { AdditionalButtonBackground, CommonColors } from '../../commons/styles/colors';
import { AppCommonStyles } from '../../commons/styles/styles';

export type ButtonStateStyleType = 'enabled' | 'disabled' | 'pushed' | 'default';
export type ButtonStateStyle = {
  [key in ButtonStateStyleType]: StyleProp<ViewStyle>;
};
export type ButtonStateIconStyle = {
  enabled: StyleProp<ImageStyle>;
  disabled: StyleProp<ImageStyle>;
  pushed: StyleProp<ImageStyle>;
};

export const localStyles = StyleSheet.create({
  internationalizationIcon: {
    tintColor: CommonColors.text,
  },

  languageButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  languageButtonImage: {
    tintColor: '#7A8FE0',
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  separator: {
    backgroundColor: CommonColors.listItemBorder,
    height: 1,
    width: '100%',
  },
  text: {
    ...AppCommonStyles.text,
    marginHorizontal: 5,
  },
});

export const itemLocalStyles = StyleSheet.create({
  check: {
    resizeMode: 'contain',
  },

  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 20,
    paddingVertical: 16,
  },

  text: {
    ...AppCommonStyles.heading4,
    color: CommonColors.text,
  },
});

export const itemButtonStyles: ButtonStateStyle = StyleSheet.create({
  default: {},
  disabled: {
    backgroundColor: AdditionalButtonBackground.secondary.disabled,
  },
  enabled: {
    backgroundColor: AdditionalButtonBackground.secondary.enabled,
  },
  pushed: {
    backgroundColor: AdditionalButtonBackground.secondary.pushed,
  },
});

export const itemIconStyles: ButtonStateIconStyle = StyleSheet.create({
  default: {},
  disabled: {
    tintColor: AdditionalButtonBackground.secondaryIcon.disabled,
  },
  enabled: {
    tintColor: AdditionalButtonBackground.secondaryIcon.enabled,
  },
  pushed: {
    tintColor: AdditionalButtonBackground.secondaryIcon.pushed,
  },
});
