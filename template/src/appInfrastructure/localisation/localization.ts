import i18n from 'i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { initReactI18next } from 'react-i18next';
import { languageDetector } from './languageDetector';
import { defaultNS, fallbackLng, locales } from './locales';

export function initializeLocalization(): Promise<any> {
  return i18n
    .use(languageDetector)
    .use(intervalPlural)
    .use(initReactI18next)
    .init(
      {
        fallbackLng,
        defaultNS,
        ns: Array.from(new Set(locales.map((locale) => locale.ns))),
        load: 'languageOnly',
        preload: [fallbackLng],
        saveMissing: process.env.NODE_ENV !== 'production',
        lowerCaseLng: true,
        initImmediate: false,
        interpolation: {
          escapeValue: false, // react already safes from xss
        },
        react: {
          useSuspense: true,
        },
        compatibilityJSON: 'v3',
      },
      () => {
        locales.forEach((locale) =>
          i18n.addResourceBundle(locale.language, locale.ns, locale.resource),
        );
      },
    );
}

export async function changeLanguage(language: string) {
  // handle there all locale dependent resources like a date presentation
  await i18n.changeLanguage(language);
}
