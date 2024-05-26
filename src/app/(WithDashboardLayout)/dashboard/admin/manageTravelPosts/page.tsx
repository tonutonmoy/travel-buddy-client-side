"use client";

import { useGetTripForAdminQuery } from "@/Redux/api/Trip/tripApi";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import Container from "@/component/Container/Container";
import Loading from "@/component/Loading/Loading";
import NotFound from "@/component/NotFound/NotFound";
import TravelPostCard from "@/component/Trip/TravelPostCard";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import React from "react";

const ManageTravelPosts = () => {
  const { error }: any = useGetProfileQuery("");

  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }
  const { data, isLoading, refetch }: any = useGetTripForAdminQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });
  console.log(data, "ddede");
  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  console.log(data, "s");
  return (
    <Container>
      {data?.data?.length > 0 ? (
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
          {data?.data?.map((a: any) => (
            <TravelPostCard key={a?.id} data={a} refetch={refetch} />
          ))}
        </div>
      ) : (
        <NotFound
          title=""
          semiTitle="Data is not available."
          paragraph="Sorry, we can't find that data."
          button={false}
        />
      )}
    </Container>
  );
};

export default ManageTravelPosts;
