import React from "react";

export const History = ({ HistoryItem }) => {
  return (
    <>
      {HistoryItem.length === 0 && "No History"}
      {HistoryItem.map((Item) => {
        if (Item.Type) {
          return (
            <div className="history ofincome" key={Item.id}>
              <div className="type">{Item.Text}</div>
              <div className="amount">{Item.Amount}</div>
            </div>
          );
        } else {
          return (
            <div className="history ofexpense">
              <div className="type">{Item.Text}</div>
              <div className="amount">{Item.Amount}</div>
            </div>
          );
        }
      })}
    </>
  );
};
