import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { AlertBox } from "./components/Alert";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "콜라", price: 2000 },
    { id: 2, charge: "빵", price: 400 },
    { id: 3, charge: "맥북", price: 30000 },
  ]);
  const [Alert, setAlert] = useState({ show: false });
  const [isEditing, setIsEditing] = useState(false);
  const [newID, setNewID] = useState(crypto.randomUUID());
  const [newCharge, setNewCharge] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleDelete = (id) => {
    if (id === "all") {
      setExpenses([]);
    } else {
      const newExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(newExpenses);
    }
    handleAlert({ type: "success", text: "아이템이 삭제되었습니다." });
  };

  const resetNewExpense = () => {
    setNewID(crypto.randomUUID());
    setNewCharge("");
    setNewPrice("");
  };

  const handleChange = (e) => {
    e.target.name === "price"
      ? setNewPrice(Number(e.target.value))
      : setNewCharge(e.target.value);
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    const [{ charge, price }] = expenses.filter((expense) => expense.id === id);
    setNewID(id);
    setNewCharge(charge);
    setNewPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newExpense = { id: newID, charge: newCharge, price: newPrice };
      if (newCharge !== "" && newPrice > 0) {
        if (isEditing) {
          const editedExpenses = expenses.map((expense) =>
            expense.id === newID ? newExpense : expense
          );
          handleAlert({ type: "success", text: "아이템이 수정되었습니다." });
          setExpenses(editedExpenses);
          setIsEditing(false);
        } else {
          const newExpenses = [...expenses, newExpense];
          handleAlert({ type: "success", text: "아이템이 추가되었습니다." });
          setExpenses(newExpenses);
        }
      } else {
        handleAlert({
          type: "error",
          text: "상품과 비용(>0)을 모두 입력 후 제출해주세요.",
        });
      }
      e.target.charge.value = "";
      e.target.price.value = "";
      resetNewExpense();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => setAlert({ show: false }), 7000);
  };

  return (
    <main className="main-container">
      <div className="sub-container">
        {Alert.show ? <AlertBox type={Alert.type} text={Alert.text} /> : null}
        <h1>장바구니</h1>
        <div className="expense-container">
          <ExpenseForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isEditing={isEditing}
            newCharge={newCharge}
            newPrice={newPrice}
          />
        </div>
        <div className="expense-container">
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
        <div className="total-container">
          <p>
            총 합계:{" "}
            <span>
              {expenses.reduce((accu, curr) => {
                return accu + curr.price;
              }, 0)}
              원
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
