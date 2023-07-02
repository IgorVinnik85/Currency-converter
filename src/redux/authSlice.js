import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

export const exchangeApi = createApi({
  reducerPath: 'exchange',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.exchangeratesapi.io/v1/',
  }),

  endpoints: builder => ({
    getExchanges: builder.query({
      query: () => ({
        url: 'symbols?access_key=b68e63fc48d56c45757d4e6fa865325a',
      }),
    }),
  }),
});

export const { useGetExchangesQuery } = exchangeApi;
