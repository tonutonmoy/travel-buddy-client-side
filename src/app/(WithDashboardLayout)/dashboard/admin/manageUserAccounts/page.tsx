"use client";

import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "@/Redux/api/UsersManage/usersManageApi";
import Loading from "@/component/Loading/Loading";
import Table from "@/component/Table/Table";
import React from "react";
import { toast } from "sonner";

const ManageUserAccounts = () => {
  const { data, refetch, isLoading } = useGetAllUsersQuery("");
  const [updateFunction] = useUpdateUserStatusMutation();

  const headers = [
    "Image",
    "name",
    "email",
    "status",
    "Role",
    "Change Status",
    "Change Role",
  ];

  if (isLoading) {
    <div>
      <Loading />
    </div>;
  }

  const roleHandler = async (data: string, id: string) => {
    try {
      const updateData = await updateFunction({
        data: { role: data },
        id,
      }).unwrap();

      if (updateData?.success === true) {
        toast.success(updateData.message);
        refetch();
      }
      if (updateData?.success === false) {
        toast.success(updateData.message);
      }
    } catch (error: any) {
      toast.success(error?.data?.message);
    }
  };
  const statusHandler = async (data: string, id: string) => {
    try {
      const updateData = await updateFunction({
        data: { userStatus: data },
        id,
      }).unwrap();

      if (updateData?.success === true) {
        toast.success(updateData.message);
        refetch();
      }
      if (updateData?.success === false) {
        toast.success(updateData.message);
      }
    } catch (error: any) {
      toast.success(error?.data?.message);
    }
  };

  console.log(data?.data, "d");
  return (
    <div>
      <Table
        data={data?.data}
        roleHandler={roleHandler}
        statusHandler={statusHandler}
        headers={headers}
        condition={"userTable"}
      />
    </div>
  );
};

export default ManageUserAccounts;
