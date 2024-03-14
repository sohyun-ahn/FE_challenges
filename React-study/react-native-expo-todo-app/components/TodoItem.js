import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import CheckboxChecked from "../assets/checkbox-checked.svg";
import CheckboxUnchecked from "../assets/checkbox-unchecked.svg";
import DeleteIcon from "../assets/delete.svg";
import { useDispatch } from "react-redux";

// Pressable hitSlot: n => click할 수 있는 영역 n만큼 확장
//           pressSlot: n => 클릭을 유지하는 범위 n만큼 확장
const TodoItem = ({ todo }) => {
  // 클릭시 작업지시서 전달.
  console.log(todo);
  const dispatch = useDispatch(); // 상태를 변경할 수 있게 도와주는 우체부

  // checkbox 클릭시 update 수행, todo->done, done->todo
  const handleClick = () => {
    const action = {
      type: "update_todo",
      payload: { id: todo.id, state: todo.state === "done" ? "todo" : "done" },
    };
    dispatch(action);
  };

  // deleteBtn 클릭시 delete 수행
  function handleDelete() {
    const action = { type: "delete_todo", payload: todo.id };
    dispatch(action);
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable hitSlop={10} style={styles.itemCheckbox} onPress={handleClick}>
        {todo.state === "todo" ? (
          <CheckboxUnchecked
            style={[styles.itemCheckboxIcons, styles.itemCheckboxUncheckedIcon]}
          />
        ) : (
          <CheckboxChecked
            style={[styles.itemCheckboxIcons, styles.itemCheckboxCheckedIcon]}
          />
        )}
      </Pressable>
      <Text
        style={[
          styles.itemText,
          todo.state === "done" ? styles.itemTextChecked : null,
        ]}
      >
        {todo.text}
      </Text>
      <Pressable
        style={
          todo.state === "todo" ? styles.deleteButton : styles.deleteButtonDone
        }
        hitSlop={10}
        onPress={handleDelete}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  itemCheckbox: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    flex: 2,
    paddingHorizontal: 5,
    marginRight: 10,
  },
  itemTextChecked: {
    textDecorationLine: "line-through",
    opacity: 0.4,
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.4,
  },
});
