import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginTop: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    transform: [{ rotateY: '180deg' }],
    alignSelf: 'flex-start',
  },
  text: {
    color: CommonColors.plainText,
  },
});
