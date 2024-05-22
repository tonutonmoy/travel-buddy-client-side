import React, { useState } from "react";
import SliderCard from "./SliderCard";
import LinkButton from "../Button/LinkButton";

const DetailCard = ({ data }: any) => {
  console.log(data?.data, "dd");

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
    <div className=" flex justify-center h-screen items-center">
      <div className="card lg:card-side w-[90%] md:w-[70%] lg:w-[90%] xl:w-[70%] 2xl:w-[50%]  bg-base-100 shadow-xl">
        <figure>
          <SliderCard images={photos} />
        </figure>
        <div className="card-body ">
          <div className=" space-y-5  py-5">
            <p className="text-gray-500">
              <span className=" font-medium text-black">Travel type:</span>{" "}
              {travelType}{" "}
            </p>
            <p className="text-gray-500">
              <span className=" font-medium text-black">Location:</span>{" "}
              {location}{" "}
            </p>
            <p className="text-gray-500">
              <span className=" font-medium text-black">Start Date:</span>{" "}
              {startDate}{" "}
            </p>
            <p className="text-gray-500">
              <span className=" font-medium text-black">End Date:</span>{" "}
              {endDate}{" "}
            </p>
            <p className="text-gray-500">
              <span className=" font-medium text-black">Itinerary:</span>{" "}
              {itinerary}{" "}
            </p>
            <p className="text-gray-500">
              <span className=" font-medium text-black">Description:</span>{" "}
              {description}{" "}
            </p>
          </div>

          <div className="card-actions justify-end my-2 inline md:inline   ">
            <LinkButton
              link={`/dashboard/travel/travelRequest/${id}`}
              title={"Travel Request"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
