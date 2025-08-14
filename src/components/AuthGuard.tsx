/* src/components/AuthGuard.tsx */
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../stores/auth.store';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated, token } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Check if token exists in localStorage on mount
    const storedToken = localStorage.getItem('auth.token');
    if (!storedToken && !isAuthenticated) {
      // Token doesn't exist, redirect to auth
      return;
    }
  }, [isAuthenticated]);

  if (!isAuthenticated || !token) {
    // Redirect to auth page, preserving the attempted location
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;