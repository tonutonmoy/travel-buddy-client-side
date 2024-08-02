import Link from "next/link";
import React from "react";
import { IoIosVideocam } from "react-icons/io";
const TravelRequestHistoryTableList = ({ item }: any) => {
  return (
    <tr key={item?.id} className=" text-gray-50">
      <td className="px-4 py-3 text-sm border">{item?.trip?.destination}</td>
      <td className={`px-4 py-3 text-sm border ${item?.status==="REJECTED"&& " text-red-500"} ${item?.status==="APPROVED"&& " text-green-500 flex items-center "} ${item?.status==="PENDING"&& " text-blue-500"}`}> 
        <span className=" block">{item?.status}</span>
      {item?.status==="APPROVED"&& <div className=" flex justify-center w-full">
        <Link href={`/dashboard/travel/videoCalling/${item?.id}`}>
        <IoIosVideocam className=" text-blue-500 text-[27px]  cursor-pointer "  /></Link>
      </div>
 }
      </td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.startDate}</td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.endDate}</td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.location}</td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.travelType}</td>
    </tr>
  );
};

export default TravelRequestHistoryTableList;
