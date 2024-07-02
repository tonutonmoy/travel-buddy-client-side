"use Client";
import Link from "next/link";

import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";

import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaUsers, FaBook } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdHistory } from "react-icons/md";

const SidebarAllLinks = ({ setIsOpen }: any) => {
  const { data, isLoading } = useGetProfileQuery("");

  const location = usePathname();

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <ul className="menu  lg:p-4  md:w-80 h-screen min-h-full bg-[#394E6E]  text-base-content border-r border-indigo-100">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 lg:p-4 text-sm   border-indigo-100 top-12">
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
                  onClick={() => setIsOpen(false)}
                  href="/dashboard/createTrip"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/createTrip" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <IoIosCreate className="mr-2 text-xl" /> Create Trip
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/dashboard/travel/travelRequestHistory"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/travel/travelRequestHistory" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  {" "}
                  <MdHistory className="mr-2 text-xl" />
                  Travel Request History
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/dashboard/travel/travelPosts"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/travel/travelPosts" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaBook className="mr-2 text-lg" /> Travel Posts
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
                  href="/dashboard/admin/manageTravelPosts"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/admin/manageTravelPosts" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaBook className="mr-2 text-lg" /> Manage Travel Posts
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/dashboard/admin/manageUserAccounts"
                  className={`flex items-center text-white  px-3 py-2.5 font-semibold ${
                    location === "/dashboard/admin/manageUserAccounts" &&
                    " bg-blue-500/10 border rounded-full"
                  }`}
                >
                  <FaUsers className="mr-2 text-lg" /> Manage User Accounts
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
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
