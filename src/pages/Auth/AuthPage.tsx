/* src/pages/Auth/AuthPage.tsx */
import React, { useState, useEffect } from 'react';
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
import { errorHandler } from '../../utils/errorHandler';

type AuthStep = 'mobile' | 'register' | 'otp' | 'password';

interface UserStatus {
  userExists: boolean;
  hasPassword: boolean;
}

const AuthPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();

  // --- UI/Flow State
  const [currentStep, setCurrentStep] = useState<AuthStep>('mobile');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [otpCode, setOtpCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp' | null>(null);

  // --- Forms
  const mobileForm = useForm<MobileFormData>({ resolver: zodResolver(mobileSchema) });
  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      mobileNumber: '',
      nationalCode: '',
      birthDate: '',
      referralCode: '',
      acceptRules: false,
    },
  });
  const passwordForm = useForm<PasswordFormData>({ resolver: zodResolver(passwordLoginSchema) });

    // --- OTP resend timer
    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(prev => prev - 1), 1000);
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

  // --- Helpers
  const sendOtp = async (mobile: string, purpose: 'login' | 'register') => {
    const response = await authService.sendOtp(mobile, purpose === 'register' ? 2 : 1);
    if (response?.ttlSec) {
      setResendTimer(response.ttlSec);
      setCanResend(false);
    }
  };

  const proceedFromMobile = async (method: 'password' | 'otp') => {
    setError(null);
    setLoginMethod(method);

    const isValid = await mobileForm.trigger();
    if (!isValid) return;

    const { mobileNumber: m } = mobileForm.getValues();

    setMobileNumber(m);
    setCurrentStep(method === 'password' ? 'password' : 'otp');

    setIsLoading(true);
    try {
      const status = await authService.checkMobile(m);
      setUserStatus(status);

      if (!status.userExists) {
        // کاربر جدید → ثبت‌نام
        registerForm.setValue('mobileNumber', m);
        setCurrentStep('register');
        return;
      }

            if (method === 'password') {
                if (status.hasPassword) {
                    return;
                }
                await sendOtp(m, 'login');
                setCurrentStep('otp');
                setLoginMethod('otp');
            } else {
                // method === 'otp'
                await sendOtp(m, 'login');
                setCurrentStep('otp');
                setLoginMethod('otp');
            }
        } catch (err: any) {
            setError(errorHandler(err));
            // setError(err?.message || 'خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
            setCurrentStep('mobile');
            setLoginMethod(null);
        } finally {
            setIsLoading(false);
        }
    };

  // --- Submit handlers
  const handleRegisterSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.register({
        nationalCode: data.nationalCode,
        mobileNumber: data.mobileNumber,
        birthDate: data.birthDate,
        referralCode: data.referralCode,
      });

            // پس از ثبت‌نام موفق، OTP
            await sendOtp(data.mobileNumber, 'register');
            setLoginMethod('otp');
            setCurrentStep('otp');
        } catch (err: any) {
            setError(errorHandler(err));
        } finally {
            setIsLoading(false);
        }
    };

  const handlePasswordSubmit = async (data: PasswordFormData) => {
    setIsLoading(true);
    setError(null);

        try {
            const response = await authService.loginWithPassword(mobileNumber, data.password);
            if (response?.token) {
                setToken(response.token);
                setUser(response.user);
                navigate('/app', { replace: true });
            }
        } catch (err: any) {
            setError(errorHandler(err));

            //     const status = err?.response?.status;
            //     const msg =
            //         status === 401
            //             ? 'رمز عبور اشتباه وارد شده است، لطفا دوباره تلاش کنید.'
            //             : status === 403
            //               ? 'دسترسی غیرمجاز است.'
            //               : status === 429
            //                 ? 'تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید.'
            //                 : !err?.response
            //                   ? 'اتصال به سرور برقرار نشد.'
            //                   : status && status >= 500
            //                     ? 'مشکل سمت سرور پیش‌آمده است.'
            //                     : 'در حال حاضر مشکلی پیش آمده، لطفاً مجدداً تلاش کنید.';
            //     setError(msg);
        } finally {
            setIsLoading(false);
        }
    };

  const handleOtpSubmit = async () => {
    if (!otpCode || otpCode.length !== 6) {
      setError('لطفاً کد ۶ رقمی را کامل وارد کنید.');
      return;
    }

    setIsLoading(true);
    setError(null);

        try {
            const purpose = userStatus?.userExists ? 'login' : 'register';
            const response = await authService.loginWithOtp(
                mobileNumber,
                otpCode,
                purpose === 'register' ? 2 : 1,
            );
            if (response?.token) {
                setToken(response.token);
                setUser(response.user);
                navigate('/app', { replace: true });
            }
        } catch (err: any) {
            setError(errorHandler(err));
            //   if (err.response?.status === 400) {
            //     setError('کد تایید نامعتبر یا منقضی شده است.');
            //   } else if (err.response?.status === 429) {
            //     setError('تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً بعداً تلاش کنید.');
            //   } else {
            //     setError('خطا در ارتباط با سرور.');
            //   }
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

      if (response?.ok) {
        setResendTimer(response.ttlSec || 120);
        setCanResend(false);
        setOtpCode('');
      } else {
        setError('خطا در ارسال مجدد کد.');
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور.');
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
        } catch {
            setError('خطا در ارسال کد تایید.');
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
      setLoginMethod(null);
      mobileForm.reset();
      passwordForm.reset();
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col mx-auto w-full min-h-screen dark:bg-black bg-light-primary-darker">
      <main className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
        {currentStep === 'mobile' && (
          <div className="dark:text-text-color text-light-text-color py-17">
            <img alt="login user" src="/images/login.svg" width={193} height={193} />
          </div>
        )}

                {/* Step: MOBILE */}
                {currentStep === 'mobile' && (
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            proceedFromMobile('otp'); 
                        }}
                        className="flex flex-col gap-4 w-full"
                    >
                        <div className="flex flex-col gap-2">
                            <Typography
                                className="dark:text-text-color text-dark-800"
                                fontFamily={'Alibaba, sans-serif'}
                                fontWeight={'bold'}
                                fontSize={19}
                            >
                                {t('loginToApp')}
                            </Typography>
                            <Typography
                                className="dark:text-neutral-300 text-dark-600"
                                fontFamily={'Peyda, sans-serif'}
                                fontSize={13}
                            >
                                {t('enterMobileForLogin')}
                            </Typography>
                        </div>

                        <div className="relative">
                            <div className="flex items-center text-text-color rounded-xsm dark:border-custom-border-light border-custom-gray border">
                                <div className="absolute h-full right-4 flex items-center justify-center">
                                    <CiMobile3 className="dark:text-text-color text-light-text-color" />
                                </div>
                                <input
                                    {...mobileForm.register('mobileNumber')}
                                    type="text"
                                    className="text-sm w-full h-10 pr-10 pl-5 dark:bg-black bg-transparent border-custom-gray dark:border-none rounded-lg dark:text-text-color text-light-text-color font-peyda placeholder-custom-text-secondary focus:outline-none dark:focus:border-gray-600 focus:border-light-text-color"
                                    placeholder={t('enterMobile') as string}
                                />
                            </div>
                            {mobileForm.formState.errors.mobileNumber && (
                                <p className="dark:text-red-400 dark:font-medium text-red-600 font-bold text-sm mt-1">
                                    {mobileForm.formState.errors.mobileNumber.message}
                                </p>
                            )}
                        </div>

                        {error && (
                            <Typography
                                className="text-red-300 dark:text-red-600"
                                fontFamily={'Alibaba, sans-serif'}
                                fontWeight={'bold'}
                                fontSize={11}
                            >
                                {error}
                            </Typography>
                        )}

                        {/* دو دکمه روش ورود */}
                        <div className="grid grid-cols-1 gap-3">
                            {/* اصلی: ورود با کد یکبار مصرف (آبی) */}
                            <Button
                                type="submit"
                                onClick={() => proceedFromMobile('otp')}
                                className="w-full text-white bg-primary-blue dark:bg-accent-orange hover:bg-blue-600 dark:hover:bg-accent-orange"
                            >
                                ورود با کد یکبار مصرف
                            </Button>
                            <button
                                type="button"
                                onClick={() => proceedFromMobile('password')}
                                className="w-full py-3 rounded-lg border border-primary-blue dark:border-none dark:bg-primary-gray-200 text-primary-blue dark:text-white hover:bg-primary-blue/10 transition-colors font-peyda"
                            >
                                ورود با رمز عبور
                            </button>
                        </div>
                    </form>
                )}

                {/* Step: REGISTER */}
                {currentStep === 'register' && (
                    <div className="w-full max-w-md mx-auto">
                        <div className="text-center mb-8 flex flex-col gap-2">
                            <Typography
                                className="dark:text-text-color text-light-text-color !font-alibaba mb-2"
                                fontSize={20}
                                fontWeight="bold"
                            >
                                تکمیل اطلاعات
                            </Typography>
                            <Typography
                                className="dark:text-gray-300 text-gray-800 !font-peyda"
                                fontSize={14}
                            >
                                لطفاً اطلاعات زیر را تکمیل کنید
                            </Typography>
                        </div>

            <form onSubmit={registerForm.handleSubmit(handleRegisterSubmit)} className="space-y-4">
              {/* Mobile Number (Read-only) */}
              <div className="flex flex-col gap-1">
                <Typography
                  className="text-color dark:text-text-color text-light-text-color !font-peyda mb-2"
                  fontSize={12}
                >
                  شماره موبایل
                </Typography>
                <TextField
                  mobileIcon={<CiMobile3 />}
                  placeholder="شماره موبایل"
                  defaultValue={mobileNumber}
                  disabled
                  className="dark:bg-gray-700 placeholder:text-light-text-color bg-transparent"
                />
              </div>

                            {/* National Code */}
                            <div className="flex flex-col gap-1">
                                <Typography
                                    className="dark:text-white text-light-text-color !font-peyda mb-2"
                                    fontSize={12}
                                >
                                    کد ملی *
                                </Typography>
                                <TextField
                                    mobileIcon={<MdOutlineBadge />}
                                    placeholder="کد ملی ۱۰ رقمی"
                                    {...registerForm.register('nationalCode')}
                                    className="w-full"
                                />
                                {registerForm.formState.errors.nationalCode && (
                                    <Typography
                                        className="text-red-400 !font-peyda mt-1"
                                        fontSize={11}
                                    >
                                        {registerForm.formState.errors.nationalCode.message}
                                    </Typography>
                                )}
                            </div>

                            {/* Birth Date */}
                            <div className="flex flex-col gap-1">
                                <Typography
                                    className="dark:text-white text-light-text-color !font-peyda mb-2"
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
                                        className="text-red-400 dark:text-red-600 !font-peyda mt-1"
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
                                <Typography
                                    className="dark:text-gray-300 text-gray-700 !font-peyda"
                                    fontSize={12}
                                >
                                    <Link
                                        href="/rules"
                                        className="text-primary-blue dark:text-accent-orange hover:underline"
                                    >
                                        قوانین و مقررات *
                                    </Link>{' '}
                                    را مطالعه کرده و می‌پذیرم
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
                                className="w-full bg-primary-blue dark:bg-accent-orange dark:haver:bg-black dark:hover:border-gray-600 hover:bg-primary-light text-white font-peyda"
                            >
                                تکمیل ثبت‌نام
                            </Button>

                            <button
                                type="button"
                                onClick={handleBack}
                                className="w-full py-3 rounded-lg border text-gray-300 hover:bg-primary-light dark:hover:bg-black dark:border-gray-700 dark:hover:border-none transition-colors font-peyda"
                            >
                                بازگشت
                            </button>
                        </form>
                    </div>
                )}

                {/* Step: PASSWORD */}
                {currentStep === 'password' && (
                    <div className="w-full max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <Typography
                                className="dark:text-text-color text-light-text-color !font-alibaba mb-2"
                                fontSize={20}
                                fontWeight="bold"
                            >
                                ورود با رمز عبور
                            </Typography>
                            <Typography
                                className="dark:text-gray-300 text-gray-700 !font-peyda"
                                fontSize={14}
                            >
                                رمز عبور خود را وارد کنید
                            </Typography>
                        </div>

                        <form
                            onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
                            className="space-y-4"
                        >
                            <div>
                                <Typography
                                    className="dark:text-text-color text-light-text-color !font-peyda mb-2"
                                    fontSize={12}
                                >
                                    رمز عبور *
                                </Typography>
                                <PasswordInput
                                    mobileIcon={<RiLockPasswordLine />}
                                    className="w-full"
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
                            </div>

              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <Typography className="text-red-400 !font-peyda" fontSize={12}>
                    {error}
                  </Typography>
                </div>
              )}

              <Button type="submit" disabled={isLoading} className="w-full bg-primary-blue hover:bg-primary-light dark:bg-accent-orange dark:hover:bg-orange-400 text-white font-peyda">
                ورود
              </Button>

                            <button
                                type="button"
                                onClick={handleSwitchToOtp}
                                disabled={isLoading}
                                className="w-full py-3 rounded-lg border border-primary-blue dark:border-gray-600 text-primary-blue dark:text-white hover:bg-primary-blue dark:hover:bg-accent-orange hover:text-white transition-colors font-peyda"
                            >
                                ورود با کد یکبار مصرف
                            </button>

                            <button
                                type="button"
                                onClick={handleBack}
                                className="w-full py-3 rounded-lg border border-primary-blue dark:border-gray-600 hover:border-none dark:text-white hover:bg-[#0F3DFB] dark:hover:bg-black hover:text-white text-primary-blue transition-colors font-peyda"
                            >
                                بازگشت
                            </button>
                        </form>
                    </div>
                )}

                {/* Step: OTP */}
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

                        <Typography
                            className="dark:text-white text-gray-700 !font-alibaba mb-2"
                            fontSize={20}
                            fontWeight="bold"
                        >
                            {userStatus?.userExists ? 'ورود با کد تایید' : 'تایید شماره موبایل'}
                        </Typography>

                        <Typography
                            className="dark:text-gray-300 text-black !font-peyda mb-8"
                            fontSize={14}
                        >
                            کد تایید ارسال شده به شماره {mobileNumber} را وارد کنید
                        </Typography>

                        <div className="mb-6">
                            <OTPInput length={6} onChange={setOtpCode} className="mb-4" />
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
                            className="w-full mb-4 text-white bg-primary-blue dark:bg-accent-orange hover:bg-blue-600"
                        >
                            {userStatus?.userExists ? 'ورود' : 'تایید و ادامه'}
                        </Button>

                        <div className="text-center space-y-2 mb-4">
                            <Typography
                                className="dark:text-gray-400 text-gray-700 !font-peyda"
                                fontSize={12}
                            >
                                کد تایید را دریافت نکردید؟
                            </Typography>
                            {canResend ? (
                                <button
                                    onClick={handleResendOtp}
                                    disabled={isLoading}
                                    className="text-primary-blue !font-peyda text-sm underline hover:text-primary-light dark:text-white dark:hover:text-accent-orange transition-colors"
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
                            className="w-full py-3 rounded-lg border hover:border-none dark:text-gray-300 text-gray-700 hover:text-text-color bg-black  transition-colors font-peyda"
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
