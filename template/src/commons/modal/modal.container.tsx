import React, { PropsWithChildren, useCallback, useContext, useMemo, useRef } from 'react';
import Modal from 'react-native-modal';
import { Dimensions, Image, Text, View } from 'react-native';
import { localStyles } from './modal.styles';
import { AppModalProps } from './modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ModalPresenterContext } from '../../context/ModalPresenter.context';
import { generateUniqueId } from '../../helpers/app-helpers';

const maxDeviceHeight = Math.max(Dimensions.get('window').height, Dimensions.get('screen').height);

export const AppModal: React.FC<PropsWithChildren<AppModalProps>> = props => {
  const { onClose, children, headerText, icon, RightHeaderComponent, isVisible, ...rest } = props;
  const { onShowModal, onHideModal, queue } = useContext(ModalPresenterContext);
  const modalInstanceId = useRef<string>(generateUniqueId('modal')).current;

  const onShow = useCallback(() => {
    onShowModal(modalInstanceId);
  }, [onShowModal, modalInstanceId]);

  const onHide = useCallback(() => {
    onClose();
    onHideModal(modalInstanceId);
  }, [onHideModal, onClose, modalInstanceId]);

  const isCurrentModalVisible = useMemo(() => {
    if (queue.length > 0) {
      return queue[0] === modalInstanceId && isVisible;
    }

    return isVisible;
  }, [isVisible, queue, modalInstanceId]);

  return (
    <Modal
      {...rest}
      isVisible={isCurrentModalVisible}
      onModalWillShow={onShow}
      onModalHide={onHide}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      deviceHeight={maxDeviceHeight}
      style={localStyles.modalContainer}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      statusBarTranslucent={true}
      backdropOpacity={0.6}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      animationInTiming={500}
      animationOutTiming={700}>
      <View style={localStyles.container}>
        <View style={[localStyles.header]}>
          <View style={localStyles.headerLeftContainer}>
            {icon && <Image style={localStyles.icon} source={icon} />}
            {headerText && <Text style={localStyles.headerText}>{headerText}</Text>}
          </View>
          {RightHeaderComponent}
        </View>
        <View style={localStyles.content}>{children}</View>
      </View>
    </Modal>
  );
};

export const AppSwipeModal: React.FC<PropsWithChildren<AppModalProps>> = props => {
  const { bottom } = useSafeAreaInsets();
  const { children, headerText, styles, onClose, icon, RightHeaderComponent, isVisible, ...rest } = props;
  const { onShowModal, onHideModal, queue } = useContext(ModalPresenterContext);
  const modalInstanceId = useRef<string>(generateUniqueId('modal')).current;

  const onShow = useCallback(() => {
    onShowModal(modalInstanceId);
  }, [onShowModal, modalInstanceId]);

  const onHide = useCallback(() => {
    onClose();
    onHideModal(modalInstanceId);
  }, [onHideModal, onClose, modalInstanceId]);

  const isCurrentModalVisible = useMemo(() => {
    if (queue.length > 0) {
      return queue[0] === modalInstanceId && isVisible;
    }

    return isVisible;
  }, [isVisible, queue, modalInstanceId]);

  return (
    <Modal
      {...rest}
      isVisible={isCurrentModalVisible}
      onModalWillShow={onShow}
      onModalHide={onHide}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={'down'}
      hideModalContentWhileAnimating={true}
      style={localStyles.swipeModalContainer}
      statusBarTranslucent={true}
      useNativeDriverForBackdrop={false}
      useNativeDriver={false}
      animationInTiming={500}
      animationOutTiming={700}
      backdropOpacity={0.6}
      propagateSwipe={true}
      avoidKeyboard={true}
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}>
      <View style={[localStyles.container, localStyles.swipeContentContainer, { paddingBottom: bottom }, styles]}>
        <View style={localStyles.swipeModalButton} />
        <View style={[localStyles.header]}>
          <View style={localStyles.headerLeftContainer}>
            {icon && <Image style={localStyles.icon} source={icon} />}
            {headerText && <Text style={localStyles.swipeHeaderText}>{headerText}</Text>}
          </View>
          {RightHeaderComponent}
        </View>
        <View style={[localStyles.content, localStyles.swipeContent]}>{children}</View>
      </View>
    </Modal>
  );
};
