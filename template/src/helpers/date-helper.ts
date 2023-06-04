import { addMinutes, setDefaultOptions } from 'date-fns';

type DefaultOptions = Parameters<typeof setDefaultOptions>[0];
const defaultOptions: DefaultOptions = {};

export const subtractLocalOffset = (date: Date) => {
  const offset = date.getTimezoneOffset();
  return addMinutes(date, offset);
};

export const addLocalOffset = (date: Date) => {
  const offset = date.getTimezoneOffset();
  return addMinutes(date, -offset);
};

export const setLocale = (locale: DefaultOptions['locale']) => {
  defaultOptions.locale = locale;
  setDefaultOptions(defaultOptions);
};
