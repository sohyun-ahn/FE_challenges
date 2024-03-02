import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { OrderContextProvider } from "./context/OrderContext.tsx";

// <OrderContext.Provider> 로 작성 안하는 이유는 내부에 작성할 기능들이 많아서
// 이 컴포넌트 안에서 쓰는 기능을 함수화하여 내보낸다
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OrderContextProvider>
    <App />
  </OrderContextProvider>
);
