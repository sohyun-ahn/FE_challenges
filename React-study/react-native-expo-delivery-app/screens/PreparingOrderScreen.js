import { SafeAreaView } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // setTimeout(() =>{
    //   navigation.navigate("Delivery") // 4초 뒤에 Delivery페이지로 이동
    // }, 4000)
  }, []);

  return (
    <SafeAreaView>
      {/* <Animatable.Image
        source={{
          uri: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExanBoZXBvMDl0MGcxOHF5ODc4czBpNTRiaXlkbHFmMHdvOXRwNjc3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xwsGcaZWWB8KyY/giphy.gif",
        }}
        className="h-96 w-96"
        animation="slideInUp"
        iterationCount={1}
      /> */}
      {/* 
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="px-4 pb-4 font-bold text-lg text-center text-white"
      >
        레스토랑이 주문을 수락하기를 기다리고 있습니다!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" /> */}
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
