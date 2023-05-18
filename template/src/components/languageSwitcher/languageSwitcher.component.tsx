import * as React from 'react';
import { useCallback } from 'react';
import { FlatList, Image, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { SwipeModal } from '../../commons/modal/modal.container';
import { localStyles } from './languageSwitcher.styles';
import { LanguageItem } from './languageItem.component';
import { useModal } from '../../appInfrastructure/hooks/useModal';
import { Language, Languages } from '../../appInfrastructure/localisation/locales';
import { changeLanguage } from '../../appInfrastructure/localisation/localization';
import { useScopedTranslation } from '../../appInfrastructure/localisation/useScopedTranslation';
import { LanguageSWitcherProps } from './languageSwitcher';
import { LanguageSwitcherSeparator } from './languageSwitcherSeparator';

const imgLanguageSwitcherIcon = require('assets/images/small_arrow_20.png');

const UX_TapZone = { top: 10, left: 10, bottom: 10, right: 10 };

export const LanguageSwitcher: React.FC<LanguageSWitcherProps> = (props: LanguageSWitcherProps) => {
  const { visible, closeModal, openModal } = useModal('CLOSED');
  const i18n = useScopedTranslation('Languages');

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
    [closeModal]
  );

  const renderItem = useCallback(
    (info: ListRenderItemInfo<Language>) => {
      // Selected item.
      const isSelected = info.item === i18n.i18n.language;
      const action = () => onChangeLanguage(info.item);

      return (
        <LanguageItem key={info.index} selected={isSelected} text={i18n.t(`Items.${info.item}`)} onPress={action} />
      );
    },
    [i18n, onChangeLanguage]
  );

  const keyExtractor = useCallback((item: Language) => {
    return item;
  }, []);

  return (
    <View style={props.styles}>
      <TouchableOpacity
        testID={`${props.testIdPrefix}_languageSwitcher`}
        activeOpacity={0.7}
        delayPressIn={0}
        style={localStyles.languageButton}
        onPress={onToggle}
        hitSlop={UX_TapZone}>
        <Text style={localStyles.text}>{i18n.t(`Items.${i18n.i18n.language as Language}`)}</Text>
        <Image source={imgLanguageSwitcherIcon} style={localStyles.languageButtonImage} />
      </TouchableOpacity>

      <SwipeModal isVisible={visible} onClose={closeModal} headerText={i18n.t('Header')}>
        <FlatList
          data={Languages}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={Languages.length}
          testID={`${props.testIdPrefix}_languageSwitcher_items`}
          ItemSeparatorComponent={LanguageSwitcherSeparator}
        />
      </SwipeModal>
    </View>
  );
};
