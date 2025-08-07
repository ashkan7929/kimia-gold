import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import TextField from "../../components/Inputs/TextField";
import { CiMobile3, LuMoveLeft, LuMoveRight } from '../../Icons';

const Login = () => {
    const { t } = useTranslation();

    const hasLogedInBefore = localStorage.getItem('new-user')

    return (<>
        {!hasLogedInBefore && <Welcome />}
        <div className="w-full mx-auto bg-primary-darker min-h-screen flex flex-col">
            <main
                className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center"
            >
                <div className='text-white py-17'>
                    <img alt='' src='/images/login.svg' width={193} height={193} />
                </div>
                <div className=' w-full flex flex-col gap-4'>
                    <div className="flex flex-col gap-2">
                        <Typography className="text-white" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={19}>{t('loginToApp')}</Typography>
                        <Typography className="text-neutral-300" fontFamily={'Peyda, sans-serif'} fontSize={13}>{t('enterMobileForLogin')}</Typography>
                    </div>
                    <TextField mobileIcon={<CiMobile3 />} placeholder={t('enterMobile')} />
                    <Button className="bg-primary-blue text-white hover:bg-blue-600 w-full">{t('loginToAccount')}</Button>
                    <div className='flex gap-2'>
                        <Typography fontSize={13} fontFamily={'Peyda, sans-serif'} className='text-neutral-300'>{t('noAccount')}</Typography>
                        <Typography fontSize={13} fontFamily={'Peyda, sans-serif'} component={Link} href='/register' sx={{ color: "white", textDecoration: 'none' }}>{t('signUp')}</Typography>
                    </div>
                </div>
            </main>
        </div>
    </>
    );
}

export default Login

const StepsEnum = {
    one: 0,
    two: 1,
    login: 2,
}

export const Welcome = () => {
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
                    <Typography sx={{ color: 'white', fontSize: 15 }}>{t('name')}</Typography>
                    <Typography sx={{ color: 'white', fontSize: 19 }}>{t('welcome.1.title')}</Typography>
                    <Typography sx={{ color: 'white', fontSize: 13 }}>{t('welcome.1.caption')}</Typography>
                </div>
            </div>
            <div className='flex flex-col gap-8 justify-end mr-auto'>
                <div className='grid grid-cols-3 gap-1'>
                    <div className='bg-neutral-400 h-1 rounded-lg'></div>
                    <div className='bg-orange-400 h-1 rounded-lg col-span-2'></div>
                </div>
                <div className='flex gap-3'>
                    <div onClick={() => setStep(StepsEnum.two)} className='bg-primary-blue rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl'>
                        <LuMoveRight color='white' />
                    </div>
                    <div className='border-2 border-primary-lighter rounded-full p-3 w-15.5 h-15.5 flex justify-center items-center text-2xl'>
                        <LuMoveLeft color='white' />
                    </div>
                </div>
            </div>
        </>}
        {step == StepsEnum.two && <>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='pb-8'>
                    <img alt='' src='/images/welcome2.svg' width={326} height={326} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Typography sx={{ color: 'white', fontSize: 15 }}>{t('name')}</Typography>
                    <Typography sx={{ color: 'white', fontSize: 19 }}>{t('welcome.2.title')}</Typography>
                    <Typography sx={{ color: 'white', fontSize: 13 }}>{t('welcome.2.caption')}</Typography>
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
                        <LuMoveLeft color='white' />
                    </div>
                </div>
            </div>
        </>}
    </div>
}
