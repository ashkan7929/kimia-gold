import Typography from '@mui/material/Typography';
import ToggleButton from '../../components/Inputs/ToggleButton';
import { useTranslation } from 'react-i18next';

const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div dir="rtl" className="mx-auto flex w-full flex-col">
      <main
        className="flex-grow bg-cover bg-center"
        // مسیر رو با ساختار پروژه خودت هماهنگ کن
        style={{ backgroundImage: "url('/assets/images/main-lines-pattern.png')" }}
      >
        <div className="flex flex-col gap-3">

          {/* بخش مدیریت پیام‌ها */}
          <div className="rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-4 p-4">
              <Typography
                className="!font-peyda text-neutral-900 dark:text-white"
                fontWeight="bold"
                fontSize={15}
              >
                {t('manageMessages')}
              </Typography>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('emailNotification')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('messageNotification')}
                </Typography>
                <ToggleButton />
              </div>
            </div>
          </div>

          {/* بخش مدیریت معاملات */}
          <div className="rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-4 p-4">
              <Typography
                className="!font-peyda text-neutral-900 dark:text-white"
                fontWeight="bold"
                fontSize={15}
              >
                {t('bargainManagement')}
              </Typography>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('receiveConfirmation')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('confirmEmail')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('verificationTwo-stepSMS')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('receiveConfirmatioCancelOrder')}
                </Typography>
                <ToggleButton />
              </div>
            </div>
          </div>

          {/* بخش بروزرسانی */}
          <div className="rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-4 p-4">
              <Typography
                className="!font-peyda text-neutral-900 dark:text-white"
                fontWeight="bold"
                fontSize={15}
              >
                {t('update')}
              </Typography>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('automaticUpdateApp')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('updateAvailablePurchases')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="!font-peyda text-neutral-800 dark:text-neutral-200" fontSize={13}>
                  {t('updatePrice')}
                </Typography>
                <ToggleButton />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Settings;
