/* src/services/authService.ts */
import { api } from '../lib/apiClient';

export interface CheckMobileResponse {
  userExists: boolean;
  hasPassword: boolean;
}

export interface LoginResponse {
  token: string;
  expiresAt: string;
  user: {
    id: string;
    username: string;
    email: string;
    isActive: boolean;
    isLocked: boolean;
    createdAt: string;
    lastLoginAt: string;
    failedLoginAttempts: number;
    firstName: string;
    lastName: string;
    fatherName: string;
    birthDate: string;
    gender: number;
    certNumber: number;
    identificationSerial: string;
    identificationSeri: string;
    officeName: string;
    referralCode: string | null;
    phoneNumber: string;
    nationalCode: string;
    isMobileVerified: boolean;
    isNationalCodeVerified: boolean;
    isPersonalInfoVerified: boolean;
    civilRegistryTrackId: string;
    roles: any[];
  };
}

export interface SendOtpResponse {
  success: boolean;
  message?: string;
}

export const authService = {
  checkMobile: (mobile: string): Promise<CheckMobileResponse> =>
    api.post<CheckMobileResponse>('/api/auth/check-mobile', { mobileNumber: mobile }),

  sendOtp: (mobile: string, purpose = 1): Promise<SendOtpResponse> =>
    api.post<SendOtpResponse>('/api/auth/send-otp', { mobileNumber: mobile, purpose }),

  loginWithOtp: (mobile: string, otpCode: string, purpose = 1): Promise<LoginResponse> =>
    api.post<LoginResponse>('/api/auth/login-with-otp', { mobileNumber: mobile, otpCode, purpose }),

  loginWithPassword: (mobileNumber: string, password: string): Promise<LoginResponse> =>
    api.post<LoginResponse>('/api/auth/login', { mobileNumber, password })
};