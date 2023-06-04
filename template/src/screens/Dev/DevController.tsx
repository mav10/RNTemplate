import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AppCommonStyles } from '../../commons/styles/styles';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { localStyles } from './dev.styles';
import { LanguageSwitcher } from '../../components/languageSwitcher/languageSwitcher.component';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../appInfrastructure/redux-store/store-types';
import { useDevModeEnabled } from '../../features/app/app-selectors';
import { BlockComponent } from '../../commons/blockContainer/block.component';
import { Trans, useTranslation } from 'react-i18next';
import { Card } from '../../commons/card/card.component';
import Config from 'react-native-config';
import { ButtonComponent } from '../../commons/buttons/button.component';
import { sendJsCrash, sendNativeCrash } from '../../appInfrastructure/analitics/sentry-helper';
import { CustomTextInput } from '../../commons/input/customTextInput.component';
import { notificationService } from '../../services';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import { useModal } from '../../appInfrastructure/hooks/useModal';
import { AppModal, AppSwipeModal } from '../../commons/modal/modal.container';
import { onlineManager, useIsFetching } from '@tanstack/react-query';
import { useNetInfo } from '@react-native-community/netinfo';
import { AppRoutes } from '../../navigation/configuration/routes';
import { LocalizedResourceDictionaryKeys } from '../../appInfrastructure/localisation/i18next';
import { AppActions } from '../../features/app/app-slice';

const PWD = Config.REACT_APP_DEVMODE_PASS || 'pwd123';
const modalIcon = require('../../../assets/images/update/star_20.png');

const ParamItem = (props: { localisationKey: string; value?: string }) => {
  return (
    <Text style={localStyles.textItem} onLongPress={() => Clipboard.setString(props.value || '')}>
      <Trans
        ns={'dev'}
        i18nKey={props.localisationKey as LocalizedResourceDictionaryKeys}
        values={{ value: props.value }}>
        <Text style={AppCommonStyles.captionBold}>header</Text>
      </Trans>
    </Text>
  );
};

export const DevController = () => {
  const isDevAuth = useDevModeEnabled();
  const isAuth = false;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(['dev']);
  const remoteAppVersions = 'none'; // QueryFactory.VersionQuery.useAppVersionQuery();
  const serverVersions = 'none'; // QueryFactory.VersionQuery.useVersionQuery();
  const maintenanceInfo = 'none'; // QueryFactory.VersionQuery.useMaintenanceQuery();
  const { codePushVersion } = useAppSelector(store => store.app);
  const [password, setPassword] = useState<string>('');
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const navigation = useNavigation();
  const { isInternetReachable, isConnected } = useNetInfo();

  const requestFetchCount = useIsFetching();

  const [localPushToken, setLocalPushToken] = useState<string | undefined>('');

  const internalModalManager = useModal();
  const classicModalManager = useModal();
  const swipeModalManager = useModal();

  const prevDevAuth = useRef<boolean>(isDevAuth);

  useLayoutEffect(() => {
    if (prevDevAuth?.current !== isDevAuth) {
      prevDevAuth.current = isDevAuth;
      if (!isDevAuth && isAuth) {
        navigation.dispatch(state => {
          const routes = state.routes.filter(r => r.name !== AppRoutes.DevScreen);
          return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
          });
        });
      }
    }
  }, [isDevAuth, navigation, isAuth]);

  useEffect(() => {
    const botstrap = async () => {
      const token = await notificationService().getToken();
      setLocalPushToken(token);
    };

    botstrap();
  }, []);

  const onUserLogout = useCallback(async () => {
    // await authService().logout();
  }, []);

  const sendInvalidRequestWithToast = async () => {
    // await QueryFactory.NotificationQuery.Client.testError();
  };

  const sendInvalidRequest = async () => {
    // await QueryFactory.VersionQuery.Client.throwError();
  };

  const handlePassword = useCallback(async () => {
    setSubmitted(true);
    if (password === PWD) {
      dispatch(AppActions.enableDevMode());
    }
  }, [dispatch, password]);

  const onChangeText = useCallback((value: string) => {
    setSubmitted(false);
    setPassword(value);
  }, []);

  const devLoginForm = () => {
    return (
      <KeyboardAvoidingView
        behavior={'position'}
        contentContainerStyle={localStyles.loginSceneContainer}
        style={localStyles.scrollView}>
        <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={[AppCommonStyles.heading1, localStyles.header]}>{t('DevMode.Header')}</Text>
        <Text style={[AppCommonStyles.caption]}>{t('DevMode.Description')}</Text>

        <CustomTextInput
          label={t('DevMode.PasswordInput')}
          placeholder={t('DevMode.PasswordPlaceholder')}
          containerStyles={localStyles.inputContainerStyles}
          isInvalid={isSubmitted && password !== PWD}
          textStyles={localStyles.inputTextStyles}
          onChangeText={onChangeText}
          value={password}
          secureTextEntry={true}
        />
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1}}>
          <ButtonComponent type={'primary'} label={t('DevMode.Login')} onPress={handlePassword} />
        </View>
      </KeyboardAvoidingView>
    );
  };
  const modals = () => {
    return (
      <>
        <AppModal
          isVisible={internalModalManager.visible}
          onClose={internalModalManager.closeModal}
          headerText={'Internal application modal'}
          icon={modalIcon}
          RightHeaderComponent={
            <Text style={AppCommonStyles.caption}>{`Request: ${JSON.stringify(requestFetchCount > 0)}`}</Text>
          }>
          <Text style={AppCommonStyles.paragraphText}>
            This is a our styled modal. We use it everywhere in the app. Also these modals have modal manager that helps
            us to control their appearance. It is very useful when we want (or even don't expect) to display two modals
            simultaneously. On iOS it is impossible so we have kinda stack (or if to be clear - queue) of modals. Modals
            will appear obe-by-one in order of displaying (triggering).
          </Text>

          <View style={AppCommonStyles.modalButtons}>
            <ButtonComponent type={'primary'} label={'Hide'} onPress={internalModalManager.closeModal} />
          </View>
        </AppModal>

        <AppSwipeModal
          isVisible={swipeModalManager.visible}
          onClose={swipeModalManager.closeModal}
          headerText={'Internal swipe modal'}
          icon={modalIcon}>
          <View style={localStyles.swipeModalContent}>
            <Text style={AppCommonStyles.paragraphText}>
              This is a our another styled modal - "Swipable" one. We also use it everywhere in the app.And i also has
              interaction with our modal manager.
            </Text>
          </View>
        </AppSwipeModal>

        <AppModal isVisible={classicModalManager.visible} onClose={classicModalManager.closeModal}>
          <View style={localStyles.swipeModalContent}>
            <Text style={AppCommonStyles.paragraphText}>
              This is bare modal implementation from `react-native-modal` package. We don't add manager here and don't
              add extra settings
            </Text>
          </View>
        </AppModal>
      </>
    );
  };

  const content = () => {
    return (
      <ScrollView
        contentContainerStyle={localStyles.scrollView}
        overScrollMode={'never'}
        showsVerticalScrollIndicator={false}
        indicatorStyle={'black'}>
        <BlockComponent headerText={t('DevMode.App.Header')}>
          <Card>
            <ParamItem localisationKey={'DevMode.App.Env'} value={Config.REACT_APP_APP_ENV} />
            <ParamItem localisationKey={'DevMode.App.AppVersion'} value={Config.REACT_APP_VERSION_NAME} />
            <ParamItem localisationKey={'DevMode.App.CodePush'} value={codePushVersion || 'none'} />
            <ParamItem localisationKey={'DevMode.App.DevMode'} value={JSON.stringify(isDevAuth)} />
            {
              <ParamItem
                localisationKey={'DevMode.App.Hermes'}
                // @ts-ignore
                value={JSON.stringify(!!global.HermesInternal)}
              />
            }
            {
              <ParamItem
                localisationKey={'DevMode.App.HermesVersion'}
                value={
                  // @ts-ignore
                  global.HermesInternal?.getRuntimeProperties?.()['OSS Release Version'] || 'unknown'
                }
              />
            }
            <ParamItem localisationKey={'DevMode.App.Language'} />
          </Card>
        </BlockComponent>

        <BlockComponent headerText={t('DevMode.Server.Header')}>
          <Card>
            <ParamItem localisationKey={'DevMode.Server.Url'} value={Config.REACT_APP_API_URL} />
            <ParamItem localisationKey={'DevMode.Server.ApiVersion'} value={serverVersions} />
            <ParamItem localisationKey={'DevMode.Server.CurrentAppVersion'} value={remoteAppVersions} />
            <ParamItem localisationKey={'DevMode.Server.MinAppVersion'} value={remoteAppVersions || 'unknown'} />
            <ParamItem
              localisationKey={'DevMode.Server.MaintenanceState'}
              value={JSON.stringify(maintenanceInfo || false)}
            />
            <ParamItem
              localisationKey={'DevMode.Server.MaintenanceFinishDate'}
              value={maintenanceInfo?.toLocaleString() || '-'}
            />
          </Card>
        </BlockComponent>

        {isAuth && (
          <BlockComponent
            headerText={t('DevMode.User.Header')}
            actionText={t('DevMode.User.Logout')}
            action={onUserLogout}>
            <Card>
              <ParamItem localisationKey={'DevMode.User.Id'} value={'query.userId'} />
              <ParamItem localisationKey={'DevMode.User.Tenant'} value={'query.tenantId'} />
              <ParamItem localisationKey={'DevMode.User.StudyStartAt'} value={'date'} />
              <ParamItem localisationKey={'DevMode.User.PushTokenLocal'} value={localPushToken} />
            </Card>
          </BlockComponent>
        )}

        <BlockComponent headerText={t('DevMode.Network.Header')}>
          <Card>
            <ParamItem localisationKey={'DevMode.Network.Connected'} value={JSON.stringify(isConnected)} />
            <ParamItem localisationKey={'DevMode.Network.Reachable'} value={JSON.stringify(isInternetReachable)} />
            <ParamItem localisationKey={'DevMode.Network.Online'} value={JSON.stringify(onlineManager.isOnline())} />
            <ParamItem localisationKey={'DevMode.Network.Fetching'} value={JSON.stringify(requestFetchCount > 0)} />
          </Card>
        </BlockComponent>

        <BlockComponent headerText={t('DevMode.Errors.Header')}>
          <Card>
            {isAuth && (
              <View style={AppCommonStyles.row}>
                <ButtonComponent
                  type={'primary'}
                  label={t('DevMode.Errors.RequestWithToast')}
                  onPress={sendInvalidRequestWithToast}
                  buttonStyles={localStyles.button}
                />
                <ButtonComponent
                  type={'secondary'}
                  label={t('DevMode.Errors.Request')}
                  onPress={sendInvalidRequest}
                  buttonStyles={localStyles.button}
                />
              </View>
            )}
            <View style={AppCommonStyles.row}>
              <ButtonComponent
                type={'primary'}
                label={t('DevMode.Errors.JsCrash')}
                onPress={sendJsCrash}
                buttonStyles={localStyles.button}
              />
              <ButtonComponent
                type={'secondary'}
                label={t('DevMode.Errors.NativeCrash')}
                onPress={sendNativeCrash}
                buttonStyles={localStyles.button}
              />
            </View>
          </Card>
        </BlockComponent>

        <BlockComponent headerText={t('DevMode.Modals.Header')}>
          <Card>
            <View style={localStyles.modalsButtons}>
              <ButtonComponent
                type={'link'}
                label={t('DevMode.Modals.OpenInternal')}
                onPress={internalModalManager.openModal}
                buttonStyles={localStyles.button}
              />
              <ButtonComponent
                type={'link'}
                label={t('DevMode.Modals.OpenBase')}
                onPress={classicModalManager.openModal}
                buttonStyles={localStyles.button}
              />
              <ButtonComponent
                type={'link'}
                label={t('DevMode.Modals.OneByOne')}
                onPress={async () => {
                  internalModalManager.openModal();
                  await new Promise((resolve: any) => setTimeout(resolve, 100));
                  swipeModalManager.openModal();
                }}
                buttonStyles={localStyles.button}
              />
              <ButtonComponent
                type={'link'}
                label={t('DevMode.Modals.OpenSwipe')}
                onPress={swipeModalManager.openModal}
                buttonStyles={localStyles.button}
              />
            </View>
          </Card>
        </BlockComponent>

        <View style={localStyles.footer}>
          <LanguageSwitcher />
        </View>

        {modals()}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={[AppCommonStyles.container15, isDevAuth ? { paddingHorizontal: 0 } : {}]} edges={['bottom']}>
      {isDevAuth ? content() : devLoginForm()}
    </SafeAreaView>
  );
};
