/* src/pages/Auth/MobilePage.tsx */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { mobileSchema, type MobileFormData } from '../../lib/validations';
import { authService } from '../../services/authService';
import Button from '../../components/Button/Button';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

const MobilePage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MobileFormData>({
    resolver: zodResolver(mobileSchema)
  });

  const onSubmit = async (data: MobileFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.checkMobile(data.mobileNumber);
      
      if (!response.userExists) {
        // کاربر جدید - هدایت به OTP
        navigate(`/auth/otp?mobile=${encodeURIComponent(data.mobileNumber)}`);
      } else if (response.hasPassword) {
        // کاربر قدیمی با پسورد - هدایت به انتخاب روش
        navigate(`/auth/choose?mobile=${encodeURIComponent(data.mobileNumber)}`);
      } else {
        // کاربر قدیمی بدون پسورد - مستقیم به OTP
        navigate(`/auth/otp?mobile=${encodeURIComponent(data.mobileNumber)}`);
      }
    } catch (err: any) {
      setError(err.message || 'خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="ورود" subtitle="شماره موبایل خود را وارد کنید">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Mobile Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            شماره موبایل
          </label>
          <div className="relative">
            <input
              {...register('mobileNumber')}
              type="tel"
              placeholder="09123456789"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              autoFocus
              dir="ltr"
            />
            {errors.mobileNumber && (
              <p className="text-red-400 text-sm mt-1">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              در حال بررسی...
            </div>
          ) : (
            'ادامه'
          )}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default MobilePage;