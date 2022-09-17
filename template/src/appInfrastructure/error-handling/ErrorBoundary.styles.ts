import { StyleSheet } from 'react-native';
import { Fonts } from '../../commons/styles/fonts';

export const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  subContainer: {
    flex: 1,
    marginTop: '50%',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 18,
  },
  bigBoldText: {
    fontFamily: Fonts.BOLD,
    fontSize: 18,
    letterSpacing: 0.8,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center',
  },
  text: {
    fontFamily: Fonts.LIGHT,
    marginTop: 30,
    marginHorizontal: 24,
    lineHeight: 18,
    fontSize: 16,
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
