import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 8,
    marginTop: 13,
  },
  image: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
  },
  text: {
    color: CommonColors.plainText,
  },
});
