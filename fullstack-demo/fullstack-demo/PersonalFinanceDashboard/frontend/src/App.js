import React, { useState } from 'react';
import './App.css';

import BudgetSummary from './components/BudgetSummary';
import TransactionForm from './components/TransactionForm';
import ExpenseList from './components/ExpenseList';
import SpendingChart from './components/SpendingChart';

function App() {
  const [transactions, setTransactions] = useState([
    // Optional initial transactions
    { description: 'Groceries', amount: 50, type: 'expense' },
    { description: 'Salary', amount: 1000, type: 'income' },
  ]);

  // Handler to add new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Personal Finance Dashboard</h1>

      <BudgetSummary transactions={transactions} />
      <TransactionForm onAdd={handleAddTransaction} />
      <ExpenseList transactions={transactions} />
      <SpendingChart transactions={transactions} />
    </div>
  );
}

export default App;
