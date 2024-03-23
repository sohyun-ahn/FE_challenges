import {View, Text, Image} from 'react-native';
import React from 'react';
import {FriendsProfileDataType} from '../DB/friendsProfileData';
import Feather from 'react-native-vector-icons/Feather';

const ProfileBody = (props: {data: FriendsProfileDataType}) => {
  const {name, accountName, profileImage, posts, followers, following} =
    props.data;

  return (
    <View>
      {accountName ? (
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-[18px] font-bold">{accountName}</Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />
          </View>
          <View className="flex-row items-center">
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </View>
        </View>
      ) : null}
      <View className="flex-row items-center justify-around py-5">
        <View className="items-center">
          <Image
            source={profileImage}
            className="object-cover w-[80] h-[80] rounded-full"
          />
          <Text className="py-[5] font-bold">{name}</Text>
        </View>
        <View className="items-center">
          <Text className="font-bold text-[18px] mb-1">{posts}</Text>
          <Text>posts</Text>
        </View>
        <View className="items-center">
          <Text className="font-bold text-[18px] mb-1">{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View className="items-center">
          <Text className="font-bold text-[18px] mb-1">{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;
