import React from "react";
import { useState } from "react";

export const ExpenseForm = ({ ChangeBalance, addItem }) => {
  let [TextValue, setTextValue] = useState("");
  let [AmountValue, setAmountValue] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();
    if (TextValue === "" && AmountValue === "") return;
    if (AmountValue > 0) {
      addItem(TextValue, AmountValue, true);
      ChangeBalance(AmountValue, true);
    } else {
      addItem(TextValue, AmountValue, false);
      ChangeBalance(AmountValue, false);
    }
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <p>Text</p>
        <input
          type="text"
          name=""
          id=""
          className="forminput"
          onChange={(e) => setTextValue(e.target.value)}
        />
        <p htmlFor="">Amount</p>
        <p htmlFor="">(Positive - income, Negative - Expense)</p>
        <input
          type="text"
          name=""
          id=""
          className="forminput"
          onChange={(e) => setAmountValue(e.target.value)}
        />
        <br />

        <button className="ButtonInput">Add Transation</button>
      </form>
    </>
  );
};
