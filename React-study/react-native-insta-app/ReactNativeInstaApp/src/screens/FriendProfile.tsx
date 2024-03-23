import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PropsType} from './propsType';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {FriendsProfileDataType} from '../DB/friendsProfileData';
import ProfileBody from '../components/ProfileBody';

interface FriendProfilePropsType extends PropsType {
  route: {params: FriendsProfileDataType};
}

const FriendProfile = ({route, navigation}: FriendProfilePropsType) => {
  const name = route.params.name;

  return (
    <SafeAreaView className="w-full bg-white">
      <View className="p-[10]">
        {/* Profile Header */}
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={{fontSize: 20, color: 'black'}} />
          </TouchableOpacity>

          <View className="flex-row justify-between items-center w-[92%]">
            <Text className="text-[15px] ml-[10] font-bold">{name}</Text>
            <Feather
              name="more-vertical"
              style={{fontSize: 20, color: 'black'}}
            />
          </View>
        </View>

        {/* Profile Body */}
        <ProfileBody data={route.params} />
      </View>
    </SafeAreaView>
  );
};

export default FriendProfile;
