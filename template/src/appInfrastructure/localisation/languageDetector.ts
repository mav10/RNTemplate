import { LanguageDetectorAsyncModule } from 'i18next';
import { loadUserLanguage, saveUserLanguage } from '../../helpers/storage-helper';

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  init: () => {},
  detect: () => loadUserLanguage(),
  cacheUserLanguage: (language: any) => saveUserLanguage(language),
};
