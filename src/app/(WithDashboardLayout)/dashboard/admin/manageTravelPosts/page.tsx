"use client";
import { useGetTripQuery } from "@/Redux/api/Trip/tripApi";
import Container from "@/component/Container/Container";
import Loading from "@/component/Loading/Loading";
import NotFound from "@/component/NotFound/NotFound";
import TravelPostCard from "@/component/Trip/TravelPostCard";
import React from "react";

const ManageTravelPosts = () => {
  const { data, isLoading, refetch } = useGetTripQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });
  console.log(data?.data?.data, "ddede");
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
      {data?.data?.data?.length > 0 ? (
        <div className=" grid grid-cols-3 gap-10 ">
          {data?.data?.data?.map((a: any) => (
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
