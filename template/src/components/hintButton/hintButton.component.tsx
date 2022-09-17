import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { localStyles } from './hintButton.styles';
import { Trans, useTranslation } from 'react-i18next';
import { AppCommonStyles, uxTapZone } from '../../commons/styles/styles';
import { useModal } from '../../appInfrastructure/hooks/useModal';
import { AppModal } from '../../commons/modal/modal.container';
import { Fonts } from '../../commons/styles/fonts';
import Config from 'react-native-config';

const question = require('../../../assets/images/question.png');

export const HintButton = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { visible, openModal, closeModal } = useModal('CLOSED');

  return (
    <>
      <TouchableOpacity
        testID={'HintButton'}
        onPress={openModal}
        activeOpacity={0.7}
        hitSlop={uxTapZone}
        style={[localStyles.container]}>
        <Image source={question} style={[localStyles.image]}/>
      </TouchableOpacity>

      <AppModal isVisible={visible} onClose={closeModal} headerText={t('DevMode.Hint_Header')}>
        <Text style={AppCommonStyles.centerText}>
          <Trans i18nKey={'DevMode.Hint_Text'} values={{ password: Config.REACT_APP_DEVMODE_PASS }}>
            <Text style={{ fontFamily: Fonts.BOLD }}>Password:</Text>
            <Text style={{ color: 'red' }}>pass</Text>
          </Trans>
        </Text>
      </AppModal>
    </>
  );
};
