import { StyleSheet } from 'react-native';
import { Fonts } from '../../commons/styles/fonts';
import { CommonColors } from '../../commons/styles/colors';
import { AppCommonStyles } from '../../commons/styles/styles';

export const localStyles = StyleSheet.create({
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  internationalizationIcon: {
    tintColor: CommonColors.text,
  },

  text: {
    ...AppCommonStyles.heading5,
    marginHorizontal: 5,
  },

  languageButtonImage: {
    transform: [{ rotate: '180deg' }],
    tintColor: CommonColors.text,
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export const itemLocalStyles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  itemText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    lineHeight: 19,
    paddingVertical: 18,
    color: CommonColors.text,
  },
  selectedItem: {
    color: CommonColors.primary,
  },

  check: {
    resizeMode: 'contain',
    tintColor: CommonColors.primary,
  },

  checkPressed: {
    resizeMode: 'contain',
    tintColor: CommonColors.accent,
  },
});
