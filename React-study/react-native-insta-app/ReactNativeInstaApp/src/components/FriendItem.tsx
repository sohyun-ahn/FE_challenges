import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FriendsProfileDataType} from '../DB/friendsProfileData';

const FriendItem = ({
  data,
  name,
}: {
  data: FriendsProfileDataType;
  name: string;
}) => {
  const [isFollow, setIsFollow] = useState(data.follow);
  const [close, setClose] = useState(false);
  return (
    <View>
      {data.name === name || close ? null : (
        <View className="w-[160] h-[200] m-[3] justify-center items-center border-[0.5px] border-[#DEDEDE] rounded-[2px] relative">
          <TouchableOpacity
            onPress={() => setClose(true)}
            className="absolute top-[10] right-[10]">
            <AntDesign
              name="close"
              style={{
                fontSize: 20,
                color: 'black',
                opacity: 0.5,
              }}
            />
          </TouchableOpacity>
          <Image
            source={data.profileImage}
            className="w-[80] h-[80] rounded-full m-[10]"
          />
          <Text className="font-bold text-base">{data.name}</Text>
          <Text className="text-[12px]">{data.accountName}</Text>
          <TouchableOpacity
            onPress={() => setIsFollow(!isFollow)}
            className="w-[80%] py-[10]">
            <View
              className={`w-full h-[30] rounded-[5px] justify-center items-center ${
                isFollow ? 'border-[1px] border-[#DEDEDE]' : 'bg-[#3493D9]'
              }`}>
              <Text className={`${!isFollow && 'text-white'}`}>
                {isFollow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FriendItem;
