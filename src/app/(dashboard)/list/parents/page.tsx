import React from 'react'
import ListHeader from '../../_components/ListHeader'
import { parentsData } from '@/lib/data';
import Image from 'next/image';

const tableHeader = [
    {
      title: "Info",
      accessor: "info",
      classes: "",
    },
    {
      title: "Parent ID",
      accessor: "Parent-id",
      classes: " hidden lg:block",
    },
    {
      title: "Students",
      accessor: "students",
      classes: "hidden xl:block",
    },
    {
      title: "Email",
      accessor: "email",
      classes: "hidden lg:block  ",
    },
    {
      title: "Phone",
      accessor: "phone",
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
          {parentsData.map((pData) => (          
              <tr
                className="flex items-center justify-between w-full  odd:bg-gray-200 py-10 blue-0"
                key={pData.id}
              >
                <td className="w-1/6">
                    <span className="font-bold text-sm">{pData.name}</span>
                </td>
                <td className="w-1/6 hidden lg:block">{pData.id}</td>
                <td className="w-1/6 hidden xl:block">{pData.students.join(",")}</td>
                <td className="w-1/6 hidden lg:block">{pData.email}</td>
                <td className="w-1/6">{pData.phone}</td>
                <td className="w-1/6 hidden xl:block">{pData.address}</td>
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