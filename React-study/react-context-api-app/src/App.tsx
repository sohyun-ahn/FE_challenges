import Page from "./components/Page";
import Header from "./components/Header";
import HeavyList from "./components/HeavyList";
import { AuthProvider } from "./contexts/auth.context";

// Context API 사용법
// 1. 만든다. createContext
// 2. 사용한다. useContext
// 3. 범위를 정해서 값을 내려준다. Provider를 만들고, value를 내려준다.

function App() {
  // props를 내려줄 수 있는 것이 부모 - 자식 관계
  // AuthContext.Provider 의 부모 App
  // Header, Page, div의 부모도 App

  // AuthProvider는 h1, hr, Header의 부모가 아님.
  return (
    <AuthProvider>
      <div>
        <h1>Context API 수업 - 유진영 강사님 (240305)</h1>
        <hr />
        <Header />
        <hr />
        <Page />
        <hr />
        <HeavyList />
      </div>
    </AuthProvider>
  );
}

export default App;
