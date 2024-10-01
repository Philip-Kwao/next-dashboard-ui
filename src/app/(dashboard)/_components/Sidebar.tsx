import { Menu } from "@/components/Menu"
import Image from "next/image"

const Sidebar = () => {
  return (
    <div className=" w-[14%] md:w-[10%] lg:w-[16%] xl:w-[14%]  p-4 h-full">
        <div className="flex flex-col ">
          <div className="flex items-center lg:gap-2 ">
            <Image src={"/logo.png"} width={20} height={20} alt="" />
            <span className="hidden lg:block text-gray-400">School Mgt</span>
          </div>
          {/* Sidebar Items */}
          <div className="">
            <Menu />
          </div>
        </div>
      </div>
  )
}

export default Sidebar