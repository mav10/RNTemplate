import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 32,
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    gap: 32,
    alignSelf: 'stretch',
  },
  section: {
    gap: 20,
  },
  divider: {
    backgroundColor: CommonColors.lightGray,
    height: 0.75,
    width: '100%',
  },
  filledManufactoryIcon: {
    tintColor: CommonColors.text,
  },
});
