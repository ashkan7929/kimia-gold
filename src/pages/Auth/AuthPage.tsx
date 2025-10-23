/* src/pages/Auth/AuthPage.tsx */
import React, { useEffect, useState } from 'react';
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
import { CiMobile3, MdOutlineBadge, FaRegUser, CiCalendarDate, RiLockPasswordLine } from '../../Icons';
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

/* =================== Constants & Types =================== */
const AUTH_STEPS = { MOBILE: 'mobile', REGISTER: 'register', OTP: 'otp', PASSWORD: 'password' } as const;
type AuthStep = typeof AUTH_STEPS[keyof typeof AUTH_STEPS];

const LOGIN_METHOD = { PASSWORD: 'password', OTP: 'otp' } as const;
type LoginMethod = typeof LOGIN_METHOD[keyof typeof LOGIN_METHOD] | null;

const OTP_PURPOSE = { LOGIN: 1, REGISTER: 2 } as const;

type UserStatus = { userExists: boolean; hasPassword: boolean };

/* =================== Small UI Pieces =================== */
const ErrorAlert = ({ message }: { message?: string | null }) =>
  !message ? null : (
    <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
      <Typography className="text-red-400 !font-peyda" fontSize={12}>
        {message}
      </Typography>
    </div>
  );

const NoticeAlert = ({ message }: { message?: string | null }) =>
  !message ? null : (
    <div className="mb-4 p-3 rounded-lg border border-green-500/30 bg-green-500/10">
      <Typography className="dark:text-green-500 text-green-800 !font-peyda" fontSize={12}>
        {message}
      </Typography>
    </div>
  );

const formatTimer = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return mins === 0 ? String(secs) : `${mins}:${secs.toString().padStart(2, '0')}`;
};

/* =================== Page =================== */
const AuthPage: React.FC = () => {
  const { t } = useTranslation('authPage');
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();

  // notices & errors
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // flow state
  const [currentStep, setCurrentStep] = useState<AuthStep>(AUTH_STEPS.MOBILE);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [loginMethod, setLoginMethod] = useState<LoginMethod>(null);
  console.log(loginMethod); // TODO:USE LOGIN METHOD ----TEMP---- TO COMPELETE BUILD 

  // otp & timer
  const [otpCode, setOtpCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const canResend = resendTimer === 0;

  // forms
  const mobileForm = useForm<MobileFormData>({ resolver: zodResolver(mobileSchema) });
  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { mobileNumber: '', nationalCode: '', birthDate: '', referralCode: '', acceptRules: false },
  });
  const passwordForm = useForm<PasswordFormData>({ resolver: zodResolver(passwordLoginSchema) });

  /* ------------------- Effects ------------------- */
  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setTimeout(() => setResendTimer(prev => Math.max(prev - 1, 0)), 1000);
    return () => clearTimeout(timer);
  }, [resendTimer]);

  /* ------------------- Helpers ------------------- */
  const resetFlow = () => {
    setError(null);
    setNotice(null);
    setCurrentStep(AUTH_STEPS.MOBILE);
    setUserStatus(null);
    setMobileNumber('');
    setOtpCode('');
    setLoginMethod(null);
    setResendTimer(0);
    mobileForm.reset();
    passwordForm.reset();
    registerForm.reset();
  };

  const otpPurposeFor = (exists: boolean) => (exists ? OTP_PURPOSE.LOGIN : OTP_PURPOSE.REGISTER);

  const startOtpTimer = (ttlSec?: number) => {
    const ttl = ttlSec ?? 120;
    setResendTimer(ttl);
  };

  const sendOtp = async (mobile: string, forRegister: boolean) => {
    const res = await authService.sendOtp(mobile, forRegister ? OTP_PURPOSE.REGISTER : OTP_PURPOSE.LOGIN);
    startOtpTimer(res?.ttlSec);
    setNotice(t('otpSent', { defaultValue: 'کد یک‌بار مصرف ارسال شد' }));
  };

  /* ------------------- Handlers ------------------- */
  const proceedFromMobile = async (method: typeof LOGIN_METHOD.PASSWORD | typeof LOGIN_METHOD.OTP) => {
    setError(null);
    setLoginMethod(method);

    const isValid = await mobileForm.trigger();
    if (!isValid) return;

    const m = mobileForm.getValues('mobileNumber');
    setMobileNumber(m);

    setIsLoading(true);
    try {
      const status = await authService.checkMobile(m);
      setUserStatus(status);

      if (!status.userExists) {
        // new user → go register
        registerForm.setValue('mobileNumber', m);
        setCurrentStep(AUTH_STEPS.REGISTER);
        return;
      }

      // existing user
      if (method === LOGIN_METHOD.PASSWORD && status.hasPassword) {
        setCurrentStep(AUTH_STEPS.PASSWORD);
        return;
      }

      // fallback to OTP
      await sendOtp(m, false);
      setCurrentStep(AUTH_STEPS.OTP);
      setLoginMethod(LOGIN_METHOD.OTP);
    } catch (err) {
      setError(errorHandler(err));
      resetFlow();
    } finally {
      setIsLoading(false);
    }
  };

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

      await sendOtp(data.mobileNumber, true);
      setLoginMethod(LOGIN_METHOD.OTP);
      setCurrentStep(AUTH_STEPS.OTP);
    } catch (err) {
      setError(errorHandler(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (data: PasswordFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await authService.loginWithPassword(mobileNumber, data.password);
      if (res?.token) {
        setToken(res.token);
        setUser(res.user);
        navigate('/app', { replace: true });
      }
    } catch (err) {
      setError(errorHandler(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    if (!otpCode || otpCode.length !== 6) {
      setError(t('otp6digits', { defaultValue: 'لطفاً کد ۶ رقمی را وارد کنید.' }));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const purpose = otpPurposeFor(Boolean(userStatus?.userExists));
      console.log({ mobileNumber, otpCode, purpose });

      const res = await authService.loginWithOtp(mobileNumber, otpCode, purpose);
      // T
      console.log('[OTP] user.isActive?', res?.user?.isActive, 'user.is_active?', res?.user);

      if (res?.token) {
        setToken(res.token);
        setUser(res.user);
        navigate('/app', { replace: true });
      }
    } catch (err) {
      setError(errorHandler(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;

    setIsLoading(true);
    setError(null);

    try {
      const purpose = otpPurposeFor(Boolean(userStatus?.userExists));
      const res = await authService.resendOtp(mobileNumber, purpose);
      if (res?.ok) {
        startOtpTimer(res.ttlSec);
        setOtpCode('');
        setNotice(t('otpResent', { defaultValue: 'کد یکبار مصرف دوباره ارسال شد' }));
      } else {
        setError(t('otpResendFailed', { defaultValue: 'خطا در ارسال مجدد کد.' }));
      }
    } catch (err) {
      console.log(err)
      setError(t('serverError', { defaultValue: 'خطا در ارتباط با سرور.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchToOtp = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await sendOtp(mobileNumber, false);
      setLoginMethod(LOGIN_METHOD.OTP);
      setCurrentStep(AUTH_STEPS.OTP);
    } catch {
      setError(t('otpSendFailed', { defaultValue: 'خطا در ارسال کد تایید.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => resetFlow();

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col mx-auto w-full min-h-screen dark:bg-black bg-light-primary-darker">
      <main className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">

        {/* MOBILE STEP */}
        {currentStep === AUTH_STEPS.MOBILE && (
          <>
            {/* <div className="dark:text-text-color text-light-text-color py-17">
              <img alt="login user" src="/images/login.png" width={193} height={193} />
            </div> */}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                proceedFromMobile(LOGIN_METHOD.OTP);
              }}
              className="flex flex-col gap-4 w-full max-w-md"
            >
              <div className="flex flex-col gap-2">
                <Typography className="dark:text-text-color text-dark-800" fontFamily="Alibaba, sans-serif" fontWeight="bold" fontSize={19}>
                  {t('loginToApp', { defaultValue: 'ورود به اپلیکیشن' })}
                </Typography>
                <Typography className="dark:text-neutral-300 text-dark-600" fontFamily="Peyda, sans-serif" fontSize={13}>
                  {t('enterMobileForLogin', { defaultValue: 'شماره موبایل خود را وارد کنید' })}
                </Typography>
              </div>

              <div className="relative">
                <div className="flex items-center text-text-color rounded-xsm dark:border-gray-500 border-custom-gray border">
                  <div className="absolute h-full right-4 flex items-center justify-center">
                    <CiMobile3 className="dark:text-text-color text-light-text-color" />
                  </div>
                  <input
                    {...mobileForm.register('mobileNumber')}
                    type="text"
                    className="text-sm w-full h-10 pr-10 pl-5 dark:bg-black bg-transparent border-custom-gray dark:border-none rounded-lg dark:text-text-color text-light-text-color font-peyda placeholder-custom-text-secondary focus:outline-none dark:focus:border-gray-600 focus:border-light-text-color"
                    placeholder={t('enterMobile', { defaultValue: 'شماره موبایل' })}
                  />
                </div>
                {mobileForm.formState.errors.mobileNumber && (
                  <p className="dark:text-red-400 dark:font-medium text-red-600 font-bold text-sm mt-1">
                    {mobileForm.formState.errors.mobileNumber.message}
                  </p>
                )}
              </div>

              <ErrorAlert message={error} />

              <div className="grid grid-cols-1 gap-3">
                <Button type="submit" className="w-full text-white bg-primary-blue dark:bg-accent-orange hover:bg-blue-600 dark:hover:bg-accent-orange">
                  {t('loginWithOtp', { defaultValue: 'ورود با کد یکبار مصرف' })}
                </Button>
                <button
                  type="button"
                  onClick={() => proceedFromMobile(LOGIN_METHOD.PASSWORD)}
                  className="w-full py-3 rounded-lg hover:bg-primary-blue/10 dark:hover:bg-accent-orange/10 dark:border-none dark:bg-primary-gray-200 text-primary-blue dark:text-white font-peyda"
                >
                  {t('loginWithPassword', { defaultValue: 'ورود با رمز عبور' })}
                </button>
              </div>
            </form>
          </>
        )}

        {/* REGISTER STEP */}
        {currentStep === AUTH_STEPS.REGISTER && (
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8 flex flex-col gap-2">
              <Typography className="dark:text-text-color text-light-text-color !font-alibaba mb-2" fontSize={20} fontWeight="bold">
                {t('completeInfo', { defaultValue: 'تکمیل اطلاعات' })}
              </Typography>
              <Typography className="dark:text-gray-300 text-gray-800 !font-peyda" fontSize={14}>
                {t('pleaseCompleteBelow', { defaultValue: 'لطفاً اطلاعات زیر را تکمیل کنید' })}
              </Typography>
            </div>

            <form onSubmit={registerForm.handleSubmit(handleRegisterSubmit)} className="space-y-4">
              {/* Mobile (readonly) */}
              <div className="flex flex-col gap-1">
                <Typography className="text-color dark:text-text-color text-light-text-color !font-peyda mb-2" fontSize={12}>
                  {t('mobileNumber', { defaultValue: 'شماره موبایل' })}
                </Typography>
                <TextField
                  mobileIcon={<CiMobile3 />}
                  placeholder={t('mobileNumber', { defaultValue: 'شماره موبایل' })}
                  defaultValue={mobileNumber}
                  disabled
                  className="dark:bg-gray-700 placeholder:text-light-text-color bg-transparent"
                />
              </div>

              {/* National Code */}
              <div className="flex flex-col gap-1">
                <Typography className="dark:text-white text-light-text-color !font-peyda mb-2" fontSize={12}>
                  {t('nationalCode', { defaultValue: 'کد ملی *' })}
                </Typography>
                <TextField
                  mobileIcon={<MdOutlineBadge />}
                  placeholder={t('nationalCode10', { defaultValue: 'کد ملی ۱۰ رقمی' })}
                  {...registerForm.register('nationalCode')}
                  className="dark:bg-gray-700 placeholder:text-gray-500 bg-transparent"
                />
                {registerForm.formState.errors.nationalCode && (
                  <Typography className="text-red-400 !font-peyda mt-1" fontSize={11}>
                    {registerForm.formState.errors.nationalCode.message}
                  </Typography>
                )}
              </div>

              {/* Birth Date */}
              <div className="flex flex-col gap-1">
                <Typography className="dark:text-white text-light-text-color !font-peyda mb-2" fontSize={12}>
                  {t('birthDate', { defaultValue: 'تاریخ تولد *' })}
                </Typography>
                <Controller
                  name="birthDate"
                  control={registerForm.control}
                  render={({ field }) => (
                    <DateField
                      mobileIcon={<CiCalendarDate />}
                      placeholder={t('birthDate', { defaultValue: 'تاریخ تولد' }) as string}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      className="w-full"
                    />
                  )}
                />
                {registerForm.formState.errors.birthDate && (
                  <Typography className="text-red-400 !font-peyda mt-1" fontSize={11}>
                    {registerForm.formState.errors.birthDate.message}
                  </Typography>
                )}
              </div>

              {/* Referral Code */}
              <div className="flex flex-col gap-1">
                <Typography className="dark:text-white text-light-text-color !font-peyda mb-2" fontSize={12}>
                  {t('referralCodeOptional', { defaultValue: 'کد معرف (اختیاری)' })}
                </Typography>
                <TextField
                  mobileIcon={<FaRegUser />}
                  placeholder={t('referralCode', { defaultValue: 'کد معرف' })}
                  {...registerForm.register('referralCode')}
                  className="w-full"
                />
                {registerForm.formState.errors.referralCode && (
                  <Typography className="text-red-400 dark:text-red-600 !font-peyda mt-1" fontSize={11}>
                    {registerForm.formState.errors.referralCode.message}
                  </Typography>
                )}
              </div>

              {/* Rules */}
              <div className="flex items-center gap-1">
                <CheckBox
                  label=""
                  defaultChecked={registerForm.watch('acceptRules')}
                  onChange={(_, checked) => registerForm.setValue('acceptRules', checked)}
                />
                <Typography className="dark:text-gray-300 text-gray-700 !font-peyda" fontSize={12}>
                  <Link href="/rules" className="text-primary-blue dark:text-accent-orange hover:underline">
                    {t('rules', { defaultValue: 'قوانین و مقررات *' })}
                  </Link>{' '}
                  {t('iAccept', { defaultValue: 'را مطالعه کرده و می‌پذیرم' })}
                </Typography>
              </div>
              {registerForm.formState.errors.acceptRules && (
                <Typography className="text-red-400 !font-peyda" fontSize={11}>
                  {registerForm.formState.errors.acceptRules.message}
                </Typography>
              )}

              <ErrorAlert message={error} />

              <Button
                type="submit"
                disabled={isLoading || !registerForm.watch('acceptRules')}
                className="w-full bg-primary-blue dark:bg-accent-orange hover:bg-primary-light dark:hover:bg-orange-400 text-white font-peyda"
              >
                {t('completeRegister', { defaultValue: 'تکمیل ثبت‌نام' })}
              </Button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full py-3 rounded-lg hover:border dark:hover:border-gray-600 dark:text-white hover:bg-white hover:border-primary-blue dark:hover:bg-black hover:text-primary-blue text-gray-400 transition-colors font-peyda"
              >
                {t('back', { defaultValue: 'بازگشت' })}
              </button>
            </form>
          </div>
        )}

        {/* PASSWORD STEP */}
        {currentStep === AUTH_STEPS.PASSWORD && (
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <Typography className="dark:text-text-color text-light-text-color !font-alibaba mb-2" fontSize={20} fontWeight="bold">
                {t('loginWithPassword', { defaultValue: 'ورود با رمز عبور' })}
              </Typography>
              <Typography className="dark:text-gray-300 text-gray-700 !font-peyda" fontSize={14}>
                {t('enterPassword', { defaultValue: 'رمز عبور خود را وارد کنید' })}
              </Typography>
            </div>

            <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-4">
              <div>
                <Typography className="dark:text-text-color text-light-text-color !font-peyda mb-2" fontSize={12}>
                  {t('passwordStar', { defaultValue: 'رمز عبور *' })}
                </Typography>
                <PasswordInput mobileIcon={<RiLockPasswordLine />} className="w-full mt-2" {...passwordForm.register('password')} />
                {passwordForm.formState.errors.password && (
                  <Typography className="text-red-400 !font-peyda mt-1" fontSize={11}>
                    {passwordForm.formState.errors.password.message}
                  </Typography>
                )}
              </div>

              <ErrorAlert message={error} />

              <Button type="submit" disabled={isLoading} className="w-full bg-primary-blue hover:bg-primary-light dark:bg-accent-orange dark:hover:bg-orange-400 text-white font-peyda">
                {t('login', { defaultValue: 'ورود' })}
              </Button>

              <button
                type="button"
                onClick={handleSwitchToOtp}
                disabled={isLoading}
                className="w-full py-3 rounded-lg border border-primary-blue dark:border-gray-600 text-primary-blue dark:text-white hover:bg-primary-blue dark:hover:bg-accent-orange hover:text-white transition-colors font-peyda"
              >
                {t('loginWithOtp', { defaultValue: 'ورود با کد یکبار مصرف' })}
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full py-3 rounded-lg hover:border dark:hover:border-gray-600 dark:text-white hover:bg-white hover:border-primary-blue dark:hover:bg-black hover:text-primary-blue text-gray-400 transition-colors font-peyda"
              >
                {t('back', { defaultValue: 'بازگشت' })}
              </button>
            </form>
          </div>
        )}

        {/* OTP STEP */}
        {currentStep === AUTH_STEPS.OTP && (
          <div className="w-full max-w-md mx-auto text-center flex flex-col gap-2">
            {/* {loginMethod === LOGIN_METHOD.OTP && (
              <div className="mb-8">
                <img alt="OTP Verification" src="/images/otp.png" height={174} width={232} className="mx-auto" />
              </div>
            )} */}

            <Typography className="dark:text-white text-gray-700 !font-alibaba mb-2" fontSize={20} fontWeight="bold">
              {userStatus?.userExists ? t('loginWithCode', { defaultValue: 'ورود با کد تایید' }) : t('confirmMobile', { defaultValue: 'تایید شماره موبایل' })}
            </Typography>

            <Typography className="dark:text-gray-300 text-black !font-peyda mb-8" fontSize={14}>
              {t('enterCodeSentTo', { defaultValue: 'کد تایید ارسال شده به شماره {{m}} را وارد کنید', m: mobileNumber })}
            </Typography>

            <div className="mb-6">
              <OTPInput length={6} onChange={setOtpCode} className="mb-4" />
            </div>

            <ErrorAlert message={error} />
            <NoticeAlert message={notice} />

            <Button onClick={handleOtpSubmit} disabled={isLoading || otpCode.length !== 6} className="w-full mb-4 text-white bg-primary-blue dark:bg-accent-orange hover:bg-blue-600">
              {userStatus?.userExists ? t('login', { defaultValue: 'ورود' }) : t('confirmAndContinue', { defaultValue: 'تایید و ادامه' })}
            </Button>

            <div className="text-center space-y-2 mb-4">
              <Typography className="dark:text-gray-400 text-gray-700 !font-peyda" fontSize={12}>
                {t('didntReceive', { defaultValue: 'کد تایید را دریافت نکردید؟' })}
              </Typography>
              {canResend ? (
                <button
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="text-primary-blue !font-peyda text-sm underline hover:text-primary-light dark:text-white dark:hover:text-accent-orange transition-colors"
                >
                  {t('resendCode', { defaultValue: 'ارسال مجدد کد' })}
                </button>
              ) : (
                <Typography className="text-gray-500 !font-peyda" fontSize={12}>
                  {t('resendIn', { defaultValue: 'دریافت مجدد کد: {{s}} ثانیه', s: formatTimer(resendTimer) })}
                </Typography>
              )}
            </div>

            <button
              onClick={handleBack}
              className="w-full py-3 rounded-lg hover:border dark:hover:border-gray-600 dark:text-white hover:bg-white hover:border-primary-blue dark:hover:bg-black hover:text-primary-blue text-gray-400 transition-colors font-peyda"
            >
              {t('back', { defaultValue: 'بازگشت' })}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AuthPage;
