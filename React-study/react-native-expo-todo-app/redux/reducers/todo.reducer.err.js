const todoReducer = (prevState = { currentId: 0, todos: [] }, action) => {
  let newTodos = [...prevState.todos];
  let newId = prevState.currentId; // 이 부분을 ++ 라고 해서 오류가 났었다.

  switch (action.type) {
    case "add_todo": {
      newTodos.push({
        id: newId++,
        text: action.payload,
        state: "todo",
      });
    }

    case "delete_todo": {
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
    }
    case "update_todo": {
      newTodos = newTodos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, state: action.payload.state } // state update: done->todo, todo->done
          : todo
      );
    }
  }

  return { currentId: newId, todos: newTodos }; // 상태변경 후 다시 redux store에 새로운 상태 저장
};

export default todoReducer;
