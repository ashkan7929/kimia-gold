// src/types/order.ts
export type PlaceOrderLineDto = {
  assetCode?: string | null;
  quantity: number;
  unitPrice: number;
};

export type PlaceOrderDto = {
  assetCode?: string | null;      // اختیاری طبق Swagger
  totalAmount: number;            // number/double
  orderLines: PlaceOrderLineDto[];
};

export type OrderLineDto = {
  id: string;
  orderId: string;
  assetCode?: string | null;
  quantity: number;
  unitPrice: number;
  lineTotal?: number;
  title?: string | null;
  qty?: number | null;
  totalPrice?: number | null;
};

export type OrderDto = {
  id: string;
  userId?: string;
  assetCode?: string | null;
  totalAmount: number;
  status?: string | number;
  lockedPrice?: number;
  createdOn?: string;
  lastModifiedOn?: string;
  createdBy?: string;
  lastModifiedBy?: string;
  orderLines?: OrderLineDto[];
};

export type PagedParams = {
  page?: number;
  pageSize?: number;
};
