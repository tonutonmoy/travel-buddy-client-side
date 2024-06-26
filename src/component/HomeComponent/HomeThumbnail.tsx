"use client";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import HomeSearching from "./HomeSearching";

const HomeThumbnail = () => {
  const { data, isLoading } = useGetProfileQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return "";
  }

  return (
    <div className="  pt-[90px]">
      <div className="relative bg-gradient-to-r  from-purple-600 to-blue-600 h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px] text-white overflow-hidden  rounded">
        <div className="absolute inset-0">
          <img
            src="/home/HomeThumbnail.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight mb-4">
            {/* <span className=" text-blue-400  ">F</span> */}
            Find Your Perfect Travel Buddy
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            href={
              data?.data?.role === "Admin"
                ? "/dashboard"
                : "/dashboard/createTrip"
            }
            className="bg-gradient-to-r from-blue-500 to-blue-400  text-gray-100 hover:bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            {data?.data?.role === "Admin"
              ? "Go To Dashboard"
              : "Share Your Trip"}
          </a>

          <HomeSearching />
        </div>
      </div>
    </div>
  );
};

export default HomeThumbnail;
