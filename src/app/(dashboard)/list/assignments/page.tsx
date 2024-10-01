import React from 'react'
import ListHeader from '../../_components/ListHeader'
import { assignmentsData } from '@/lib/data';
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
      classes: " hidden lg:block",
    },
    {
      title: "Teacher",
      accessor: "teacher",
      classes: "hidden xl:block",
    },
    {
      title: "Due Date",
      accessor: "dueDate",
      classes: "hidden lg:block  ",
    },
    {
      title: "",
      accessor: "",
      classes: "",
    },
  ];

const AssignmentListPage = () => {
  return (
    <div className="bg-white m-4 rounded-lg">
      <ListHeader title='All Assignments' />
      <div className="m-4">
        <thead className="w-full flex items-center justify-between mb-4">
          {tableHeader.map((t) => (
            <tr className={`font-bold text-left w-1/4 ${t.classes}`} key={t.accessor}>
              {t.title}
            </tr>
          ))}
        </thead>
        <tbody className="w-full flex flex-col items-center m-0">
          {assignmentsData.map((aData) => (          
              <tr
                className="flex items-center justify-between w-full  odd:bg-gray-200 py-10 blue-0"
                key={aData.id}
              >
                <td className="w-1/4">
                    <span className="font-bold text-sm">{aData.subject}</span>
                </td>
                <td className="w-1/4 hidden xl:block">{aData.class}</td>
                <td className="w-1/4 hidden lg:block">{aData.teacher}</td>
                <td className="w-1/4">{aData.dueDate}</td>
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

export default AssignmentListPage