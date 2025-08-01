import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Holding, Transaction } from '../../types';

interface PortfolioState {
  holdings: Holding[];
  transactions: Transaction[];
  totalValue: number;
  totalProfitLoss: number;
  totalProfitLossPercentage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  holdings: [],
  transactions: [],
  totalValue: 0,
  totalProfitLoss: 0,
  totalProfitLossPercentage: 0,
  isLoading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setHoldings: (state, action: PayloadAction<Holding[]>) => {
      state.holdings = action.payload;
      // Calculate total values
      state.totalValue = action.payload.reduce((sum, holding) => sum + holding.totalValue, 0);
      state.totalProfitLoss = action.payload.reduce((sum, holding) => sum + holding.profitLoss, 0);
      state.totalProfitLossPercentage = state.totalValue > 0 
        ? (state.totalProfitLoss / (state.totalValue - state.totalProfitLoss)) * 100 
        : 0;
    },
    updateHolding: (state, action: PayloadAction<Holding>) => {
      const index = state.holdings.findIndex(h => h.id === action.payload.id);
      if (index !== -1) {
        state.holdings[index] = action.payload;
      } else {
        state.holdings.push(action.payload);
      }
      // Recalculate totals
      state.totalValue = state.holdings.reduce((sum, holding) => sum + holding.totalValue, 0);
      state.totalProfitLoss = state.holdings.reduce((sum, holding) => sum + holding.profitLoss, 0);
      state.totalProfitLossPercentage = state.totalValue > 0 
        ? (state.totalProfitLoss / (state.totalValue - state.totalProfitLoss)) * 100 
        : 0;
    },
    removeHolding: (state, action: PayloadAction<string>) => {
      state.holdings = state.holdings.filter(h => h.id !== action.payload);
      // Recalculate totals
      state.totalValue = state.holdings.reduce((sum, holding) => sum + holding.totalValue, 0);
      state.totalProfitLoss = state.holdings.reduce((sum, holding) => sum + holding.profitLoss, 0);
      state.totalProfitLossPercentage = state.totalValue > 0 
        ? (state.totalProfitLoss / (state.totalValue - state.totalProfitLoss)) * 100 
        : 0;
    },
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
    },
    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.transactions[index] = action.payload;
      }
    },
    clearPortfolio: (state) => {
      state.holdings = [];
      state.transactions = [];
      state.totalValue = 0;
      state.totalProfitLoss = 0;
      state.totalProfitLossPercentage = 0;
    },
  },
});

export const {
  setLoading,
  setError,
  setHoldings,
  updateHolding,
  removeHolding,
  setTransactions,
  addTransaction,
  updateTransaction,
  clearPortfolio,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;