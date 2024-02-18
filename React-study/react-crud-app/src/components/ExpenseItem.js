import React from "react";
import "./ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.price}원</span>
      </div>
      <button className="edit-btn">
        <MdEdit />
      </button>
      <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
        <MdDelete />
      </button>
    </li>
  );
};

export default ExpenseItem;
