import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { getFeaturedRestaurants } from "../api";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation(); // 다른 Screen으로 이동하기 위해
  const [featuredCategories, setFeaturedCategories] = useState([]); // 하나씩 나열한 데이터를 저장하는 곳

  // DOM tree -> Render tree -> Layout -> Paint(실제화면에그리기)
  // useLayoutEffect: 브라우저가 paint하기 전에 실행됨
  useLayoutEffect(() => {
    // Home 이라는 헤더 안보이게 하기 위해
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect: 모든 DOM의 mutation(paint이후)이 다 끝나고 나서 실행됨
  useEffect(() => {
    // api.ts에서 만들었던 데이터를 가져와서 featuredCategories에 넣어주기
    getFeaturedRestaurants()
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView className="pt-6 pb-12 bg-white" style={styles.container}>
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="p-4 bg-gray-300 rounded-full h-7 w-7"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">배송 앱</Text>
          <Text className="text-xl font-bold">
            현재 위치
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center pb-2 mx-3 space-x-2">
        <View className="flex-row flex-1 p-3 space-x-2 bg-gray-200 rounded-lg">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
