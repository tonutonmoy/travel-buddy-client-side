import Link from "next/link";
import React from "react";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";

const SidebarAllLinks = () => {
  return (
    <div>
      <ul className="menu p-4   w-52 md:w-80 lg:w-80  xl:w-80 2xl:w-80   min-h-full bg-base-200 text-base-content">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <Link href="/" className="pl-3 mb-4 text-2xl font-semibold ">
              Travel-Buddy
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center px-3 py-2.5 font-bold hover:text-indigo-900 hover:border rounded-full"
            >
              Profile
            </Link>
            <Link
              href="/dashboard/createTrip"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Create Trip
            </Link>
            <Link
              href="/dashboard/travel/travelRequestHistory"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Travel Posts
            </Link>
            <Link
              href="/dashboard/travel/travelPosts"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              Travel Request History
            </Link>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
            >
              PRO Account
            </a>
          </div>
          <div className="  flex items-center px-10  pt-40 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;