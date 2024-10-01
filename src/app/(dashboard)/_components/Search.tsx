import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className="flex items-center gap-2 border border-gray-400 h-10 w-56 rounded-full">
            <Image src={"/search.png"} width={20} height={20} alt="searchicon" className="ml-4 cursor-pointer" />
            <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full placeholder:text-sm text-gray-400
            " />
          </div>
  )
}

export default Search