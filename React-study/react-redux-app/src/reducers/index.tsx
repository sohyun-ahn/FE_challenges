import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({
  //여러 개의 reducer가 필요할때 combineReducers를 사용
  todos,
  counter,
  posts,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
