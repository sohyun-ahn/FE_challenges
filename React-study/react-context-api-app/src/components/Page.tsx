import React from "react";
import { useAuth } from "../contexts/auth.context";

function Page() {
  const something = useAuth(); // something = {isLoggedIn, logIn}

  return (
    <main>
      <h2>홈페이지</h2>

      <div>
        <span>로그인 여부 : </span>
        <span>
          {something.isLoggedIn
            ? "네, 로그인 했어요"
            : "아니요, 로그인 안했습니다."}
        </span>
      </div>

      <div>
        <button onClick={something.logIn}>로그인하기</button>
      </div>
    </main>
  );
}

export default Page;
