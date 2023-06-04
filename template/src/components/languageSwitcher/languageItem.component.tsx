import React, { useCallback } from 'react';
import { Image, Pressable, StyleProp, Text } from 'react-native';
import { itemButtonStyles, itemIconStyles, itemLocalStyles } from './languageSwitcher.styles';
import { LanguageItemProps } from './languageSwitcher';

const checkIcon = require('assets/images/check_20.png');

function getPressableStyles<T, K>(
  pressed: boolean,
  selected: boolean,
  baseStyles: StyleProp<K>,
  stateStyles: T
): StyleProp<K> {
  const containerStyle: StyleProp<K>[] = [baseStyles, {} as Record<any, any>];

  const buttonStateSelector = pressed ? 'pushed' : selected ? 'enabled' : 'default';
  // @ts-ignore
  containerStyle.push(stateStyles[buttonStateSelector]);
  return containerStyle;
}

export const LanguageItem = (props: LanguageItemProps) => {
  const getButtonStyle = useCallback(
    (pressed: boolean) => {
      return getPressableStyles(pressed, props.selected, itemLocalStyles.item, itemButtonStyles);
    },
    [props.selected]
  );

  const getIconStyle = useCallback((pressed: boolean) => {
    return getPressableStyles(pressed, false, itemLocalStyles.check, itemIconStyles);
  }, []);

  return (
    <Pressable
      testID={'languageSwitcher_item'}
      style={({ pressed }) => getButtonStyle(pressed)}
      onPress={props.onPress}
      disabled={props.disabled}>
      {({ pressed }) => (
        <>
          <Text style={[itemLocalStyles.text, props.textStyles]}>{props.text}</Text>
          {props.selected && <Image source={checkIcon} style={getIconStyle(pressed)} />}
        </>
      )}
    </Pressable>
  );
};
