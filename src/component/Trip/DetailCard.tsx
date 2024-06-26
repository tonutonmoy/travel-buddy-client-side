import React, { useState } from "react";
import SliderCard from "./SliderCard";
import LinkButton from "../Button/LinkButton";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import Link from "next/link";

const DetailCard = ({ data }: any) => {
  const { data: userData, isLoading } = useGetProfileQuery("");

  const {
    photos,
    description,
    itinerary,
    location,
    startDate,
    endDate,
    id,
    userId,
    travelType,
  } = data?.data || {};

  return (
    <section>
      <div className=" flex justify-center  items-center rounded-full py-40 ">
        <div className="card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 lg:card-side w-[90%] md:w-[70%] lg:w-[90%] xl:w-[70%] 2xl:w-[50%]  shadow-xl bg-gradient-to-r from-blue-500/20 to-blue-400/20  text-gray-50">
          <div>
            {" "}
            <figure>
              <SliderCard images={photos} />
            </figure>
          </div>
          <div className="card-body shadow-lg ">
            <div className=" space-y-5  py-5">
              <p>
                <span className=" font-medium ">Travel type:</span> {travelType}{" "}
              </p>
              <p>
                <span className=" font-medium ">Location:</span> {location}{" "}
              </p>
              <p>
                <span className=" font-medium ">Start Date:</span> {startDate}{" "}
              </p>
              <p>
                <span className=" font-medium ">End Date:</span> {endDate}{" "}
              </p>
              <p>
                <span className=" font-medium ">Itinerary:</span> {itinerary}{" "}
              </p>
              <p>
                <span className=" font-medium ">Description:</span>{" "}
                {description}{" "}
              </p>
            </div>

            <div className="card-actions justify-end my-2 inline md:inline   ">
              {userData?.data?.id === userId ? (
                <h1 className=" text-red-500">You are not accessible</h1>
              ) : (
                <Link
                  href={`/dashboard/travel/travelRequest/${id}`}
                  className="w-[170px] block mx-auto rounded-full  bg-gradient-to-r from-blue-500 to-blue-400  hover:shadow-lg font-semibold text-white px-6 py-2"
                >
                  {" "}
                  Travel Request
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
