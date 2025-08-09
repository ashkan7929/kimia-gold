import axios from "axios";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import TextField from "../../components/Inputs/TextField";
import { CiMobile3 } from '../../Icons';
import { useState, type ChangeEvent, type FormEvent } from "react";
import OTPInput from "../../components/Inputs/Otp";
import { useNavigate } from "react-router-dom";

const RegisterType = {
    'None': 0,
    'Verify': 1,
}

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [step, setStep] = useState<number>(RegisterType.None)
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [otpCode, setOtpCode] = useState<string>()

    const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value)
    const handleOtpCode = (value: string) => setOtpCode(value)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (step == RegisterType.None) {
                const data = {
                    mobileNumber: phoneNumber,
                    purpose: RegisterType.Verify,
                }
                await axios.post("http://localhost:5016/api/auth/send-otp", data);
                setStep(RegisterType.Verify)
            }
            else if (step == RegisterType.Verify) {
                const data = {
                    mobileNumber: phoneNumber,
                    otpCode: otpCode,
                    purpose: RegisterType.Verify,
                }
                const res = await axios.post("http://localhost:5016/api/auth/login-with-otp", data);

                if (res.data) {
                    localStorage.setItem("user-data", res.data);
                    navigate("/home")
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex flex-col mx-auto w-full min-h-screen bg-primary-darker">
            <main
                className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center"
            >
                <div className='text-white py-17'>
                    <img alt='' src='/images/login.svg' width={193} height={193} />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                    <div className="flex flex-col gap-2">
                        <Typography className="text-white" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={19}>{t('loginToApp')}</Typography>
                        <Typography className="text-neutral-300" fontFamily={'Peyda, sans-serif'} fontSize={13}>{t('enterMobileForLogin')}</Typography>
                    </div>
                    {step == RegisterType.None && <>
                        <TextField onChange={handlePhoneNumber} mobileIcon={<CiMobile3 />} placeholder={t('enterMobile')} />
                    </>}
                    {step == RegisterType.Verify && <>
                        <OTPInput onChange={handleOtpCode} length={6} />
                    </>}
                    <Button className="w-full text-white bg-primary-blue hover:bg-blue-600">{t('loginToAccount')}</Button>
                    <div className='flex gap-2'>
                        <Typography fontSize={13} fontFamily={'Peyda, sans-serif'} className='text-neutral-300'>{t('noAccount')}</Typography>
                        <Typography fontSize={13} fontFamily={'Peyda, sans-serif'} component={Link} href='/register' sx={{ color: "white", textDecoration: 'none' }}>{t('signUp')}</Typography>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Login
