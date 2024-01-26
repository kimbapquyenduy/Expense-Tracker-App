import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TotalBalance } from "./Components/TotalBalance";
import { Tracker } from "./Components/Tracker";
import { History } from "./Components/History";
import { ExpenseForm } from "./Components/ExpenseForm";

function App() {
  const [TotalIncome, setTotalIncome] = useState(0);
  const [TotalExpense, setTotalExpense] = useState(0);
  const [HistoryItem, setHistoryItem] = useState([]);

  function addItem(Text, Amount, Type) {
    setHistoryItem((currentItem) => {
      return [
        ...currentItem,
        {
          id: crypto.randomUUID(),
          Text,
          Amount,
          Type,
        },
      ];
    });
  }
  function ChangeBalance(Ammount, Type) {
    if (Type) setTotalIncome(parseInt(TotalIncome) + parseInt(Ammount));
    else setTotalExpense(parseInt(TotalExpense) + parseInt(Ammount));
  }

  return (
    <>
      <div
        className="Expense-container"
        style={{ textAlign: "left", padding: " 0 35%" }}
      >
        <h1 style={{ padding: "5px 0" }}>Expense Tracker</h1>
        <TotalBalance TotalIncome={TotalIncome} TotalExpense={TotalExpense} />
        <Tracker TotalIncome={TotalIncome} TotalExpense={TotalExpense} />
        <h2 style={{ padding: "5px ", borderBottom: "1px solid black" }}>
          History
        </h2>
        <History HistoryItem={HistoryItem} />
        <h2 style={{ padding: "5px ", borderBottom: "1px solid black" }}>
          Add New Transactions
        </h2>
        <ExpenseForm ChangeBalance={ChangeBalance} addItem={addItem} />
      </div>
    </>
  );
}

export default App;
