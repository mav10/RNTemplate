import Config from 'react-native-config';
import { RootState, useAppSelector } from '../../appInfrastructure/redux-store/store-types';

const versionSelector = (state: RootState) => state.app.codePushVersion;

export const useAppVersionText = () => {
  const appVersion = useAppSelector(versionSelector);

  const extraVersion = appVersion ? `(${appVersion.substr(1)})` : '';
  return `v.${Config.REACT_APP_VERSION_NAME}${extraVersion}`;
};
