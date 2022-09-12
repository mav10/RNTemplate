import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';
import { Fonts } from '../styles/fonts';

export const localStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',

    margin: 0,
    padding: 0,
  },
  swipeModalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
    marginTop: 150,
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: CommonColors.background,

    marginHorizontal: 26,
    borderRadius: 25,
  },
  swipeContentContainer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headerContent: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: CommonColors.primaryButton,
    zIndex: 2,
  },
  headerText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 26,
    color: CommonColors.background,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 9,
  },
  content: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});
