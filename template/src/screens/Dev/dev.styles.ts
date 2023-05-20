import { StyleSheet } from 'react-native';
import { AppCommonStyles } from '../../commons/styles/styles';

export const localStyles = StyleSheet.create({
  scrollViewStyle: { flexGrow: 1 },
  layout: {
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'stretch',
  },
  scrollView: {
    flex: 0,
    flexGrow: 1,
    paddingTop: 8,
    paddingBottom: 24,
    paddingHorizontal: 0,
  },

  textItem: {
    ...AppCommonStyles.caption,
    marginBottom: 4,
  },

  button: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
  },

  footer: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },

  header: {
    marginBottom: 20,
    textAlign: 'center',
  },

  inputContainerStyles: {
    marginTop: 30,
    marginBottom: 20,
  },

  inputTextStyles: {
    fontSize: 14,
    letterSpacing: 5,
  },

  sceneContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 24,
  },

  modalsButtons: {
    alignItems: 'flex-start',
  },
  swipeModalContent: { paddingHorizontal: 15 },
});
