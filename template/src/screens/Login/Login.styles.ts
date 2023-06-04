import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.background,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 20,
  },
  inputs: {
    gap: 20,
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
