import { configureStore } from '@reduxjs/toolkit';
import { materialsApi } from './materialsSlice';

export const store = configureStore({
  reducer: {
    [materialsApi.reducerPath]: materialsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    materialsApi.middleware,
  ],
});
