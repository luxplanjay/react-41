import { configureStore } from '@reduxjs/toolkit';
import { materialsApi, filterSlice } from './materialsSlice';

export const store = configureStore({
  reducer: {
    [materialsApi.reducerPath]: materialsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    materialsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});
