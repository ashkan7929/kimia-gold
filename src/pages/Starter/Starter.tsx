import { Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeftLong, LuMoveRight } from '../../Icons';

const StepsEnum = {
    one: 0,
    two: 1,
    login: 2,
}

const Starter = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(StepsEnum.one)

    if (step == StepsEnum.login) {
        localStorage.setItem('new-user', 'false')
    }

    return <div className={`${step == StepsEnum.login ? 'hidden' : 'flex'} absolute z-10 bg-primary-darker h-screen flex-col justify-center items-center p-6`}>
        {step == StepsEnum.one && <>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='pb-8'>
                    <img alt='' src='/images/welcome1.svg' width={326} height={326} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Typography className="!font-peyda" sx={{ color: 'white', fontSize: 15 }}>{t('name')}</Typography>
                    <Typography className="!font-peyda" sx={{ color: 'white', fontSize: 19 }}>{t('welcome.1.title')}</Typography>
                    <Typography className="!font-peyda" sx={{ color: 'white', fontSize: 13 }}>{t('welcome.1.caption')}</Typography>
                </div>
            </div>
            <div className='flex flex-col gap-8 justify-end mr-auto'>
                <div className='grid grid-cols-3 gap-1'>
                    <div className='bg-neutral-400 h-1 rounded-lg'></div>
                    <div className='bg-accent-orange h-1 rounded-lg col-span-2'></div>
                </div>
                <div className='flex gap-3'>
                    <div onClick={() => setStep(StepsEnum.two)} className='bg-primary-blue rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl'>
                        <LuMoveRight color='white' />
                    </div>
                    <div className='border-2 border-primary-lighter rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl'>
                        <FaArrowLeftLong color='white' />
                    </div>
                </div>
            </div>
        </>}
        {step == StepsEnum.two && <>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='pb-8'>
                    <img alt='' src='/images/welcome2.svg' width={326} height={326} />
                </div>
                <div className='flex flex-col gap-2 !font-peyda'>
                    <Typography className="!font-peyda" sx={{ color: 'white', fontSize: 19 }}>{t('welcome.2.title')}</Typography>
                    <Typography className="!font-peyda" sx={{ color: 'white', fontSize: 13 }}>{t('welcome.2.caption')}</Typography>
                </div>
            </div>
            <div className='flex flex-col gap-8 justify-end mr-auto'>
                <div className='grid grid-cols-3 gap-1'>
                    <div className='bg-primary-blue h-1 rounded-lg col-span-2'></div>
                    <div className='bg-neutral-400 h-1 rounded-lg'></div>
                </div>
                <div className='flex gap-3'>
                    <div onClick={() => setStep(StepsEnum.login)} className='bg-primary-blue rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl'>
                        <LuMoveRight color='white' />
                    </div>
                    <div onClick={() => setStep(StepsEnum.one)} className='border-2 border-primary-lighter rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl'>
                        <FaArrowLeftLong color='white' />
                    </div>
                </div>
            </div>
        </>}
    </div>
}

export default Starter