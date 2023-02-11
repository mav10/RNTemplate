import { initReactI18next } from 'react-i18next';
import { languageDetector } from './languageDetector';
import i18n from 'i18next';
import { dateLocales, defaultNS, fallbackLng, Language, locales } from './locales';
import intervalPlural from 'i18next-intervalplural-postprocessor';

export function initializeLocalization(): Promise<any> {
  return i18n
    .use(languageDetector)
    .use(intervalPlural)
    .use(initReactI18next)
    .init(
      {
        compatibilityJSON: 'v3',
        defaultNS,
        fallbackLng,
        ns: Array.from(new Set(locales.map(locale => locale.ns))),
        load: 'languageOnly',
        preload: [fallbackLng],
        saveMissing: __DEV__,
        lowerCaseLng: true,
        initImmediate: true,
        supportedLngs: locales.map(loc => loc.language),
        interpolation: {
          escapeValue: false, // react already safes from xss
        },
      },
      () => {
        locales.forEach(locale => i18n.addResourceBundle(locale.language, locale.ns, locale.resource));
      }
    )
    .then(() => {
      return changeLanguage(i18n.language as Language);
    });
}

export async function changeLanguage(language: string) {
  // handle there all locale dependent resources like a date presentation
  await i18n.changeLanguage(language);
}

export const getCurrentDateLocale = () => {
  return { locale: dateLocales[i18n.language as Language] };
};
