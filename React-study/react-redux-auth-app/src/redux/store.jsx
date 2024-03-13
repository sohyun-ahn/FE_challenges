// Redux
// 1. 만든다. createStore => 옛날 방식, 이젠 configureStore로 쓴다.
// 2. App에 store를 내려준다. => 범위: 전역이기에 App, 값: value
// 3. 사용한다.
//   -> 저장된 값 읽기 -> useSelector()
//   -> 저장된 값을 변경해야지 -> Complicated

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";
import { blogReducer } from "./reducers/blog.reducer";

export const store = configureStore({
  reducer: { auth: authReducer, blog: blogReducer },
}); // reducer: {key이름: reducer함수}
