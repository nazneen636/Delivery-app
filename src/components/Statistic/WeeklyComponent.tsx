'use client'

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Sample monthly statistics data
const data = [
  { month: "Jan", revenue: 4000, users: 2400 },
  { month: "Feb", revenue: 3000, users: 1398 },
  { month: "Mar", revenue: 2000, users: 5800 },
  { month: "Apr", revenue: 2780, users: 3908 },
  { month: "May", revenue: 1890, users: 4800 },
  { month: "Jun", revenue: 2390, users: 3800 },
  { month: "Jul", revenue: 3490, users: 4300 },
  { month: "Aug", revenue: 3200, users: 4000 },
  { month: "Sep", revenue: 2800, users: 3700 },
  { month: "Oct", revenue: 3100, users: 4500 },
  { month: "Nov", revenue: 4200, users: 4900 },
  { month: "Dec", revenue: 5000, users: 5200 }
];

const WeeklyComponent = () => {
  return (
    <div className="w-full h-[300px]">
      <h2 className="text-[18.33px] font-normal ">Highest</h2>
      <h2 className="text-[18.33px] font-normal ">5,580,200</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="month" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="users" stroke="#B8B5E8" fill="#B8B5E8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyComponent;
