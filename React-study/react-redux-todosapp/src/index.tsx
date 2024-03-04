import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  //log가 찍히는 middleware
  console.log("store", store);
  console.log("action", action);
  next(action);
};

const middleware: any = applyMiddleware(thunk, loggerMiddleware);

const store = createStore(rootReducer, middleware); //reducer의 store 생성

//전체 구성 요소를 Provider로 감싸주면 React Redux앱의 모든 react구성요소가 저장소(store)방문가능
//Provider는 react-redux 아래에 있어서 npm install react-redux해줘야함
const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );

render();
store.subscribe(render); //subscribe(): change listener 역할, 상태트리 변경감지, getState()를 호출하여 콜백 내부의 상태 트리 읽기 가능

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
