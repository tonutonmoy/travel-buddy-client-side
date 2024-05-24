"use client";

import { useGetTravelBuddyRequestQuery } from "@/Redux/api/TravelBuddyRequestApi/travelBuddyRequestApi";
import Container from "@/component/Container/Container";
import Loading from "@/component/Loading/Loading";
import NotFound from "@/component/NotFound/NotFound";
import Table from "@/component/Table/Table";

import React from "react";

const TravelRequestHistory = () => {
  type Trip = {
    destination: string;
    startDate: string;
    endDate: string;
    location: string;
    travelType: string;
  };

  type TravelBuddyRequest = {
    id: string;
    userId: string;
    status: string;
    trip: Trip;
  };

  const headers = [
    "Destination",
    "Status",
    "Start Date",
    "End Date",
    "location",
    "Travel Type",
  ];

  const { data, isLoading } = useGetTravelBuddyRequestQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  console.log(data, "d");
  return (
    <Container>
      {data?.data?.length > 0 ? (
        // <div className="overflow-x-auto my-20">
        //   <table className="table bg-gray-700 text-white w-full mt-4 border p-10">
        //     {/* head */}
        //     <thead>
        //       <tr className="text-white font-bold text-[15px]">
        //         <th></th>
        //         <th>Destination</th>
        //         <th>Status</th>
        //         <th>Start Date</th>
        //         <th>End Date</th>
        //         <th>location</th>
        //         <th>Travel Type</th>
        //       </tr>
        //     </thead>
        //     {data?.data?.map((a: TravelBuddyRequest, index: number) => (
        //       <tbody key={index}>
        //         {/* row 1 */}

        //         <tr>
        //           <td></td>
        //           <td>{a?.trip?.destination}</td>
        //           <td>{a?.status}</td>
        //           <td>{a?.trip?.startDate}</td>
        //           <td>{a?.trip?.endDate}</td>
        //           <td>{a?.trip?.location}</td>
        //           <td>{a?.trip?.travelType}</td>
        //         </tr>
        //       </tbody>
        //     ))}
        //   </table>
        // </div>

        <Table
          data={data?.data}
          headers={headers}
          condition={"traveTravelRequestHistory"}
        />
      ) : (
        <NotFound
          title={""}
          semiTitle=" Data is not available."
          paragraph=" Sorry, we can't find that data. "
          button={false}
        />
      )}
    </Container>
  );
};

export default TravelRequestHistory;
