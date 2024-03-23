import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {FriendsProfileDataType} from '../DB/friendsProfileData';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const ProfileButton = (props: {id: number; data: FriendsProfileDataType}) => {
  const {name, accountName, profileImage, follow} = props.data;
  const id = props.id;
  const navigation = useNavigation<[{}]>();
  const [isFollow, setIsFollow] = useState(follow);
  return (
    <>
      {id === 0 ? (
        <View className="w-full flex-row justify-evenly items-center py-[5]">
          <TouchableOpacity
            onPress={() =>
              navigation.push('EditProfile', {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            className="w-full">
            <View className="w-full h-[35] border-[1px] border-[#DEDEDE] justify-center items-center rounded-[5px]">
              <Text className="font-bold text-[14px] space-x-1 opacity-80">
                Edit profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="w-full flex-row justify-evenly items-center">
          <TouchableOpacity
            onPress={() => setIsFollow(!isFollow)}
            className="w-[42%]">
            <View
              className={`w-full h-[35] rounded-[5px] ${
                isFollow ? 'border-[1px] border-[#DEDEDE]' : 'bg-[#3498D9]'
              } justify-center items-center`}>
              <Text style={{color: isFollow ? 'black' : 'white'}}>
                {isFollow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
          <View className="w-[42%] h-[35] border-[1px] border-[#DEDEDE] justify-center items-center rounded-[5px]">
            <Text>Message</Text>
          </View>
          <View className="w-[10%] h-[35] border-[1px] border-[#DEDEDE] justify-center items-center rounded-[5px]">
            <Feather
              name="chevron-down"
              style={{fontSize: 20, color: 'black'}}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileButton;
