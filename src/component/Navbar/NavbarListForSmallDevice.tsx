"use client";
import Link from "next/link";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { getUserInfo } from "@/Services/Action/auth.services";
import { usePathname } from "next/navigation";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";

const NavbarListForSmallDevice = () => {
  const token = getUserInfo();
  const pathName = usePathname();
  const { data, isLoading } = useGetProfileQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return null;
  }

  return (
    <div
      tabIndex={0}
      className="menu menu-sm bg-[#394E6E]  dropdown-content mt-3 z-50 p-2 shadow rounded-box w-52  md:py-5 space-y-1 md:space-y-2 text-center "
    >
      <Link
        href="/"
        className={`${
          pathName === "/" &&
          "bg-blue-500/10 border rounded-full font-medium md:font-semibold"
        } block p-1    hover:font-medium  md:hover:bg-transparent   md:p-1 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}
        aria-current="page"
      >
        Home
      </Link>

      <Link
        href="/trip"
        className={`${
          pathName === "/trip" &&
          "bg-blue-500/10 border rounded-full font-medium md:font-semibold"
        } block p-1    hover:font-medium  md:hover:bg-transparent   md:p-1 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}
      >
        Trip
      </Link>

      {data?.data?.role === "Admin" ? (
        ""
      ) : (
        <Link
          href="/dashboard/createTrip"
          className="block p-1   text-gray-100  md:hover:bg-transparent  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
        >
          Create Trip
        </Link>
      )}

      <Link
        href="/about"
        className={`${
          pathName === "/about" &&
          "bg-blue-500/10 border rounded-full  font-medium md:font-semibold"
        } block p-1   md:hover:bg-transparent   md:p-1 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent `}
      >
        About Us
      </Link>

      {token && (
        <Link
          href="/dashboard"
          className="block p-1  text-gray-100   md:hover:bg-transparent   md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Dashboard
        </Link>
      )}

      <div className=" md:hidden flex justify-center my-2">
        {" "}
        <LoginAndLogout />
      </div>
    </div>
  );
};

export default NavbarListForSmallDevice;
