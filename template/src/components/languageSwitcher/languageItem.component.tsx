import React, { useCallback, useMemo, useState } from 'react';
import { Image, Text, TouchableHighlight } from 'react-native';
import { itemLocalStyles } from './languageSwitcher.styles';
import { CommonColors } from '../../commons/styles/colors';
import { LanguageItemProps } from './languageSwitcher';

const checkIcon = require('../../../assets/images/check.png');

export const LanguageItem = (props: LanguageItemProps) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const textStyles = useMemo(() => {
    const base = [itemLocalStyles.itemText, {}];
    if (props.selected) {
      base.push(itemLocalStyles.selectedItem);
    }

    if (pressed) {
      base.push({ color: CommonColors.accent });
    }

    return base;
  }, [props.selected, pressed]);

  const iconStyles = useMemo(() => {
    return pressed ? itemLocalStyles.checkPressed : itemLocalStyles.check;
  }, [pressed]);

  const onPressIn = useCallback(() => {
    setPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setPressed(false);
  }, []);

  return (
    <TouchableHighlight
      style={[itemLocalStyles.listItem, props.itemStyles]}
      onPress={props.onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={props.disabled}
      underlayColor={CommonColors.primary}>
      <>
        <Text style={[textStyles, props.textStyles]}>{props.text}</Text>
        {props.selected && <Image source={checkIcon} style={iconStyles} />}
      </>
    </TouchableHighlight>
  );
};
