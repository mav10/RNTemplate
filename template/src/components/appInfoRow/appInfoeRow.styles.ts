import { StyleSheet } from 'react-native';
import { AppCommonStyles } from '../../commons/styles/styles';

export const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 12,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    gap: 4,
  },
  headerText: {
    ...AppCommonStyles.heading4,
  },
  text: {
    ...AppCommonStyles.text,
    textAlign: 'left',
  },
  icon: {
    resizeMode: 'contain',
    width: 56,
    height: 56,
  },
});
