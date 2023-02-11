import 'i18next';
import { defaultNS } from './locales';
import ns1 from './dictionaries/localization.de.json';

export type LocalizedResourceDictionary = typeof ns1;

declare module 'i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: typeof defaultNS;
    // custom resources type
    resources: {
      localization: LocalizedResourceDictionary;
    };
  }
}
