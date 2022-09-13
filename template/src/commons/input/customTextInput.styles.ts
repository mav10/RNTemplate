import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';
import { Fonts } from '../styles/fonts';

export const localStyles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
  },
  control: {
    color: CommonColors.text,
    backgroundColor: CommonColors.textInputBackground,
    fontFamily: Fonts.REGULAR,

    width: '100%',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: CommonColors.textInputBorder,

    paddingTop: 7,
    paddingBottom: 6,
    paddingHorizontal: 16,
    minHeight: 48,
  },
  text: {
    fontSize: 26,
    letterSpacing: 10,
  },
  label: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    color: CommonColors.label,

    marginBottom: 12,
  },
  error: {
    borderColor: CommonColors.error,
  },
});
