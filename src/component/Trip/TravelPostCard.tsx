import React from "react";

import Link from "next/link";
import { toast } from "sonner";
import { useDeleteTripMutation } from "@/Redux/api/Trip/tripApi";
import { useRouter } from "next/navigation";

const TravelPostCard = ({ data, refetch }: any) => {
  const [deleteFunction] = useDeleteTripMutation();
  const router = useRouter();
  const {
    id,
    userId,
    destination,
    startDate,
    endDate,
    description,
    photos,
    travelType,
  } = data;
  const deleteHandler = async () => {
    try {
      const res = await deleteFunction(id).unwrap();
      if (res?.success === true) {
        toast.success(res.message);
        refetch();
      }
      if (res?.success === false) {
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.success(error?.data?.message);
    }
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 text-gray-50 my-20">
      <figure>
        {" "}
        <img className=" h-[300px] w-full" src={photos?.[0]} alt="Mountain" />
      </figure>

      <div className=" space-y-1 px-10 py-5">
        <p className="">
          <span className=" font-medium ">Destination:</span> {destination}{" "}
        </p>
        <p className="">
          <span className=" font-medium ">startDate:</span> {startDate}{" "}
        </p>
        <p className="">
          <span className=" font-medium ">endDate:</span> {endDate}{" "}
        </p>

        <p className="">
          <span className=" font-medium ">Description:</span> {description}{" "}
        </p>
      </div>

      <div className="p-4 border-t  flex mt-2 md:flex lg:flex  xl:flex  2xl:flex gap-10  items-center">
        <div className=" w-full">
          {" "}
          <Link
            href={`/dashboard/travel/travelPosts/travelPostEdit/${id}`}
            className=" w-full text-center block mx-auto rounded-full  bg-gradient-to-r from-blue-500 to-blue-400  hover:shadow-lg font-semibold text-white px-6 py-2"
          >
            Edit
          </Link>
        </div>
        <div className=" w-full">
          <button
            onClick={deleteHandler}
            className=" w-full text-center block mx-auto rounded-full  bg-gradient-to-r from-red-500 to-red-500  hover:shadow-lg font-semibold text-white px-6 py-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPostCard;
