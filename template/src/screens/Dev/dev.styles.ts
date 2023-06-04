import { StyleSheet } from 'react-native';
import { AppCommonStyles } from '../../commons/styles/styles';

export const localStyles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
  },
  footer: { alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainerStyles: {
    marginBottom: 20,
    marginTop: 30,
  },

  inputTextStyles: {
    fontSize: 14,
    letterSpacing: 5,
  },

  layout: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  loginSceneContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  modalsButtons: {
    alignItems: 'flex-start',
  },

  scrollView: {
    flex: 0,
    flexGrow: 1,
    paddingBottom: 24,
    paddingHorizontal: 0,
    paddingTop: 8,
  },

  scrollViewStyle: { flexGrow: 1 },

  swipeModalContent: { paddingHorizontal: 15 },
  textItem: {
    ...AppCommonStyles.caption,
    marginBottom: 4,
  },
});
