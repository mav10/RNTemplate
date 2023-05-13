import { StyleSheet } from 'react-native';
import { Fonts } from '../../commons/styles/fonts';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  text: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.14,
    textAlign: 'center',
    color: CommonColors.text,
  },
});
