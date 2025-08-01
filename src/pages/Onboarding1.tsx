import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';

const Onboarding1: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/onboarding2');
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pt-12">
        <button 
          onClick={handleSkip}
          className="text-blue-200 text-sm font-medium"
        >
          رد کردن
        </button>
        <div className="flex space-x-2">
          <div className="w-8 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Illustration */}
        <div className="w-80 h-80 mb-12 relative">
          {/* Phone mockup */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform rotate-12 shadow-2xl">
            <div className="p-6 h-full flex flex-col">
              {/* Phone screen content */}
              <div className="bg-white rounded-2xl flex-1 p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                  <div className="h-20 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg mt-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="text-2xl">💰</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-lg">📈</span>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl font-bold mb-4 leading-relaxed">
            پلتفرم هوشمند معامله طلا
          </h2>
          <p className="text-blue-200 text-base leading-relaxed px-4">
            با کیمیا گلد به راحتی طلا خرید و فروش کنید.
            قیمت‌های لحظه‌ای و تحلیل‌های دقیق در دسترس شما.
          </p>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="p-6 pb-8">
        <Button
          onClick={handleNext}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg"
        >
          ادامه
        </Button>
      </div>
    </div>
  );
};

export default Onboarding1;