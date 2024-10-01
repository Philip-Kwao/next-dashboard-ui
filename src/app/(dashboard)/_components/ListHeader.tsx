import React from 'react'
import Search from './Search'
import Link from 'next/link'
import Image from 'next/image'

const ListHeader = ({title}:{title:string}) => {
  return (
    <div className="flex items-center justify-between p-4">
        <div className="">
          <h3 className="">{title}</h3>
        </div>
        <div className="flex items-center gap-5">
          <Search />
          <div className="flex items-center gap-5">
            <Link href={""} className="">
              <Image src={"/filter.png"} className="rounded-full bg-yellow-200 p-3" height={40} width={40} alt="" />
            </Link>
            <Link href={""} className="">
              <Image src={"/sort.png"} className="rounded-full bg-yellow-200 p-3" height={40} width={40} alt="" />
            </Link>
            <Link href={""} className="">
              <Image src={"/plus.png"} className="rounded-full bg-yellow-200 p-3" height={40} width={40} alt="" />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default ListHeader