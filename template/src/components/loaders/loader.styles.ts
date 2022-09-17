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
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: CommonColors.animation,
  },
});
