import * as React from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from 'react-native';
import { changeLanguage } from '../../appInfrastructure/localisation/localization';
import { SwipeModal } from '../../commons/modal/modal.container';
import { localStyles } from './languageSwitcher.styles';
import { useModal } from '../../appInfrastructure/hooks/useModal';
import { LanguageItem } from './languageItem.component';
import { Locale, locales } from '../../appInfrastructure/localisation/locales';

const imgLanguageSwitcherIcon = require('../../../assets/images/arrow-up.png');
const worldIcon = require('./../../../assets/images/language.png');

const UX_TapZone = { top: 10, left: 10, bottom: 10, right: 10 };

export const LanguageSwitcher: React.FC = () => {
  const { visible, closeModal, openModal } = useModal('CLOSED');
  const i18n = useTranslation();

  const onToggle = useCallback(() => {
    if (visible) {
      closeModal();
    } else {
      openModal();
    }
  }, [closeModal, openModal, visible]);

  const onChangeLanguage = useCallback(
    async (languageKey: string) => {
      await changeLanguage(languageKey);
      closeModal();
    },
    [closeModal],
  );

  const renderItem = useCallback((info: ListRenderItemInfo<Locale>) => {
    // Selected item.
    const isSelected = info.item.language === i18n.i18n.language;
    const action = () => onChangeLanguage(info.item.language);

    return (
      <LanguageItem
        key={info.index}
        selected={isSelected}
        text={i18n.t(`Language_${info.item.language}`)}
        onPress={action}
      />
    );
  }, []);

  const keyExtractor = useCallback((item: Locale) => {
    return item.language;
  }, []);

  return (
    <>
      <TouchableOpacity
        delayPressIn={0}
        style={localStyles.languageButton}
        onPress={onToggle}
        hitSlop={UX_TapZone}
      >
        <Image
          source={worldIcon}
          style={localStyles.internationalizationIcon}
        />
        <Text style={localStyles.text}>
          {i18n.t(`Language_${i18n.i18n.language}` as any).toUpperCase()}
        </Text>
        <Image
          source={imgLanguageSwitcherIcon}
          style={localStyles.languageButtonImage}
        />
      </TouchableOpacity>

      <SwipeModal
        isVisible={visible}
        onClose={closeModal}
        headerText={i18n.t('Header_Language')}
      >
        <FlatList
          data={locales}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={locales.length}
        />
      </SwipeModal>
    </>
  );
};
