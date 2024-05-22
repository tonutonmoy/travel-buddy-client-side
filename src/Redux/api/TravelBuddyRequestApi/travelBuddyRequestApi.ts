import { baseApi } from "../baseApi";

export const travelBuddyRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrip: build.query({
      query: (prams) => ({
        url: `/trips?${prams}`,
        method: "GET",
      }),
    }),
    createTravelBuddyRequest: build.mutation({
      query: ({ tripId, userId }: { tripId: string; userId: string }) => {
        return {
          url: `/trip/${tripId}/request`,
          method: "POST",
          body: { userId },
        };
      },
    }),
  }),
});

export const { useCreateTravelBuddyRequestMutation } = travelBuddyRequestApi;
