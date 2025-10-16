import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const keyWelcome = (uid?: string | number) => `seen_welcome_${uid ?? 'anon'}`;
const keyOnboarding = (uid?: string | number) => `onboarding_done_${uid ?? 'anon'}`;

function isFreshAccount(createdAt?: string | Date, maxHours = 24) {
  if (!createdAt) return false;
  const d = new Date(createdAt);
  if (Number.isNaN(d.getTime())) return false;
  const diffHours = (Date.now() - d.getTime()) / (1000 * 60 * 60);
  return diffHours < maxHours;
}

function safeGetItem(key: string) {
  if (typeof window === 'undefined') return null;
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function safeSetItem(key: string, val: string) {
  if (typeof window === 'undefined') return;
  try { window.localStorage.setItem(key, val); } catch {}
}


export function useonBoarding(
  userId?: string | number,
  createdAt?: string | Date,
  opts?: {
    onboardingPath?: string;   
    freshHours?: number;     
  }
) {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const runOnceRef = useRef(false);

  const onboardingPath = opts?.onboardingPath ?? '/onboarding';
  const freshHours = opts?.freshHours ?? 24;

  const seenWelcome = useMemo(
    () => safeGetItem(keyWelcome(userId)) === '1',
    [userId]
  );
  const onboardingDone = useMemo(
    () => safeGetItem(keyOnboarding(userId)) === '1',
    [userId]
  );

  useEffect(() => {
    if (runOnceRef.current) return;
    runOnceRef.current = true;

    if (!onboardingDone) {
      navigate(onboardingPath, { replace: true });
      return;
    }

    if (!seenWelcome && isFreshAccount(createdAt, freshHours)) {
      setShowWelcome(true);
      safeSetItem(keyWelcome(userId), '1');
    } else {
      setShowWelcome(false);
    }
  }, [onboardingDone, seenWelcome, createdAt, freshHours, userId, onboardingPath, navigate]);

  return { showWelcome };
}

export function markOnboardingDone(userId?: string | number) {
  safeSetItem(keyOnboarding(userId), '1');
}
export function resetWelcomeForDebug(userId?: string | number) {
  safeSetItem(keyWelcome(userId), '');
}
