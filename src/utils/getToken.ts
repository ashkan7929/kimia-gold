// src/utils/getToken.ts
export function getToken(): string | null {
    try {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('auth.token') || localStorage.getItem('token');
    } catch {
        return null;
    }
}
