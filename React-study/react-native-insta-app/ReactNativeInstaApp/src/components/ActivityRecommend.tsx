import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FriendsProfileDataType} from '../DB/friendsProfileData';

const ActivityRecommend = ({data}: {data: FriendsProfileDataType}) => {
  const navigation = useNavigation<[{}]>();
  const [follow, setFollow] = useState(data.follow); // boolean
  const [close, setClose] = useState(false);
  return (
    <View>
      {close ? null : (
        <View className="py-[10] flex-row w-full justify-between">
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push('FriendProfile', {
                  name: data.name,
                  profileImage: data.profileImage,
                  follow: follow,
                  post: data.posts,
                  followers: data.followers,
                  following: data.following,
                })
              }
              className="flex-row items-center max-w-[64%]">
              <Image
                source={data.profileImage}
                className="w-[45] h-[45] rounded-full mr-[10]"
              />
              <View className="w-full">
                <Text className="text-[14px] font-bold">{data.name}</Text>
                <Text className="text-[12px] opacity-50">
                  {data.accountName}
                </Text>
                <Text className="text-[12px] opacity-50">
                  회원님을 위한 추천
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center">
            {follow ? (
              // unfollowing 이면 보이는 버튼
              <TouchableOpacity
                onPress={() => setFollow(!follow)}
                className={follow ? 'w-[90]' : 'w-[68]'}>
                <View
                  className={`w-full h-[30] rounded-[5px] border-[#DEDEDE] justify-center items-center ${
                    follow ? 'border-[1px]' : 'bg-[#3493D9]'
                  }`}>
                  <Text className={follow ? 'text-black' : 'text-white'}>
                    {follow ? 'following' : 'follow'}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              // following 이면 보이는 버튼
              <>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  className={follow ? 'w-[90]' : 'w-[68]'}>
                  <View
                    className={`w-full h-[30] rounded-[5px] border-[#DEDEDE] justify-center items-center ${
                      follow ? 'border-[1px]' : 'bg-[#3493D9]'
                    }`}>
                    <Text className={follow ? 'text-black' : 'text-white'}>
                      {follow ? 'following' : 'follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setClose(true)}
                  className="px-[10]">
                  <AntDesign
                    name="close"
                    style={{fontSize: 14, color: 'black', opacity: 0.8}}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ActivityRecommend;
