/* src/stores/auth.store.ts */
import { create } from 'zustand';

interface User {
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
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set, get) => ({
  token: localStorage.getItem('auth.token'),
  user: (() => {
    try {
      const userData = localStorage.getItem('user-data');
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  })(),
  isAuthenticated: !!localStorage.getItem('auth.token'),
  
  setToken: (token) => {
    if (token) {
      localStorage.setItem('auth.token', token);
    } else {
      localStorage.removeItem('auth.token');
    }
    set({ token, isAuthenticated: !!token });
  },
  
  setUser: (user) => {
    if (user) {
      localStorage.setItem('user-data', JSON.stringify(user));
    } else {
      localStorage.removeItem('user-data');
    }
    set({ user });
  },
  
  logout: () => {
    localStorage.removeItem('auth.token');
    localStorage.removeItem('user-data');
    set({ token: null, user: null, isAuthenticated: false });
  }
}));

// AuthGuard hook
export const useAuthGuard = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
};