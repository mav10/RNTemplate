import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';

export const localStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexGrow: 1,
  },
  header: {
    marginTop: 4,
    textAlign: 'center',
  },
  lottie: {
    alignSelf: 'center',
    height: 144,
    padding: 0,
    position: 'relative',
    width: 148,
  },
  text: {
    color: CommonColors.secondaryText,
    textAlign: 'center',
  },
  topContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    rowGap: 12,
  },
});
