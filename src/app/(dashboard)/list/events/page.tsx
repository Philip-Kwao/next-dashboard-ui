import React from 'react'
import ListHeader from '../../_components/ListHeader';
import { eventsData } from '@/lib/data';
import Image from 'next/image';

const tableHeader = [
    {
      title: "Name",
      accessor: "name",
      classes: "",
    },
    {
      title: "Class",
      accessor: "class",
      classes: "",
    },
    {
      title: "Date",
      accessor: "date",
      classes: "hidden md:block",
    },
    {
      title: "Start Time",
      accessor: "start-time",
      classes: "hidden md:block",
    },
    {
      title: "End Time",
      accessor: "end-time",
      classes: "hidden md:block",
    },
    {
      title: "",
      accessor: "",
      classes: "",
    },
  ];

const SubjectListPage = () => {
  return (
    <div className="bg-white m-4 rounded-lg">
      <ListHeader title='All Events' />
      <div className="m-4">
        <thead className="w-full flex items-center justify-between mb-4">
          {tableHeader.map((t) => (
            <tr className={`font-bold text-left w-1/6 ${t.classes}`} key={t.accessor}>
              {t.title}
            </tr>
          ))}
        </thead>
        <tbody className="w-full flex flex-col items-center m-0">
          {eventsData.map((evData) => (          
              <tr
                className="flex items-center justify-between w-full  odd:bg-gray-200 py-10 blue-0"
                key={evData.id}
              >
                <td className="w-1/6">
                    <span className="font-bold text-sm">{evData.title}</span>
                </td>
                <td className="w-1/6">{evData.class}</td>
                <td className="w-1/6 hidden md:block">{evData.date}</td>
                <td className="w-1/6 hidden md:block">{evData.startTime}</td>
                <td className="w-1/6 hidden md:block">{evData.endTime}</td>
                <td className="w-1/6 flex items-center gap-2">
                <Image src={"/edit.png"} width={30} height={30} alt='' className='cursor-pointer bg-purple-200' />
                <Image src={"/delete.png"} width={30} height={30} alt='' className='cursor-pointer' />
                </td>
              </tr>
          ))}
        </tbody>
      </div>
    </div>
  )
}

export default SubjectListPage