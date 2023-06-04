import React, { useMemo } from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

export const TabBarIcon = (props: {
  style: { focused: boolean; color: string; size: number };
  icon: ImageSourcePropType;
}) => {
  const {
    icon,
    style: { color, focused, size },
  } = props;

  const styles = useMemo(() => {
    const baseStyles = [localStyles.base, {}];

    if (size) {
      baseStyles.push({ width: size, height: size });
    }

    if (color) {
      baseStyles.push({ tintColor: color });
    }

    if (focused) {
      baseStyles.push(localStyles.focused);
    }

    return baseStyles;
  }, [size, focused, color]);

  return <Image source={icon} resizeMode={'contain'} style={styles} />;
};

const localStyles = StyleSheet.create({
  base: {
    resizeMode: 'contain',
    opacity: 0.85,
    width: 25,
    height: 25,
  },
  focused: {
    opacity: 1,
  },
  active: {
    opacity: 0.7,
  },
});
