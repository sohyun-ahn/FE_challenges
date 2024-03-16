import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RestaurantScreen from "./screens/RestaurantScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import BasketScreen from "./screens/BasketScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigatior initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={PreparingOrderScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={DeliveryScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
      </Stack.Navigatior>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
