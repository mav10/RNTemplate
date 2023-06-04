import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, View } from 'react-native';
import { CustomTextInput } from '../../commons/input/customTextInput.component';
import { useScopedTranslation } from '../../appInfrastructure/localisation/useScopedTranslation';
import { localStyles } from './Login.styles';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../features/auth/auth-slice';
import { ButtonComponent } from '../../commons/buttons/button.component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCommonStyles } from '../../commons/styles/styles';

const logo = require('./../../../assets/images/bootsplash_logo.png');

export const LoginController = () => {
  const { t } = useScopedTranslation('Login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username !== 'user' && password !== 'user123') {
      Alert.alert('Error', 'Please enter username and password');
      return;
    }

    // TODO: add login logic here
    // await authService().login(username, password);

    dispatch(AuthActions.login({ access_token: 'fake_access', refresh_token: 'fake_refresh' }));
  };

  return (
    <SafeAreaView style={AppCommonStyles.container}>
      <KeyboardAvoidingView style={localStyles.container} behavior="padding">
        <View style={localStyles.logoContainer}>
          <Image source={logo} style={localStyles.logo} />
        </View>
        <View style={localStyles.formContainer}>
          <View style={localStyles.inputs}>
            <CustomTextInput
              label={t('Username.Label')}
              placeholder={t('Username.Placeholder')}
              isInvalid={false}
              onChangeText={setUsername}
              value={username}
            />
            <CustomTextInput
              label={t('Password.Label')}
              placeholder={t('Password.Placeholder')}
              isInvalid={false}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={localStyles.footer}>
            <ButtonComponent type={'primary'} label={t('Button')} onPress={handleLogin} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
