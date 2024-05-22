"use client";

import { useCreateTravelBuddyRequestMutation } from "@/Redux/api/TravelBuddyRequestApi/travelBuddyRequestApi";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";

import Loading from "@/component/Loading/Loading";
import TripRequestForm from "@/component/Trip/TripRequestForm";

import React from "react";
import { toast } from "sonner";

const TravelRequest = ({ params }: any) => {
  const { id } = params;

  const [addFunction] = useCreateTravelBuddyRequestMutation();
  const { data, isLoading } = useGetProfileQuery("");

  if (isLoading) {
    return (
      <div className="  h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  console.log(data?.data, "dd");

  const handler = async (e: any) => {
    e.preventDefault();

    const name = e?.target?.name?.value;
    const email = e?.target?.email?.value;
    const number = e?.target?.number?.value;
    const country = e?.target?.country?.value;
    const city = e?.target?.city?.value;

    const res = await addFunction({ tripId: id, userId: data?.data?.id });

    console.log(res, "res");

    if (res?.data.success === true) {
      toast.success(res.data.message);
    }
    if (res?.data.success === false) {
      toast.success(res.data.message);
    }
  };
  return (
    <div>
      {" "}
      <TripRequestForm
        email={data?.data?.email}
        name={data?.data?.name}
        handler={handler}
      />
    </div>
  );
};

export default TravelRequest;
