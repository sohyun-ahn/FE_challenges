import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "콜라", price: 2000 },
    { id: 2, charge: "빵", price: 400 },
    { id: 3, charge: "맥북", price: 30000 },
  ]);

  const handleDelete = (id) => {
    if (id === "all") {
      setExpenses([]);
    } else {
      const newExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(newExpenses);
    }
  };

  const [newExpense, setNewExpense] = useState({
    id: crypto.randomUUID(),
    charge: "",
    price: 0,
  });

  const resetNewExpense = () => {
    setNewExpense({
      id: crypto.randomUUID(),
      charge: "",
      price: 0,
    });
  };

  const handleChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (newExpense.charge !== "" && newExpense.price !== 0) {
        const newExpenses = [...expenses, newExpense];
        e.target.charge.value = "";
        e.target.price.value = "";
        setExpenses(newExpenses);
        resetNewExpense();
      } else {
        alert("상품과 비용을 모두 입력 후 제출해주세요");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="main-container">
      <div className="sub-container">
        <h1>장바구니</h1>
        <div className="expense-container">
          <ExpenseForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="expense-container">
          <ExpenseList expenses={expenses} handleDelete={handleDelete} />
        </div>
        <div className="total-container">
          <p>총 합계:</p>
        </div>
      </div>
    </main>
  );
}

export default App;
