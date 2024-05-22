import Link from "next/link";
import LinkButton from "../Button/LinkButton";

const TripCard = ({ data }: any) => {
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
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-[200px] overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={photos?.[0]}
          alt="Mountain"
        />
      </div>

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
          <span className=" font-medium text-black">Travel type:</span>{" "}
          {travelType}{" "}
        </p>
        <p className="text-gray-500">
          <span className=" font-medium text-black">Description:</span>{" "}
          {description}{" "}
        </p>
      </div>

      <div className="p-4 border-t mx-8 mt-2">
        <LinkButton title={" See details"} link={`/tripDetails/${id}`} />
      </div>
    </div>
  );
};

export default TripCard;
