/* src/hooks/useOrder.ts */
import { useCallback, useMemo, useState } from 'react';
import { useCreateOrderMutation } from '../store/api/orderApi';
import type {
  OrderDto,
  UseOrderOptions,
  PlaceOrderDto,
  PlaceOrderSimpleArgs,
} from '../types/order';


export function useOrder(options: UseOrderOptions = {}) {
  const { onSuccess, onError, autoResetOnSuccess = false } = options;

  const [lastOrder, setLastOrder] = useState<OrderDto | null>(null);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  const extractErrorMessage = (err: unknown): string => {
    const anyErr = err as any;
    return (
      anyErr?.data?.message ||
      anyErr?.data?.error ||
      anyErr?.error ||
      anyErr?.status ||
      'ثبت سفارش ناموفق بود'
    );
  };

  const buildPayload = (dataObject: PlaceOrderDto): PlaceOrderDto => {
    const normalizedLines =
      (dataObject.orderLines ?? []).map((l) => ({
        assetCode: l.assetCode ?? dataObject.assetCode ?? null,
        quantity: Number(l.quantity),
        unitPrice: Number(l.unitPrice),
      })) ?? [];

    const total = normalizedLines.reduce(
      (sum, l) => sum + l.quantity * l.unitPrice,
      0
    );

    return {
      assetCode: dataObject.assetCode ?? undefined,
      orderLines: normalizedLines,
      totalAmount: total, 
    };
  };

  const placeOrder = useCallback(
    async (dataObject: PlaceOrderDto) => {
      try {
        const payload = buildPayload(dataObject);
        const order = (await createOrder(payload).unwrap()) as OrderDto;
		console.log(payload)
        setLastOrder(order);
        onSuccess?.(order);

        if (autoResetOnSuccess) {
          setLastOrder(null);
        }

        return order;
      } catch (e) {
        const msg = extractErrorMessage(e);
        onError?.(e);
        throw new Error(msg);
      }
    },
    [autoResetOnSuccess, createOrder, onError, onSuccess]
  );

  

  const placeOrderSimple = useCallback(
    async ({ assetCode, quantity, unitPrice }: PlaceOrderSimpleArgs) => {
      const dataObject: PlaceOrderDto = {
        assetCode: assetCode ?? undefined,
        orderLines: [{ assetCode: assetCode, quantity, unitPrice }],
      };
      return placeOrder(dataObject);
    },
    [placeOrder]
  );

  const resetLast = useCallback(() => {
    setLastOrder(null);
  }, []);

  return useMemo(
    () => ({
      placeOrder,
      placeOrderSimple,
      lastOrder,
      resetLast,
      isPlacing: isLoading,
      error,
    }),
    [error, isLoading, lastOrder, placeOrder, placeOrderSimple, resetLast]
  );
}



// import { useRef, useCallback, useMemo } from 'react';
// import { useCreateOrderMutation } from '../store/api/orderApi';
// import type { OrderDto, UseOrderOptions, PlaceOrderDto, PlaceOrderSimpleArgs } from '../types/order';


// export function useOrder(options: UseOrderOptions = {}) {
//   const { onSuccess, onError, autoResetOnSuccess = false } = options;

//   const lastOrderRef = useRef<OrderDto | null>(null);
//   const [createOrder, { isLoading, error }] = useCreateOrderMutation();

//   const placeOrder = useCallback(
//     async (dataObject: PlaceOrderDto) => {
//       try {
//         const total = dataObject.orderLines.reduce(
//           (sum, l) => sum + Number(l.quantity || 0) * Number(l.unitPrice || 0),
//           0
//         );

//         const payload: PlaceOrderDto = {
// 			 assetCode: 'GOLD', 
//   orderLines: [
//     { assetCode: 'GOLD',
// 		 quantity: weight, 
// 		 unitPrice: GOLD_PRICE_RIAL,
// 		}
//   ],
//   totalAmount: total,
// };
// await createOrder(payload).unwrap();

//         //   assetCode: dataObject.assetCode,
//         //   totalAmount: total, 
//         //   orderLines: dataObject.orderLines.map((l) => ({
//         //     assetCode: l.assetCode || dataObject.assetCode,
//         //     quantity: Number(l.quantity),
//         //     unitPrice: Number(l.unitPrice),
      
//         };


		
//         const order = await createOrder(payload).unwrap();
//         lastOrderRef.current = order as OrderDto;

//         onSuccess?.(order as OrderDto);
//         if (autoResetOnSuccess) {
//         }
//         return order as OrderDto;
//       } catch (e) {
//         onError?.(e);
//         throw e;
//       }
//     },
//     [createOrder, onSuccess, onError, autoResetOnSuccess]
//   );

//   const placeOrderSimple = useCallback(
//     async ({ assetCode, quantity, unitPrice }: PlaceOrderSimpleArgs) => {
//       const dataObject: PlaceOrderDto = {
//         assetCode,
//         totalAmount: quantity * unitPrice,
//         orderLines: [{ assetCode, quantity, unitPrice }],
//       };
//       return placeOrder(dataObject);
//     },
//     [placeOrder]
//   );

//   const resetLast = useCallback(() => {
//     lastOrderRef.current = null;
//   }, []);

//   return useMemo(
//     () => ({
//       placeOrder,
//       placeOrderSimple,
//       lastOrder: lastOrderRef.current as OrderDto | null,
//       resetLast,
//       isPlacing: isLoading,
//       error,
//     }),
//     [placeOrder, placeOrderSimple, resetLast, isLoading, error]
//   );
// }
