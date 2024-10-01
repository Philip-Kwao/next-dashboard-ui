import React from 'react'
import ListHeader from '../../_components/ListHeader'
import { resultsData } from '@/lib/data';
import Image from 'next/image';

const tableHeader = [
    {
      title: "Subject",
      accessor: "subject",
      classes: "",
    },
    {
      title: "Class",
      accessor: "class",
      classes: " hidden md:block",
    },
    {
      title: "Teacher",
      accessor: "teacher",
      classes: "hidden xl:block",
    },
    {
      title: "Student",
      accessor: "student",
      classes: "hidden md:block",
    },
    {
      title: "Date",
      accessor: "date",
      classes: "hidden lg:block  ",
    },
    {
      title: "Score",
      accessor: "score",
      classes: "",
    },
    {
      title: "",
      accessor: "",
      classes: "",
    },
  ];

const ParentsListPage = () => {
  return (
    <div className="bg-white m-4 rounded-lg">
      <ListHeader title='All Parents' />
      <div className="m-4">
        <thead className="w-full flex items-center justify-between mb-4">
          {tableHeader.map((t) => (
            <tr className={`font-bold text-left w-1/6 ${t.classes}`} key={t.accessor}>
              {t.title}
            </tr>
          ))}
        </thead>
        <tbody className="w-full flex flex-col items-center m-0">
          {resultsData.map((rData) => (          
              <tr
                className="flex items-center justify-between w-full  odd:bg-gray-200 py-10 blue-0"
                key={rData.id}
              >
                <td className="w-1/6">
                    <span className="font-bold text-sm">{rData.subject}</span>
                </td>
                <td className="w-1/6 hidden md:block">{rData.class}</td>
                <td className="w-1/6 hidden lg:block">{rData.teacher}</td>
                <td className="w-1/6">{rData.student}</td>
                <td className="w-1/6 hidden lg:block">{rData.date}</td>
                <td className="w-1/6">{rData.score}</td>
                <td className="w-1/6 flex items-center gap-2">
                <Image src={"/edit.png"} width={30} height={30} alt='' className='rounded-full bg-purple-400 p-2 object-cover w-10 h-10' />
                <Image src={"/delete.png"} width={30} height={30} alt='' className='' />
                </td>
              </tr>
          ))}
        </tbody>
      </div>
    </div>
  )
}

export default ParentsListPage