import { createContext, useContext, useState } from "react";

// 1. 만든다
export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: () => {},
}); // {}=우리가 넣을 값들

// 2. 사용한다
// const useAuth = useContext(AuthContext) // 이렇게 쓰면 값을 넣은 것
export const useAuth = () => useContext(AuthContext); // 다른 곳에서 쓸 수 있게 한번 감싸준 것.

// 3. 사용한다
// Provider 이름 지어주기
// children 타입외우기
export function AuthProvider(props: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
