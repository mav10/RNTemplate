import { StyleSheet } from 'react-native';
import { AdditionalButtonBackground, CommonColors } from '../../commons/styles/colors';
import { AppCommonStyles, ButtonStateIconStyle, ButtonStateStyle } from '../../commons/styles/styles';

export const localStyles = StyleSheet.create({
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  internationalizationIcon: {
    tintColor: CommonColors.text,
  },

  text: {
    ...AppCommonStyles.text,
    marginHorizontal: 5,
  },

  languageButtonImage: {
    tintColor: '#7A8FE0',
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: CommonColors.listItemBorder,
  },
});

export const itemLocalStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 20,
  },

  text: {
    ...AppCommonStyles.heading4,
    color: CommonColors.text,
  },

  check: {
    resizeMode: 'contain',
  },
});

export const itemButtonStyles: ButtonStateStyle = StyleSheet.create({
  enabled: {
    backgroundColor: AdditionalButtonBackground.secondary.enabled,
  },
  disabled: {
    backgroundColor: AdditionalButtonBackground.secondary.disabled,
  },
  pushed: {
    backgroundColor: AdditionalButtonBackground.secondary.pushed,
  },
  default: {},
});

export const itemIconStyles: ButtonStateIconStyle = StyleSheet.create({
  enabled: {
    tintColor: AdditionalButtonBackground.secondaryIcon.enabled,
  },
  disabled: {
    tintColor: AdditionalButtonBackground.secondaryIcon.disabled,
  },
  pushed: {
    tintColor: AdditionalButtonBackground.secondaryIcon.pushed,
  },
  default: {},
});
