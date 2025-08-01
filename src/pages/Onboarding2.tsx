import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';

const Onboarding2: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/login');
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
          <div className="w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
          <div className="w-8 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Illustration */}
        <div className="w-80 h-80 mb-12 relative">
          {/* Central gear/cog illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 relative">
              {/* Main gear */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                {/* Gear teeth */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-8 bg-yellow-500"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '50% 0%',
                        transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Center circle */}
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center z-10">
                  <span className="text-yellow-400 text-2xl font-bold">₹</span>
                </div>
              </div>
              
              {/* Smaller gears */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-spin-reverse shadow-lg">
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-4 bg-blue-500"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '50% 0%',
                        transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-spin shadow-lg">
                <div className="absolute inset-0">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-3 bg-green-500"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '50% 0%',
                        transform: `translate(-50%, -100%) rotate(${i * 90}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-4 left-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 right-12 w-2 h-2 bg-blue-300 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-1/3 right-4 w-4 h-4 bg-green-300 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Text content */}
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl font-bold mb-4 leading-relaxed">
            تحلیل و پیش‌بینی قیمت‌ها
          </h2>
          <p className="text-blue-200 text-base leading-relaxed px-4">
            با ابزارهای پیشرفته تحلیل تکنیکال و اخبار بازار،
            بهترین زمان خرید و فروش را تشخیص دهید.
          </p>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="p-6 pb-8">
        <Button
          onClick={handleNext}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg"
        >
          شروع کنید
        </Button>
      </div>
    </div>
  );
};

export default Onboarding2;