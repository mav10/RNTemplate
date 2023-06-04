import React, { FC, PropsWithChildren, useMemo } from 'react';
import { Text, View } from 'react-native';
import { CardComponentProps } from './card';
import { localStyles } from './card.styles';
import { AppCommonStyles } from '../styles/styles';

export const Card: FC<PropsWithChildren<CardComponentProps>> = props => {
  const containerStyles = useMemo(() => {
    const base = [localStyles.container, props.style];
    if (props.headerText || props.footer) {
      base.push(localStyles.withHeaderOrFooter);
    }

    return base;
  }, [props.headerText, props.footer, props.style]);

  const contentStyles = useMemo(() => {
    const base = [localStyles.contentStyle, props.contentStyle];

    if (props.headerText) {
      base.push(localStyles.contentWithHeader);
    }

    if (props.footer) {
      base.push(localStyles.contentWithFooter);
    }

    return base;
  }, [props.headerText, props.footer, props.contentStyle]);

  return (
    <View style={containerStyles}>
      {props.headerText && (
        <View style={localStyles.header}>
          <Text testID={'cardHeaderText'} accessibilityLabel={props.additionalTestId} style={AppCommonStyles.heading4}>
            {props.headerText}
          </Text>
          {props.headerRightControl}
        </View>
      )}
      <View style={contentStyles}>{props.children}</View>
      {props.footer && <View style={localStyles.footer}>{props.footer}</View>}
    </View>
  );
};
