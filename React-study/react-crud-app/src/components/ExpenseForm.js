import React from "react";
import { MdSend } from "react-icons/md";
import "./ExpenseForm.css";

const ExpenseForm = ({
  handleChange,
  handleSubmit,
  isEditing,
  newCharge,
  newPrice,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">상품</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예) 콜라"
            onChange={handleChange}
            value={newCharge}
          />
        </div>
      </div>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="price">비용</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            placeholder="예) 100"
            onChange={handleChange}
            value={newPrice}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {isEditing ? "수정" : "제출"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
