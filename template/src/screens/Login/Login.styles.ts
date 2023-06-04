import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: CommonColors.background,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    flex: 1,
    gap: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputs: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    flex: 1,
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
});
