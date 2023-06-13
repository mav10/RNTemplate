import React, { Component } from 'react';
import { Alert } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import RNRestart from 'react-native-restart';
import i18n from 'i18next';
import { logger } from '../logging/logging';
import { ErrorBoundaryWidget } from './ErrorBoundary.widget';

/**
 * Example UI to show in the case of a JavaScript error.
 */
export class RootErrorBoundary extends Component<any, any> {
  private static NO_STACK = 'No stack trace.';

  state: { hasError: boolean; error: Error | null } = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    RNBootSplash.hide().finally(() => {});
    return { hasError: true, error };
  }

  componentDidCatch() {}

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
          text: i18n.t('ApplicationStateScreens.ErrorBoundary.SendReport'),
          onPress: () => {
            const stackTrace = this.state.error?.stack || RootErrorBoundary.NO_STACK;
            logger().error(stackTrace);
          },
        },
        {
          text: 'Restart',
          onPress: () => RNRestart.Restart(),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryWidget onClick={this.showError} />;
    }

    return this.props.children;
  }
}
