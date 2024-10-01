import Image from "next/image";
type UserCardProp = {
    count:number,
    user:string
}
const UserCard = ({count, user}:UserCardProp) => {
  return (
    <div className="flex flex-col items-start justify-between w-full md:w-96 h-32 odd:bg-yellow-200 even:bg-blue-300 rounded-xl p-2">
        <div className="flex items-center justify-between w-full">
          <span className="px-2 py-1 bg-white rounded-full text-xs text-green-600">
            2024/25
          </span>
          <Image src={"/more.png"} height={20} width={20} alt="more" className="cursor-pointer"/>
        </div>
        <span className="font-extrabold text-xl tracking-wider">{count}</span>
        <span className="text-xs font-semibold text-gray-400">{user}</span>
      
    </div>
  );
};

export default UserCard;
