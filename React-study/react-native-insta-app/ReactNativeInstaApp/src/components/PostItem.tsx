import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {PostType} from './Posts';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

const PostItem = ({data}: {data: PostType}) => {
  const [like, setLike] = useState(data.isLiked);

  return (
    <View className="pb-[10] border-b-gray-500 border-b-[0.2px]">
      {/* Post Header */}
      <View className="flex-row items-center justify-between p-[15]">
        <View className="flex-row items-center">
          <Image
            source={data.postPersonImage}
            className="w-[40px] h-[40px] rounded-full"
          />
          <View className="pl-[5]">
            <Text className="text-[15] font-bold">{data.postTitle}</Text>
          </View>
        </View>
        <Feather name="more-vertical" style={{fontSize: 20}} />
      </View>

      {/* Post Image */}
      <View className="relative justify-center items-center">
        <Image source={data.postImage} className="w-full h-[400]" />
      </View>

      {/* Post Action */}
      <View className="flex-row justify-between items-center px-3 py-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => setLike(!like)}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={{
                fontSize: 20,
                paddingRight: 10,
                color: like ? 'red' : 'black',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionic
              name="chatbubble-outline"
              style={{fontSize: 20, paddingRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="navigation" style={{fontSize: 20}} />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" style={{fontSize: 20}} />
      </View>

      {/* Post Comments */}
      <View className="px-[15]">
        <Text>좋아요 {like ? data.likes + 1 : data.likes} 개</Text>
        <Text className="font-bold text-14 py-[2]">게시글 설명글입니다.</Text>
        <Text className="opacity-[0.4] py-[2] mt-[5] mb-[5]">
          댓글 모두 보기
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row items-center">
            <Image
              source={data.postPersonImage}
              alt={`${data.postTitle}의 프로필 이미지`}
              className="w-[25] h-[25] rounded-full bg-orange-500 mr-[10]"
            />
            <TextInput placeholder="댓글 달기..." className="opacity=[0.4]" />
          </View>
          <View className="flex-row items-center">
            <Text className="text-[#0095F6]">게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
