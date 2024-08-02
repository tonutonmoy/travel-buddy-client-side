import LinkButton from "../Button/LinkButton";
import { IoIosVideocam } from "react-icons/io";

import Link from "next/link";

const GotRequestHistoryTableList = ({ item,statusHandler }: any) => {

   
    
  return (
    
        <tr key={item?.id} className=" text-gray-50">
      <td className="px-4 py-3 text-sm border">{item?.name}</td>
      <td className="px-4 py-3 text-sm border">{item?.email}</td>
      <td className="px-4 py-3 text-sm border">{item?.number}</td>
      <td className={`px-4 py-3 text-sm border ${item?.status==="REJECTED"&& " text-red-500"} ${item?.status==="APPROVED"&& " text-green-500 "} ${item?.status==="PENDING"&& " text-blue-500"}`}>

      <span className=" block">{item?.status}</span>
      {item?.status==="APPROVED"&& <div className=" flex justify-center w-full">
        <Link href={`/dashboard/travel/videoCalling/${item?.id}`}><IoIosVideocam className=" text-blue-500 text-[27px]  cursor-pointer "  /></Link>
       
      </div>}
      </td>
      <td className="px-4 py-3 text-sm border flex gap-5">
      <div
          onClick={() => statusHandler("APPROVED", item?.id)}
          className="w-[150px] cursor-pointer text-center block mx-auto rounded-full  bg-gradient-to-r from-green-500 to-green-400  hover:shadow-lg font-semibold text-white px-6 py-2"
        >
         APPROVED
        </div>
      <div
          onClick={() => statusHandler("REJECTED", item?.id)}
          className="w-[150px] cursor-pointer text-center block mx-auto rounded-full  bg-gradient-to-r from-red-500 to-red-400  hover:shadow-lg font-semibold text-white px-6 py-2"
        >
         REJECTED
        </div>
      </td>
      <td className="px-4 py-3 text-sm border">
      <LinkButton title={" See details"} link={`/tripDetails/${item?.tripId}`} />
      </td>
      
    </tr>
    
  );
};

export default GotRequestHistoryTableList;