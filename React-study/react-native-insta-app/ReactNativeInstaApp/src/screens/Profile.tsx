import {View, SafeAreaView} from 'react-native';
import React from 'react';
import ProfileBody from '../components/ProfileBody';
import {MyProfileData} from '../DB/friendsProfileData';
import ProfileButton from '../components/ProfileButton';
import Entypo from 'react-native-vector-icons/Entypo';
import Circles from '../components/Circles';

const Profile = () => {
  const mydata = MyProfileData;
  let circles = [];
  let numberOfCircles = 10;

  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(
      <View key={i}>
        {i === 0 ? (
          <View className="w-[60] h-[60] rounded-full border-[1px] opacity-70 mx-[5] justify-center items-center">
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View className="w-[60] h-[60] rounded-full bg-black opacity-10 mx-[5] ">
            {/* {} */}
          </View>
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView className="bg-white w-full">
      <View className="w-full p-[10]">
        <ProfileBody data={mydata} />
        <ProfileButton id={mydata.id!} data={mydata} />
      </View>
      <Circles circles={circles} />
    </SafeAreaView>
  );
};

export default Profile;
