"use client"

import Loading from "@/component/Loading/Loading";
import NotFound from "@/component/NotFound/NotFound";
import Table from "@/component/Table/Table";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import { useGetGotTravelBuddyRequestQuery, useUpdateGotTravelBuddyRequestMutation,  } from "@/Redux/api/TravelBuddyRequestApi/travelBuddyRequestApi";
import Container from "@/component/Container/Container";
import { toast } from "sonner";

const gotRequestHistory = () => {
  const { data, refetch,isLoading, error }: any = useGetGotTravelBuddyRequestQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });
  const [updateFunction] = useUpdateGotTravelBuddyRequestMutation();

  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }

  const statusHandler = async (data: string, id: string) => {

    console.log(data,id)
    try {
      const updateData = await updateFunction({
        data: { status: data },
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

  console.log(data)
  const headers = [
    "Name",
    "Email",,
    "Number",
    "Status",
    "Change Status",
    "Tripe Detail",
  ];
  
  return (
   
      <Container>
      {data?.data?.length > 0 ? (
        <Table
          data={data?.data}
          headers={headers}
          condition={"gotTravelRequestHistory"}
          statusHandler={statusHandler}
        />
      ) : (
        <NotFound
          title={""}
          semiTitle=" Data is not available."
          paragraph=" Sorry, we can't find that data. "
          button={false}
        />
      )}
    </Container>
    
  );
};

export default gotRequestHistory;