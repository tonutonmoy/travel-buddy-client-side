"use client";

import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import { getUserInfo } from "@/Services/Action/auth.services";

const NavbarImage = () => {
  const token = getUserInfo();
  const { data, isLoading } = useGetProfileQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return "";
  }

  return (
    <div>
      {token && (
        <div>{data?.data?.photo && <img src={data?.data?.photo} />}</div>
      )}
    </div>
  );
};

export default NavbarImage;
