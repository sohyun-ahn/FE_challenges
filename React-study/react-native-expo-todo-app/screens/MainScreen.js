import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import React from "react";

// View : container역할
// SafeAreaView : iOS v11이상이 설치된 기기에 적용됨, 안전 영역 경계 내에서 콘텐츠 렌더링
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.pageTitle}>TODO APP</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        <TodoItem />
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

// React Native에서 스타일링 하는 법 - CSS아닌 JS이용
// inline styles 사용 or StyleSheet객체 사용 (추천)
const styles = StyleSheet.create({
  container: {
    flex: 1, // flex-grow: 1; flex-shrink: 1; flex-basis: 0% // grow 팽창지수 - 화면 꽉 채운 효과
    paddingTop: Platform.OS === "ios" ? 0 : 20, // iOS에서는 이미 safeAreaView로 처리함
    backgroundColor: "#f7f8fa",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  listView: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 20,
  },
  listTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
    textDecorationLine: "underline",
    textDecorationColor: "#aaa",
  },
  separator: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
});
