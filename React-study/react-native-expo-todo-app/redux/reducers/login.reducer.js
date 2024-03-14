// firebase를 이용하여 DB에 저장했기 때문에 이 파일의 reducer를 이용하지 않았음..
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    LOGIN: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// slice안에는 공장이 있고, actioncreator 들이 있음
const loginReducer = loginSlice.reducer; // store에 등록하기위해
export default loginReducer;
export const { LOGIN } = loginSlice.actions;
