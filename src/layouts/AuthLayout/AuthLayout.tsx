/* src/layouts/AuthLayout/AuthLayout.tsx */
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/images/ki-logo.svg" 
            alt="باشگاه وِم" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white mb-2">
            {title || 'باشگاه وِم'}
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-sm">
              {subtitle}
            </p>
          )}
        </div>

        {/* Auth Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs">
            با ورود به سیستم، شرایط و قوانین را می‌پذیرید
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;