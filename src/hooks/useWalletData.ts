import { useEffect, useMemo, useRef } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { useCurrentUser } from './redux';
import {
    useGetUserWalletsQuery,
    useCreateWalletMutation,
    useGetBalanceQuery,
    useGetTransactionsQuery,
} from '../store/api/walletApi';

type WalletLite = { id: string; title?: string };
type BalanceLite = { balance: number; currency: string };

type UseWalletDataResult = {
    walletId?: string;
    wallets?: WalletLite[];
    balance?: BalanceLite;
    transactions?: any[];
    loading: boolean;
    txLoading: boolean;
    userId?: string;
    walletTypeId?: string;
    currency?: string;
};

export function useWalletData(): UseWalletDataResult {
    const user = useCurrentUser();

    const userIdArg = user?.id ?? skipToken;
    const {
        data: walletsRes,
        isLoading: wlLoading,
        isFetching: wlFetching,
        error: Error,
        refetch: refetchWallets,
    } = useGetUserWalletsQuery(userIdArg);

    const wallets: WalletLite[] | undefined = useMemo(() => {
        if (!walletsRes) return undefined;
        if (Array.isArray((walletsRes as any).items)) return (walletsRes as any).items;
        if (Array.isArray(walletsRes as any)) return walletsRes as any;
        return undefined;
    }, [walletsRes]);

    useEffect(() => {
        if (!user?.id) return;

        const list = wallets ?? [];
        const notFound = (Error as any)?.status === 404;

        if ((notFound || list.length === 0) && !triedCreateRef.current) {
            triedCreateRef.current = true;
            createWallet({
                userId: user.id,
                walletTypeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                currency: 'IRT',
            })
                .unwrap()
                .then(() => refetchWallets())
                .catch(() => {
                    triedCreateRef.current = false;
                });
        }
    }, [ wallets]);

    const [createWallet, { isLoading: creating }] = useCreateWalletMutation();

    const triedCreateRef = useRef(false);

    const walletId = useMemo(() => wallets?.[0]?.id, [wallets]);

    const { data: balance, isLoading: balLoading } = useGetBalanceQuery(walletId ?? skipToken);

    const { data: transactions, isLoading: txLoading } = useGetTransactionsQuery(
        walletId ? { walletId } : skipToken,
    );

    const loading = wlLoading || wlFetching || creating || balLoading;

    return {
        walletId,
        wallets,
        balance: balance as any,
        transactions: transactions as any,
        loading,
        txLoading,
    };
}
