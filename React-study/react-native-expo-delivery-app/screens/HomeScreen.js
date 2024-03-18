import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import { getFeaturedRestaurants } from "../api";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation(); // 다른 Screen으로 이동하기 위해
  const [featuredCategories, setFeaturedCategories] = useState([]); // 하나씩 나열한 데이터를 저장하는 곳

  useEffect(() => {
    // Home 이라는 헤더 안보이게 하기 위해
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
          source={{ uri: "https://links.papareact..com/wru" }}
          className="p-4 bg-gray-300 rounded-full h-7 w-7"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">배송 앱</Text>
          <Text className="text-xs font-bold">
            현재 위치
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />

        {/* Search */}
        <View className="flex-row items-center pb-2 space-x-2">
          <View className="flex-row flex-1 p-3 space-x-2 bg-gray-200 rounded-lg">
            <SearchIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            ></TextInput>
          </View>
          <AdjustmentsIcon size={20} color="#00CCBB" />
        </View>
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
            key={category.id}
            id={category.id}
            title={category.name}
            description={category.short_description}
          ></FeaturedRow>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
