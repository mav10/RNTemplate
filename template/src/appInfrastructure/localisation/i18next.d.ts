import 'i18next';
import { defaultNS } from './locales';
import ns1 from './dictionaries/en/localization.json';
import ns2 from './dictionaries/en/dev.json';

const NameSpaceDictionaries = {
  localization: ns1,
  dev: ns2,
};
export type LocalizedResourceDictionary = typeof NameSpaceDictionaries;
export type LocalizedResourceDictionaryKeys = keyof typeof NameSpaceDictionaries.localization &
  keyof typeof NameSpaceDictionaries.dev;

declare module 'i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: typeof defaultNS;
    // custom resources type
    resources: LocalizedResourceDictionary;
  }
}
