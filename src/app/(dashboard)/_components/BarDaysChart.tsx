"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarDaysChart = () => {
  const data = [
    {
      name: "Monday",
      present: 34,
      absent: 42,
    },
    {
      name: "Tuesday",
      present: 36,
      absent: 32,
    },
    {
      name: "Wednesday",
      present: 35,
      absent: 22,
    },
    {
      name: "Thursday",
      present: 19,
      absent: 42,
    },
    {
      name: "Friday",
      present: 34,
      absent: 42,
    },
  ];
  return (
    // <ResponsiveContainer className={"w-full h-full"}>
  
    <div className="flex bg-white rounded-lg flex-col items-center w-full p-4 my-4">
      <div className="flex items-center justify-between w-full">
        <span>Attendance</span>
        <Image src={"/moreDark.png"} alt="more button" width={20} height={20} />
      </div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tick={{fill:"#ddd"}} tickLine={false} />
        <YAxis axisLine={false} tick={{fill:"#ddd"}} tickLine={false} />
        <Tooltip />
        <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
        <Bar dataKey="present" fill="#93c5fd" legendType="circle" radius={[10,10,0,0]} barSize={20} />
        <Bar barSize={20} dataKey="absent" fill="#fef08a" legendType="circle" radius={[10,10,0,0]} />
      </BarChart>
    </div>
    // </ResponsiveContainer>
  );
};

export default BarDaysChart;
