import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Redux
// 2. App에 store를 내려준다. => 범위: 전역이기에 App, 값: value
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
