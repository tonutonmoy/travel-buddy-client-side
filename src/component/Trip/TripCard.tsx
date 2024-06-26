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
    <div className="max-w-sm  overflow-hidden  my-20 text-gray-50 shadow-xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded  ">
      <figure>
        {" "}
        <img className=" h-[300px] w-full" src={photos?.[0]} alt="Mountain" />
      </figure>

      <div className=" space-y-1 px-10 py-5 text-w">
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
          <span className=" font-medium ">Travel type:</span> {travelType}{" "}
        </p>
        <p className="">
          <span className=" font-medium ">Description:</span>{" "}
          {description?.slice(0, 132)}...
        </p>
      </div>

      <div className="p-4 border-t mx-8 mt-2">
        <LinkButton title={" See details"} link={`/tripDetails/${id}`} />
      </div>
    </div>
  );
};

export default TripCard;
