import React from 'react';
import { InformationScreenContainer } from '../commons/informationScreenContainer/informationScreenContainer.component';
import { View } from 'react-native';
import { useSafeAreContainerStyles } from '../commons/styles/styles';

const notImplemntedAnimation = require('../../assets/animations/coding.json');

export const NotImplementedScreen = () => {
  const containerStyles = useSafeAreContainerStyles();
  return (
    <View style={containerStyles}>
      <InformationScreenContainer
        headerText={'Not implemented yet'}
        text={'Fucntionality not fully implemented yet'}
        lottieSource={notImplemntedAnimation}
      />
    </View>
  );
};
