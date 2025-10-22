export interface PriceInfo {
	amount: number;
	currency: string;
	isZero: boolean;
	isPositive: boolean;
}

export interface ProductAttributes {
	[key: string]: string;
}

export interface ProductDto {
	id: string;
	code: string;
	name: string;
	status: 'Active' | 'Inactive';
	priceFrom: PriceInfo;
	attributes: ProductAttributes;
}

export interface ProductListResponse {
	items: ProductDto[];
	totalCount: number;
	pageNumber: number;
	pageSize: number;
	totalPages: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
}


export type UseProductsDataArgs = {
  search?: string;
  pageNumber?: number;
  pageSize?: number;
};

export type UseProductsDataResult = {
  items: ProductDto[];
  totalPages: number;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  loading: boolean;
  error?: unknown;
  setSearch: (v: string) => void;
  setPageNumber: (n: number) => void;
  refetch: () => void;
};