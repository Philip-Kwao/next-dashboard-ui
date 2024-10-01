import React from 'react'
import ListHeader from '../../_components/ListHeader'
import { examsData } from '@/lib/data';

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
      classes: "",
    },
    {
      title: "Date",
      accessor: "date",
      classes: "",
    },
    {
      title: "",
      accessor: "",
      classes: "",
    },
  ];

const LessonsListPage = () => {
  return (
    <div className="bg-white m-4 rounded-lg">
      <ListHeader title='All Exams' />
      <div className="m-4">
        <thead className="w-full flex items-center justify-between mb-4">
          {tableHeader.map((t) => (
            <tr className={`font-bold text-left w-1/4 ${t.classes}`} key={t.accessor}>
              {t.title}
            </tr>
          ))}
        </thead>
        <tbody className="w-full flex flex-col items-center m-0">
          {examsData.map((eData) => (          
              <tr
                className="flex items-center justify-between w-full  odd:bg-gray-200 py-10 blue-0"
                key={eData.id}
              >
                <td className="w-1/4">
                    <span className="font-bold text-sm">{eData.subject}</span>
                </td>
                <td className="w-1/4">
                    <span className=" text-sm">{eData.class}</span>
                </td>
                <td className="w-1/4 hidden md:block">{eData.teacher}</td>
                <td className="w-1/4 hidden lg:block">{eData.date}</td>
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

export default LessonsListPage