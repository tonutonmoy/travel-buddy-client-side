import React from "react";

const TravelRequestHistoryTableList = ({ item }: any) => {
  return (
    <tr key={item?.id} className="text-gray-700">
      <td className="px-4 py-3 text-sm border">
        <img
          className=" rounded-full h-[50px] w-[50px]"
          src={item?.photo}
          alt=""
        />
      </td>

      <td className="px-4 py-3 text-sm border">{item?.name}</td>
      <td className="px-4 py-3 text-sm border">{item?.email}</td>
      <td className="px-4 py-3 text-sm border">{item?.userStatus}</td>
      <td className="px-4 py-3 text-sm border">{item?.role}</td>

      <td className="px-4 py-3 text-sm border"></td>

      <td className="px-4 py-3 text-sm border"></td>
    </tr>
  );
};

export default TravelRequestHistoryTableList;
