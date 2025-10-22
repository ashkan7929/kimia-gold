import { api } from '../lib/apiClient';
import type { ProductDto, ProductListResponse } from '../types/product';
export const productService = {
    getAll: async (
        search?: string,
        pageNumber = 1,
        pageSize = 10,
    ): Promise<ProductListResponse> => {
        try {
            const res = await api.get<ProductListResponse>(
                `/api/Products?search=${search || ''}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
            );
            console.log('✅ Response:', res);
            return res;
        } catch (err: any) {
            console.error('❌ Error fetching:', err?.response ?? err);
            throw err;
        } finally {
            console.groupEnd();
        }
    },

    getById: async (id: string): Promise<ProductDto> => {
		try {
            const res = await api.get<ProductDto>(`/api/Products/${id}`);
            console.log('✅ Response:', res);
            return res;
        } catch (err: any) {
            console.error('❌ Error fetching:', err?.response ?? err);
            throw err;
        } finally {
            console.groupEnd();
        }
	},
		
		
	
    getByCode: (code: string): Promise<ProductDto> =>
        api.get<ProductDto>(`/api/Products/by-code/${code}`),
};
