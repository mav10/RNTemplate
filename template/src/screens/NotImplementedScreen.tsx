import React from 'react';
import { InformationScreenContainer } from '../commons/informationScreenContainer/informationScreenContainer.component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonColors } from '../commons/styles/colors';

const notImplemntedAnimation = require('../../assets/animations/coding.json');

export const NotImplementedScreen = () => {
  return (
    <SafeAreaView style={{ flexGrow: 1, flex: 1, justifyContent: 'center', backgroundColor: CommonColors.background }}>
      <InformationScreenContainer
        headerText={'Not implemented yet'}
        text={'Fucntionality not fully implemented yet'}
        lottieSource={notImplemntedAnimation}
      />
    </SafeAreaView>
  );
};
