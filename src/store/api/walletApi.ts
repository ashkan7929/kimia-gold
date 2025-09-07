import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
    UserWallet,
    UserWalletList,
    WalletCreateRequest,
    BalanceResponse,
    TransactionWallet,
    DepositRequest,
    WithdrawRequest,
    TransferRequest,
} from '../../types/wallet';

export const walletApi = createApi({
    reducerPath: 'walletApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: headers => {
            const token = localStorage.getItem('auth.token');
            if (token) headers.set('Authorization', `Bearer ${token}`);
            headers.set('accept', ' application/json, */*');
            return headers;
        },
    }),
    tagTypes: ['Wallet', 'Balance', 'Tx'],
    endpoints: builder => ({
            getUserWallets: builder.query<UserWalletList | { items: UserWalletList }, string>({
            query: userId => `/Wallet/user/${userId}`,
            providesTags: (result) => {
                const list = Array.isArray(result)
                ? result
                : Array.isArray((result as any)?.items)
                ? (result as any).items
                : [];

                return list.length
                ? [...list.map((w: any) => ({ type: 'Wallet' as const, id: w.id })), { type: 'Wallet' as const, id: 'LIST' }]
                : [{ type: 'Wallet' as const, id: 'LIST' }];
            },
            }),

        createWallet: builder.mutation<UserWallet, WalletCreateRequest>({
            query: payload => ({
                url: `/Wallet`,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: [{ type: 'Wallet', id: 'LIST' }],
        }),

        getWalletById: builder.query<UserWallet, string>({
            query: walletId => `/Wallet/${walletId}`,
            providesTags: (_res, _err, id) => [{ type: 'Wallet', id }],
        }),

        getBalance: builder.query<BalanceResponse, string>({
            query: walletId => `/Wallet/${walletId}/balance`,

            // query: walletId => `/Wallet/${walletId}/balance`,
            providesTags: (_res, _err, walletId) => [{ type: 'Balance', id: walletId }],
        }),

        getTransactions: builder.query<TransactionWallet[], { walletId: string }>({
            query: ({ walletId }) => `/Wallet/${walletId}/transactions`,
            providesTags: (_res, _err, arg) => [{ type: 'Tx', id: arg.walletId }],
        }),

        deposit: builder.mutation<TransactionWallet, { walletId: string; payload: DepositRequest }>(
            {
                query: ({ walletId, payload }) => ({
                    url: `/Wallet/${walletId}/deposit`,
                    method: 'POST',
                    body: payload,
                }),
                invalidatesTags: (_r, _e, { walletId }) => [
                    { type: 'Balance', id: walletId },
                    { type: 'Tx', id: walletId },
                ],
            },
        ),

        withdraw: builder.mutation<
            TransactionWallet,
            { walletId: string; payload: WithdrawRequest }
        >({
            query: ({ walletId, payload }) => ({
                url: `/Wallet/${walletId}/withdraw`,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: (_r, _e, { walletId }) => [
                { type: 'Balance', id: walletId },
                { type: 'Tx', id: walletId },
            ],
        }),

        transfer: builder.mutation<
            TransactionWallet,
            { walletId: string; payload: TransferRequest }
        >({
            query: ({ walletId, payload }) => ({
                url: `/Wallet/${walletId}/transfer`,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: (_r, _e, { walletId }) => [
                { type: 'Balance', id: walletId },
                { type: 'Tx', id: walletId },
            ],
        }),
    }),
});

export const {
    useGetUserWalletsQuery,
    useCreateWalletMutation,
    useGetWalletByIdQuery,
    useGetBalanceQuery,
    useGetTransactionsQuery,
    useDepositMutation,
    useWithdrawMutation,
    useTransferMutation,
} = walletApi;
