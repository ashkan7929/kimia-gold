import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../types';

interface LoginRequest {
	email: string;
	password: string;
}

interface RegisterRequest {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface AuthResponse {
	user: User;
	token: string;
	message: string;
}

interface ForgotPasswordRequest {
	email: string;
}

interface ResetPasswordRequest {
	token: string;
	password: string;
	confirmPassword: string;
}

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/auth',
		prepareHeaders: (headers, { getState }) => {
			const state = getState() as any;
			const token = state.auth?.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		login: builder.mutation<AuthResponse, LoginRequest>({
			query: (credentials) => ({
				url: '/login',
				method: 'POST',
				body: credentials,
			}),
			invalidatesTags: ['User'],
		}),
		register: builder.mutation<AuthResponse, RegisterRequest>({
			query: (userData) => ({
				url: '/register',
				method: 'POST',
				body: userData,
			}),
			invalidatesTags: ['User'],
		}),
		logout: builder.mutation<{ message: string }, void>({
			query: () => ({
				url: '/logout',
				method: 'POST',
			}),
			invalidatesTags: ['User'],
		}),
		getCurrentUser: builder.query<User, void>({
			query: () => '/me',
			providesTags: ['User'],
		}),
		updateProfile: builder.mutation<User, Partial<User>>({
			query: (updates) => ({
				url: '/profile',
				method: 'PATCH',
				body: updates,
			}),
			invalidatesTags: ['User'],
		}),
		forgotPassword: builder.mutation<{ message: string }, ForgotPasswordRequest>({
			query: (data) => ({
				url: '/forgot-password',
				method: 'POST',
				body: data,
			}),
		}),
		resetPassword: builder.mutation<{ message: string }, ResetPasswordRequest>({
			query: (data) => ({
				url: '/reset-password',
				method: 'POST',
				body: data,
			}),
		}),
		verifyEmail: builder.mutation<{ message: string }, { token: string }>({
			query: (data) => ({
				url: '/verify-email',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
		resendVerification: builder.mutation<{ message: string }, void>({
			query: () => ({
				url: '/resend-verification',
				method: 'POST',
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useLogoutMutation,
	useGetCurrentUserQuery,
	useUpdateProfileMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
	useVerifyEmailMutation,
	useResendVerificationMutation,
} = authApi;