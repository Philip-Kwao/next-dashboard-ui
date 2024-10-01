import Image from "next/image"


const DashboardNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
          <div className="hidden lg:flex items-center gap-2 border border-gray-400 h-10 w-56 rounded-full">
            <Image src={"/search.png"} width={20} height={20} alt="searchicon" className="ml-4 cursor-pointer" />
            <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full placeholder:text-sm text-gray-400
            " />
          </div>
          {/* Icon and User */}
          <div className="flex items-center gap-10 justify-end w-full">
            <div className="flex items-center gap-10 relative">
              <Image src={"/message.png"} width={30} height={30} alt="message icon" />
              <Image src={"/announcement.png"} width={30} height={30} alt="announcement icon" />
              <span className="w-5 h-5 absolute bg-purple-500 rounded-full text-white -top-3 -right-3 text-center text-sm">1</span>
            </div>
            <div className="flex items-center  gap-10">
              <div className="flex flex-col items-end justify-center">
                <h3 className="font-bold">John Doe</h3>
                <span className="text-sm text-gray-400">Student</span>
              </div>
              <Image src={"/avatar.png"} height={40} width={40} alt="avatar" className="rounded-full" />
            </div>
          </div>
        </div>
  )
}

export default DashboardNavbar