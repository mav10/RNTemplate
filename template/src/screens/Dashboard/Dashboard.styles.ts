import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  safeArea: { flexGrow: 1 },
  container: { flexGrow: 1, justifyContent: 'space-between', alignItems: 'stretch' },
  content: { flex: 1, paddingHorizontal: 15, paddingVertical: 10, rowGap: 20 },
  greeting: {
    justifyContent: 'flex-start',
  },

  appBlock: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    resizeMode: 'contain',
    borderRadius: 20,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: CommonColors.primary,
    borderRadius: 15,

    paddingVertical: 15,
    flex: 2,
  },

  footer: { alignItems: 'center', gap: 5, paddingTop: 30 },
});
