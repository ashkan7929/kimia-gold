import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './api/authApi';
import { marketApi } from './api/marketApi';
import { portfolioApi } from './api/portfolioApi';
import authSlice from './slices/authSlice';
import portfolioSlice from './slices/portfolioSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    portfolio: portfolioSlice,
    ui: uiSlice,
    [authApi.reducerPath]: authApi.reducer,
    [marketApi.reducerPath]: marketApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    })
      .concat(authApi.middleware)
      .concat(marketApi.middleware)
      .concat(portfolioApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;