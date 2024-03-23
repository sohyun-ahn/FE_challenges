import {View, TouchableOpacity, Image, ImageRequireSource} from 'react-native';
import React from 'react';
import {SearchDataType, searchData} from '../DB/searchData';

interface PropsType {
  data: (data: ImageRequireSource | null) => void;
}

const SearchContent = (props: PropsType) => {
  // onPress 할 경우, 클릭된 이미지데이터를 부모컨포넌트(Search)로 전달해줌
  const searchDatas: SearchDataType[] = searchData;

  return (
    <View>
      {searchDatas.map(data => {
        return (
          <View key={data.id}>
            {/* 1번 UI: 기본 UI 3개씩 나오는 */}
            {data.id === 0 ? (
              <View className="flex-row flex-wrap justify-between w-full">
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      className="pb-[2] w-[33%]">
                      <Image source={imageData} className="w-full h-[150]" />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {/* 2번 UI: 2행1열로 나오는 직사각형이 있는 UI */}
            {data.id === 1 ? (
              <View className="flex-row justify-between">
                <View className="flex-row flex-wrap w-[66.5%] justify-between">
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        className="pb-[2] w-[49.5%]">
                        <Image source={imageData} className="w-full h-[150]" />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[4])}
                  onPressOut={() => props.data(null)}
                  className="ml-[2] w-1/3">
                  <Image source={data.images[4]} className="w-full h-[300]" />
                </TouchableOpacity>
              </View>
            ) : null}

            {/* 3번 UI: 2행2열로 나오는 정사각형이 있는 UI */}
            {data.id === 2 ? (
              <View className="flex-row justify-between">
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  className="pr-[2] w-[66.5%]">
                  <Image className="w-full h-[300]" source={data.images[2]} />
                </TouchableOpacity>
                <View className="flex-row flex-wrap w-[33%] justify-between">
                  {data.images.slice(0, 2).map((imageData, imgIndex) => (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      className="pb-[2] w-full">
                      <Image source={imageData} className="w-full h-[150]" />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
