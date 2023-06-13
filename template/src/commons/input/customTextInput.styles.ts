import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';
import { Fonts } from '../styles/fonts';

export const localStyles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
  },
  control: {
    backgroundColor: CommonColors.textInputBackground,
    borderColor: CommonColors.textInputBorder,
    borderRadius: 10,

    borderWidth: 1,

    color: CommonColors.text,
    fontFamily: Fonts.REGULAR,
    minHeight: 48,

    paddingBottom: 6,
    paddingHorizontal: 16,
    paddingTop: 7,
    width: '100%',
  },
  error: {
    borderColor: CommonColors.error,
  },
  label: {
    color: CommonColors.label,
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 18,

    marginBottom: 12,
  },
  text: {
    fontSize: 22,
  },
});
