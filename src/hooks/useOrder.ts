import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { orderService } from '../services/orderService';
import type { OrderDto, PlaceOrderDto } from '../types/order';

export type UseOrderData = {
    loading: boolean;
    creating: boolean;
    cancelling: boolean;

    orders: OrderDto[];
    successOrders: OrderDto[];
    canceledOrders: OrderDto[];
    lastOrder: OrderDto | null;

    currentOrderId: string | null;

    refetch: () => Promise<void>;
    place: (dto: PlaceOrderDto) => Promise<void>;
    cancel: (id?: string | null) => Promise<void>;
    setCurrentOrderId: (id: string | null) => void;
};

const normalize = (v: unknown) => String(v ?? '').toLowerCase();

export function useOrder(opts?: {
    autoFetch?: boolean;
    page?: number;
    pageSize?: number;
}): UseOrderData {
    const autoFetch = opts?.autoFetch ?? false;
    const page = opts?.page ?? 1;
    const pageSize = opts?.pageSize ?? 20;
    const [loading, setLoading] = useState(false);
    const [creating, setCreating] = useState(false);
    const [cancelling, setCancelling] = useState(false);

    const [orders, setOrders] = useState<OrderDto[]>([]);
    const [lastOrder, setLastOrder] = useState<OrderDto | null>(null);
    const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);
    const seenIdRef = useRef<string | null>(null);

    const refetch = useCallback(async () => {
        try {
            setLoading(true);

            const list = await orderService.getPaged(page, pageSize);
            setOrders(Array.isArray(list) ? list : []);
        } finally {
            setLoading(false);
        }
    }, [page, pageSize]);

    useEffect(() => {
        if (autoFetch) void refetch();
    }, [autoFetch, refetch]);
// !
    const place = useCallback(
        async (dto: PlaceOrderDto) => {
            try {
                setCreating(true);
                const res = await orderService.create(dto);
                console.log(res);
                setLastOrder(res ?? null);
                if (res?.id && seenIdRef.current !== res.id) {
                    setCurrentOrderId(res.id);
                    seenIdRef.current = res.id;
                }
            } catch (e) {
                console.error('error:', e);
            } finally {
                setCreating(false);
            }
        },
        [refetch],
    );

    const cancel = useCallback(
        async (id?: string | null) => {
            if (!id) return;
            try {
                setCancelling(true);
                await orderService.cancel(id);
                if (currentOrderId === id) setCurrentOrderId(null);
            } finally {
                setCancelling(false);
            }
        },
        [currentOrderId, refetch],
    );

    const successOrders = useMemo(
        () =>
            orders.filter(o =>
                ['success', 'completed', 'done', 'موفق', '1', 'true'].includes(normalize(o.status)),
            ),
        [orders],
    );

    const canceledOrders = useMemo(
        () =>
            orders.filter(o =>
                ['canceled', 'cancelled', 'لغو', '0', 'rejected', 'cancel'].includes(
                    normalize(o.status),
                ),
            ),
        [orders],
    );

    return {
        loading,
        creating,
        cancelling,
        orders,
        successOrders,
        canceledOrders,
        lastOrder,
        currentOrderId,
        refetch,
        place,
        cancel,
        setCurrentOrderId,
    };
}
