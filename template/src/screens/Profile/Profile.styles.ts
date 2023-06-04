import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  cardGap: {
    flex: 0,
    gap: 10,
  },
  container: {
    backgroundColor: CommonColors.background,
    flexGrow: 1,
    flex: 0,
  },
  content: {
    flex: 1,
    gap: 30,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  footer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconStyle: { tintColor: CommonColors.primary },
  section: {
    gap: 5,
  },
  userSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
