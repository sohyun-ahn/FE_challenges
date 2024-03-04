enum Action {
  FETCH_POSTS = "FETCH_POSTS",
  DELETE_POSTS = "DELETE_POSTS",
}

interface Post {
  userId: number;
  id: number;
  title: string;
}

interface ActionType {
  type: Action;
  payload: Post[];
}

const posts = (state = [], action: ActionType) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default posts;
