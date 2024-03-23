import {
  ScrollView,
  ImageRequireSource,
  View,
  Image,
  Text,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Search = () => {
  //SearchContent(자식)에서 클릭된 이미지데이터를 받아서 모달창으로 띄우기

  const [image, setImage] = useState<ImageRequireSource | null>(null);
  const getData = (data: ImageRequireSource | null) => {
    setImage(data);
  };

  // 모달창을 화면의 가운데로 보내기 위한 방법
  const dimension = Dimensions.get('window'); // window의 가로와 세로를 받을 수 있는 메소드
  const windowWidth = dimension.width;
  const windowHeight = dimension.height;

  return (
    <SafeAreaView className="w-full bg-white relative">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Input */}
        <SearchInput />
        {/* Search Content */}
        <SearchContent data={getData} />
      </ScrollView>
      {image ? (
        // 모달창 오픈
        <View className="absolute z-[1] w-full h-full bg-[rgba(52,52,52,0.8)]">
          <StatusBar backgroundColor={'#525252'} barStyle={'dark-content'} />
          <View
            className="absolute bg-white w-[90%] h-[465] rounded-[15px] z-[1]"
            style={{
              top:
                (Platform.OS === 'ios' ? getStatusBarHeight() : 0) +
                windowHeight / 6,
              left: windowWidth / 18,
            }}>
            <View className="flex-row items-center py-[10] px-[15]">
              <Image source={image} className="w-8 h-8 rounded-full " />
              <View className="pl-2">
                <Text className="text-[12px] font-semibold">친구 아이디</Text>
              </View>
            </View>
            <Image source={image} className="w-full h-[80%]" />
            <View className="justify-around w-full flex-row items-center p-2">
              <Ionic name="heart-outline" style={{fontSize: 26}} />
              <Ionic name="person-circle-outline" style={{fontSize: 26}} />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;
