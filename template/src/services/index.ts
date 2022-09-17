let _analytics: any | null = null;

export const analyticsService = () => {
  if (_analytics === null) {
    // initialize your analytics tracker here
    // e.g. Google, Yandex, Matomo, Countly etc.
  }

  return _analytics;
};
