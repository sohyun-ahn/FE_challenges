import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.reducer";
import loginReducer from "./reducers/login.reducer";

export const store = configureStore({
  reducer: { todo: todoReducer, login: loginReducer },
});
