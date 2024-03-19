import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { setRestaurant } from "../store/slices/restaurantSlice";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { urlFor } from "../sanity_client";
import BasketIcon from "../components/BasketIcon";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute(); // 이 데이터들을 redux store에 넣어줄 것임

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <StatusBar hidden />
        {/* 이미지 */}
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 p-4 bg-gray-300"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute p-2 bg-gray-100 rounded-full top-5 left-5"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        {/* 내용 */}
        <View className="bg-white">
          <View className="p-4 px-4">
            <Text className="text-xl font-bold">{title}</Text>

            {/* 평점 및 위치 */}
            <View className="flex-row my-1 space-x-2">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500 ">
                  <Text className="text-green-500 ">{rating}</Text>
                  {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">Nearby {address}</Text>
              </View>
            </View>
            {/* 설명 */}
            <Text className="text-sm text-gray-500">{short_description}</Text>
          </View>

          {/* 알러지 질문 */}
          <TouchableOpacity className="flex-row items-center p-4 space-x-2 border-gray-300 border-y">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
            <Text className="flex-1 pl-2 font-bold text-md">
              음식 알레르기가 있나요?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 py-3 text-xl font-bold">Menu</Text>

          {/* DishRows */}
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
