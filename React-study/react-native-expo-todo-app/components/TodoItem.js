import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import CheckboxChecked from "../assets/checkbox-checked.svg";
import CheckboxUnchecked from "../assets/checkbox-unchecked.svg";
import DeleteIcon from "../assets/delete.svg";
import { useSelector, useDispatch } from "react-redux";

// Pressable hitSlot: n => click할 수 있는 영역 n만큼 확장
//           pressSlot: n => 클릭을 유지하는 범위 n만큼 확장
const TodoItem = ({ todo }) => {
  // 클릭시 작업지시서 전달.
  const dispatch = useDispatch();
  const isComplete = useSelector((state) => state.complete.isComplete);

  //TODO: isComplete, handleClick(action 보내기), 우체부에게 전달

  return (
    <View style={styles.itemContainer}>
      <Pressable hitSlop={10} style={styles.itemCheckbox}>
        <CheckboxUnchecked
          style={[styles.itemCheckboxIcons, styles.itemCheckboxUncheckedIcon]}
        />
        <CheckboxChecked
          style={[styles.itemCheckboxIcons, styles.itemCheckboxCheckedIcon]}
        />
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>{todo}</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
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
