import { StyleSheet as styles } from 'react-native';
import { CommonColors } from './colors';
import { Fonts } from './fonts';

export const uxTapZone = { top: 24, bottom: 24, left: 32, right: 32 };

export const AppCommonStyles = styles.create({
  background: {
    backgroundColor: CommonColors.background,
  },
  row: {
    flexDirection: 'row',
  },
  block: {
    flex: 1,
  },
  container: {
    backgroundColor: CommonColors.background,
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },

  heading1: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    color: CommonColors.text,
  },
  heading2: {
    fontFamily: Fonts.BOLD,
    fontSize: 20,
    lineHeight: 22,
    color: CommonColors.text,
  },
  heading3: {
    fontFamily: Fonts.BOLD,
    fontSize: 18,
    lineHeight: 22,
    color: CommonColors.text,
  },
  heading4: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    color: CommonColors.text,
  },
  heading5: {
    fontFamily: Fonts.BOLD,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.48,
    textTransform: 'uppercase',
    color: CommonColors.text,
  },

  paragraphText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 21,
    color: CommonColors.text,
  },
  text: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: CommonColors.text,
  },

  captionBold: {
    fontFamily: Fonts.BOLD,
    fontSize: 12,
    lineHeight: 15,
    color: CommonColors.text,
  },
  caption: {
    fontFamily: Fonts.REGULAR,
    fontSize: 12,
    lineHeight: 15,
    color: CommonColors.text,
  },

  buttonText: {
    fontFamily: Fonts.BOLD,
    fontSize: 14,
    lineHeight: 18,
  },
  buttonLinkText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    lineHeight: 18,
    color: CommonColors.linkButtonText,
  },

  centerText: {
    textAlign: 'center',
  },
  versionText: {
    fontFamily: Fonts.LIGHT,
    fontSize: 10,
    color: CommonColors.label,
  },
});
