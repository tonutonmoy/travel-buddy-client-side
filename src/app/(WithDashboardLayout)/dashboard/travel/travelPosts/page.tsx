"use client";
import { useGetPostedTripQuery } from "@/Redux/api/Trip/tripApi";
import Container from "@/component/Container/Container";
import Loading from "@/component/Loading/Loading";
import NotFound from "@/component/NotFound/NotFound";
import TravelPostCard from "@/component/Trip/TravelPostCard";

const TravelPosts = () => {
  //   type TravelBuddyRequest = {
  //     id: number;
  //     photos:
  //     destination: string;
  //     description: string;
  //     startDate: string;
  //     endDate: string;

  //   };

  const { data, isLoading } = useGetPostedTripQuery("", {
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
        <div className=" grid grid-cols-3 gap-10 ">
          {data?.data?.map((a: any) => (
            <TravelPostCard key={a?.id} data={a} />
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

export default TravelPosts;
