import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingChart = ({ transactions = [] }) => {
  const expenseTransactions = transactions.filter(t => t.type === 'expense');

  const categoryTotals = expenseTransactions.reduce((acc, t) => {
    const category = t.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + t.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Spending by Category',
        data: Object.values(categoryTotals),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#96C93D', '#845EC2'],
      },
    ],
  };

  return (
    <div>
      <h2>Spending by Category</h2>
      <Pie data={data} />
    </div>
  );
};

export default SpendingChart;
