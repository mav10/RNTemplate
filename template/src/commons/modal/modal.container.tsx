import React, { PropsWithChildren } from 'react';
import Modal from 'react-native-modal';
import { Text, View } from 'react-native';
import { localStyles } from './modal.styles';
import { AppModalProps } from './modal';
import { CommonColors } from '../styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AppModal: React.FC<PropsWithChildren<AppModalProps>> = (
  props: PropsWithChildren<AppModalProps>,
) => {
  const color = props.tintColor || CommonColors.primaryButton;

  return (
    <Modal
      {...props}
      onModalHide={props.onClose}
      onBackdropPress={props.onClose}
      onBackButtonPress={props.onClose}
      style={localStyles.modalContainer}
      useNativeDriver={true}
      backdropTransitionOutTiming={0}
      animationInTiming={400}
      animationOutTiming={650}
    >
      <View style={localStyles.container}>
        <View style={localStyles.header}>
          <View style={[localStyles.headerContent, { backgroundColor: color }]}>
            <Text style={localStyles.headerText}>{props.headerText}</Text>
          </View>
        </View>
        <View style={localStyles.content}>{props.children}</View>
      </View>
    </Modal>
  );
};

export const SwipeModal: React.FC<PropsWithChildren<AppModalProps>> = (
  props,
) => {
  const { bottom } = useSafeAreaInsets();
  const color = props.tintColor || CommonColors.primaryButton;

  return (
    <Modal
      {...props}
      onModalHide={props.onClose}
      onSwipeComplete={props.onClose}
      onBackdropPress={props.onClose}
      onBackButtonPress={props.onClose}
      swipeDirection={'down'}
      style={localStyles.swipeModalContainer}
      backdropTransitionOutTiming={10}
      animationInTiming={200}
      animationOutTiming={300}
    >
      <View
        style={[
          localStyles.container,
          localStyles.swipeContentContainer,
          { alignSelf: 'stretch', marginHorizontal: 0, paddingBottom: bottom },
        ]}
      >
        <View style={localStyles.header}>
          <View style={[localStyles.headerContent, { backgroundColor: color }]}>
            <Text style={localStyles.headerText}>{props.headerText}</Text>
          </View>
        </View>
        <View style={[localStyles.content, { paddingHorizontal: 0 }]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};
