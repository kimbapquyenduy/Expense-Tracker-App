import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TotalBalance } from "./Components/TotalBalance";
import { Tracker } from "./Components/Tracker";
import { History } from "./Components/History";
import { ExpenseForm } from "./Components/ExpenseForm";

function App() {
  const [TotalIncome, setTotalIncome] = useState(200);
  const [TotalExpense, setTotalExpense] = useState(300);
  const [TotalCash, setTotalCash] = useState(TotalIncome + TotalExpense);

  return (
    <>
      <div
        className="Expense-container"
        style={{ textAlign: "left", padding: " 0 35%" }}
      >
        <h1 style={{ padding: "5px 0" }}>Expense Tracker</h1>
        <TotalBalance TotalCash={TotalCash} />
        <Tracker TotalIncome={TotalIncome} TotalExpense={TotalExpense} />
        <h1 style={{ padding: "10px ", borderBottom: "1px solid black" }}>
          History
        </h1>
        <History />
        <h1 style={{ padding: "10px ", borderBottom: "1px solid black" }}>
          Add New Transactions
        </h1>
        <ExpenseForm />
      </div>
    </>
  );
}

export default App;
