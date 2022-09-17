import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { localStyles } from './backButton.styles';
import { useTranslation } from 'react-i18next';
import { AppCommonStyles, uxTapZone } from '../../commons/styles/styles';

const arrow = require('../../../assets/images/controls/arrow_right.png');

export const BackButton = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onPrev = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <TouchableOpacity
      testID={'BackButton'}
      onPress={onPrev}
      activeOpacity={1}
      hitSlop={uxTapZone}
      style={[localStyles.container]}>
      <Image source={arrow} style={[localStyles.image]} />
      <Text style={[AppCommonStyles.buttonLinkText, localStyles.text]}>{t('Common_back')}</Text>
    </TouchableOpacity>
  );
};
