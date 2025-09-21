import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '../../components/Button/Button';
import TextField from '../../components/Inputs/TextField';
import CheckBox from '../../components/Inputs/Checkbox';
import DateField from '../../components/Inputs/Datepiker';
import { CiMobile3, MdOutlineBadge, FaRegUser, CiCalendarDate } from '../../Icons';
import { registerSchema, type RegisterFormData } from '../../lib/validations';
import { authService } from '../../services/authService';
import { useAuth } from '../../stores/auth.store';
import Loading from '../Loading/Loading';

interface LocationState {
  mobileNumber: string;
  verified: boolean;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { } = useAuth();
  
  const state = location.state as LocationState;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      mobileNumber: state?.mobileNumber || '',
      nationalCode: '',
      birthDate: '',
      referralCode: '',
      acceptRules: false
    }
  });

  // Redirect if not verified
  useEffect(() => {
    if (!state?.mobileNumber || !state?.verified) {
      navigate('/auth/unified', { replace: true });
    }
  }, [state, navigate]);

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.register({
        nationalCode: data.nationalCode,
        mobileNumber: data.mobileNumber,
        birthDate: data.birthDate,
        referralCode: data.referralCode
      });

      if (response.userId) {
        // Registration successful, redirect to login or dashboard
        navigate('/dashboard', { replace: true });
      }
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

  if (!state?.mobileNumber || !state?.verified) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      <main className="flex-1 relative">
        <section className="min-h-screen bg-primary-darker rounded-lg p-4 flex flex-col justify-center items-center py-8 relative">
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <img 
                alt="Register" 
                src="/images/register.svg" 
                height={174} 
                width={232} 
                className="mx-auto mb-4" 
              />
              <Typography className="text-white !font-alibaba mb-2" fontSize={20} fontWeight="bold">
                تکمیل اطلاعات
              </Typography>
              <Typography className="text-gray-300 !font-peyda" fontSize={14}>
                لطفاً اطلاعات زیر را تکمیل کنید
              </Typography>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Mobile Number (Read-only) */}
              <div>
                <Typography className="text-white !font-peyda mb-2" fontSize={12}>
                  شماره موبایل
                </Typography>
                <TextField
                  mobileIcon={<CiMobile3 />}
                  placeholder="شماره موبایل"
                  defaultValue={state.mobileNumber}
                  disabled
                  className="bg-gray-700 appearance-none !disabled:rounded-lg"
                />
              </div>

              {/* National Code */}
              <div>
                <Typography className="text-white !font-peyda mb-2" fontSize={12}>
                  کد ملی *
                </Typography>
                <TextField
                  mobileIcon={<MdOutlineBadge />}
                  placeholder="کد ملی ۱۰ رقمی"
                  {...register('nationalCode')}
                  className="w-full"
                />
                {errors.nationalCode && (
                  <Typography className="text-red-400 !font-peyda mt-1" fontSize={11}>
                    {errors.nationalCode.message}
                  </Typography>
                )}
              </div>

              {/* Birth Date */}
              <div>
                <Typography className="text-white !font-peyda mb-2" fontSize={12}>
                  تاریخ تولد *
                </Typography>
                <DateField
                  mobileIcon={<CiCalendarDate />}
                  placeholder="تاریخ تولد (YYYY-MM-DD)"
                                    // onChange={value => setValue('birthDate', value)}
                                   onChange={e => setValue('birthDate', e.target.value)}

                  className="w-full"
                />
                {errors.birthDate && (
                  <Typography className="text-red-400 !font-peyda mt-1" fontSize={11}>
                    {errors.birthDate.message}
                  </Typography>
                )}
              </div>

              {/* Referral Code */}
              <div>
                <Typography className="text-white !font-peyda mb-2" fontSize={12}>
                  کد معرف (اختیاری)
                </Typography>
                <TextField
                  mobileIcon={<FaRegUser />}
                  placeholder="کد معرف"
                  {...register('referralCode')}
                  className="w-full"
                />
                {errors.referralCode && (
                  <Typography className="text-red-400 !font-peyda mt-1" fontSize={11}>
                    {errors.referralCode.message}
                  </Typography>
                )}
              </div>

              {/* Accept Rules */}
              <div className="flex items-start gap-3 ">
                <CheckBox
                  label=""
                  defaultChecked={watch('acceptRules')}
                  onChange={(_, checked) => setValue('acceptRules', checked)}
                />
                <Typography className="text-gray-300 !font-peyda" fontSize={12}>
                  <Link href="/rules" className="text-primary-blue hover:underline">
                    قوانین و مقررات
                  </Link>
                  {' '}را مطالعه کرده و می‌پذیرم *
                </Typography>
              </div>
              {errors.acceptRules && (
                <Typography className="text-red-400 !font-peyda" fontSize={11}>
                  {errors.acceptRules.message}
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
                disabled={isLoading || !watch('acceptRules')}
                className="w-full bg-primary-blue hover:bg-primary-light text-white font-peyda"
              >
                تکمیل ثبت‌نام
              </Button>

              <button
                type="button"
                onClick={() => navigate('/auth', { replace: true })}
                className="w-full py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors font-peyda"
              >
                بازگشت
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;