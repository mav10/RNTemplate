import 'react-i18next';
import { defaultNS } from './locales';
import { LocalizedResourceDictionary } from './i18next';

declare module 'react-i18next' {
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
