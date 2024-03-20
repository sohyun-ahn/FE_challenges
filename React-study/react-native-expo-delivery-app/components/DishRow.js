import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectBasketItemsWithId } from "../store/slices/basketSlice";
import {
  addToBasket,
  removeFromBasket,
  clearBasket,
} from "../store/slices/basketSlice";
import { useState, useEffect } from "react";
import { urlFor } from "../sanity_client";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false); // 장바구니에 추가하기 버튼을 눌렀는지 확인
  const items = useSelector((state) => selectBasketItemsWithId(state, id)); // ID를 이용해 아이템 가져오기
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log(items.length);
  //   }, [items]);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length < 0) return;
    dispatch(removeFromBasket({ id }));
  };

  const clearItemsFromBasket = () => {
    dispatch(clearBasket());
  };

  return (
    <>
      <View
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1 font-semibold">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="mt-2 text-gray-400">${price}</Text>

            <TouchableOpacity
              onPress={() => {
                addItemToBasket();
                setIsPressed(true);
              }}
              className="rounded-lg mt-2 bg-[#00CCBB]"
            >
              <Text className="px-4 py-3 text-center text-white font-bold">
                장바구니에 추가하기
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                clearItemsFromBasket();
                setIsPressed(false);
              }}
              disabled={!items.length}
              className={`rounded-lg mt-2 border ${
                items.length > 0 ? "border-[#00CCBB]" : "border-gray-200"
              }`}
            >
              <Text
                className={`px-4 py-3 text-center font-bold ${
                  items.length > 0 ? "text-[#00CCBB]" : "text-gray-200"
                }`}
              >
                장바구니에서 모든 아이템 삭제하기
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 object-cover p-4 bg-gray-300"
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            />
          </View>
        </View>
      </View>

      {isPressed && (
        <View className="px-4 bg-white">
          <View className="flex-row items-center pb-3 space-x-2">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text className="text-lg font-semibold">{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
