// src/hooks/useWalletData.ts
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
                walletTypeId: 'YOUR-WALLET-TYPE-GUID',
                currency: 'IRT',
            })
                .unwrap()
                .then(() => refetchWallets())
                .catch(() => {
                    triedCreateRef.current = false;
                });
        }
    }, [user?.id, wallets]);

    const [createWallet, { isLoading: creating }] = useCreateWalletMutation();

    const triedCreateRef = useRef(false);
    useEffect(() => {
        if (!user?.id) return;
        if (!wallets) return;
        if (wallets.length > 0) return;
        if (triedCreateRef.current) return;

        triedCreateRef.current = true;
        createWallet({
            userId: user.id,
            walletTypeId: 'YOUR-WALLET-TYPE-GUID',
            currency: 'IRT',
        })
            .unwrap()
            .catch(() => {
                triedCreateRef.current = false;
            });
    }, [user?.id, wallets, createWallet]);

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
