import { Platform, StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';

const borderColor = '#EDEFEF';

export const localStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: CommonColors.background,
    borderRadius: 10,

    shadowColor: Platform.select({
      android: 'rgba(0, 37, 71, 1)',
      ios: 'rgba(0, 37, 71, 0.15)',
    }),
    shadowOpacity: 1,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 7,
    },

    elevation: 5,
  },

  withHeaderOrFooter: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },

  contentStyle: {
    flex: 1,
    padding: 16,
  },

  contentWithFooter: {
    paddingBottom: 22,
  },

  contentWithHeader: {
    paddingTop: 13,
  },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: borderColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footer: {
    borderTopWidth: 1,
    borderColor: borderColor,
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingTop: 16,
  },

  dailyCheckWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dailyCheckIcon: {
    resizeMode: 'contain',
  },
});
