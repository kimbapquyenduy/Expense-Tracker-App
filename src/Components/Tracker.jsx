import React from "react";

export const Tracker = ({ TotalExpense, TotalIncome }) => {
  return (
    <div
      className="tracker-container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="tracker-sub-container">
        <div className="income-text">INCOME</div>
        <div className="income">{TotalIncome}</div>
      </div>
      <div className="tracker-sub-container">
        <div className="expense-text">EXPENSE</div>
        <div className="expense">{TotalExpense}</div>
      </div>
    </div>
  );
};
