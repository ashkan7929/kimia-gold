/* src/services/orderService.ts */
import { api } from '../lib/apiClient';

export type PlaceOrderItem = {
    productId: string;
    quantity: number;
};

export type PlaceOrderDto = {
    items: PlaceOrderItem[];
    note?: string;
    payload?: string;
};
export interface OrderDto {
    id: string;
    createdAt?: string;
    status?: string;
    totalAmount?: number;
    userId?: string;
}

export interface OrderLineDto {
    id: string;
    orderId: string;
    productId?: string;
    title?: string;
    qty?: number;
    unitPrice?: number;
    totalPrice?: number;
}

// export interface PlaceOrderDto {
//     items: Array<{
//         productId: string;
//         quantity: number;
//     }>;
//     note?: string;
// }

export interface ListOrdersParams extends Record<string, unknown> {
    page?: number;
    pageSize?: number;
}

export const orderService = {
    list: (params: ListOrdersParams = {}): Promise<OrderDto[]> =>
        api.get<OrderDto[]>('/api/Order', { params }),

    // جزئیات یک سفارش GET
    getById: (id: string): Promise<OrderDto> => api.get<OrderDto>(`/api/Order/${id}`),

    // ثبت سفارش جدید POST
    createOrder: (payload: PlaceOrderDto): Promise<OrderDto> =>
        api.post<OrderDto>('/api/Order', payload),

    // لغو سفارش POST
    cancel: (id: string): Promise<void> => api.post<void>(`/api/Order/${id}/cancel`, {}),

    // آیتم‌های یک سفارش GET
    getLines: (id: string): Promise<OrderLineDto[]> =>
        api.get<OrderLineDto[]>(`/api/Order/${id}/lines`),
};
export default orderService;
