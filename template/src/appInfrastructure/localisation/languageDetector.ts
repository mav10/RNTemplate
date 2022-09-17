import { LanguageDetectorAsyncModule } from 'i18next';
import { NativeModules, Platform } from 'react-native';
import {
  loadUserLanguage,
  saveUserLanguage,
} from '../../helpers/storage-helper';
import { fallbackLng } from './locales';

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  init: () => {},
  detect: async (callback: (language: string) => void) => {
    loadUserLanguage()
      .then((language) => {
        if (language) {
          callback(language);
        } else {
          /**
           * https://github.com/facebook/react-native/issues/26540
           * XCode 11 and iOS 13 workaround.
           */

          let locale = '';

          if (Platform.OS === 'ios') {
            locale = NativeModules.SettingsManager.settings.AppleLocale;

            if (locale === undefined) {
              locale = NativeModules.SettingsManager.settings.AppleLanguages[0];

              if (locale === undefined) {
                locale = fallbackLng; // Fallback language
              }
            }
          } else {
            locale = NativeModules.I18nManager.localeIdentifier.substr(0, 2);
          }
          callback(locale);
        }
      })
      .catch((_erMessage) => () => callback(fallbackLng));
  },
  cacheUserLanguage: (language: any) => {
    saveUserLanguage(language);
  },
};
