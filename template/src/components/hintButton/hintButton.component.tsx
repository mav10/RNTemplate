import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { localStyles } from './hintButton.styles';
import { AppCommonStyles, uxTapZone } from '../../commons/styles/styles';
import { useModal } from '../../appInfrastructure/hooks/useModal';
import { AppModal } from '../../commons/modal/modal.container';
import { HintButtonProps } from './hintButton';

const question = require('../../../assets/images/question.png');

export const HintButton = (props: HintButtonProps) => {
  const { message, header } = props;
  const { visible, openModal, closeModal } = useModal('CLOSED');

  return (
    <>
      <TouchableOpacity
        testID={'HintButton'}
        onPress={openModal}
        activeOpacity={0.7}
        hitSlop={uxTapZone}
        style={localStyles.container}>
        <Image source={question} style={localStyles.image} />
      </TouchableOpacity>

      <AppModal isVisible={visible} onClose={closeModal} headerText={header}>
        <Text style={AppCommonStyles.centerText}>{message}</Text>
      </AppModal>
    </>
  );
};
