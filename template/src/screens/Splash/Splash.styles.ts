import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';
import { Fonts } from '../../commons/styles/fonts';

export const localStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: CommonColors.background,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    textAlign: 'center',
    color: CommonColors.text,
    lineHeight: 36,
    fontSize: 36,
  },
  footer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    bottom: 10,
  },
  bottomLogo: { alignSelf: 'center', tintColor: CommonColors.text },
  footerText: {
    color: CommonColors.plainText,
    textAlign: 'center',
    marginTop: 8,
    fontFamily: Fonts.REGULAR,
    lineHeight: 19,
    fontSize: 17,
  },
});
