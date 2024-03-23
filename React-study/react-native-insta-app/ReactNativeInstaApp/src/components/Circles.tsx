import {View, ScrollView} from 'react-native';
import React from 'react';

const Circles = ({circles}: {circles: React.JSX.Element[]}) => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="py-[5] px-[10]">
        {circles}
      </ScrollView>
    </View>
  );
};

export default Circles;
