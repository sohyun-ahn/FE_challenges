import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import React from "react";
import { useSelector } from "react-redux";

// View : container역할
// SafeAreaView : iOS v11이상이 설치된 기기에 적용됨, 안전 영역 경계 내에서 콘텐츠 렌더링
const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todoTasks = todos.filter((todo) => todo.state === "todo");
  const completedTasks = todos.filter((todo) => todo.state === "done");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.pageTitle}>TODO APP</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length !== 0 ? (
          // FlatList or ScrollView 사용해서 React-Native에서 리스트 나열
          // FlatList는 10개의 Item(기본값)을 화면에 탑재하고 사용자가 보기를 스크롤 하면 다른 Item이 탑재됨
          // ScrollView는 Component가 로드된 직후 Item을 로드하기때문에 모든 데이터가 RAM에 저장되어 많을시 성능 저하
          <FlatList
            data={todoTasks}
            renderItem={(todo) => <TodoItem todo={todo.item} />}
            keyExtractor={(todo) => todo.id}
          />
        ) : (
          <Text style={styles.emptyListText}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={(todo) => <TodoItem todo={todo.item} />}
            keyExtractor={(todo) => todo.id}
          />
        ) : (
          <Text style={styles.emptyListText}>완료된 일이 없습니다.</Text>
        )}
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
    paddingBottom: 15,
    paddingHorizontal: 20,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
});
