import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {storyData} from '../DB/storyData';

const Stories = () => {
  const navigation = useNavigation<[{}]>();
  const storyInfo = storyData;
  return (
    // ScrollView를 통해 좌우로 이동가능하게 함.
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="py-5">
      {/* Story */}
      {storyInfo.map(story => {
        return (
          <TouchableOpacity
            key={story.id}
            onPress={() =>
              navigation.push('Status', {name: story.name, image: story.image})
            }>
            <View className="flex-col px-2 relative items-center">
              {story.id === 0 ? (
                <View className="absolute bottom-[15] right-[10] z-[1]">
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              ) : null}
              <View className="flex justify-center items-center border-[#c13584] bg-white w-[68] h-[68] rounded-full border-2">
                <Image
                  source={story.image}
                  className="w-[92%] h-[92%] border-[100] bg-orange-500 rounded-full object-cover"
                />
              </View>
              <Text className="align-center text-s">{story.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <Text>stories</Text>
    </ScrollView>
  );
};

export default Stories;
