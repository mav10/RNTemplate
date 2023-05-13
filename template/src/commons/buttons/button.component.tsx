import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './button';
import { disabledButtonStyles, localButtonStyles, localTextStyles } from './button.styles';

export const ButtonComponent = (props: ButtonProps) => {
  const colorsStyles = useMemo(() => {
    if (props.colors) {
      return {
        backgroundColor: props.disabled ? props.colors.disabled : props.colors.active,
      };
    }

    return {};
  }, [props.colors, props.disabled]);

  const textColorsStyles = useMemo(() => {
    if (props.textColors) {
      return {
        color: props.disabled ? props.textColors.disabled : props.textColors.active,
      };
    }

    return {};
  }, [props.textColors, props.disabled]);

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={[
        localButtonStyles.button,
        localButtonStyles[props.type],
        props.buttonStyles,
        props.disabled && disabledButtonStyles[props.type],
        colorsStyles,
      ]}>
      <Text style={[localTextStyles.text, localTextStyles[props.type], textColorsStyles]}>{props.label}</Text>
    </TouchableOpacity>
  );
};
