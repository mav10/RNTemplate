import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { EmitterSubscription, StyleSheet, Text, View } from 'react-native';
import RNShake from 'react-native-shake';
import { useModal } from './useModal';
import { AppSwipeModal } from '../../commons/modal/modal.container';
import { logger } from '../logging/logging';
import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../../commons/buttons/button.component';
import { AppCommonStyles } from '../../commons/styles/styles';
import { CommonColors } from '../../commons/styles/colors';

export function useShakeEventHandler() {
  const { t } = useTranslation();
  const debugMessageAlertIsPresent = useRef(false);
  const { visible, openModal, closeModal } = useModal('CLOSED');

  useEffect(function shakeEventHandler() {
    const shakeHandler = () => {
      logger().info('[Shake event] handled');
      // Guard to avoid system messages duplicate.
      if (debugMessageAlertIsPresent.current) {
        return;
      }

      openModal();
    };

    let subscription: EmitterSubscription | null = RNShake.addListener(shakeHandler);

    return () => {
      subscription?.remove();
    };
  }, []);

  const onCloseModal = useCallback(() => {
    closeModal();
    debugMessageAlertIsPresent.current = false;
  }, [closeModal]);

  const onSend = useCallback(() => {
    logger().info('Shake event trigger');
    // TODO: send event to bug-tracker like a Sentry, Google-analytics etc.
  }, []);

  const shakeEventModal = useMemo(() => {
    return (
      <AppSwipeModal isVisible={visible} onClose={onCloseModal} headerText={t('Shake.Header')}>
        <View style={localStyles.container}>
          <Text style={localStyles.text}>{t('Shake.Text')}</Text>
          <ButtonComponent label={'Shake.Button'} onPress={onSend} type={'primary'} />
        </View>
      </AppSwipeModal>
    );
  }, [visible, onCloseModal, onSend]);

  return shakeEventModal;
}

const localStyles = StyleSheet.create({
  container: {
    ...AppCommonStyles.container15,
    gap: 20,
  },
  text: {
    ...AppCommonStyles.paragraphText,
    ...AppCommonStyles.centerText,
    color: CommonColors.darkGray,
  },
});
