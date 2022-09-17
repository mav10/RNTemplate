export type Language = 'en' | 'de' | 'ru';
export type Namespace = 'localization' | 'dev';

export type Locale = {
  language: Language;
  ns: Namespace;
  resource: any;
};

export const fallbackLng: Language = 'en';
export const defaultNS: Namespace = 'localization';

export const locales: Locale[] = [
  {
    language: 'en',
    ns: defaultNS,
    resource: require('./dictionaries/localization.en.json'),
  },
  {
    language: 'de',
    ns: defaultNS,
    resource: require('./dictionaries/localization.de.json'),
  },
  {
    language: 'ru',
    ns: defaultNS,
    resource: require('./dictionaries/localization.ru.json'),
  },
];
