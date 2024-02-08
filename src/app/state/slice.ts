"use client"
import { createSlice } from '@reduxjs/toolkit';
import defaultOptions from '../constants/defaultaoptions';

export const optionSlice = createSlice({
  name: 'options',
  initialState: defaultOptions,
  reducers: {
    updateOptions: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateOptions } = optionSlice.actions;

export default optionSlice.reducer;
