import React, { useCallback } from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Linking,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
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

const cardSize = (Dimensions.get('screen').width - AppCommonStyles.container15.paddingHorizontal * 2 - 4 * 2) / 4;
const imageSize = cardSize - 3 * 10;

export const DashboardController = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

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
          <Button title={'Button 1'} />
          <Button title={'Button 2'} />
          <Button title={'Button 3'} />
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
    </ScrollView>
  );
};
