import {NavigationProp, NavigationState} from '@react-navigation/native';

export interface PropsType {
  route: {params: {}};
  navigation: Omit<
    NavigationProp<ReactNavigation.RootParamList>,
    'getState'
  > & {
    getState(): NavigationState | undefined;
  };
}
