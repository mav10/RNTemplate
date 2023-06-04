import React from 'react';
import { LoaderProps } from './loader';
import { ActivityIndicator, Text, View } from 'react-native';
import { localStyles } from './loader.styles';
import { CommonColors } from '../../commons/styles/colors';

export const Loader = (props: LoaderProps) => {
  if (props.inProgress) {
    return (
      <View style={localStyles.container}>
        <ActivityIndicator size={'large'} color={CommonColors.primaryButton} />
        <Text style={localStyles.text}>{props.text}</Text>
      </View>
    );
  }

  return <></>;
};
