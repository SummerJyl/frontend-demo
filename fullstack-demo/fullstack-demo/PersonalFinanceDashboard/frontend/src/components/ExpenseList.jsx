import React from 'react';

const ExpenseList = ({ transactions }) => {
  return (
    <div className="expense-list">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.description}: ${t.amount} ({t.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
