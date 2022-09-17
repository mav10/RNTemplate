import CodePush, { CodePushOptions } from 'react-native-code-push';
import Config from 'react-native-config';

export const getCodePushConfiguration = (): CodePushOptions => ({
  deploymentKey: Config.REACT_APP_CODEPUSH_KEY || 'none',
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
});
