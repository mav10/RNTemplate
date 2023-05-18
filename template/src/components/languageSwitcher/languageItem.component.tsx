import React, { useCallback } from 'react';
import { Image, Pressable, Text } from 'react-native';
import { itemButtonStyles, itemIconStyles, itemLocalStyles } from './languageSwitcher.styles';
import { LanguageItemProps } from './languageSwitcher';
import { getPressableStyles } from '../../commons/styles/styles';

const checkIcon = require('assets/images/check_20.png');

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
