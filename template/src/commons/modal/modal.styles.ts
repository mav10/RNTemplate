import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';
import { AppCommonStyles } from '../styles/styles';

const DESIGNED_PADDING = 16;

export const localStyles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: CommonColors.background,
    borderRadius: 10,

    justifyContent: 'center',
    marginHorizontal: DESIGNED_PADDING,
  },
  content: {
    padding: DESIGNED_PADDING,
  },

  header: {
    alignItems: 'flex-start',
    columnGap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: DESIGNED_PADDING,

    paddingTop: DESIGNED_PADDING,
  },

  headerLeftContainer: {
    columnGap: 8,
    flexDirection: 'row',
    flex: 1,
  },

  headerText: {
    ...AppCommonStyles.heading4,
    flex: 1,
  },
  icon: {
    resizeMode: 'contain',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',

    margin: 0,
    padding: 0,
  },

  swipeContent: {
    paddingHorizontal: 0,
  },

  swipeContentContainer: {
    alignSelf: 'stretch',
    borderBottomLeftRadius: 0,

    borderBottomRightRadius: 0,
    marginHorizontal: 0,
  },

  swipeHeaderText: {
    ...AppCommonStyles.heading2,
  },

  swipeModalButton: {
    alignSelf: 'center',
    backgroundColor: CommonColors.lightGray,
    borderRadius: 6,
    height: 3,
    margin: 8,
    width: '21%',
  },

  swipeModalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
    marginTop: 150,
  },
});
