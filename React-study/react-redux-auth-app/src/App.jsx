import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 공장에서 상태 읽기 (provider안에서 사용해야함)
  const dispatch = useDispatch(); // 우체부 불러오기

  const handleClick = () => {
    // 작업 지시서 써야지!
    // 작업 이름 적기!
    const action = {
      type: "로그인하기",
    };
    // 우체부(dispatch)를 이용해 작업을 공장에 전달
    dispatch(action);
  };

  const handleClickLogOut = () => {
    const action = {
      type: "로그아웃하기",
    };
    dispatch(action);
  };
  return (
    <div>
      <div>
        <span>로그인 여부: </span>
        <span>{isLoggedIn ? "로그인 됐습니다." : "로그인이 안됐습니다"}</span>
        <hr />
        {!isLoggedIn ? (
          <button onClick={handleClick}>로그인하기</button>
        ) : (
          <button onClick={handleClickLogOut}>로그아웃하기</button>
        )}
      </div>
    </div>
  );
}

export default App;
