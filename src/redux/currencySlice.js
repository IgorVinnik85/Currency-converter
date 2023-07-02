import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: '',
  reducers: {
    setCurrency(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
