import 'react-i18next';
import localization from './dictionaries/localization.en.json';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'localization';
    // custom resources type
    resources: {
      localization: typeof localization;
    };
  }
}
