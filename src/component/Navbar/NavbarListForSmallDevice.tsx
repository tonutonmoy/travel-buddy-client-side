"use client";
import Link from "next/link";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { getUserInfo } from "@/Services/Action/auth.services";
import { usePathname } from "next/navigation";

const NavbarListForSmallDevice = () => {
  const token = getUserInfo();
  const pathName = usePathname();
  return (
    <div
      tabIndex={0}
      className="menu menu-sm bg-gradient-to-r from-blue-500 to-blue-400   dropdown-content mt-3 z-50 p-2 shadow rounded-box w-52"
    >
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
        <Link
          href="/dashboard"
          className="block py-2 px-3 text-gray-100   md:hover:bg-transparent   md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Dashboard
        </Link>
      )}

      <div className=" md:hidden">
        {" "}
        <LoginAndLogout />
      </div>
    </div>
  );
};

export default NavbarListForSmallDevice;
