import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Linking,
  ListRenderItemInfo,
  ScrollView,
  View,
} from 'react-native';
import { Text } from 'react-native';
import { LanguageSwitcher } from '../../components/languageSwitcher/languageSwitcher.component';
import { VersionComponent } from '../../components/version/version.component';
import { localStyles } from './Dashboard.styles';
import { useTranslation } from 'react-i18next';
import { AppCommonStyles } from '../../commons/styles/styles';
import { Card } from '../../commons/card/card.component';
import { CommonColors } from '../../commons/styles/colors';

type TechItem = { title: string; img?: ImageSourcePropType; link: string };
const data: TechItem[] = [
  {
    title: 'React Native',
    link: 'https://reactnative.dev/',
    img: {
      uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    },
  },
  {
    title: 'Redux Toolkit 222223',
    link: 'https://redux-toolkit.js.org/',
    img: {
      uri: 'https://hsto.org/r/w1560/getpro/habr/post_images/aad/f48/d2f/aadf48d2f864cef234b3b73d600dc8d1.jpg',
    },
  },
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    img: { uri: 'https://cdn-icons-png.flaticon.com/512/919/919832.png' },
  },
  {
    title: 'i18Next',
    link: 'https://www.i18next.com/',
    img: { uri: 'https://avatars.githubusercontent.com/u/8546082?s=200&v=4' },
  },
  {
    title: 'React-Query',
    link: 'https://tanstack.com/query/latest',
    img: { uri: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png' },
  },
  {
    title: 'Date-fns',
    link: 'https://date-fns.org/',
    img: { uri: 'https://images.opencollective.com/date-fns/8933591/logo.png' },
  },
];
const cardSize = (Dimensions.get('screen').width - localStyles.content.paddingHorizontal * 2 - 4 * 2) / 4;
const imageSize = cardSize - 3 * 10;

export const DashboardController = () => {
  const { t } = useTranslation();

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
    <SafeAreaView style={localStyles.safeArea}>
      <ScrollView contentContainerStyle={localStyles.container}>
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
              data={data}
              renderItem={renderItem}
              horizontal={true}
              contentContainerStyle={{ gap: 10, paddingBottom: 10 }}
            />
          </View>
          <Card
            contentStyle={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 1,
            }}
            style={{ flex: 0 }}>
            <Button title={'Button 1'} />
            <Button title={'Button 2'} />
            <Button title={'Button 3'} />
          </Card>

          <Card
            contentStyle={{ flex: 0, gap: 5, flexWrap: 'nowrap' }}
            style={{ flex: 0 }}
            headerText={t('Home.Libs.Header')}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ gap: 5 }}>
                <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.ReactAndRedux_Header')}</Text>
                <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.ReactAndRedux_Text')}</Text>
              </View>

              <View style={{ gap: 5 }}>
                <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.Services_Header')}</Text>
                <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.Services_Text')}</Text>
              </View>

              <View style={{ gap: 5 }}>
                <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.UI_Header')}</Text>
                <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.UI_Text')}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ gap: 5, width: '49%' }}>
                <Text style={AppCommonStyles.captionBold}>{t('Home.Libs.Utils_Header')}</Text>
                <Text style={[AppCommonStyles.caption]}>{t('Home.Libs.Utils_Text')}</Text>
              </View>

              <View style={{ gap: 5, width: '46%' }}>
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
    </SafeAreaView>
  );
};
