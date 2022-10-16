import React, { FC, PropsWithChildren, useEffect } from 'react';
import CodePush, { LocalPackage } from 'react-native-code-push';
import { logger } from '../logging/logging';
import Config from 'react-native-config';
import { useAppDispatch } from '../redux-store/store-types';
import { AppActions } from '../../features/app/app-slice';

export const CodePushProvider: FC<PropsWithChildren> = props => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then(
      (update: LocalPackage | null) => {
        const codePushVersion = update?.label || null;

        if (codePushVersion) {
          dispatch(AppActions.setCodePushVersion(codePushVersion));
          logger().info(
            `Set up CodePush VERSION: ${codePushVersion}. Main BUILD VERSION: ${Config.REACT_APP_VERSION_NAME}`,
          );
        }
      },
    );
  }, [dispatch]);

  return <>{props.children}</>;
};
