import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useDevModeEnabled } from '../../features/app/app-selectors';
import { ButtonComponent } from '../../commons/buttons/button.component';
import { AppActions } from '../../features/app/app-slice';

export const DevModeLogoutButton = () => {
  const { t } = useTranslation('dev');
  const dispatch = useDispatch();
  const isDevAuth = useDevModeEnabled();

  const onDeveloperLogout = useCallback(() => {
    dispatch(AppActions.disableDevMode());
  }, [dispatch]);

  if (isDevAuth) {
    return <ButtonComponent type={'link'} label={t('DevMode.Logout')} onPress={onDeveloperLogout} />;
  }

  return <></>;
};
