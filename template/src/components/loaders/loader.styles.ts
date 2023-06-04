import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';
import { Fonts } from '../../commons/styles/fonts';

export const localStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: CommonColors.background,
    justifyContent: 'center',
  },
  indicator: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: CommonColors.animation,
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
});
