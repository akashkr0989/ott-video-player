"use client"

import { configureStore } from '@reduxjs/toolkit';
import optionsSlice from './slice';

export default configureStore({
  reducer: {
    option: optionsSlice,
  },
});
