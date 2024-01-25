import React from "react";

export const TotalBalance = ({ TotalCash }) => {
  return (
    <>
      <div className="balance-container">
        <h3>Total Balance</h3>
        <h1>${TotalCash}</h1>
      </div>
    </>
  );
};
