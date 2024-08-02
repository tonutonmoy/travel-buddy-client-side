import { baseApi } from "../baseApi";

export const travelBuddyRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTravelBuddyRequest: build.query({
      query: () => ({
        url: `/trip/request`,
        method: "GET",
      }),
    }),
    getGotTravelBuddyRequest: build.query({
      query: () => ({
        url: `/trip/gotRequest`,
        method: "GET",
      }),
    }),
    UpdateGotTravelBuddyRequest: build.mutation({
      query: ({data,id}) => ({
        url: `/trip/updateGotRequest/${id}`,
        method: "PUT",
        body: data
      }),
    }),
    createTravelBuddyRequest: build.mutation({
      query: ({
        tripId,
        userId,
        name,
        email,
        number,
        country,
        city,
      }: {
        tripId: string;
        userId: string;
        name: string;
        email: string;
        number: string;
        country: string;
        city: string;
      }) => {
        return {
          url: `/trip/${tripId}/request`,
          method: "POST",
          body: { userId, name, email, number, country, city },
        };
      },
    }),
  }),
});

export const {
  useCreateTravelBuddyRequestMutation,
  useGetTravelBuddyRequestQuery,
  useGetGotTravelBuddyRequestQuery,
 useUpdateGotTravelBuddyRequestMutation
} = travelBuddyRequestApi;
