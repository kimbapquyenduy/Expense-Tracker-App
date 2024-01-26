import React from "react";

export const TotalBalance = ({ TotalExpense, TotalIncome }) => {
  return (
    <>
      <div className="balance-container">
        <h3 style={{ margin: "5px" }}>Total Balance</h3>
        <h1 style={{ margin: "5px" }}>${TotalExpense + TotalIncome}</h1>
      </div>
    </>
  );
};
