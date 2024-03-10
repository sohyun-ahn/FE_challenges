import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";

// KeyboardAvoidingView : 키보드가 나타날때 감춰지는 부분없이 요소들이 나타나게 해주는 컨테이너
const InputForm = () => {
  const [todo, setTodo] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
        onChange={(e) => setTodo(e.target.value)}
      />
      <Pressable style={styles.addButton} onPress={() => addTodo(todo)}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

function addTodo(todo) {
  return <TodoItem todo={todo} />;
}

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
    alignItems: "center",
  },
  inputField: {
    flex: 1,
    height: 50,
    fontSize: 18,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa",
    color: "#000",
    marginRight: 15,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "#453b42",
    shadowColor: "#453b4240",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
  },
});
