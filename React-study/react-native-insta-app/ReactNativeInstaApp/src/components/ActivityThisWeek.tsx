import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FriendsProfileData} from '../DB/friendsProfileData';
import {useNavigation} from '@react-navigation/native';

const ActivityThisWeek = () => {
  const navigation = useNavigation<[{}]>();
  return (
    <>
      <Text className="font-bold">이번 주</Text>
      <View className="flex-row py-[10]">
        {FriendsProfileData.slice(0, 3).map((data, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push('FriendProfile', {
                name: data.name,
                profileImage: data.profileImage,
                follow: data.follow,
                posts: data.posts,
                followers: data.followers,
                following: data.following,
              })
            }
            key={index}>
            <Text>{data.name} </Text>
          </TouchableOpacity>
        ))}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;
