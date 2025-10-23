// src/store/api/orderApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { OrderDto, PlaceOrderDto } from '../../types/order';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vemclub.com/api/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('auth.token'); // یا از getState بخوان
      if (token) headers.set('authorization', `Bearer ${token}`);
      headers.set('content-type', 'application/json');
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Order', 'OrderList'],
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderDto, PlaceOrderDto>({
      query: (body) => ({
        url: '/Order',    // نه /api/Order
        method: 'POST',
        body,
      }),
      invalidatesTags: ['OrderList'],
    }),
    cancelOrder: builder.mutation<OrderDto | { success: boolean }, string>({
      query: (id) => ({
        url: `/Order/${id}/cancel`,
        method: 'POST',
        body: {}, // بعضی بک‌اندها POST خالی می‌خواهند
      }),
      invalidatesTags: (_r, _e, id) => [{ type: 'Order', id }, 'OrderList'],
    }),
    getOrders: builder.query<OrderDto[], void>({
      query: () => ({ url: '/Order' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map((o) => ({ type: 'Order' as const, id: o.id })),
              { type: 'OrderList' as const },
            ]
          : [{ type: 'OrderList' as const }],
    }),
    getOrderById: builder.query<OrderDto, string>({
      query: (id) => ({ url: `/Order/${id}` }),
      providesTags: (_r, _e, id) => [{ type: 'Order', id }],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useCancelOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
} = orderApi;
