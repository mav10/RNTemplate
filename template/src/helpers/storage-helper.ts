import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../appInfrastructure/constants/asyncStorageKeys';
import { logger } from '../appInfrastructure/logging/logging';

const put = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e: any) {
    logger().error(
      'CacheService: Failed to put pair ' + `[${key}, ${value}]`,
      e,
    );
    __DEV__ && console.log(e);
  }
};

const get = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e: any) {
    logger().error('CacheService: Failed to get ' + key, e);
    __DEV__ && console.log(e);
  }
};

export const cacheService = {
  put,
  get,
};

export async function loadUserLanguage(): Promise<string> {
  const fallbackLanguage = 'en';
  const value = await get(AsyncStorageKeys.Language);

  return value || fallbackLanguage;
}

export function saveUserLanguage(language: string) {
  put(AsyncStorageKeys.Language, language);
}
