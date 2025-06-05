import React, { useState } from 'react';
import BudgetSummary from './components/BudgetSummary';
import TransactionForm from './components/TransactionForm';
import ExpenseList from './components/ExpenseList';
import SpendingChart from './components/SpendingChart';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([
    { description: 'Groceries', amount: 50, type: 'expense', category: 'Food' },
    { description: 'Salary', amount: 1000, type: 'income', category: 'Other' },
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => [...prev, newTransaction]);
  };

  return (
    <div className="App">
      <h1>🚀 Personal Finance Dashboard</h1>
      <BudgetSummary transactions={transactions} />
      <TransactionForm onAdd={handleAddTransaction} />
      <ExpenseList transactions={transactions} />
      <SpendingChart transactions={transactions} />
    </div>
  );
}

export default App;
