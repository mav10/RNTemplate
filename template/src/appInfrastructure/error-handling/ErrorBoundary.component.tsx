import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import SplashScreen from 'react-native-bootsplash';
import RNRestart from 'react-native-restart';
import { localStyles } from './ErrorBoundary.styles';
import i18n from 'i18next';
import { captureMessage } from '@sentry/react-native';
import { AppCommonStyles } from '../../commons/styles/styles';

/**
 * Example UI to show in the case of a JavaScript error.
 */
export class RootErrorBoundary extends Component {
  private static NO_STACK = 'No stack trace.';

  state: { hasError: boolean; error: Error | null } = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch() {
    SplashScreen.hide();
  }

  showError = () => {
    Alert.alert(
      this.state.error?.name || 'Error',
      this.state.error?.stack || RootErrorBoundary.NO_STACK,
      [
        {
          text: i18n.t('Common_cancel'),
          onPress: () => {
            return;
          },
        },
        {
          text: i18n.t('ErrorBoundary_SendReport'),
          onPress: () => {
            const stackTrace =
              this.state.error?.stack || RootErrorBoundary.NO_STACK;
            captureMessage(stackTrace);
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  reloadApp = () => {
    RNRestart.Restart();
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={localStyles.container}>
          <View style={localStyles.subContainer}>
            <Text style={localStyles.bigBoldText}>
              {i18n.t('ErrorBoundary_Header')}
            </Text>
            <Text style={AppCommonStyles.text}>
              {i18n.t('ErrorBoundary_Text')}
            </Text>

            <Text
              style={[localStyles.text, localStyles.bold]}
              onPress={this.showError}
            >
              SHOW DETAILS
            </Text>

            <Text
              style={[localStyles.text, localStyles.bold, { marginTop: 50 }]}
              onPress={this.reloadApp}
            >
              {i18n.t('ErrorBoundary_Button')}
            </Text>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}
