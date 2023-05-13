import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  safeArea: { flexGrow: 1 },
  container: { flexGrow: 1, justifyContent: 'space-between', alignItems: 'stretch' },
  content: { flex: 1, rowGap: 20 },
  greeting: {
    justifyContent: 'flex-start',
  },

  librariesCarousel: { gap: 10, paddingBottom: 10 },

  buttonsCard: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 1,
  },
  cardLayout: { flex: 0 },
  libCard: { flex: 0, gap: 5, flexWrap: 'nowrap' },
  libRow: { flexDirection: 'row', gap: 10 },
  libItem: { gap: 5 },

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
