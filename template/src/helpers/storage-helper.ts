import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../appInfrastructure/constants/asyncStorageKeys';
import { logger } from '../appInfrastructure/logging/logging';

const put = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e: any) {
    logger().error('[Async Storage] PUT operation failed', e);
  }
};

// @ts-ignore
const get = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e: any) {
    logger().error('[Async Storage] GET operation failed', e);
  }
};

export async function loadUserLanguage(): Promise<string | undefined> {
  try {
    const value = await get(AsyncStorageKeys.Language);
    // noinspection SuspiciousTypeOfGuard
    return !!value && typeof value === 'string' ? value : undefined;
  } catch (e: any) {
    logger().error('Impossible to load language from store', e);
    return undefined;
  }
}

export function saveUserLanguage(language: string) {
  return put(AsyncStorageKeys.Language, language);
}

export async function fullCleanUpStorage() {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    return false;
  }
}

/*
 * This function converts 'false', '0', null, undefined to boolean `false`
 * Everything else is converted to boolean `true`.
 * (all default conversions like `!!value` or `Boolean(value)` do not convert 'false' to boolean false
 */
export function toBoolean(value: string | undefined | null): boolean {
  if (!value) {
    return false;
  }

  const lowercaseValue = value.toLowerCase();
  if (lowercaseValue === 'false' || lowercaseValue === '0') {
    return false;
  }
  return true;
}
