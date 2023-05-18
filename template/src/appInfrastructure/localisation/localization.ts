import { initReactI18next } from 'react-i18next';
import { languageDetector } from './languageDetector';
import i18n from 'i18next';
import { dateLocales, defaultNS, fallbackLng, Language, Languages, Namespaces, Resources } from './locales';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { setLocale } from '../../helpers/date-helper';

export function initializeLocalization(): Promise<any> {
  return i18n
    .use(languageDetector)
    .use(intervalPlural)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      defaultNS,
      fallbackLng,
      ns: Namespaces,
      load: 'languageOnly',
      preload: [fallbackLng],
      saveMissing: __DEV__,
      lowerCaseLng: true,
      initImmediate: true,
      supportedLngs: Languages,
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      resources: Resources,
    })
    .then(() => {
      return changeLanguage(i18n.language as Language);
    });
}

export async function changeLanguage(language: string) {
  // handle there all locale dependent resources like a date presentation
  await i18n.changeLanguage(language);
  await setLocale(dateLocales[language as Language]);
}

export const getCurrentDateLocale = () => {
  return { locale: dateLocales[i18n.language as Language] };
};
