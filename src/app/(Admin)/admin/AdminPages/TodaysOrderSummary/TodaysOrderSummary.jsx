"use client";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Total Sales Today", value: 12, color: "#232a3b" },
  { name: "Pending Orders", value: 8, color: "#f7e09e" },
  { name: "Delivered Today", value: 10, color: "#2ecc40" },
  { name: "Shipped Today", value: 7, color: "#e040fb" },
  { name: "Cancelled Today", value: 6, color: "#ff1744" },
  { name: "On The Way", value: 9, color: "#26c6da" },
];

const totalOrders = data.reduce((sum, item) => sum + item.value, 0);

const TodaysOrderSummary = () => (
  <div className="bg-gray-50 p-6 border border-gray-200 rounded-md  shadow-md">
    <h3 className="mb-4 text-lg font-semibold text-gray-800 text-center">
      Today's Order Summary
    </h3>
    <div className="flex justify-center items-center gap-x-8">
     
      <div className="relative w-[240px] h-[240px] flex items-center justify-center">
        <PieChart width={240} height={240}>
          <Pie
            data={data}
            cx={120}
            cy={120}
            innerRadius={80}
            outerRadius={110}
            paddingAngle={2}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#232a3b]">
            {totalOrders}
          </span>
          <span className="text-base text-[#232a3b]">Orders Today</span>
        </div>
      </div>

      
      <ul className="ml-8 space-y-2">
        {data.map((entry) => (
          <li
            key={entry.name}
            className="flex items-center text-sm text-[#232a3b]"
          >
            <span
              className="inline-block w-4 h-4 rounded mr-2"
              style={{ background: entry.color }}
            />
            <span>{entry.name}</span>
            <span className="ml-2 font-semibold">({entry.value})</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TodaysOrderSummary;
