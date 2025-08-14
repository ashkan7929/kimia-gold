/* src/pages/Auth/ChooseMethodPage.tsx */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from 'zod';

const passwordOnlySchema = z.object({
  password: z
    .string()
    .min(1, 'رمز عبور اجباری است')
    .min(6, 'حداقل ۶ کاراکتر')
});

type PasswordOnlyFormData = z.infer<typeof passwordOnlySchema>;
import { authService } from '../../services/authService';
import { useAuth } from '../../stores/auth.store';
import Button from '../../components/Button/Button';
import OTPInput from '../../components/Inputs/Otp';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

type AuthMethod = 'password' | 'otp';

const ChooseMethodPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mobile = searchParams.get('mobile') || '';
  const { setToken, setUser } = useAuth();

  const [activeMethod, setActiveMethod] = useState<AuthMethod>('password');
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpCode, setOtpCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [otpSent, setOtpSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PasswordOnlyFormData>({
    resolver: zodResolver(passwordOnlySchema)
  });

  const onPasswordSubmit = async (data: PasswordOnlyFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.loginWithPassword(mobile, data.password);
      setToken(response.token);
      setUser(response.user);
      navigate('/app');
    } catch (err: any) {
      setError(err.message || 'رمز عبور اشتباه است.');
    } finally {
      setIsLoading(false);
    }
  };

  // Resend timer effect
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const sendOtp = async () => {
    setIsSending(true);
    setError(null);
    
    try {
      await authService.sendOtp(mobile);
      setOtpSent(true);
      setResendTimer(60);
      setCanResend(false);
    } catch (err: any) {
      setError(err.message || 'خطا در ارسال کد تایید');
    } finally {
      setIsSending(false);
    }
  };

  const handleOtpMethod = () => {
    setActiveMethod('otp');
    if (!otpSent) {
      sendOtp();
    }
  };

  const handleOtpSubmit = async () => {
    if (otpCode.length !== 6) {
      setError('کد تایید ۶ رقمی وارد کنید');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.loginWithOtp(mobile, otpCode);
      setToken(response.token);
      setUser(response.user);
      navigate('/app');
    } catch (err: any) {
      setError(err.message || 'کد تایید اشتباه است');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    if (canResend) {
      sendOtp();
    }
  };

  return (
    <AuthLayout title="روش ورود" subtitle="روش ورود خود را انتخاب کنید">
      <div className="space-y-6">
        {/* Method Tabs */}
        <div className="flex bg-gray-700/30 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setActiveMethod('password')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${activeMethod === 'password'
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:text-white'
              }`}
          >
            رمز عبور
          </button>
          <button
            type="button"
            onClick={() => setActiveMethod('otp')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${activeMethod === 'otp'
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:text-white'
              }`}
          >
            OTP
          </button>
        </div>

        {/* Mobile Display */}
        <div className="bg-gray-700/20 rounded-lg p-3">
          <p className="text-gray-300 text-sm">شماره موبایل:</p>
          <p className="text-white font-medium" dir="ltr">{mobile}</p>
        </div>

        {/* Password Form */}
        {activeMethod === 'password' && (
          <form onSubmit={handleSubmit(onPasswordSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                رمز عبور
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                autoFocus
              />
              {errors.password && (
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  در حال ورود...
                </div>
              ) : (
                'ورود'
              )}
            </Button>
          </form>
        )}

        {/* OTP Method */}
        {activeMethod === 'otp' && (
          <div className="space-y-4">
            {!otpSent ? (
              <div className="space-y-4">
                <p className="text-gray-300 text-sm text-center">
                  برای ورود با کد تایید، روی دکمه زیر کلیک کنید
                </p>
                <Button
                  onClick={handleOtpMethod}
                  disabled={isSending}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium"
                >
                  {isSending ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      در حال ارسال...
                    </div>
                  ) : (
                    'ارسال کد تایید'
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm text-center">
                    کد تایید به شماره {mobile} ارسال شد
                  </p>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-white text-center">
                    کد ۶ رقمی را وارد کنید
                  </label>
                  <OTPInput
                    length={6}
                    onChange={setOtpCode}
                    className="justify-center"
                  />
                </div>

                <Button
                  onClick={handleOtpSubmit}
                  disabled={isLoading || otpCode.length !== 6}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      در حال تایید...
                    </div>
                  ) : (
                    'تایید و ورود'
                  )}
                </Button>

                {/* Resend Section */}
                <div className="text-center space-y-2">
                  {!canResend ? (
                    <p className="text-gray-400 text-sm">
                      ارسال مجدد کد تا {resendTimer} ثانیه دیگر
                    </p>
                  ) : (
                    <button
                      onClick={handleResend}
                      disabled={isSending}
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors disabled:opacity-50"
                    >
                      {isSending ? 'در حال ارسال...' : 'ارسال مجدد کد'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Back to Mobile */}
        <button
          type="button"
          onClick={() => navigate('/auth')}
          className="w-full text-gray-400 hover:text-gray-300 text-sm transition-colors"
        >
          ویرایش شماره موبایل
        </button>
      </div>
    </AuthLayout>
  );
};

export default ChooseMethodPage;