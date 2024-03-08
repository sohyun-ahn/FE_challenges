import { completeReducer } from ".reducers/complete.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { complete: completeReducer },
});
