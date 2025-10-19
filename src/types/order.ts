
export type PlaceOrderLineDto = {
  assetCode?: string;
  quantity: number;
  unitPrice: number;
};

export type PlaceOrderDto = {
  assetCode?: string ;
  totalAmount: number;
  orderLines: PlaceOrderLineDto[];
};

export type OrderDto = {
  id: string;
  userId?: string;
  assetCode?: string;
  totalAmount: number;
  status?: string | number;
  lockedPrice?: number;
  createdOn?: string;
  lastModifiedOn?: string;
  orderLines?: Array<{
	id: string;
	orderId: string;
	assetCode?: string;
	quantity: number;
	unitPrice: number;
	lineTotal?: number;
	notes?: string;
  }>;
};

export type UseOrderOptions = {
  onSuccess?: (order: OrderDto) => void;
  onError?: (err: unknown) => void;
  autoResetOnSuccess?: boolean;
};

export type PlaceOrderSimpleArgs = {
  assetCode?: string;
  quantity: number;
  unitPrice: number;

};




export type PlaceOrderSimple = {
  assetCode?: string;   
  quantity: number;   
  unitPrice: number; 
};


export type OrderState = {
  isPlacing: boolean;
  lastOrder: OrderDto | null;
  error: unknown;

  setPlacing: (v: boolean) => void;
  setResult: (o: OrderDto | null) => void;
  setError: (e: unknown) => void;
  reset: () => void;
};