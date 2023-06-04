import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';

export const localStyles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexGrow: 1,
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    rowGap: 12,
  },
  lottie: {
    position: 'relative',
    width: 148,
    height: 144,
    alignSelf: 'center',
    padding: 0,
  },
  header: {
    marginTop: 4,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: CommonColors.secondaryText,
  },
});
