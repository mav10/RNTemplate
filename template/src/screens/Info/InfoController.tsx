import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { AppInfoRowComponent } from '../../components/appInfoRow/AppInfoRow.component';
import { useScopedTranslation } from '../../appInfrastructure/localisation/useScopedTranslation';
import Config from 'react-native-config';
import { AppCommonStyles } from '../../commons/styles/styles';
import { localStyles } from './infoController.styles';
import { LanguageSwitcher } from '../../components/languageSwitcher/languageSwitcher.component';
import { DevModeButton } from '../../components/devModeButton/devModeButton.component';
import { useAppVersionText } from '../../features/app/app-selectors';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { format, parseISO } from 'date-fns';
import { getCurrentDateLocale } from '../../appInfrastructure/localisation/localization';

const Logo = require('../../../assets/images/bootsplash_logo.png');

export const InfoController = () => {
  const { t } = useScopedTranslation('AppInfo');
  const appVersion = useAppVersionText();

  const { bottom: bottomInset } = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[AppCommonStyles.container, localStyles.safeAreaLayout, { paddingBottom: -bottomInset }]}
      edges={['bottom']}>
      <ScrollView
        contentContainerStyle={[localStyles.layout, { paddingBottom: bottomInset + localStyles.layout.paddingBottom }]}
        testID={'Information_screen'}>
        <View style={localStyles.contentContainer}>
          <DevModeButton style={localStyles.section}>
            <Image source={Logo} resizeMode={'contain'} testID={'Information_Logo'} />
          </DevModeButton>

          <View style={localStyles.section}>
            <AppInfoRowComponent
              testIdPrefix={'Information_Name'}
              headerText={t('Name_Header')}
              text={t('Name_Value')}
            />
            <AppInfoRowComponent
              testIdPrefix={'Information_Version'}
              headerText={t('Version_Header')}
              text={appVersion}
            />
          </View>

          <View style={localStyles.divider} />

          <View style={localStyles.section}>
            <AppInfoRowComponent
              testIdPrefix={'Information_ReleaseDate'}
              headerText={t('ReleaseDate_Header')}
              text={format(parseISO(Config.REACT_APP_BUILD_DATE), 'P', getCurrentDateLocale())}
            />
            <AppInfoRowComponent testIdPrefix={'Information_Vendor'} text={t('Vendor_Value')} />
          </View>
        </View>

        <LanguageSwitcher testIdPrefix={'Information'} />
      </ScrollView>
    </SafeAreaView>
  );
};
