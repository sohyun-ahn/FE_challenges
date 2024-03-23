import {NavigationProp, NavigationState} from '@react-navigation/native';
import {FriendsProfileDataType} from '../DB/friendsProfileData';
import {StoryType} from '../DB/storyData';
import {ImageRequireSource} from 'react-native';

export interface PropsType {
  route: {params: {}};
  navigation: Omit<
    NavigationProp<ReactNavigation.RootParamList>,
    'getState'
  > & {
    getState(): NavigationState | undefined;
  };
}

export type NavigationStackPropsType = {
  Bottom: undefined;
  FriendProfile: FriendsProfileDataType;
  Status: StoryType;
  EditProfile: {
    name: string;
    accountName: string;
    profileImage: ImageRequireSource | null;
  };
};
