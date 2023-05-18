const ColorScheme = {
  blue: '#4D69D5',
  darkGreen: '#009987',
  lightBlue: '#309FCD',

  white: '#fff',

  black: '#001311',
  lightBlack: '#4E5757',
  grey: '#7E8B8B',
  lightGrey: '#BFC5C5',
  red: '#E84F4F',
};

const InactiveColorScheme = {
  dark: '#4E5757',
  plain: '#7E8B8B',
  light: '#BFC5C5',
  ultraLight: '#DFE2E2',
};

export const AdditionalButtonBackground = {
  secondary: {
    pushed: '#DAE0F6',
    disabled: '#F3F4F4',
    enabled: '#E6EAF9',
  },
  primary: {
    pushed: '#4D69D5',
    disabled: '#F3F4F4',
    enabled: '#7A8FE0',
  },
  accent: {
    enabled: '#23BBA9',
    pushed: '#009987',
    disabled: '#F3F4F4',
  },
  secondaryIcon: {
    enabled: '#4D69D5',
    pushed: '#2A45B0',
    disabled: '#BFC5C5',
  },
  primaryIcon: {
    enabled: '#fff',
    pushed: '#fff',
    disabled: '#BFC5C5',
  },
};

export const CommonColors = {
  primaryButton: ColorScheme.blue,
  secondaryButton: 'transparent',
  primaryButtonText: ColorScheme.white,
  secondaryButtonText: ColorScheme.blue,
  linkButtonText: ColorScheme.blue,
  disabledButton: ColorScheme.grey,
  disabledLink: ColorScheme.grey,

  label: ColorScheme.lightBlack,
  textInputBorder: '#E2E2E2',
  textInputBackground: '#FCFCFC',

  text: ColorScheme.black,
  plainText: ColorScheme.black,
  secondaryText: ColorScheme.grey,
  background: ColorScheme.white,
  cardBackground: ColorScheme.white,

  animation: ColorScheme.darkGreen,
  lightGrey: ColorScheme.lightGrey,

  error: ColorScheme.red,

  primary: ColorScheme.blue,
  primaryLight: ColorScheme.lightBlue,
  accent: ColorScheme.darkGreen,
  secondary: ColorScheme.lightBlue,

  gray: InactiveColorScheme.plain,
  darkGray: InactiveColorScheme.dark,
  lightGray: InactiveColorScheme.light,
  dotColor: InactiveColorScheme.ultraLight,

  listItemBorder: InactiveColorScheme.ultraLight,
};
