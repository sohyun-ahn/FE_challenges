import { StyleSheet } from "react-native";
import MainScreen from "./screens/MainScreen";

// react native에서는 웹개발에서 썼던 요소가 아닌 Core Component들을 이용해서 UI를 만들어줘야 함
export default function App() {
  return <MainScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
