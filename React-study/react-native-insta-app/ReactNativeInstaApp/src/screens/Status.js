import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Status = ({route, navigation}) => {
  const {name, image} = route.params; // Stories.tsx에서 보내준 {name, image} 받기
  const statusBarHeight = getStatusBarHeight() + 10;

  const progress = useRef(new Animated.Value(0)).current; // useRef: Ref값이 변경되더라도 화면이 렌더링이 되지않고 라이프사이클동안 생명주기 유지
  // 0초에서 5로 바꿔야하는데 애니메이션 값을 직접 수정하면 안됨.!

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5], // 0초에서 5초가 될때 interpolate을 써서(사이의 값이 얼마인지 유추하는 함수)
    outputRange: ['0%', '100%'], // width가 0~100%로 바뀔 것임
  });

  useEffect(() => {
    Animated.timing(progress, {
      // will change progress value to 5 in 5 seconds
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation, progress]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      {/* 구분선 */}
      <View
        className={'h-[3] border-1 w-[100%] bg-gray-500 absolute top-[18]'}
        style={{marginTop: Platform.OS === 'ios' ? statusBarHeight : 0}}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}
        />
      </View>

      {/* 상단 프로필 헤더 */}
      <View
        className={
          'p-[15] flex-row items-center absolute top-[12] left-0 w-[90%]'
        }
        style={{marginTop: Platform.OS === 'ios' ? statusBarHeight : 0}}>
        <View className="rounded-full w-[30] h-[30] justify-center items-center">
          <Image
            source={image}
            className="rounded-full bg-orange-500 w-[92%] h-[92%]"
            resizeMode="cover"
          />
        </View>
        <View className="justify-between flex-row w-full">
          <Text className="text-white text-base pl-[10]">{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{fontSize: 20, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={image} className="absolute w-full h-[600]" />
      <View className="absolute bottom-0 left-0 flex-row items-center justify-between my-3 w-full" />
    </SafeAreaView>
  );
};

export default Status;
