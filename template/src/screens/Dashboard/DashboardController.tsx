import React, { useCallback, useMemo } from 'react';
import { Button, Dimensions, FlatList, Image, Linking, ListRenderItemInfo, ScrollView, Text, View } from 'react-native';
import { LanguageSwitcher } from '../../components/languageSwitcher/languageSwitcher.component';
import { VersionComponent } from '../../components/version/version.component';
import { localStyles } from './Dashboard.styles';
import { useTranslation } from 'react-i18next';
import { AppCommonStyles } from '../../commons/styles/styles';
import { Card } from '../../commons/card/card.component';
import { CommonColors } from '../../commons/styles/colors';
import { TechItem } from './Dashboard';
import { librariesData } from './data';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useModal } from '../../appInfrastructure/hooks/useModal';
import { AppModal, AppSwipeModal } from '../../commons/modal/modal.container';
import { ButtonComponent } from '../../commons/buttons/button.component';
import { useRootNavigation, useTabNavigation } from '../../navigation/configuration/navigators';
import { AppRoutes } from '../../navigation/configuration/routes';

const cardSize = (Dimensions.get('screen').width - AppCommonStyles.container15.paddingHorizontal * 2 - 4 * 2) / 4;
const imageSize = cardSize - 3 * 10;

export const DashboardController = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const tabNavigation = useTabNavigation();
  const rootNavigation = useRootNavigation();

  const templateModal = useModal();
  const authModal = useModal();
  const demoModal = useModal();

  const modals = useMemo(() => {
    return (
      <>
        <AppModal
          isVisible={templateModal.visible}
          onClose={templateModal.closeModal}
          headerText={t('Home.Modals.Template.Header')}>
          <Text>{t('Home.Modals.Template.Text')}</Text>
          <View style={AppCommonStyles.modalButtons}>
            <ButtonComponent type={'secondary'} label={t('Common_cancel')} onPress={templateModal.closeModal} />
            <ButtonComponent
              type={'primary'}
              label={t('Home.Modals.Template.Ok_button')}
              onPress={templateModal.closeModal}
            />
          </View>
        </AppModal>
        <AppModal
          isVisible={authModal.visible}
          onClose={authModal.closeModal}
          headerText={t('Home.Modals.Auth.Header')}>
          <Text>{t('Home.Modals.Auth.Text')}</Text>
          <View style={AppCommonStyles.modalButtons}>
            <ButtonComponent type={'secondary'} label={t('Common_cancel')} onPress={authModal.closeModal} />
            <ButtonComponent
              type={'primary'}
              label={t('Home.Modals.Auth.Ok_button')}
              onPress={() => {
                tabNavigation.navigate(AppRoutes.Profile);
                authModal.closeModal();
              }}
            />
          </View>
        </AppModal>
        <AppSwipeModal
          isVisible={demoModal.visible}
          onClose={demoModal.closeModal}
          headerText={t('Home.Modals.Dev.Header')}>
          <View style={{ paddingHorizontal: 15 }}>
            <Text>{t('Home.Modals.Dev.Text')}</Text>
            <View style={AppCommonStyles.modalButtons}>
              <ButtonComponent
                type={'primary'}
                label={t('Home.Modals.Dev.Ok_button')}
                onPress={() => {
                  rootNavigation.navigate(AppRoutes.DevScreen);
                  demoModal.closeModal();
                }}
              />
            </View>
          </View>
        </AppSwipeModal>
      </>
    );
  }, [demoModal, templateModal, authModal]);

  const renderItem = useCallback((item: ListRenderItemInfo<TechItem>) => {
    const {
      item: { title, img, link },
      index,
    } = item;
    return (
      <View key={index} style={{ flex: 0, width: cardSize, flexWrap: 'wrap', alignItems: 'center', gap: 5 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: CommonColors.accent,
            borderRadius: 50,
            width: imageSize,
            height: imageSize,
          }}>
          {!!img && <Image source={img} style={{ width: imageSize - 2, height: imageSize - 2, borderRadius: 50 }} />}
        </View>
        <Text onPress={() => Linking.openURL(link)} style={[AppCommonStyles.caption, { textAlign: 'center' }]}>
          {title}
        </Text>
      </View>
    );
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[
        AppCommonStyles.container15,
        localStyles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}>
      <View style={localStyles.content}>
        <View style={localStyles.greeting}>
          <Text style={AppCommonStyles.heading2}>{t('Home.Greeting')}</Text>
          <Text style={AppCommonStyles.paragraphText}>{t('Home.Description')}</Text>
        </View>

        <View style={localStyles.appBlock}>
          <Image
            source={require('./../../../assets/images/bootsplash_logo.png')}
            style={[localStyles.icon, { width: imageSize - 2, height: imageSize - 2 }]}
          />
          <Text style={[AppCommonStyles.heading1, localStyles.textContainer]}>{t('Common_App')}</Text>
        </View>

        <View>
          <FlatList
            data={librariesData}
            renderItem={renderItem}
            horizontal={true}
            contentContainerStyle={localStyles.librariesCarousel}
          />
        </View>
        <Card contentStyle={localStyles.buttonsCard} style={localStyles.cardLayout}>
          <Button title={t('Home.Buttons.Template')} onPress={templateModal.openModal} />
          <Button title={t('Home.Buttons.Auth')} onPress={authModal.openModal} />
          <Button title={t('Home.Buttons.Dev')} onPress={demoModal.openModal} />
        </Card>

        <Card contentStyle={localStyles.libCard} style={localStyles.cardLayout} headerText={t('Home.Libs.Header')}>
          <View style={localStyles.libRow}>
            <View style={localStyles.libItem}>
              <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.ReactAndRedux_Header')}</Text>
              <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.ReactAndRedux_Text')}</Text>
            </View>

            <View style={localStyles.libItem}>
              <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.Services_Header')}</Text>
              <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.Services_Text')}</Text>
            </View>

            <View style={localStyles.libItem}>
              <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.UI_Header')}</Text>
              <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.UI_Text')}</Text>
            </View>
          </View>

          <View style={localStyles.libRow}>
            <View style={[localStyles.libItem, { width: '51%' }]}>
              <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.Utils_Header')}</Text>
              <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.Utils_Text')}</Text>
            </View>

            <View style={[localStyles.libItem, { width: '49%' }]}>
              <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.Network_Header')}</Text>
              <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.Network_Text')}</Text>
            </View>
          </View>
        </Card>
      </View>

      <View style={localStyles.footer}>
        <LanguageSwitcher />
        <VersionComponent />
      </View>

      {modals}
    </ScrollView>
  );
};
