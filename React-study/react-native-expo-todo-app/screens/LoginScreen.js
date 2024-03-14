import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LoginForm from "../components/loginForm";
import TodolistIcon from "../assets/todolist.svg";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TodolistIcon style={styles.icon} />
        <Text style={styles.pageTitle}>TODO APP</Text>
      </View>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  icon: {
    width: 50,
    height: 50,
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 15,
  },
});
