import { loadUserLanguage, saveUserLanguage } from '../../helpers/storage-helper';
import { LanguageDetectorAsyncModule } from 'i18next';
import { fallbackLng, Language, Languages } from './locales';
import { logger } from '../logging/logging';
import { NativeModules, Platform } from 'react-native';

/**
 * https://github.com/facebook/react-native/issues/26540
 * XCode 11 and iOS 13 workaround.
 */
const systemLanguage: Language = (
  Platform.OS === 'ios'
    ? NativeModules?.SettingsManager?.settings.AppleLocale || NativeModules?.SettingsManager?.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier
)?.substring(0, 2);

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  init: () => {},
  detect: async () => {
    try {
      const language = await loadUserLanguage();
      if (language) {
        logger().info(`[Localization] load user language from storage: "${language}"`);
        return language;
      }

      logger().info(`[Localization] storage is empty. Load system language: "${systemLanguage}"`);
      if (Languages.includes(systemLanguage)) {
        logger().info(`[Localization] System language is chosen as default: "${systemLanguage}"`);
        return systemLanguage;
      }

      logger().info(
        `[Localization] System language (${systemLanguage}) is not supported by app. Select fallback language: "${fallbackLng}`
      );
      return fallbackLng;
    } catch (e) {
      return fallbackLng;
    }
  },
  cacheUserLanguage: (language: string) => saveUserLanguage(language),
};
