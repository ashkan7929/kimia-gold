// src/store/api/walletApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  UserWallet, UserWalletList, WalletCreateRequest, BalanceResponse, Tx,
  DepositRequest, WithdrawRequest, TransferRequest
} from '../../types/wallet';

const parseMaybeText = async (res: Response) => {
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json();
  const t = await res.text();
  try { return JSON.parse(t); } catch { return t as any; }
};

export const walletApi = createApi({
  reducerPath: 'walletApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (h) => {
      const token = localStorage.getItem('auth.token'); 
      if (token) h.set('Authorization', `Bearer ${token}`);
      h.set('accept', 'application/json, text/plain;q=0.9,*/*;q=0.8');
      h.set('content-type', 'application/json');
      return h;
    },
  }),
  tagTypes: ['Wallet', 'Balance', 'Tx'],
  endpoints: (b) => ({
    getUserWallets: b.query<UserWalletList, string>({
      query: (userId) => ({ url: `/Wallet/user/${userId}`, method: 'GET', responseHandler: parseMaybeText }),
      providesTags: (res) =>
        res?.length
          ? [...res.map(w => ({ type: 'Wallet' as const, id: w.id })), { type: 'Wallet', id: 'LIST' }]
          : [{ type: 'Wallet', id: 'LIST' }],
    }),

    createWallet: b.mutation<UserWallet, WalletCreateRequest>({
      query: (body) => ({ url: `/Wallet`, method: 'POST', body, responseHandler: parseMaybeText }),
      invalidatesTags: [{ type: 'Wallet', id: 'LIST' }],
    }),

    getBalance: b.query<BalanceResponse, string>({
      query: (walletId) => ({ url: `/Wallet/${walletId}/balance`, method: 'GET', responseHandler: parseMaybeText }),
      providesTags: (_r,_e,walletId) => [{ type: 'Balance', id: walletId }],
    }),

    getTransactions: b.query<Tx[], { walletId: string }>({
      query: ({ walletId }) => ({ url: `/Wallet/${walletId}/transactions`, method: 'GET', responseHandler: parseMaybeText }),
      providesTags: (_r,_e,arg) => [{ type: 'Tx', id: arg.walletId }],
    }),

    deposit: b.mutation<Tx, { walletId: string; payload: DepositRequest }>({
      query: ({ walletId, payload }) => ({
        url: `/Wallet/${walletId}/deposit`,
        method: 'POST',
        body: { ...payload, walletId },     
        responseHandler: parseMaybeText
      }),
      invalidatesTags: (_r,_e,{ walletId }) => [{ type: 'Balance', id: walletId }, { type: 'Tx', id: walletId }],
    }),

    withdraw: b.mutation<Tx, { walletId: string; payload: WithdrawRequest }>({
      query: ({ walletId, payload }) => ({
        url: `/Wallet/${walletId}/withdraw`,
        method: 'POST',
        body: { ...payload, walletId },
        responseHandler: parseMaybeText
      }),
      invalidatesTags: (_r,_e,{ walletId }) => [{ type: 'Balance', id: walletId }, { type: 'Tx', id: walletId }],
    }),

    transfer: b.mutation<Tx, { walletId: string; payload: TransferRequest }>({
      query: ({ walletId, payload }) => ({
        url: `/Wallet/${walletId}/transfer`,
        method: 'POST',
        body: { ...payload, fromWalletId: walletId }, 
        responseHandler: parseMaybeText
      }),
      invalidatesTags: (_r,_e,{ walletId }) => [{ type: 'Balance', id: walletId }, { type: 'Tx', id: walletId }],
    }),
  }),
});

export const {
  useGetUserWalletsQuery,
  useCreateWalletMutation,
  useGetBalanceQuery,
  useGetTransactionsQuery,
  useDepositMutation,
  useWithdrawMutation,
  useTransferMutation,
} = walletApi;
