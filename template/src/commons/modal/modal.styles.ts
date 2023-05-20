import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';
import { AppCommonStyles } from '../styles/styles';

const DESIGNED_PADDING = 16;

export const localStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',

    margin: 0,
    padding: 0,
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: CommonColors.background,

    marginHorizontal: DESIGNED_PADDING,
    borderRadius: 10,
  },

  content: {
    padding: DESIGNED_PADDING,
  },

  swipeContent: {
    paddingHorizontal: 0,
  },

  swipeModalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
    marginTop: 150,
  },
  swipeContentContainer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    alignSelf: 'stretch',
    marginHorizontal: 0,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: DESIGNED_PADDING,
    paddingTop: DESIGNED_PADDING,

    columnGap: 8,
  },

  headerLeftContainer: {
    flexDirection: 'row',
    flex: 1,
    columnGap: 8,
  },

  icon: {
    resizeMode: 'contain',
  },

  headerText: {
    ...AppCommonStyles.heading4,
    flex: 1,
  },

  swipeHeaderText: {
    ...AppCommonStyles.heading2,
  },

  swipeModalButton: {
    borderRadius: 6,
    backgroundColor: CommonColors.lightGray,
    height: 3,
    width: '21%',
    margin: 8,
    alignSelf: 'center',
  },
});
