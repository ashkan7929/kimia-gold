import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Holding, Transaction } from '../../types';

interface BuyOrderRequest {
	symbol: string;
	quantity: number;
	orderType: 'market' | 'limit';
	limitPrice?: number;
}

interface SellOrderRequest {
	symbol: string;
	quantity: number;
	orderType: 'market' | 'limit';
	limitPrice?: number;
}

interface OrderResponse {
	orderId: string;
	status: 'pending' | 'completed' | 'failed';
	message: string;
	transaction?: Transaction;
}

interface PortfolioSummary {
	totalValue: number;
	totalProfitLoss: number;
	totalProfitLossPercentage: number;
	totalInvested: number;
	availableBalance: number;
	holdingsCount: number;
	lastUpdated: string;
}

interface PerformanceData {
	date: string;
	value: number;
	profitLoss: number;
	profitLossPercentage: number;
}

export const portfolioApi = createApi({
	reducerPath: 'portfolioApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/portfolio',
		prepareHeaders: (headers, { getState }) => {
			const state = getState() as any;
			const token = state.auth?.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ['Portfolio', 'Holdings', 'Transactions', 'Performance'],
	endpoints: (builder) => ({
		getPortfolioSummary: builder.query<PortfolioSummary, void>({
			query: () => '/summary',
			providesTags: ['Portfolio'],
		}),
		getHoldings: builder.query<Holding[], void>({
			query: () => '/holdings',
			providesTags: ['Holdings'],
		}),
		getHolding: builder.query<Holding, string>({
			query: (symbol) => `/holdings/${symbol}`,
			providesTags: (_, __, symbol) => [{ type: 'Holdings', id: symbol }],
		}),
		getTransactions: builder.query<Transaction[], { page?: number; limit?: number; type?: string }>({
			query: ({ page = 1, limit = 20, type }) => {
				const params = new URLSearchParams({
					page: page.toString(),
					limit: limit.toString(),
				});
				if (type) {
					params.append('type', type);
				}
				return `/transactions?${params.toString()}`;
			},
			providesTags: ['Transactions'],
		}),
		getTransaction: builder.query<Transaction, string>({
			query: (id) => `/transactions/${id}`,
			providesTags: (_, __, id) => [{ type: 'Transactions', id }],
		}),
		buyGold: builder.mutation<OrderResponse, BuyOrderRequest>({
			query: (orderData) => ({
				url: '/buy',
				method: 'POST',
				body: orderData,
			}),
			invalidatesTags: ['Portfolio', 'Holdings', 'Transactions'],
		}),
		sellGold: builder.mutation<OrderResponse, SellOrderRequest>({
			query: (orderData) => ({
				url: '/sell',
				method: 'POST',
				body: orderData,
			}),
			invalidatesTags: ['Portfolio', 'Holdings', 'Transactions'],
		}),
		cancelOrder: builder.mutation<{ message: string }, string>({
			query: (orderId) => ({
				url: `/orders/${orderId}/cancel`,
				method: 'POST',
			}),
			invalidatesTags: ['Transactions'],
		}),
		getPerformanceHistory: builder.query<PerformanceData[], { timeframe: string; limit?: number }>({
			query: ({ timeframe, limit = 100 }) =>
				`/performance?timeframe=${timeframe}&limit=${limit}`,
			providesTags: ['Performance'],
		}),
		getPortfolioAllocation: builder.query<{
			symbol: string;
			name: string;
			value: number;
			percentage: number;
			color: string;
		}[], void>({
			query: () => '/allocation',
			providesTags: ['Holdings'],
		}),
		exportTransactions: builder.query<Blob, { startDate: string; endDate: string; format: 'csv' | 'pdf' }>({
			query: ({ startDate, endDate, format }) => ({
				url: `/transactions/export?startDate=${startDate}&endDate=${endDate}&format=${format}`,
				responseHandler: (response) => response.blob(),
			}),
		}),
		getPortfolioInsights: builder.query<{
			bestPerformer: { symbol: string; profitLossPercentage: number };
			worstPerformer: { symbol: string; profitLossPercentage: number };
			totalDividends: number;
			averageHoldingPeriod: number;
			riskScore: number;
			diversificationScore: number;
		}, void>({
			query: () => '/insights',
			providesTags: ['Portfolio'],
		}),
		updateHoldingNotes: builder.mutation<Holding, { symbol: string; notes: string }>({
			query: ({ symbol, notes }) => ({
				url: `/holdings/${symbol}/notes`,
				method: 'PATCH',
				body: { notes },
			}),
			invalidatesTags: ['Holdings'],
		}),
		setHoldingAlert: builder.mutation<{ message: string }, {
			symbol: string;
			type: 'profit_target' | 'stop_loss';
			targetValue: number;
		}>({
			query: (alertData) => ({
				url: '/holdings/alerts',
				method: 'POST',
				body: alertData,
			}),
			invalidatesTags: ['Holdings'],
		}),
	}),
});

export const {
	useGetPortfolioSummaryQuery,
	useGetHoldingsQuery,
	useGetHoldingQuery,
	useGetTransactionsQuery,
	useGetTransactionQuery,
	useBuyGoldMutation,
	useSellGoldMutation,
	useCancelOrderMutation,
	useGetPerformanceHistoryQuery,
	useGetPortfolioAllocationQuery,
	useLazyExportTransactionsQuery,
	useGetPortfolioInsightsQuery,
	useUpdateHoldingNotesMutation,
	useSetHoldingAlertMutation,
} = portfolioApi;