enum Action {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

interface ActionType {
  type: Action;
  text: string;
}

const todos = (state = [], action: ActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
};

export default todos;
