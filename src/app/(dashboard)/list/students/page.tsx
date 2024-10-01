import { studentsData } from "@/lib/data";
import ListHeader from "../../_components/ListHeader";
import Image from "next/image";

const tableHeader = [
  {
    title: "Info",
    accessor: "info",
    classes: "",
  },
  {
    title: "Student ID",
    accessor: "student-id",
    classes: " hidden lg:block",
  },
  {
    title: "Phone",
    accessor: "phone",
    classes: "hidden xl:block",
  },
  {
    title: "Grade",
    accessor: "grade",
    classes: "hidden lg:block  ",
  },
  {
    title: "Class",
    accessor: "class",
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
const StudentList = () => {
  return (
    <div className="bg-white m-4 rounded-lg">
      <ListHeader title="All Students" />
      <div className="m-4">
        <thead className="w-full flex items-center justify-between mb-4">
          {tableHeader.map((t) => (
            <tr className={`font-bold text-left w-1/6 ${t.classes}`} key={t.accessor}>
              {t.title}
            </tr>
          ))}
        </thead>
        <tbody className="w-full flex flex-col items-center m-0">
          {studentsData.map((sData) => (          
              <tr
                className="flex items-center justify-between w-full  odd:bg-gray-200 py-10 blue-0"
                key={sData.id}
              >
                <td className="flex items-center gap-3 w-1/6">
                  <Image
                    src={sData.photo}
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12 object-cover"
                    alt={sData.name}
                  />
                  <div className="flex flex-col space-y-1">
                    <span className="font-bold text-sm">{sData.name}</span>
                    <span className="text-sm">{sData.email}</span>
                  </div>
                </td>
                <td className="w-1/6 hidden lg:block">{sData.studentId}</td>
                <td className="w-1/6 hidden xl:block">{sData.phone}</td>
                <td className="w-1/6 hidden lg:block">{sData.grade}</td>
                <td className="w-1/6">{sData.class}</td>
                <td className="w-1/6 hidden xl:block">{sData.address}</td>
                <td className="w-1/6 flex items-center gap-2">
                <Image src={"/edit.png"} width={30} height={30} alt='' className='rounded-full bg-purple-400 p-2 object-cover w-10 h-10' />
                <Image src={"/delete.png"} width={30} height={30} alt='' className='' />
                </td>
              </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default StudentList;
