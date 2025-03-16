'use client';

import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Page A', uv: 1100, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 1000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 1100, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 1280, pv: 3908, amt: 2000 }, // Special bar (index 3)
  { name: 'Page E', uv: 1490, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 1090, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 1090, pv: 4300, amt: 2100 },
];

const specialBarIndex = 4; // Index of the bar to highlight



const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <Bar dataKey="uv">
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={index === specialBarIndex ? '#E97A20' : '#000000'} 
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
