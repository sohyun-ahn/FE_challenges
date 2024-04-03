const mongoose = require("mongoose");

// 로그인 방식 1 : email, password 로그인
// 로그인 방식 2 : google 로그인
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // email,password로그인 후 google로그인 후 다시 email,password로그인을 하게 됐을때 googleId: null이 두번이라 발생하는 오류(unique때문)를 방지하기위한 조건
  },
});

const User = mongoose.model("User", userSchema); // name, schema 를 넣어 모델 생성

module.exports = User;
