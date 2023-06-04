import { StyleSheet } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';

export const localStyles = StyleSheet.create({
  appBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  buttonsCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
    justifyContent: 'space-between',
  },
  cardLayout: { flex: 0 },
  container: { alignItems: 'stretch', flexGrow: 1, justifyContent: 'space-between' },

  content: { flex: 1, rowGap: 20 },

  footer: { alignItems: 'center', gap: 5, paddingTop: 30 },
  greeting: {
    justifyContent: 'flex-start',
  },
  icon: {
    borderRadius: 20,
    resizeMode: 'contain',
  },
  libCard: { flex: 0, flexWrap: 'nowrap', gap: 5 },
  libItem: { gap: 5 },

  libRow: { flexDirection: 'row', gap: 10 },
  librariesCarousel: { gap: 10, paddingBottom: 10 },
  safeArea: { flexGrow: 1 },

  textContainer: {
    borderColor: CommonColors.primary,
    borderRadius: 15,
    borderWidth: 1,

    flex: 2,
    paddingVertical: 15,
  },
});
