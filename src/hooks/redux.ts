import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom hooks for common state selections
export const useAuth = () => {
	return useAppSelector((state) => state.auth);
};

export const usePortfolio = () => {
	return useAppSelector((state) => state.portfolio);
};

export const useUI = () => {
	return useAppSelector((state) => state.ui);
};

export const useIsAuthenticated = () => {
	return useAppSelector((state) => state.auth.isAuthenticated);
};

export const useCurrentUser = () => {
	return useAppSelector((state) => state.auth.user);
};

export const useTheme = () => {
	return useAppSelector((state) => state.ui.theme);
};

export const useNotifications = () => {
	return useAppSelector((state) => state.ui.notifications);
};

export const useModals = () => {
	return useAppSelector((state) => state.ui.modals);
};

export const useLoading = () => {
	return useAppSelector((state) => state.ui.loading);
};