import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  contentContainer: {
    alignSelf: 'stretch',
    flexGrow: 1,
    gap: 32,
  },
  divider: {
    backgroundColor: CommonColors.lightGray,
    height: 0.75,
    width: '100%',
  },
  filledManufactoryIcon: {
    tintColor: CommonColors.text,
  },
  layout: {
    alignItems: 'center',
    flexGrow: 1,
    gap: 32,
    justifyContent: 'space-between',
    paddingBottom: 24,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  section: {
    gap: 20,
  },
});
