import React from 'react';
import { Image, Text, View } from 'react-native';
import { localStyles } from './appInfoeRow.styles';
import { AppInfoRowProps } from './appInfoRow';

export const AppInfoRowComponent: React.FC<AppInfoRowProps> = (props: AppInfoRowProps) => {
  const { icon, headerText, text, testIdPrefix } = props;

  return (
    <View style={localStyles.container} testID={`${testIdPrefix}_container`}>
      {icon && <Image source={icon} style={localStyles.icon} />}
      <View style={localStyles.textContainer}>
        {headerText && (
          <Text style={localStyles.headerText} testID={`${testIdPrefix}_header`}>
            {headerText}
          </Text>
        )}
        <Text style={localStyles.text} testID={`${testIdPrefix}_value`}>
          {text}
        </Text>
      </View>
    </View>
  );
};
