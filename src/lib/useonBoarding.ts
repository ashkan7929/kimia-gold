export const ONBOARDING_VERSION = 'v1'; 

export function isNewAccount(createdAt?: string | Date, days = 1): boolean {
  if (!createdAt) return false;
  const created = new Date(createdAt);
  const now = new Date();
  const diffrenTime = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
  return diffrenTime < days;
}

export function welcomeKey(userId?: string | number) {
  return `seen_welcome_${userId ?? 'anon'}`;
}

export function onboardingKey(userId?: string | number) {
  return `seen_onboarding_${ONBOARDING_VERSION}_${userId ?? 'anon'}`;
}

export function getLS(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try { return localStorage.getItem(key); } catch { return null; }
}

export function setLS(key: string, value: string) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(key, value); } catch {}
}
