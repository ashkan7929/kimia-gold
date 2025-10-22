// import { api } from '../lib/apiClient';
// import type { OrderDto, PlaceOrderDto } from '../types/order';

// export const orderService = {
//   create: async (payload: PlaceOrderDto): Promise<OrderDto> => {
//     console.log('[orderService.create] payload:', payload);
//     const res = await api.post<OrderDto>('/api/Order', payload);
//     console.log('[orderService.create] response:', res);
//     return res;
//   },

//   cancel: async (id: string): Promise<OrderDto | { success: boolean }> => {
//     console.log('[orderService.cancel] id:', id);
//     const res = await api.post<OrderDto | { success: boolean }>(
//       `/api/Order/${id}/cancel`,
//       {}
//     );
//     console.log('[orderService.cancel] response:', res);
//     return res;
//   },

//   getAll: async (): Promise<OrderDto[]> => {
//     console.log('[orderService.getAll] fetching all orders');
//     const res = await api.get<OrderDto[]>('/api/Order');
//     console.log('[orderService.getAll] response:', res);
//     return res;
//   },

//   getById: async (id: string): Promise<OrderDto> => {
//     console.log('[orderService.getById] id:', id);
//     const res = await api.get<OrderDto>(`/api/Order/${id}`);
//     console.log('[orderService.getById] response:', res);
//     return res;
//   },

//   getPaged: async (page = 1, pageSize = 20): Promise<OrderDto[]> => {
//     console.log('[orderService.getPaged] page:', page, 'pageSize:', pageSize);
//     const res = await api.get<OrderDto[]>(`/api/Order?page=${page}&pageSize=${pageSize}`);
//     console.log('[orderService.getPaged] response:', res);
//     return res;
//   },
// };
import { api } from '../lib/apiClient';
import type { OrderDto, PlaceOrderDto } from '../types/order';

export const orderService = {
  /** ثبت سفارش جدید */
  create: async (payload: PlaceOrderDto): Promise<OrderDto> => {
    console.group('[orderService.create]');
    console.log('➡️ Sending payload:', payload);

    try {
      const res = await api.post<OrderDto>('/api/Order', payload);
      console.log('✅ Response data:', res);
      return res;
    } catch (err: any) {
      const status = err?.response?.status;
      if (status === 403)
        throw new Error('دسترسی به ثبت سفارش مجاز نیست (403)');
      if (status === 401)
        throw new Error('توکن معتبر نیست یا منقضی شده (401)');
      throw err;
    } finally {
      console.groupEnd();
    }
  },

  /** لغو سفارش */
  cancel: async (id: string): Promise<OrderDto | { success: boolean }> => {
    console.group('[orderService.cancel]');
    console.log('➡️ Cancelling order id:', id);

    try {
      const res = await api.post<OrderDto | { success: boolean }>(
        `/api/Order/${id}/cancel`,
        {}
      );
      console.log('✅ Response data:', res);
      return res;
    } catch (err: any) {
      console.error('❌ Error cancelling order:', err?.response ?? err);
      throw err;
    } finally {
      console.groupEnd();
    }
  },

  getAll: async (): Promise<OrderDto[]> => {
    console.group('[orderService.getAll]');
    try {
      const res = await api.get<OrderDto[]>('/api/Order');
      console.log('✅ Response:', res);
      return res;
    } catch (err: any) {
      console.error('❌ Error fetching all orders:', err?.response ?? err);
      throw err;
    } finally {
      console.groupEnd();
    }
  },

  getById: async (id: string): Promise<OrderDto> => {
    console.group('[orderService.getById]');
    console.log('➡️ Fetching order id:', id);
    try {
      const res = await api.get<OrderDto>(`/api/Order/${id}`);
      console.log('✅ Response:', res);
      return res;
    } catch (err: any) {
      console.error('❌ Error fetching order by id:', err?.response ?? err);
      throw err;
    } finally {
      console.groupEnd();
    }
  },

  getPaged: async (page = 1, pageSize = 20): Promise<OrderDto[]> => {
    console.group('[orderService.getPaged]');
    console.log('➡️ Page:', page, 'PageSize:', pageSize);
    try {
      const res = await api.get<OrderDto[]>(
        `/api/Order?page=${page}&pageSize=${pageSize}`
      );
      console.log('✅ Response:', res);
      return res;
    } catch (err: any) {
      console.error('❌ Error fetching paged orders:', err?.response ?? err);
      throw err;
    } finally {
      console.groupEnd();
    }
  },
};
