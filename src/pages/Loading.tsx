import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time and then navigate to onboarding
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-yellow-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Main logo container */}
      <div className="flex flex-col items-center justify-center z-10">
        {/* Logo circle */}
        <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl mb-8 animate-bounce">
          <span className="text-4xl font-bold text-blue-900">KI</span>
        </div>

        {/* Loading indicator */}
        <div className="flex space-x-2 mt-8">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* App name */}
        <h1 className="text-white text-2xl font-bold mt-6 opacity-90">Kimia Gold</h1>
        <p className="text-blue-200 text-sm mt-2 opacity-75">سرمایه‌گذاری هوشمند در طلا</p>
      </div>
    </div>
  );
};

export default Loading;