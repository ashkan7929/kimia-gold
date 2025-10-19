import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vemclub.com/api/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('auth.token');
      console.log('token?', localStorage.getItem('auth.token'));

      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    // لیست سفارش‌ها
    getOrders: builder.query({
      query: () => '/Order',
      providesTags: ['Orders'],
    }),
    // جزئیات یک سفارش
    getOrder: builder.query({
      query: (id) => `/Order/${id}`,
      providesTags: (_, __, id) => [{ type: 'Orders', id }],
    }),
    // ایجاد سفارش جدید
    createOrder: builder.mutation({
      query: (body) => ({
        url: '/Order',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Orders'],
    }),

    // حذف سفارش
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/Order/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
