import { useState } from "react";
import "./App.css";
import SummaryPage from "./pages/SummaryPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <>
      <OrderPage></OrderPage>
      <SummaryPage></SummaryPage>
    </>
  );
}

export default App;
