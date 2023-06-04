import { Platform, StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';

const borderColor = '#EDEFEF';

export const localStyles = StyleSheet.create({
  container: {
    backgroundColor: CommonColors.background,
    borderRadius: 10,
    elevation: 5,

    flex: 0,
    shadowColor: Platform.select({
      android: 'rgba(0, 37, 71, 1)',
      ios: 'rgba(0, 37, 71, 0.15)',
    }),
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,

    shadowRadius: 7,
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

  dailyCheckIcon: {
    resizeMode: 'contain',
  },

  dailyCheckWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  footer: {
    borderColor: borderColor,
    borderTopWidth: 1,
    paddingBottom: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  header: {
    borderBottomWidth: 1,
    borderColor: borderColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  withHeaderOrFooter: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
});
