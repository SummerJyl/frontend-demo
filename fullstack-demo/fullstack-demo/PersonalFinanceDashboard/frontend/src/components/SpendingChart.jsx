import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const SpendingChart = ({ data }) => {
  const COLORS = ['#f44336', '#4caf50'];

  return (
    <div className="spending-chart">
      <h2>Spending Overview</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="type"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default SpendingChart;
