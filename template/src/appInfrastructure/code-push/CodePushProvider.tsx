import React, { FC, useEffect } from 'react';
import CodePush, { LocalPackage } from 'react-native-code-push';
import { logger } from '../logging/logging';
import Config from 'react-native-config';
import { SetCodePushVersionIntoSentry } from '../analitics/sentry-helper';
import { useDispatch } from 'react-redux';
import { AppEvents } from '../../features/app/app-reducer';

export const CodePushProvider: FC = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then(
      (update: LocalPackage | null) => {
        const codePushVersion = update?.label || null;

        if (codePushVersion) {
          dispatch(AppEvents.setCodePushVersion(codePushVersion));
          logger().info(
            `Set up CodePush VERSION: ${codePushVersion}. Main BUILD VERSION: ${Config.REACT_APP_VERSION_NAME}`,
          );
          SetCodePushVersionIntoSentry(codePushVersion);
        } else {
          SetCodePushVersionIntoSentry(undefined);
        }
      },
    );
  }, [dispatch]);

  return <>{props.children}</>;
};
