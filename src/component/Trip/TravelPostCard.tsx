import React from "react";
import LinkButton from "../Button/LinkButton";
import Link from "next/link";

const TravelPostCard = ({ data }: any) => {
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
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-20">
      <figure>
        {" "}
        <img className=" h-[300px] w-full" src={photos?.[0]} alt="Mountain" />
      </figure>

      <div className=" space-y-1 px-10 py-5">
        <p className="text-gray-500">
          <span className=" font-medium text-black">Destination:</span>{" "}
          {destination}{" "}
        </p>
        <p className="text-gray-500">
          <span className=" font-medium text-black">startDate:</span>{" "}
          {startDate}{" "}
        </p>
        <p className="text-gray-500">
          <span className=" font-medium text-black">endDate:</span> {endDate}{" "}
        </p>

        <p className="text-gray-500">
          <span className=" font-medium text-black">Description:</span>{" "}
          {description}{" "}
        </p>
      </div>

      <div className="p-4 border-t mx-8 mt-2 flex gap-10 justify-around items-center">
        <div>
          {" "}
          <Link
            href={`/tripDetails/${id}`}
            className="align-middle w-[130px] block select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            eidet
          </Link>
        </div>
        <div>
          <button className="align-middle w-[130px] select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPostCard;
