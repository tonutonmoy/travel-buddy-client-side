import { baseApi } from "../baseApi";

export const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrip: build.query({
      query: (prams) => ({
        url: `/trips?${prams}`,
        method: "GET",
      }),
    }),
    getTripForFilter: build.query({
      query: () => ({
        url: `/trips`,
        method: "GET",
      }),
    }),
    getSingleTrip: build.query({
      query: (id) => ({
        url: `/trips/${id}`,
        method: "GET",
      }),
    }),
    createTrip: build.mutation({
      query: (data) => {
        return {
          url: "/trips",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetTripQuery,
  useGetTripForFilterQuery,
  useGetSingleTripQuery,
} = tripApi;
