import {View, TextInput} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View className="justify-center items-center w-full py-[10] relative">
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        className="w-[94%] bg-[#EBEBEB] rounded-[10px] items-center justify-center text-[15] p-4 pl-10"
      />
    </View>
  );
};

export default SearchInput;
