"use client";
import { getUserInfo } from "@/Services/Action/auth.services";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarList = () => {
  const token = getUserInfo();

  const pathName = usePathname();
  return (
    <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row  md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mb-3">
      <Link
        href="/"
        className={`${
          pathName === "/" && "border-b-2"
        } block py-2 px-3 text-gray-100  hover:bg-gray-100 md:hover:bg-transparent   md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}
        aria-current="page"
      >
        Home
      </Link>

      <Link
        href="/trip"
        className={`${
          pathName === "/trip" && "border-b-2"
        } block py-2 px-3 text-gray-100  hover:bg-gray-100 md:hover:bg-transparent   md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}
      >
        Trip
      </Link>

      <Link
        href="/dashboard/createTrip"
        className="block py-2 px-3 text-gray-100  hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
      >
        Create Trip
      </Link>

      <Link
        href="/about"
        className={`${
          pathName === "/about" && "border-b-2"
        } block py-2 px-3 text-gray-100  hover:bg-gray-100 md:hover:bg-transparent   md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}
      >
        About Us
      </Link>

      {token && (
        <>
          <Link
            href="/dashboard"
            className="block py-2 px-3 text-gray-100   md:hover:bg-transparent   md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Dashboard
          </Link>
        </>
      )}
    </div>
  );
};

export default NavbarList;
