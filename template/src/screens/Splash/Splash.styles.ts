import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';
import { Fonts } from '../../commons/styles/fonts';

export const localStyles = StyleSheet.create({
  bootsplash: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  bottomLogo: { alignSelf: 'center', tintColor: CommonColors.text },
  container: {
    backgroundColor: CommonColors.background,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  footer: {
    alignSelf: 'center',
    bottom: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  footerText: {
    color: CommonColors.plainText,
    fontFamily: Fonts.REGULAR,
    fontSize: 17,
    lineHeight: 19,
    marginTop: 8,
    textAlign: 'center',
  },
  splashText: {
    color: CommonColors.text,
    fontSize: 36,
    lineHeight: 36,
    textAlign: 'center',
  },
  splashTextContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#333',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    margin: 20,
    textAlign: 'center',
  },
});
