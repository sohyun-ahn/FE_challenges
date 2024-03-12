const todoReducer = (prevState = { currentId: 0, todos: [] }, action) => {
  const newTodos = [...prevState.todos];
  let newId = prevState.currentId;

  switch (action.type) {
    case "add_todo": {
      newTodos.push({
        id: newId++,
        text: action.payload,
        state: "todo",
      });
    }

    case "delete_todo": {
      // !!Error : A state mutation was detected inside a dispatch
      const deletingIndex = newTodos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (deletingIndex > -1) {
        // 삭제해야할 Todo가 존재한다면
        newTodos.splice(deletingIndex, 1);
      }
    }

    case "update_todo": {
      const updatingIndex = newTodos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (updatingIndex > -1) {
        // 업데이트해야할 Todo가 존재한다면
        const updatedTodo = { ...newTodos[updatingIndex] };
        updatedTodo.state = action.payload.state; // state update: done->todo, todo->done
        newTodos.splice(updatingIndex, 1, updatedTodo);
      }
    }
  }

  return { currentId: newId, todos: newTodos }; // 상태변경 후 다시 redux store에 새로운 상태 저장
};

export default todoReducer;
