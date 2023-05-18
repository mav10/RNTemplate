import { de, enGB, ru } from 'date-fns/locale';

export const Languages = ['ru', 'en', 'de'] as const;
export const Namespaces = ['localization', 'dev'] as const;

// eslint-disable-next-line prettier/prettier
export type Language = typeof Languages[number];
// eslint-disable-next-line prettier/prettier
export type Namespace = typeof Namespaces[number];

type LanguageResource = Record<Namespace, Record<string, any>>;
type LocalizationResources = Record<Language, LanguageResource>;

export const dateLocales: { [key in Language]: typeof enGB } = {
  en: enGB,
  de: de,
  ru: ru,
};
export const fallbackLng: Language = 'en';
export const defaultNS: Namespace = 'localization';
export const Resources: LocalizationResources = {
  en: {
    dev: require('./dictionaries/en/dev.json'),
    localization: require('./dictionaries/en/localization.json'),
  },
  de: {
    dev: require('./dictionaries/de/dev.json'),
    localization: require('./dictionaries/de/localization.json'),
  },
  ru: {
    dev: require('./dictionaries/ru/dev.json'),
    localization: require('./dictionaries/ru/localization.json'),
  },
};
