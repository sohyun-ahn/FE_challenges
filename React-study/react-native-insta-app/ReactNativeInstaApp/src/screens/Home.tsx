import {StatusBar, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View className="justify-between flex-row px-4 items-center">
        <View>
          <Text className="text-[25px] font-medium">Instagram</Text>
        </View>
        <View className="justify-between flex-row items-center">
          <FontAwesome
            name="plus-square-o"
            style={{fontSize: 24, paddingHorizontal: 15}}
          />
          <Feather name="navigation" style={{fontSize: 24}} />
        </View>
      </View>

      <ScrollView>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
