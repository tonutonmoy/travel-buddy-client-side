import { getUserInfo } from "@/Services/Action/auth.services";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
//   endpoints: () => ({}),
// });

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getUserInfo();

    console.log(token, "token");
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: [],
  refetchOnMountOrArgChange: 30,
  endpoints: () => ({}),
});
