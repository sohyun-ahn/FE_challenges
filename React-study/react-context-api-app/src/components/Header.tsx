import { useAuth } from "../contexts/auth.context";

function Header() {
  const { isLoggedIn } = useAuth();
  //   const {} = useContext(AuthContext); 이렇게 해도 되지만 현업에선 주로 새로운 함수명을 만들어서(ex. useAuth()) 씀

  return (
    <header>
      <span>로그인 여부 : </span>
      <span>
        {isLoggedIn ? "네, 로그인 했어요" : "아니요, 로그인 안했습니다."}
      </span>
    </header>
  );
}

export default Header;
