import React from "react";

const TravelRequestHistoryTableList = ({ item }: any) => {
  return (
    <tr key={item?.id} className=" text-gray-50">
      <td className="px-4 py-3 text-sm border">{item?.trip?.destination}</td>
      <td className="px-4 py-3 text-sm border">{item?.status}</td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.startDate}</td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.endDate}</td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.location}</td>
      <td className="px-4 py-3 text-sm border">{item?.trip?.travelType}</td>
    </tr>
  );
};

export default TravelRequestHistoryTableList;
