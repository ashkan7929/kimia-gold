/* src/pages/Auth/AuthPage.tsx */
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '../../components/Button/Button';
import TextField from '../../components/Inputs/TextField';
import CheckBox from '../../components/Inputs/Checkbox';
import DateField from '../../components/Inputs/Datepiker';
import OTPInput from '../../components/Inputs/Otp';
import {
    CiMobile3,
    MdOutlineBadge,
    FaRegUser,
    CiCalendarDate,
    RiLockPasswordLine,
} from '../../Icons';
import {
    mobileSchema,
    registerSchema,
    type MobileFormData,
    type RegisterFormData,
    type PasswordFormData,
    passwordLoginSchema,
} from '../../lib/validations';
import { authService } from '../../services/authService';
import { useAuth } from '../../stores/auth.store';
import { useTranslation } from 'react-i18next';
import Loading from '../Loading/Loading';
import PasswordInput from '../../components/Inputs/PasswordInput';

type AuthStep = 'mobile' | 'register' | 'otp' | 'password';

interface UserStatus {
    userExists: boolean;
    hasPassword: boolean;
}

const AuthPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();

  const [currentStep, setCurrentStep] = useState<AuthStep>('mobile');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [otpCode, setOtpCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp' | null>(null);
  // Mobile form
  const mobileForm = useForm<MobileFormData>({
    resolver: zodResolver(mobileSchema)
  });

  // Register form
  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      mobileNumber: '',
      nationalCode: '',
      birthDate: '',
      referralCode: '',
      acceptRules: false
    }
  });

  // Password form
  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordLoginSchema)
  });

  // Timer for resend OTP
  React.useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMobileSubmit = async (data: MobileFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.checkMobile(data.mobileNumber);
      setMobileNumber(data.mobileNumber);
      setUserStatus(response);

      if (!response.userExists) {
        // کاربر جدید - نمایش فرم ثبت‌نام
        registerForm.setValue('mobileNumber', data.mobileNumber);
        setLoginMethod(null); 
        setCurrentStep('register');
      } else if (response.hasPassword) {
        // کاربر موجود با رمز عبور - نمایش فرم رمز عبور
        setCurrentStep('password');
        setLoginMethod("password"); 
      } else {
        // کاربر موجود بدون رمز عبور - ارسال OTP
        await sendOtp(data.mobileNumber, 'login');
        setCurrentStep('otp');
        setLoginMethod(null); 

      }
    } catch (err: any) {
      setError(err.message || 'خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);
    console.log(data);

    try {
      await authService.register({
        nationalCode: data.nationalCode,
        mobileNumber: data.mobileNumber,
        birthDate: data.birthDate,
        referralCode: data.referralCode
      });

      // پس از ثبت‌نام موفق، ارسال OTP
      await sendOtp(data.mobileNumber, 'register');
      setLoginMethod(null);
      setCurrentStep('otp');
    } catch (err: any) {
      if (err.response?.status === 400) {
        const errorData = err.response.data;
        if (errorData.code === 'DUPLICATE_NATIONAL_CODE') {
          setError('این کد ملی قبلاً ثبت شده است');
        } else if (errorData.code === 'INVALID_NATIONAL_CODE') {
          setError('کد ملی نامعتبر است');
        } else if (errorData.code === 'INVALID_BIRTH_DATE') {
          setError('تاریخ تولد نامعتبر است');
        } else if (errorData.code === 'INVALID_REFERRAL_CODE') {
          setError('کد معرف نامعتبر است');
        } else {
          setError('اطلاعات وارد شده نامعتبر است');
        }
      } else if (err.response?.status === 429) {
        setError('تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید');
      } else {
        setError('خطا در ارتباط با سرور');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (data: PasswordFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.loginWithPassword(mobileNumber, data.password);

            if (response.token) {
                setToken(response.token);
                setUser(response.user);
                navigate('/app', { replace: true });
            }
        } catch (err: any) {
            const erroMsg = err.response?.status;
            const msg =
                erroMsg === 401
                    ? 'رمز عبور اشتباه وارد شده است& لطفا دوباره تلاش کنید'
                    : erroMsg === 403
                      ? 'دسترسی غیرمجاز است'
                      : erroMsg === 429
                        ? 'تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید'
                        : !err?.response
                          ? 'اتصال به سرور برقرار نشد'
                          : erroMsg && erroMsg >= 500
                            ? 'مشکل سمت سرور پیش‌آمده است'
                            : 'در حال حاضر مشکلی پیش اومده، لطفاً مجدداً تلاش کنید';
            setError(msg);
            // if (err.response?.status === 401) {
            //     setError('رمز عبور نادرست است');
            // } else if (err.response?.status === 429) {
            //     setError('تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید');
            // } else {
            //     setError('خطا  ارتباط با سرور');
            // }
        } finally {
            setIsLoading(false);
        }
    };

  const sendOtp = async (mobile: string, purpose: 'login' | 'register') => {
    try {
      const response = await authService.sendOtp(mobile, purpose === 'register' ? 2 : 1);
      if (response.ttlSec) {
        setResendTimer(response.ttlSec);
        setCanResend(false);
      }
    } catch (err) {
      setError('خطا در ارسال کد تایید');
    }
  };

    const handleOtpSubmit = async () => {
        if (!otpCode || otpCode.length !== 6) {
            setError('لطفاً کد ۶ رقمی را کامل وارد کنید');
            return;
        }

    setIsLoading(true);
    setError(null);

    try {
      const purpose = userStatus?.userExists ? 'login' : 'register';
      const response = await authService.loginWithOtp(
        mobileNumber,
        otpCode,
        purpose === 'register' ? 2 : 1
      );

      if (response.token) {
        setToken(response.token);
        setUser(response.user);
        navigate('/app', { replace: true });
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        setError('کد تایید نامعتبر یا منقضی شده است');
      } else if (err.response?.status === 429) {
        setError('تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید');
      } else {
        setError('خطا در ارتباط با سرور');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;

    setIsLoading(true);
    setError(null);

    try {
      const purpose = userStatus?.userExists ? 'login' : 'register';
      const response = await authService.resendOtp(mobileNumber, purpose === 'register' ? 2 : 1);

      if (response.ok) {
        setResendTimer(response.ttlSec || 120);
        setCanResend(false);
        setOtpCode('');
      } else {
        setError('خطا در ارسال مجدد کد');
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchToOtp = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await sendOtp(mobileNumber, 'login');
      setLoginMethod('otp');   
      setCurrentStep('otp');
    } catch (err) {
      setError('خطا در ارسال کد تایید');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setError(null);
    if (currentStep === 'register' || currentStep === 'password' || currentStep === 'otp') {
      setCurrentStep('mobile');
      setUserStatus(null);
      setMobileNumber('');
      setOtpCode('');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col mx-auto w-full min-h-screen bg-primary-darker light:bg-light-primary-darker">
      <main className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
        {!(currentStep === 'otp' && loginMethod === 'otp') && (
        <div className='text-text-color light:text-light-text-color py-17'>
          <img alt='login user' src='/images/login.svg' width={193} height={193} />
        </div>
        )}
        {/* Mobile Step */}
        {currentStep === 'mobile' && (
          <form onSubmit={mobileForm.handleSubmit(handleMobileSubmit)} className='flex flex-col gap-4 w-full'>
            <div className="flex flex-col gap-2">
              <Typography className="text-text-color light:text-dark-800" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={19}>
                {t('loginToApp')}
              </Typography>
              <Typography className="text-neutral-300 light:text-dark-600" fontFamily={'Peyda, sans-serif'} fontSize={13}>
                {t('enterMobileForLogin')}
              </Typography>
            </div>
            <div className="relative">
              <div className="flex items-center text-text-color rounded-xsm border-custom-border-light light:border-custom-gray border">
                <div className="absolute h-full right-4 flex items-center justify-center">
                  <CiMobile3 className='text-text-color light:text-light-text-color'/>
                </div>
                <input
                  {...mobileForm.register('mobileNumber')}
                  type="text"
                  className="text-sm w-full h-10 pr-10 pl-5 bg-custom-bg-input light:bg-transparent light:border-custom-gray rounded-lg text-text-color light:text-light-text-color font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue light:focus:border-light-text-color"
                  placeholder={t('enterMobile')}
                />
              </div>
              {mobileForm.formState.errors.mobileNumber && (
                <p className="text-red-400 light:text-red-600 light:font-bold text-sm mt-1">
                  {mobileForm.formState.errors.mobileNumber.message}
                </p>
              )}
            </div>
            {error && (
              <Typography className="text-red-300" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={11}>
                {error}
              </Typography>
            )}
            <Button className="w-full text-text-color bg-primary-blue hover:bg-blue-600">
              {t('loginToAccount')}
            </Button>
            
          </form>
        )}

        {/* Register Step */}
        {currentStep === 'register' && (
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8 flex flex-col gap-2">
              <Typography className="text-text-color light:text-light-text-color !font-alibaba mb-2" fontSize={20} fontWeight="bold">
                تکمیل اطلاعات
              </Typography>
              <Typography className="text-gray-300 !font-peyda" fontSize={14}>
                لطفاً اطلاعات زیر را تکمیل کنید
              </Typography>
            </div>

            <form onSubmit={registerForm.handleSubmit(handleRegisterSubmit)} className="space-y-4">
              {/* Mobile Number (Read-only) */}
              <div className='flex flex-col gap-1 '>
                <Typography className="text-color text-tex-color light:text-light-text-color !font-peyda mb-2" fontSize={12}>
                  شماره موبایل
                </Typography>
                <TextField
                  mobileIcon={<CiMobile3 />}
                  placeholder="شماره موبایل"
                  defaultValue={mobileNumber}
                  disabled
                  className="bg-gray-700 light:bg-transparent"
                />
              </div>

              {/* National Code */}
              <div className='flex flex-col gap-1'>
                <Typography className="text-white !font-peyda mb-2" fontSize={12}>
                  کد ملی *
                </Typography>
                <TextField
                  mobileIcon={<MdOutlineBadge />}
                  placeholder="کد ملی ۱۰ رقمی"
                  {...registerForm.register('nationalCode')}
                  className="w-full"
                />
                {registerForm.formState.errors.nationalCode && (
                  <Typography className="text-red-400 !font-peyda mt-1" fontSize={11}>
                    {registerForm.formState.errors.nationalCode.message}
                  </Typography>
                )}
              </div>

                            {/* Birth Date */}
                            <div className="flex flex-col gap-1">
                                <Typography
                                    className="text-white light:text-light-text-color !font-peyda mb-2"
                                    fontSize={12}
                                >
                                    تاریخ تولد *
                                </Typography>
                                <Controller
                                    name="birthDate"
                                    control={registerForm.control}
                                    render={({ field }) => (
                                        <DateField
                                            mobileIcon={<CiCalendarDate />}
                                            placeholder="تاریخ تولد"
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            name={field.name}
                                            className="w-full "
                                        />
                                    )}
                                />
                                {registerForm.formState.errors.birthDate && (
                                    <Typography
                                        className="text-red-400 !font-peyda mt-1"
                                        fontSize={11}
                                    >
                                        {registerForm.formState.errors.birthDate.message}
                                    </Typography>
                                )}
                            </div>

                            {/* Referral Code */}
                            <div className="flex flex-col gap-1">
                                <Typography className="text-white !font-peyda mb-2" fontSize={12}>
                                    کد معرف (اختیاری)
                                </Typography>
                                <TextField
                                    mobileIcon={<FaRegUser />}
                                    placeholder="کد معرف"
                                    {...registerForm.register('referralCode')}
                                    className="w-full"
                                />
                                {registerForm.formState.errors.referralCode && (
                                    <Typography
                                        className="text-red-400 !font-peyda mt-1"
                                        fontSize={11}
                                    >
                                        {registerForm.formState.errors.referralCode.message}
                                    </Typography>
                                )}
                            </div>

                            {/* Accept Rules */}
                            <div className="flex items-center gap-1">
                                <CheckBox
                                    label=""
                                    defaultChecked={registerForm.watch('acceptRules')}
                                    onChange={(_, checked) =>
                                        registerForm.setValue('acceptRules', checked)
                                    }
                                />
                                <Typography className="text-gray-300 !font-peyda" fontSize={12}>
                                    <Link
                                        href="/rules"
                                        className="text-primary-blue hover:underline"
                                    >
                    قوانین و مقررات
                                    </Link>{' '}
                                    را مطالعه کرده و می‌پذیرم *
                </Typography>
              </div>
              {registerForm.formState.errors.acceptRules && (
                <Typography className="text-red-400 !font-peyda" fontSize={11}>
                  {registerForm.formState.errors.acceptRules.message}
                </Typography>
              )}

              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <Typography className="text-red-400 !font-peyda" fontSize={12}>
                    {error}
                  </Typography>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading || !registerForm.watch('acceptRules')}
                className="w-full bg-primary-blue hover:bg-primary-light text-white font-peyda"
              >
                تکمیل ثبت‌نام
              </Button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full py-3 rounded-lg border text-gray-300 hover:bg-primary-light transition-colors font-peyda"
              >
                بازگشت
              </button>
            </form>
          </div>
        )}

        {/* Password Step */}
        {currentStep === 'password' && (
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <Typography className="text-text-color light:text-light-text-color !font-alibaba mb-2" fontSize={20} fontWeight="bold">
                ورود با رمز عبور
              </Typography>
              <Typography className="text-gray-300 light:text-gray-700 !font-peyda" fontSize={14}>
                رمز عبور خود را وارد کنید
              </Typography>
            </div>

            <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-4">
              {/* Mobile Number (Read-only) */}
              <div>
                <Typography className="text-color text-text-color light:text-light-text-color !font-peyda mb-2" fontSize={12}>
                  شماره موبایل
                </Typography>
                <TextField
                  mobileIcon={<CiMobile3 />}
                  placeholder="شماره موبایل"
                  defaultValue={mobileNumber}
                  disabled
                  className="bg-gray-700 light:bg-transparent "
                />
              </div>

                            {/* Password */}
                            <div>
                                <Typography
                                    className="text-text-color light:text-light-text-color !font-peyda mb-2"
                                    fontSize={12}
                                >
                                    رمز عبور *
                                </Typography>

                                <PasswordInput
                                    mobileIcon={<RiLockPasswordLine />}
                                    {...passwordForm.register('password')}
                                />

                                {passwordForm.formState.errors.password && (
                                    <Typography
                                        className="text-red-400 !font-peyda mt-1"
                                        fontSize={11}
                                    >
                                        {passwordForm.formState.errors.password.message}
                                    </Typography>
                                )}
                                <span className="text-sm !font-peyda text-green-400 light:text-green-600">
                                    رمز عبور موقت شما برای ورود
                                    <span> TempPassword123! </span>
                                    است .
                                </span>
                            </div>

              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <Typography className="text-red-400 !font-peyda" fontSize={12}>
                    {error}
                  </Typography>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-blue hover:bg-primary-light text-white font-peyda"
              >
                ورود
              </Button>

              {/* Switch to OTP */}
              <button
                type="button"
                onClick={handleSwitchToOtp}
                disabled={isLoading}
                className="w-full py-3 rounded-lg border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-colors font-peyda"
              >
                ورود با کد یکبار مصرف
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full py-3 rounded-lg border border-primary-blue hover:border-none hover:bg-[#0F3DFB] hover:text-white text-primary-blue transition-colors font-peyda"
              >
                بازگشت
              </button>
            </form>
          </div>
        )}

        {/* OTP Step */}
        {currentStep === 'otp' && (
          <div className="w-full max-w-md mx-auto text-center flex flex-col gap-2">
          {loginMethod === 'otp' && (
            <div className="mb-8">
              <img
                alt="OTP Verification"
                src="/images/otp.png"
                height={174}
                width={232}
                className="mx-auto"
              />
            </div>
          )}

            <Typography className="text-white light:text-gray-700 !font-alibaba mb-2" fontSize={20} fontWeight="bold">
              {userStatus?.userExists ? 'ورود با کد تایید' : 'تایید شماره موبایل'}
            </Typography>

            <Typography className="text-gray-300 light:text-gray-700 !font-peyda mb-8" fontSize={14}>
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
              className="w-full mb-4 text-white bg-primary-blue hover:bg-blue-600"
            >
              {userStatus?.userExists ? 'ورود' : 'تایید و ادامه'}
            </Button>

            <div className="text-center space-y-2 mb-4">
              <Typography className="text-gray-400 light:text-gray-700 !font-peyda" fontSize={12}>
                کد تایید را دریافت نکردید؟
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
              onClick={handleBack}
              className="w-full py-3 rounded-lg border hover:border-none text-gray-300 light:text-gray-700 light:hover:text-text-color hover:bg-primary-light transition-colors font-peyda"
            >
              بازگشت
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AuthPage;