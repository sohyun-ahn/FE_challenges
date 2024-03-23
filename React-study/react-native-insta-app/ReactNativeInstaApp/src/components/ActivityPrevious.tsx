import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FriendsProfileDataType} from '../DB/friendsProfileData';

const ActivityPrevious = ({data}: {data: FriendsProfileDataType}) => {
  const navigation = useNavigation<[{}]>();
  const [follow, setFollow] = useState(data.follow);

  return (
    <View className="w-full">
      <View className="flex-row justify-between items-center py-5 w-full">
        <TouchableOpacity
          onPress={() =>
            navigation.push('FriendProfile', {
              name: data.name,
              profileImage: data.profileImage,
              follow: follow,
              posts: data.posts,
              followers: data.followers,
              following: data.following,
            })
          }
          className="flex-row justify-between items-center max-w-[64%]">
          <Image
            source={data.profileImage}
            className="w-[45] h-[45] rounded-full mr-[10]"
          />
          <Text className="text-[15px]">
            <Text className="font-bold">{data.name}</Text> 의 사진 및 동영상을
            보려면 팔로우 하세요.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFollow(!follow)}
          className={follow ? 'w-[72]' : 'w-[68]'}>
          <View
            className={`w-full h-[30] rounded-[5px] justify-center items-center ${
              follow ? 'border-[#DEDEDE] border-[1px] ' : 'bg-[#3493D9]'
            }`}>
            <Text className={follow ? 'text-black' : 'text-white'}>
              {follow ? 'Following' : 'Follow'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityPrevious;
