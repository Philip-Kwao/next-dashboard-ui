import React from 'react'
import ListHeader from '../../_components/ListHeader'
import { teachersData } from '@/lib/data'
import Image from 'next/image'

const tableHeader = [
    {
      title: "Info",
      accessor: "info",
      classes: "",
    },
    {
      title: "Teacher ID",
      accessor: "teacher-id",
      classes: " hidden lg:block",
    },
    {
      title: "Phone",
      accessor: "phone",
      classes: "hidden xl:block",
    },
    {
      title: "Subjects",
      accessor: "subjects",
      classes: "hidden lg:block  ",
    },
    {
      title: "Classes",
      accessor: "classes",
      classes: "",
    },
    {
      title: "Address",
      accessor: "address",
      classes: "hidden xl:block ",
    },
    {
      title: "",
      accessor: "",
      classes: "",
    },
  ];

const TeachersListPage = () => {
  return (
    <div className="bg-white m-4 rounded-lg">
      <ListHeader title='All Teachers' />
      <div className="m-4">
        <thead className="w-full flex items-center justify-between mb-4">
          {tableHeader.map((t) => (
            <tr className={`font-bold text-left w-1/6 ${t.classes}`} key={t.accessor}>
              {t.title}
            </tr>
          ))}
        </thead>
        <tbody className="w-full flex flex-col items-center m-0">
          {teachersData.map((tData) => (          
              <tr
                className="flex items-center justify-between w-full  odd:bg-gray-200 py-10 blue-0"
                key={tData.id}
              >
                <td className="flex items-center gap-3 w-1/6">
                  <Image
                    src={tData.photo}
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12 object-cover"
                    alt={tData.name}
                  />
                  <div className="flex flex-col space-y-1">
                    <span className="font-bold text-sm">{tData.name}</span>
                    <span className="text-sm">{tData.email}</span>
                  </div>
                </td>
                <td className="w-1/6 hidden lg:block">{tData.teacherId}</td>
                <td className="w-1/6 hidden xl:block">{tData.phone}</td>
                <td className="w-1/6 hidden lg:block">{tData.subjects.join(",")}</td>
                <td className="w-1/6">{tData.classes.join(",")}</td>
                <td className="w-1/6 hidden xl:block">{tData.address}</td>
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

export default TeachersListPage