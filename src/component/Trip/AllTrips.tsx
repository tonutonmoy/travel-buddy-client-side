"use client";

import NotFound from "../NotFound/NotFound";
import Pagination from "../Pagination/Pagination";
import TripCard from "./TripCard";
import { useAppSelector } from "@/Redux/hooks";

const AllTrips = () => {
  const { tripData }: any = useAppSelector((e) => e.trip);

  console.log(tripData?.data, "trip");

  return (
    <div>
      <section className=" grid grid-cols-3">
        {tripData?.data?.map((a: any) => (
          <TripCard key={a?.id} data={a} />
        ))}
      </section>
      <section className={` my-20  flex justify-center`}>
        {tripData?.data?.length > 0 ? (
          <Pagination />
        ) : (
          <NotFound
            title=""
            semiTitle=" Data is not available."
            paragraph=" Sorry, we can't find that data. "
            button={false}
          />
        )}
      </section>
    </div>
  );
};

export default AllTrips;
