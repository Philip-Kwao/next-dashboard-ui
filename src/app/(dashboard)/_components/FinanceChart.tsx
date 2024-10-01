"use client"
import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const FinanceChart = () => {
  const data = [
    {
      name: "Jan",
      income: 4000,
      expense: 2400,
    },
    {
      name: "Feb",
      income: 3000,
      expense: 1398,
    },
    {
      name: "Mar",
      income: 2000,
      expense: 9800,
    },
    {
      name: "Apr",
      income: 2780,
      expense: 3908,
    },
    {
      name: "May",
      income: 1890,
      expense: 4800,
    },
    {
      name: "Jun",
      income: 2390,
      expense: 3800,
    },
    {
      name: "Jul",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Aug",
      income: 2780,
      expense: 3908,
    },
    {
      name: "Sep",
      income: 1890,
      expense: 4800,
    },
    {
      name: "Nov",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Oct",
      income: 2390,
      expense: 3800,
    },
    {
      name: "Dec",
      income: 3490,
      expense: 4300,
    },
  ];
  return (
    <div className=" shadow-sm w-full bg-white  h-[500px] p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <span>Finance</span>
        <Image src={"/moreDark.png"} alt="more button" width={20} height={20} />
      </div>
      {/* Finance Chart */}
      <LineChart
        width={730}
        height={450}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  axisLine={false} tick={{fill:"#ddd"}} tickLine={false} />
        <YAxis axisLine={false} tick={{fill:"#ddd"}} tickLine={false} />
        <Tooltip />
        <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
        <Line type="monotone" dataKey="income" stroke="#93c5fd" strokeWidth={2} />
        <Line type="monotone" dataKey="expense" stroke="#fde047" strokeWidth={2} />
      </LineChart>
      
    </div>
  );
};

export default FinanceChart;
