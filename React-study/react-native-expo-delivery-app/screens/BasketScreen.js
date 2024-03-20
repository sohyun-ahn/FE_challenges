import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/outline";
import { selectRestaurant } from "../store/slices/restaurantSlice";
import {
  selectBasketItems,
  selectBasketTotal,
  removeFromBasket,
} from "../store/slices/basketSlice";
import { urlFor } from "../sanity_client";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, currentItem) => {
      (results[currentItem.id] = results[currentItem.id] || []).push(
        currentItem
      ); // {"id": ["description":"...","id":...],"id2":[]}
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 ">
        {/* Header */}
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">장바구니</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute bg-gray-100 rounded-full top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        {/* 배송 시간 안내 */}
        <View className="flex-row items-center px-4 py-3 my-5 space-x-4 bg-white">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="p-4 bg-gray-300 rounded-full h-7 w-7"
          />
          <Text className="flex-1">배송 시간 50-75분</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">변경</Text>
          </TouchableOpacity>
        </View>

        {/* 장바구니템 나열 */}
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center px-5 py-2 space-x-3 bg-white"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1 font-semibold">{items[0]?.name}</Text>

              <Text className="font-bold text-gray-600">
                ${items[0]?.price}
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB]"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  삭제
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Summary */}
        <View className="p-5 mt-5 space-y-4 bg-white">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">금액</Text>
            <Text className="text-gray-400">${basketTotal}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">배송비</Text>
            <Text className="text-gray-400">${5.99}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>총 금액</Text>
            <Text className="font-extrabold">
              ${(basketTotal + 5.99).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-white font-bold text-lg text-center">
              주문하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
