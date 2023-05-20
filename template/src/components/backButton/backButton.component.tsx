import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { localStyles } from './backButton.styles';
import { useTranslation } from 'react-i18next';
import { AppCommonStyles, uxTapZone } from '../../commons/styles/styles';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const arrow = require('../../../assets/images/navigation/right_arrow_16.png');

export const BackButton = (props: HeaderBackButtonProps) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onPrev = useCallback(() => {
    navigation.goBack();
  }, []);

    if (!props.canGoBack) {
        return <></>;
    }

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
