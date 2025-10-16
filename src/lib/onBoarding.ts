

import { useEffect, useMemo, useState } from 'react';
import { getLS, setLS, isNewAccount, welcomeKey, onboardingKey } from './useonBoarding';

type UserLike = { id?: string | number; createdAt?: string | Date };

export function useOnboarding(user?: UserLike, freshDays = 1) {
  const userId = user?.id ?? 'anon';
  const kWelcome = welcomeKey(userId);
  const kOnboarding = onboardingKey(userId);

  const newAccount = useMemo(
    () => isNewAccount(user?.createdAt, freshDays),
    [user?.createdAt, freshDays]
  );

  const [welcomeSeen, setWelcomeSeen] = useState(() => getLS(kWelcome) === '1');
  const [onboardingSeen, setOnboardingSeen] = useState(() => getLS(kOnboarding) === '1');

  useEffect(() => {
    setWelcomeSeen(getLS(kWelcome) === '1');
    setOnboardingSeen(getLS(kOnboarding) === '1');
  }, [kWelcome, kOnboarding, userId]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === kWelcome) setWelcomeSeen(getLS(kWelcome) === '1');
      if (e.key === kOnboarding) setOnboardingSeen(getLS(kOnboarding) === '1');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [kWelcome, kOnboarding]);

  const shouldShowWelcome = newAccount && !welcomeSeen;
  const shouldShowOnboarding = !onboardingSeen; 

  const markWelcomeSeen = () => {
    setLS(kWelcome, '1');
    setWelcomeSeen(true);
  };

  const markOnboardingSeen = () => {
    setLS(kOnboarding, '1');
    setOnboardingSeen(true);
  };

  return {
    newAccount,
    shouldShowWelcome,
    shouldShowOnboarding,
    markWelcomeSeen,
    markOnboardingSeen,
  };
}
