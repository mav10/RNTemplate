import { StyleSheet } from 'react-native';
import { CommonColors } from '../styles/colors';
import { AppCommonStyles } from '../styles/styles';

export const localButtonStyles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },

  primary: {
    backgroundColor: CommonColors.primaryButton,
  },

  secondary: {
    backgroundColor: CommonColors.secondaryButton,
    borderWidth: 1,
    borderColor: CommonColors.primaryButton,
  },

  link: {
    width: 'auto',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
  },
});

export const localTextStyles = StyleSheet.create({
  text: {
    ...AppCommonStyles.buttonText,
    textAlign: 'center',
  },

  primary: {
    color: CommonColors.primaryButtonText,
  },

  secondary: {
    color: CommonColors.secondaryButtonText,
  },

  link: {
    color: CommonColors.secondaryButtonText,
  },
});

export const disabledButtonStyles = StyleSheet.create({
  empty: {},
  primary: {
    backgroundColor: CommonColors.disabledButton,
  },

  secondary: {
    backgroundColor: CommonColors.secondaryButton,
    borderWidth: 1,
    borderColor: CommonColors.disabledButton,
  },

  link: {},
});
