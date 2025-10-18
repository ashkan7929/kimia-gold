// src/store/api/orderApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../utils/getToken';

/** === Schemas (طبق Swagger) === */
export type PlaceOrderLineDto = {
    assetCode?: string | null;
    quantity: number; // number/double
    unitPrice: number; // number/double
};

export type PlaceOrderDto = {
    assetCode?: string | null;
    totalAmount: number; // number/double
    orderLines: PlaceOrderLineDto[];
};

export interface OrderLineDto {
    id: string;
    orderId: string;
    assetCode?: string | null;
    quantity: number;
    unitPrice: number;
    lineTotal?: number;
    title?: string | null;
    qty?: number | null;
    totalPrice?: number | null;
}

export interface OrderDto {
    id: string;
    userId?: string;
    assetCode?: string | null;
    totalAmount: number;
    status?: string | null;
    createdOn?: string | null;
    lastModifiedOn?: string | null;
    orderLines?: OrderLineDto[] | null;
}

export type ListOrdersParams = Partial<{ page: number; pageSize: number }> & Record<string, any>;

const parseMaybeText = async (res: Response) => {
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) return res.json();
    const t = await res.text();
    try {
        return JSON.parse(t);
    } catch {
        return t as any;
    }
};

export const orderApi = createApi({
    reducerPath: 'orderApi',

    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        fetchFn: async (input, init) => {
            if (init && (init as any).signal && !(init.signal instanceof AbortSignal)) {
                delete (init as any).signal;
            }
            return fetch(input, init);
        },
        prepareHeaders: h => {
            const token = getToken();
            if (token) h.set('Authorization', `Bearer ${token}`);
            h.set('accept', 'application/json, text/plain;q=0.9,*/*;q=0.8');
            h.set('content-type', 'application/json');
            return h;
        },
        responseHandler: parseMaybeText as any,
    }),

    tagTypes: ['Orders', 'Order', 'OrderLines'],

    endpoints: b => ({
        // 🟢 GET /api/api/Order
        listOrders: b.query<OrderDto[], ListOrdersParams>({
            query: (params = {}) => ({
                url: '/api/Order',
                method: 'GET',
                params,
            }),
            providesTags: res =>
                res?.length
                    ? [
                          ...res.map(o => ({ type: 'Order' as const, id: o.id })),
                          { type: 'Orders' as const, id: 'LIST' },
                      ]
                    : [{ type: 'Orders' as const, id: 'LIST' }],
        }),

        getOrderById: b.query<OrderDto, string>({
            query: id => ({ url: `/api/Order/${id}`, method: 'GET' }),
            providesTags: (_r, _e, id) => [{ type: 'Order', id }],
        }),

        createOrder: b.mutation<OrderDto, PlaceOrderDto>({
            query: body => ({ url: '/api/Order', method: 'POST', body }),
            invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
        }),

        cancelOrder: b.mutation<void, string>({
            query: id => ({ url: `/api/Order/${id}/cancel`, method: 'POST', body: {} }),
            invalidatesTags: (_r, _e, id) => [
                { type: 'Order', id },
                { type: 'Orders', id: 'LIST' },
            ],
        }),

        getOrderLines: b.query<OrderLineDto[], string>({
            query: id => ({ url: `/api/Order/${id}/lines`, method: 'GET' }),
            providesTags: (_r, _e, id) => [{ type: 'OrderLines', id }],
        }),
    }),
});

export const {
    useListOrdersQuery,
    useGetOrderByIdQuery,
    useCreateOrderMutation,
    useCancelOrderMutation,
    useGetOrderLinesQuery,
} = orderApi;
