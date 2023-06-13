import React, { useCallback } from 'react';
import { useScopedTranslation } from '../localisation/useScopedTranslation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCommonStyles } from '../../commons/styles/styles';
import { InformationScreenContainer } from '../../commons/informationScreenContainer/informationScreenContainer.component';
import RNRestart from 'react-native-restart';
import { localStyles } from './ErrorBoundary.styles';

const serverError = require('../../../assets/animations/server_error.json');

export const ErrorBoundaryWidget = (props: { onClick?: () => void }) => {
  const { onClick } = props;
  const { t } = useScopedTranslation('ApplicationStateScreens.ErrorBoundary');

  const restart = useCallback(() => {
    if (onClick) {
      onClick();
      return;
    }

    RNRestart.Restart();
  }, [onClick]);

  return (
    <SafeAreaView style={[AppCommonStyles.container15, localStyles.layout]} testID={'ErrorBoundary_safeAreaView'}>
      <InformationScreenContainer
        headerText={t('Header')}
        text={t('Text')}
        lottieSource={serverError}
        buttonLabel={t('Button')}
        onPress={restart}
      />
    </SafeAreaView>
  );
};
