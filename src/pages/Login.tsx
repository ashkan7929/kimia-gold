import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../components/UI';
import { useAppDispatch } from '../hooks/redux';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';
import { validateEmail } from '../utils';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'لطفا ایمیل معتبر وارد کنید';
    }

    if (!formData.password) {
      newErrors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      dispatch(loginStart());
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      const mockUser = {
        id: '1',
        email: formData.email,
        name: 'کاربر کیمیا',
        role: 'registered' as const,
        createdAt: new Date().toISOString(),
      };

      const mockToken = 'mock-jwt-token-' + Date.now();
      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
      navigate('/home');
    } catch (error) {
      dispatch(loginFailure('خطا در ورود. لطفا دوباره تلاش کنید.'));
      setErrors({ general: 'ایمیل یا رمز عبور اشتباه است.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pt-12">
        <button 
          onClick={() => navigate(-1)}
          className="text-blue-200 text-sm font-medium"
        >
          بازگشت
        </button>
        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-blue-900 font-bold text-sm">KI</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        {/* Welcome text */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl font-bold mb-2">
            {isSignUp ? 'ثبت نام' : 'ورود به حساب'}
          </h1>
          <p className="text-blue-200 text-base">
            {isSignUp ? 'حساب کاربری جدید ایجاد کنید' : 'به حساب کاربری خود وارد شوید'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <Input
               type="email"
               placeholder="ایمیل"
               value={formData.email}
               onChange={(value) => handleInputChange('email', value)}
               className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-blue-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
             />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2 text-right">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <Input
               type="password"
               placeholder="رمز عبور"
               value={formData.password}
               onChange={(value) => handleInputChange('password', value)}
               className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-blue-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
             />
            {errors.password && (
              <p className="text-red-400 text-sm mt-2 text-right">{errors.password}</p>
            )}
          </div>

          {/* Remember me / Forgot password */}
          {!isSignUp && (
            <div className="flex justify-between items-center">
              <label className="flex items-center text-blue-200 text-sm">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                  className="ml-2 rounded border-white/20 bg-white/10 text-yellow-400 focus:ring-yellow-400"
                />
                مرا به خاطر بسپار
              </label>
              <button
                type="button"
                className="text-yellow-400 text-sm font-medium"
              >
                فراموشی رمز عبور؟
              </button>
            </div>
          )}

          {/* Error message */}
          {errors.general && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
              <p className="text-red-400 text-sm text-center">{errors.general}</p>
            </div>
          )}

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-blue-900 border-t-transparent rounded-full animate-spin ml-2"></div>
                در حال پردازش...
              </div>
            ) : (
              isSignUp ? 'ثبت نام' : 'ورود'
            )}
          </Button>
        </form>

        {/* Switch between login/signup */}
        <div className="text-center mt-8">
          <p className="text-blue-200 text-sm">
            {isSignUp ? 'قبلاً حساب کاربری دارید؟' : 'حساب کاربری ندارید؟'}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-yellow-400 font-medium mr-2"
            >
              {isSignUp ? 'ورود' : 'ثبت نام'}
            </button>
          </p>
        </div>

        {/* Social login */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-blue-200">
                یا ورود با
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all duration-300">
              <span className="text-sm font-medium">گوگل</span>
            </button>
            <button className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all duration-300">
              <span className="text-sm font-medium">اپل</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center">
        <p className="text-blue-300 text-xs">
          با ورود یا ثبت نام، شما با
          <span className="text-yellow-400 mx-1">قوانین و مقررات</span>
          و
          <span className="text-yellow-400 mx-1">حریم خصوصی</span>
          موافقت می‌کنید.
        </p>
      </div>
    </div>
  );
};

export default Login;