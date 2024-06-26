"use Client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import Loading from "../Loading/Loading";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaUsers, FaBook } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdHistory } from "react-icons/md";

const SidebarAllLinks = () => {
  const { data, isLoading } = useGetProfileQuery("");

  const location = usePathname();

  console.log(location, "location");

  if (isLoading) {
    return (
      <div className="  flex justify-center  items-center h-full">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <ul className="menu p-4   w-52 md:w-80 lg:w-80  xl:w-80 2xl:w-80 h-screen   min-h-full  text-base-content bg-gradient-to-r from-blue-500/30 to-blue-400/30 ">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <>
              <Link
                href="/"
                className="pl-3 mb-4 text-2xl text-white  font-semibold flex items-center"
              >
                <FaHome className="mr-2 " /> Home
              </Link>
            </>
            {data?.data?.role === "User" && (
              <>
                <Link
                  href="/dashboard/createTrip"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/createTrip" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <IoIosCreate className="mr-2 text-lg" /> Create Trip
                </Link>
                <Link
                  href="/dashboard/travel/travelRequestHistory"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/travel/travelRequestHistory" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  {" "}
                  <MdHistory className="mr-2 text-lg" />
                  Travel Request History
                </Link>
                <Link
                  href="/dashboard/travel/travelPosts"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/travel/travelPosts" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaBook className="mr-2 text-lg" /> Travel Posts
                </Link>
                <Link
                  href="/dashboard/profile"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/profile" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaUser className="mr-2 text-lg" /> Profile
                </Link>
              </>
            )}

            {data?.data?.role === "Admin" && (
              <>
                <Link
                  href="/dashboard/admin/manageTravelPosts"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/admin/manageTravelPosts" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaBook className="mr-2 text-lg" /> Manage Travel Posts
                </Link>
                <Link
                  href="/dashboard/admin/manageUserAccounts"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/admin/manageUserAccounts" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaUsers className="mr-2 text-lg" /> Manage User Accounts
                </Link>
                <Link
                  href="/dashboard/profile"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/profile" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaUser className="mr-2 text-lg" /> Profile
                </Link>
              </>
            )}
          </div>
          <div className="  flex items-center px-10  pt-40 font-semibold hover:text-indigo-900 ">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;
