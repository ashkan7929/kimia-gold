import Typography from '@mui/material/Typography';
import ToggleButton from '../../components/Inputs/ToggleButton';
import { useTranslation } from 'react-i18next';

const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex w-full flex-col">
      <main
        className="flex-grow bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/images/main-lines-pattern.png')" }}
      >
        <div className="flex flex-col gap-3">
          <div className="rounded-lg bg-custom-bg-card">
            <div className="flex flex-col gap-4 p-4">
              <Typography className="font-peyda text-white" fontWeight="bold" fontSize={15}>
                {t('manageMessages')}
              </Typography>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('emailNotification')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('messageNotification')}
                </Typography>
                <ToggleButton />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-custom-bg-card">
            <div className="flex flex-col gap-4 p-4">
              <Typography className="font-peyda text-white" fontWeight="bold" fontSize={15}>
                {t('bargainManagement')}
              </Typography>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('receiveConfirmation')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('confirmEmail')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('verificationTwo-stepSMS')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('receiveConfirmatioCancelOrder')}
                </Typography>
                <ToggleButton />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-custom-bg-card">
            <div className="flex flex-col gap-4 p-4">
              <Typography className="font-peyda text-white" fontWeight="bold" fontSize={15}>
                {t('update')}
              </Typography>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('automaticUpdateApp')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
                  {t('updateAvailablePurchases')}
                </Typography>
                <ToggleButton />
              </div>

              <div className="flex items-center justify-between">
                <Typography className="font-peyda text-white" fontSize={13}>
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

export default Settings