"use client";

import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";

const NavbarImage = () => {
  const { data, isLoading } = useGetProfileQuery("");

  if (isLoading) {
    return "";
  }

  return <div>{data?.data?.photo && <img src={data?.data?.photo} />}</div>;
};

export default NavbarImage;
