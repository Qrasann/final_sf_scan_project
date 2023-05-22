import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import transformResponse from "./transforms";

import { setCredentials } from "../slices/authSlice";
import { setAccountInfo } from "../slices/accountSlice";

import { API_BASE_URL } from "../../constants";

export const scanApi = createApi({
  reducerPath: "scanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,

    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");

      const accessToken = getState().auth.accessToken;

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/account/login",
        method: "POST",
        body: credentials,
      }),

      onQueryStarted(args, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(({ data }) => {
            dispatch(setCredentials(data));
          })
          .catch((error) => {
            // Handle error
          });
      },
    }),

    getAccountInfo: builder.query({
      query: () => ({
        url: "/account/info",
      }),

      transformResponse: (result) => result.eventFiltersInfo,

      onQueryStarted(args, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(({ data }) => {
            dispatch(setAccountInfo(data));
          })
          .catch((error) => {
            // Handle error
          });
      },
    }),

    getObjectSearchHistograms: builder.query({
      query: (request) => ({
        url: "/objectsearch/histograms",
        method: "POST",
        body: request,
      }),

      transformResponse: transformResponse.getObjectSearchHistograms,
    }),

    getObjectSearch: builder.query({
      query: (request) => ({
        url: "/objectsearch",
        method: "POST",
        body: request,
      }),

      transformResponse: (result) => result.items,
    }),

    getDocuments: builder.query({
      query: (request) => ({
        url: "/documents",
        method: "POST",
        body: request,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAccountInfoQuery,
  useGetObjectSearchHistogramsQuery,
  useGetObjectSearchQuery,
  useGetDocumentsQuery,
} = scanApi;
