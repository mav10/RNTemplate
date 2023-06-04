import React, { useCallback } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Card } from '../../commons/card/card.component';
import { AppInfoRowComponent } from '../../components/appInfoRow/AppInfoRow.component';
import { AppCommonStyles } from '../../commons/styles/styles';
import { useTranslation } from 'react-i18next';
import { localStyles } from './Profile.styles';
import { ButtonComponent } from '../../commons/buttons/button.component';
import { LanguageSwitcher } from '../../components/languageSwitcher/languageSwitcher.component';
import { VersionComponent } from '../../components/version/version.component';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../features/auth/auth-slice';

const profileIcon = require('./../../../assets/images/navigation/user.png');
const star = require('./../../../assets/images/update/star_20.png');
const other = require('./../../../assets/images/question.png');

export const ProfileController = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(AuthActions.logout());
  }, []);

  return (
    <ScrollView style={localStyles.container} contentContainerStyle={localStyles.content}>
      <View style={localStyles.header}>
        <Image source={profileIcon} style={{ width: 50, height: 50, tintColor: '#333' }} />
        <Text style={AppCommonStyles.heading3}>{'username'}</Text>
      </View>

      <View style={localStyles.section}>
        <View style={localStyles.userSection}>
          <Text style={AppCommonStyles.heading5}>{t('Profile.UserHeader')}</Text>
          <ButtonComponent type={'link'} label={t('Profile.Exit')} onPress={onLogout} />
        </View>
        <Card contentStyle={localStyles.cardGap}>
          <AppInfoRowComponent text={'email@example.com'} headerText={t('Profile.Email')} />
          <AppInfoRowComponent text={'+7 999 999 9999'} headerText={t('Profile.Phone')} />
        </Card>
      </View>

      <View style={localStyles.section}>
        <Text style={AppCommonStyles.heading5}>{t('Profile.OtherHeader')}</Text>
        <Card contentStyle={localStyles.cardGap}>
          <AppInfoRowComponent
            icon={star}
            iconStyles={localStyles.iconStyle}
            text={t('Profile.Disclaimer')}
            headerText={t('Profile.DisclaimerCaption')}
          />
          <AppInfoRowComponent icon={other} text={t('Profile.Other')} headerText={t('Profile.OtherCaption')} />
        </Card>
      </View>

      <View style={localStyles.footer}>
        <LanguageSwitcher />
        <VersionComponent />
      </View>
    </ScrollView>
  );
};
