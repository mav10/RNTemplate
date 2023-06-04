/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { setupDefaultLogger } from './src/appInfrastructure/logging/logging';

setupDefaultLogger();

AppRegistry.registerComponent(appName, () => App);
