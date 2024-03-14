import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import app from "./firebase"; // firebase연결!
import Toast from "react-native-toast-message";

// react native에서는 웹개발에서 썼던 요소가 아닌 Core Component들을 이용해서 UI를 만들어줘야 함
export default function App() {
  // MainScreen과 LoginScreen을 이동할 때 이용하는 모듈 - React Navigator
  // Stack.Navigator or Stack.Screen 속성 가짐
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Main"
              component={MainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <Toast />
    </>
  );
}
