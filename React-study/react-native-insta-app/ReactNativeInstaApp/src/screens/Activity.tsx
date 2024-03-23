import {ScrollView, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ActivityThisWeek from '../components/ActivityThisWeek';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityRecommend from '../components/ActivityRecommend';
import {FriendsProfileData} from '../DB/friendsProfileData';

const Activity = () => {
  return (
    <SafeAreaView className="w-full bg-white">
      <Text className="text-[20px] font-bold border-b-[0.5] border-b-[#DEDEDE] p-[10]">
        활동
      </Text>
      <ScrollView className="m-[10]" showsVerticalScrollIndicator={false}>
        <ActivityThisWeek />

        <Text className="font-bold ">이전 활동</Text>
        {/* Friends Profile Data */}
        {FriendsProfileData.slice(3, 6).map((data, index) => (
          <ActivityPrevious data={data} key={index} />
        ))}

        <Text className="font-bold py-[10]">회원님을 위한 추천</Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => (
          <ActivityRecommend data={data} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
