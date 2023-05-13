import { useSafeAreContainerStyles } from '../../commons/styles/styles';
import React, { useCallback } from 'react';
import useCustomBackBehaviour from '../../appInfrastructure/hooks/useCustomBackBehaviour';
import RNRestart from 'react-native-restart';
import { InformationScreenContainer } from '../../commons/informationScreenContainer/informationScreenContainer.component';
import { useScopedTranslation } from '../../appInfrastructure/localisation/useScopedTranslation';
import { View } from 'react-native';

const noConnection = require('../../../assets/animations/no_connection.json');

export const NoConnectionController = () => {
  const { t } = useScopedTranslation('ApplicationStateScreens.NoConnection');
  const containerStyles = useSafeAreContainerStyles();

  useCustomBackBehaviour(() => {
    return true;
  });

  const restart = useCallback(() => {
    RNRestart.Restart();
  }, []);

  return (
    <View style={containerStyles} testID={'NoConnection_safeAreaView'}>
      <InformationScreenContainer
        buttonLabel={t('Button')}
        headerText={t('Header')}
        text={t('Text')}
        onPress={restart}
        lottieSource={noConnection}
      />
    </View>
  );
};
