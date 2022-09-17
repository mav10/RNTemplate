import React from 'react';
import { Text } from 'react-native';
import { useAppVersionText } from '../../features/app/app-selectors';
import { localStyles } from './version.styles';
import { VersionComponentProps } from './version';
import { useTranslation } from 'react-i18next';

export const VersionComponent = (props: VersionComponentProps) => {
  const { t } = useTranslation();
  const versionText = useAppVersionText();

  return (
    <Text
      testID={`${props.testIdPrefix}versionText`}
      style={[localStyles.container, localStyles.text, props.styles]}
    >
      {t('App_Version', { version: versionText })}
    </Text>
  );
};
