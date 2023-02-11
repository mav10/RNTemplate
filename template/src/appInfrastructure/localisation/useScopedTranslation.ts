import { useTranslation, UseTranslationOptions, UseTranslationResponse } from 'react-i18next';
import { KeyPrefix, Namespace } from 'i18next';

/*
Allows to specify the initial path of all translations returned by the function.
E.g. useScopedTranslation('Page.Login'). All translations will start with 'Page.Login.*'
 */
export function useScopedTranslation<N extends Namespace, TKPrefix extends KeyPrefix<N>>(
  path: TKPrefix,
  ns?: N | Readonly<N>,
  options?: UseTranslationOptions<TKPrefix>
): UseTranslationResponse<N, TKPrefix> {
  return useTranslation(ns, { ...options, keyPrefix: path });
}
