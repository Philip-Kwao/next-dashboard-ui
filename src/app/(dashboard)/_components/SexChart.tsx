"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "total",
    count: 100,
    fill: "#fff",
  },
  {
    name: "male",
    count: 43,
    fill: "#93c5fd",
  },
  {
    name: "female",
    count: 57,
    fill: "#fef08a",
  },
];

const SexChart = () => {
  return (
    <div className="bg-white shadow-sm w-full rounded-lg mx-auto xl:w-1/3 p-4 my-4 h-80 relative">
      <div className="flex items-center justify-evenly">
        <span>Students</span>
        <Image src={"/moreDark.png"} alt="more button" width={20} height={20} />
      </div>

      <div className="w-full h-[85%]">
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="20%"
            outerRadius="100%"
            data={data}
            startAngle={0}
            endAngle={360}
            barSize={32}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <Image
        src={"/malefemale.png"}
        width={30}
        height={30}
        alt="male female"
        className="absolute top-1/2 left-1/2 -translate-x-1/2"
      />

      <div className=" flex items-center justify-evenly  -mt-5">
        <div className="flex flex-col justify-center items-center">
          <span className="w-4 h-4 bg-yellow-200 rounded-full"></span>
          <span className="text-sm">1230</span>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <span className="w-4 h-4 bg-blue-200 rounded-full"></span>
          <span className="text-sm">1230</span>
        </div>
      </div>
    </div>
  );
};

export default SexChart;
