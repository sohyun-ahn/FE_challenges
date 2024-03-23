import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageRequireSource,
} from 'react-native';
import React from 'react';
import {PropsType} from './propsType';
import {SafeAreaView} from 'react-native-safe-area-context';

interface EditProfilePropsType extends PropsType {
  route: {
    params: {
      name: string;
      accountName: string;
      profileImage: ImageRequireSource | null;
    };
  };
}

const EditProfile = ({route, navigation}: EditProfilePropsType) => {
  const {name, accountName, profileImage} = route.params;

  return (
    <SafeAreaView className="w-full bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-[10]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <Text className="text-base font-bold">프로필 수정 </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-[#3493D9]">완료</Text>
        </TouchableOpacity>
      </View>

      {/* Section1: Image, name */}
      <View className="p-5 items-center">
        <Image source={profileImage!} className="w-[80] h-[80] rounded-full" />
        <Text className="text-[#3493D9] mt-[10]">프로필 사진 바꾸기 </Text>
      </View>

      {/* Section2: Edit info */}
      <View className="p-[10]">
        <View>
          <Text className="opacity-50">이름</Text>
          <TextInput
            placeholder="이름"
            defaultValue={name}
            className="text-base border-b-[1px] border-#CDCDCD"
          />
        </View>
        <View className="py-[10]">
          <Text className="opacity-50">사용자 이름</Text>
          <TextInput
            placeholder="사용자 이름"
            defaultValue={accountName}
            className="text-base border-b-[1px] border-#CDCDCD"
          />
        </View>
        <View className="py-[10]">
          <Text className="opacity-50">웹사이트</Text>
          <TextInput
            placeholder="웹사이트"
            className="text-base border-b-[1px] border-#CDCDCD"
          />
        </View>
        <View className="py-[10]">
          <Text className="opacity-50">소개</Text>
          <TextInput
            placeholder="소개"
            className="text-base border-b-[1px] border-#CDCDCD"
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <Text className="my-[5] p-[10] text-[#3493D9]">
          프로페셔널 계정으로 전환
        </Text>
        <Text className="my-[5] p-[10] text-[#3493D9]">개인정보 설정</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
