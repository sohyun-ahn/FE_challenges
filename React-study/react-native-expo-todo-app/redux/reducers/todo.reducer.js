const todoReducer = (prevState = { currentId: 0, todos: [] }, action) => {
  let newTodos = [];

  switch (action.type) {
    case "add_todo": {
      newTodos.push({
        id: prevState.currentId,
        text: action.payload,
        state: "todo",
      });
    }

    case "delete_todo": {
      // !!Error : A state mutation was detected inside a dispatch
      const deletedTodo = prevState.todos.filter(
        (todo) => todo.id !== action.payload
      );
      newTodos = deletedTodo;
    }
    case "update_todo": {
      const updatedTodo = prevState.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, state: action.payload.state } // state update: done->todo, todo->done
          : todo
      );
      newTodos = updatedTodo;
    }
  }

  return { currentId: prevState.currentId++, todos: newTodos }; // 상태변경 후 다시 redux store에 새로운 상태 저장
};

export default todoReducer;
