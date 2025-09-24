import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeftLong, FaArrowRightLong } from '../../Icons';
import { useTheme } from '../../contexts/ThemeContext';
import packageJson from '../../../package.json';

const StepsEnum = { one: 0, two: 1, login: 2 } as const;

type StarterProps = {
  onFinish?: () => void;
};

const Starter: React.FC<StarterProps> = ({ onFinish }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState<number>(StepsEnum.one);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (step === StepsEnum.login) {
      onFinish?.(); 
    }
  }, [step, onFinish]);

  const hidden = step === StepsEnum.login; 

  return (
    <div className={`${hidden ? 'hidden' : 'flex'} absolute z-10 dark:bg-black bg-light-primary-darker h-screen flex-col justify-center items-center p-6 pt-0`}>
      {step === StepsEnum.one && (
        <>
          <div className="flex flex-col items-center justify-center h-full !pt-0">
            <div className="pb-8">
              <img alt="" src="/images/welcome1.svg" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography className="!font-peyda" sx={{ color: isDark ? 'white' : 'black', fontSize: 15 }}>
                {t('name')}
              </Typography>
              <Typography className="!font-peyda" sx={{ color: isDark ? 'white' : 'black', fontSize: 19 }}>
                {t('welcome.1.title')}
              </Typography>
              <Typography className="!font-peyda" sx={{ color: isDark ? 'white' : 'black', fontSize: 13 }}>
                {t('welcome.1.caption')}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-end mr-auto">
            <div className="grid grid-cols-3 gap-1 mt-3">
              <div className="bg-neutral-400 h-1 rounded-lg"></div>
              <div className="bg-accent-orange h-1 rounded-lg col-span-2"></div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(StepsEnum.two)}
                className="bg-primary-blue dark:bg-accent-orange rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl"
              >
                <FaArrowRightLong className="text-white" />
              </button>

              <button
                type="button"
                className="border-2 dark:border-accent-orange border-primary-blue rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl"
                disabled
              >
                <FaArrowLeftLong className="text-white dark:text-black" />
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-2">
            <span className="block mx-auto text-primary-blue dark:text-accent-orange text-center font-roboto text-xs">
              VEM Club{' '}
              <span className=" light:text-light-text-color dark:text-text-color">
                {packageJson.version}
              </span>
            </span>
          </div>
        </>
      )}

      {step === StepsEnum.two && (
        <>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="pb-8">
              <img alt="" src="/images/welcome2.svg" width={326} height={326} />
            </div>
            <div className="flex flex-col gap-2 !font-peyda">
              <Typography className="!font-peyda" sx={{ color: isDark ? 'white' : 'black', fontSize: 19 }}>
                {t('welcome.2.title')}
              </Typography>
              <Typography className="!font-peyda" sx={{ color: isDark ? 'white' : 'black', fontSize: 13 }}>
                {t('welcome.2.caption')}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-end mr-auto">
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-primary-blue h-1 rounded-lg col-span-2"></div>
              <div className="bg-neutral-400 h-1 rounded-lg"></div>
            </div>

          <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(StepsEnum.login)}
                className="rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl bg-primary-blue dark:bg-accent-orange"
              >
                <FaArrowRightLong className="text-white" />
              </button>

              <button
                type="button"
                onClick={() => setStep(StepsEnum.one)}
                className="rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl border-2 dark:border-primary-lighter border-primary-blue"
              >
                <FaArrowLeftLong className="dark:text-text-color text-light-text-color" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Starter;
