import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '../../components/Button/Button';
import OTPInput from '../../components/Inputs/Otp';
import { authService } from '../../services/authService';
import { useAuth } from '../../stores/auth.store';
import Loading from '../Loading/Loading';
import { errorHandler } from '../../utils/errorHandler';

const OtpPage: React.FC = () => {
  const navigate = useNavigate();
    // const location = useLocation();
  const [searchParams] = useSearchParams();
  const { setToken, setUser } = useAuth();

  // Get mobile number from URL query parameter
  const mobileNumber = searchParams.get('mobile');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpCode, setOtpCode] = useState('');
  const [resendTimer, setResendTimer] = useState(120); // 2 minutes
  const [canResend, setCanResend] = useState(false);

  // Redirect if no mobile number in URL
  useEffect(() => {
    if (!mobileNumber) {
      navigate('/auth', { replace: true });
    }
  }, [mobileNumber, navigate]);

  // Timer for resend OTP
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleOtpSubmit = async () => {
    if (!mobileNumber || !otpCode || otpCode.length !== 6) {
      setError('لطفاً کد ۶ رقمی را کامل وارد کنید');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Check if user exists to determine purpose
      const checkResponse = await authService.checkMobile(mobileNumber);
      const purpose = checkResponse.userExists ? 'login' : 'register';
      
      const response = await authService.loginWithOtp(
        mobileNumber,
        otpCode,
        purpose === 'register' ? 2 : 1
      );

      if (response.token) {
        setToken(response.token);
        setUser(response.user);

                // Redirect based on purpose
                if (purpose === 'register') {
                    navigate('/auth/register', {
                        state: {
                            mobileNumber: mobileNumber,
                            verified: true,
                        },
                    });
                } else {
                    navigate('/dashboard', { replace: true });
                }
            } else {
                setError('کد تایید نامعتبر است');
            }
        } catch (err: any) {
            setError(errorHandler(err));
            //   if (err.response?.status === 400) {
            //     setError('کد تایید نامعتبر یا منقضی شده است');
            //   } else if (err.response?.status === 429) {
            //     setError('تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید');
            //   } else {
            //     setError('خطا در ارتباط با سرور');
            //   }
        } finally {
            setIsLoading(false);
        }
    };

  const handleResendOtp = async () => {
    if (!canResend || !mobileNumber) return;

    setIsLoading(true);
    setError(null);

    try {
      // Check if user exists to determine purpose
      const checkResponse = await authService.checkMobile(mobileNumber);
      const purpose = checkResponse.userExists ? 'login' : 'register';
      
      const response = await authService.resendOtp(
        mobileNumber,
        purpose === 'register' ? 2 : 1
      );

            if (response.ok) {
                setResendTimer(response.ttlSec || 120);
                setCanResend(false);
                setOtpCode('');
            } else {
                setError('خطا در ارسال مجدد کد');
            }
        } catch (err) {
            setError(errorHandler(err));
        } finally {
            setIsLoading(false);
        }
    };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!mobileNumber) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      <main className="flex-1 relative">
        <section className="min-h-screen bg-primary-darker rounded-lg p-4 flex flex-col justify-center items-center py-8 relative">
          <div className="w-full max-w-md mx-auto text-center">
            <div className="mb-8">
              <img
                alt="OTP Verification"
                src="/images/otp-verification.svg"
                height={174}
                width={232}
                className="mx-auto"
              />
            </div>

            <Typography className="text-white !font-alibaba mb-2" fontSize={20} fontWeight="bold">
              تایید شماره موبایل
            </Typography>

            <Typography className="text-gray-300 !font-peyda mb-8" fontSize={14}>
              کد تایید ارسال شده به شماره {mobileNumber} را وارد کنید
            </Typography>

            <div className="mb-6">
              <OTPInput
                length={6}
                onChange={setOtpCode}
                className="mb-4"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <Typography className="text-red-400 !font-peyda" fontSize={12}>
                  {error}
                </Typography>
              </div>
            )}

            <Button
              onClick={handleOtpSubmit}
              disabled={isLoading || otpCode.length !== 6}
              className="w-full mb-4"
            >
              تایید و ادامه
            </Button>

            <div className="text-center space-y-2 mb-4">
              <Typography className="text-gray-400 !font-peyda" fontSize={12}>
                کد تایید دریافت نکردید؟
              </Typography>
              {canResend ? (
                <button
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="text-primary-blue !font-peyda text-sm underline hover:text-primary-light transition-colors"
                >
                  ارسال مجدد کد
                </button>
              ) : (
                <Typography className="text-gray-500 !font-peyda" fontSize={12}>
                  ارسال مجدد در {formatTimer(resendTimer)}
                </Typography>
              )}
            </div>

            <button
              onClick={() => navigate('/auth', { replace: true })}
              className="w-full py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors font-peyda"
            >
              بازگشت
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OtpPage;