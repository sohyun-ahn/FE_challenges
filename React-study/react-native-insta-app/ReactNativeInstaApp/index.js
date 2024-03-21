/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// AppRegistry는 모든 React Native App을 실행하기 위한 JS진입점
// App 루트 컴포넌트는 자신을 등록해야함.
AppRegistry.registerComponent(appName, () => App);
