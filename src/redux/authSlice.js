import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

export const exchangeApi = createApi({
  reducerPath: 'exchange',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.apilayer.com/fixer/',
  }),

  endpoints: builder => ({
    getExchanges: builder.query({
      query: () => ({
        url: 'symbols',
        headers: {
          apikey: 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y',
        },
      }),
    }),
    getLatestCurr: builder.query({
      query: (symbols, base) => ({
        url: `latest?symbols=${symbols}&base=${base}`,
        headers: {
          apikey: 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y',
        },
      }),
    }),
  }),
});

export const { useGetExchangesQuery, useGetLatestCurrQuery } = exchangeApi;
