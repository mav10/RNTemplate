import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';
import { AppCommonStyles } from '../styles/styles';

export const localButtonStyles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },

  link: {
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 'auto',
  },

  primary: {
    backgroundColor: CommonColors.primaryButton,
  },

  secondary: {
    backgroundColor: CommonColors.secondaryButton,
    borderColor: CommonColors.primaryButton,
    borderWidth: 1,
  },
});

export const localTextStyles = StyleSheet.create({
  link: {
    color: CommonColors.secondaryButtonText,
  },

  primary: {
    color: CommonColors.primaryButtonText,
  },

  secondary: {
    color: CommonColors.secondaryButtonText,
  },

  text: {
    ...AppCommonStyles.buttonText,
    textAlign: 'center',
  },
});

export const disabledButtonStyles = StyleSheet.create({
  empty: {},
  link: {},

  primary: {
    backgroundColor: CommonColors.disabledButton,
  },

  secondary: {
    backgroundColor: CommonColors.secondaryButton,
    borderColor: CommonColors.disabledButton,
    borderWidth: 1,
  },
});
