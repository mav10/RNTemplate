import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 0,
    backgroundColor: CommonColors.background,
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  section: {
    gap: 5,
  },
  userSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: { tintColor: CommonColors.primary },
  cardGap: {
    gap: 10,
    flex: 0,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
