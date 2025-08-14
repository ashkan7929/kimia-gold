import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface GoldPrice {
	symbol: string;
	name: string;
	price: number;
	change: number;
	changePercent: number;
	high24h: number;
	low24h: number;
	volume24h: number;
	marketCap: number;
	lastUpdated: string;
}

export interface PriceHistory {
	timestamp: string;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: number;
}

export interface MarketNews {
	id: string;
	title: string;
	summary: string;
	content: string;
	author: string;
	source: string;
	publishedAt: string;
	imageUrl?: string;
	tags: string[];
	sentiment: 'positive' | 'negative' | 'neutral';
}

export interface MarketAlert {
	id: string;
	userId: string;
	symbol: string;
	type: 'price_above' | 'price_below' | 'change_percent';
	targetValue: number;
	currentValue: number;
	isActive: boolean;
	createdAt: string;
	triggeredAt?: string;
}

interface CreateAlertRequest {
	symbol: string;
	type: 'price_above' | 'price_below' | 'change_percent';
	targetValue: number;
}

export const marketApi = createApi({
	reducerPath: 'marketApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/market',
		prepareHeaders: (headers, { getState }) => {
			const state = getState() as any;
			const token = state.auth?.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ['GoldPrice', 'PriceHistory', 'MarketNews', 'MarketAlert'],
	endpoints: (builder) => ({
		getCurrentPrices: builder.query<GoldPrice[], void>({
			query: () => '/prices/current',
			providesTags: ['GoldPrice'],
		}),
		getGoldPrice: builder.query<GoldPrice, string>({
			query: (symbol) => `/prices/${symbol}`,
			providesTags: (_, __, symbol) => [{ type: 'GoldPrice', id: symbol }],
		}),
		getPriceHistory: builder.query<PriceHistory[], { symbol: string; timeframe: string; limit?: number }>({
			query: ({ symbol, timeframe, limit = 100 }) =>
				`/prices/${symbol}/history?timeframe=${timeframe}&limit=${limit}`,
			providesTags: (_, __, { symbol, timeframe }) => [
				{ type: 'PriceHistory', id: `${symbol}-${timeframe}` }
			],
		}),
		getMarketNews: builder.query<MarketNews[], { page?: number; limit?: number; tags?: string[] }>({
			query: ({ page = 1, limit = 20, tags = [] }) => {
				const params = new URLSearchParams({
					page: page.toString(),
					limit: limit.toString(),
				});
				if (tags.length > 0) {
					params.append('tags', tags.join(','));
				}
				return `/news?${params.toString()}`;
			},
			providesTags: ['MarketNews'],
		}),
		getNewsArticle: builder.query<MarketNews, string>({
			query: (id) => `/news/${id}`,
			providesTags: (_, __, id) => [{ type: 'MarketNews', id }],
		}),
		getMarketAlerts: builder.query<MarketAlert[], void>({
			query: () => '/alerts',
			providesTags: ['MarketAlert'],
		}),
		createMarketAlert: builder.mutation<MarketAlert, CreateAlertRequest>({
			query: (alertData) => ({
				url: '/alerts',
				method: 'POST',
				body: alertData,
			}),
			invalidatesTags: ['MarketAlert'],
		}),
		updateMarketAlert: builder.mutation<MarketAlert, { id: string; updates: Partial<CreateAlertRequest> }>({
			query: ({ id, updates }) => ({
				url: `/alerts/${id}`,
				method: 'PATCH',
				body: updates,
			}),
			invalidatesTags: ['MarketAlert'],
		}),
		deleteMarketAlert: builder.mutation<{ message: string }, string>({
			query: (id) => ({
				url: `/alerts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['MarketAlert'],
		}),
		toggleMarketAlert: builder.mutation<MarketAlert, string>({
			query: (id) => ({
				url: `/alerts/${id}/toggle`,
				method: 'PATCH',
			}),
			invalidatesTags: ['MarketAlert'],
		}),
		getMarketStats: builder.query<{
			totalMarketCap: number;
			totalVolume24h: number;
			dominanceGold: number;
			fearGreedIndex: number;
		}, void>({
			query: () => '/stats',
		}),
	}),
});

export const {
	useGetCurrentPricesQuery,
	useGetGoldPriceQuery,
	useGetPriceHistoryQuery,
	useGetMarketNewsQuery,
	useGetNewsArticleQuery,
	useGetMarketAlertsQuery,
	useCreateMarketAlertMutation,
	useUpdateMarketAlertMutation,
	useDeleteMarketAlertMutation,
	useToggleMarketAlertMutation,
	useGetMarketStatsQuery,
} = marketApi;