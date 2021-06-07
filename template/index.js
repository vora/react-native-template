import { AppRegistry } from 'react-native';
import { Navigator } from './src/Navigation';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

AppRegistry.registerComponent(appName, () => Navigator);
