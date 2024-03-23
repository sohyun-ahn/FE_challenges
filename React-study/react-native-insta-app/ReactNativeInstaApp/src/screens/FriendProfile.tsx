import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {PropsType} from './propsType';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  FriendsProfileData,
  FriendsProfileDataType,
} from '../DB/friendsProfileData';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import FriendItem from '../components/FriendItem';

interface FriendProfilePropsType extends PropsType {
  route: {params: FriendsProfileDataType};
}

const FriendProfile = ({
  route,
  navigation,
}: FriendProfilePropsType): React.JSX.Element => {
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

        {/* id==0이면 내프로필 => 프로필 수정 버튼, id==1이면 다른사람프로필 => 팔로우, 메시지 버튼*/}
        <ProfileButton id={1} data={route.params} />

        {/* 회원님을 위한 추천 UI */}
        <Text className="py-[10] text-[15px] font-bold">
          회원님을 위한 추천
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="pt-[10]">
          {FriendsProfileData.map((data, index) =>
            data.name === name ? null : (
              <>
                <FriendItem key={index} data={data} name={name} />
              </>
            ),
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FriendProfile;
