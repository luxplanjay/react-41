import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const materialsApi = createApi({
  reducerPath: 'materials',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://62584f320c918296a49543e7.mockapi.io',
  }),
  tagTypes: ['Material'],
  endpoints: builder => ({
    getMaterials: builder.query({
      query: () => ({
        url: '/materials',
        method: 'GET',
      }),
      providesTags: ['Material'],
    }),
    getMaterialById: builder.query({
      query: id => ({
        url: `/materials/${id}`,
        method: 'GET',
      }),
      providesTags: ['Material'],
    }),
    addMaterial: builder.mutation({
      query: values => ({
        url: '/materials',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Material'],
    }),
    deleteMaterial: builder.mutation({
      query: id => ({
        url: `/materials/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Material'],
    }),
    updateMaterial: builder.mutation({
      query: fields => ({
        url: `/materials/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Material'],
    }),
  }),
});

export const {
  useGetMaterialsQuery,
  useAddMaterialMutation,
  useDeleteMaterialMutation,
  useGetMaterialByIdQuery,
  useUpdateMaterialMutation,
} = materialsApi;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
