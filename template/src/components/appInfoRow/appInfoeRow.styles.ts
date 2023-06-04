import { StyleSheet } from 'react-native';
import { AppCommonStyles } from '../../commons/styles/styles';

export const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-start',
    width: '100%',
  },
  headerText: {
    ...AppCommonStyles.heading4,
  },
  icon: {
    height: 56,
    resizeMode: 'contain',
    width: 56,
  },
  text: {
    ...AppCommonStyles.text,
    textAlign: 'left',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    gap: 4,
    justifyContent: 'center',
  },
});
