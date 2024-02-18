import React from "react";
import "./ExpenseList.css";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => (
          <ExpenseItem
            expense={expense}
            key={expense.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <button className="btn" onClick={() => handleDelete("all")}>
        모든 상품 제거 <MdDelete className="btn-icon" />
      </button>
    </>
  );
};

export default ExpenseList;
