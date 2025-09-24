/* src/pages/Auth/MobilePage.tsx */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { mobileSchema, type MobileFormData } from '../../lib/validations';
import { authService } from '../../services/authService';
import Button from '../../components/Button/Button';
import { CiMobile3 } from '../../Icons';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Loading from '../Loading/Loading';

const MobilePage: React.FC = () => {
  const { t } = useTranslation();
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

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col mx-auto w-full min-h-screen bg-primary-darker">
      <main
        className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center"
      >
        <div className='text-white py-17'>
          <img alt='' src='/images/login.svg' width={193} height={193} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full'>
          <div className="flex flex-col gap-2">
            <Typography className="text-white" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={19}>{t('loginToApp')}</Typography>
            <Typography className="text-neutral-300" fontFamily={'Peyda, sans-serif'} fontSize={13}>{t('enterMobileForLogin')}</Typography>
          </div>
          <div className="relative">
            <div className="flex items-center text-white rounded-xsm  dark:border-gray-500 border">
              <div className="absolute h-full right-4 flex items-center justify-center"><CiMobile3 /></div>
              <input
                {...register('mobileNumber')}
                type="text"
                className="text-sm w-full h-10 pr-10 pl-5 bg-custom-bg-input border border-custom-border-light dark:border-gray-500 rounded-lg text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
                placeholder={t('enterMobile')}
              />
            </div>
            {errors.mobileNumber && (
              <p className="text-red-400 text-sm mt-1">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
          {error && <Typography className="text-red-300" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={11}>
            {error}
          </Typography>}

          <Button className="w-full text-white bg-primary-blue hover:bg-blue-600">{t('loginToAccount')}</Button>
        
        </form>
      </main>
    </div>
  );
};

export default MobilePage;