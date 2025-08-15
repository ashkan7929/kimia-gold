import axios from "axios";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import TextField from "../../components/Inputs/TextField";
import { CiMobile3 } from '../../Icons';
import { useState, type ChangeEvent, type FormEvent } from "react";
import OTPInput from "../../components/Inputs/Otp";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

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
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)

    const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value)
    const handleOtpCode = (value: string) => setOtpCode(value)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (step == RegisterType.None) {
                const data = {
                    mobileNumber: phoneNumber,
                    purpose: RegisterType.Verify,
                }
                await axios.post("http://62.3.41.64:5016/api/auth/send-otp", data);
                setStep(RegisterType.Verify)
            }
            else if (step == RegisterType.Verify) {
                const data = {
                    mobileNumber: phoneNumber,
                    otpCode: otpCode,
                    purpose: RegisterType.Verify,
                }
                const res = await axios.post("http://62.3.41.64:5016/api/auth/login-with-otp", data);

                if (res.data) {
                    localStorage.setItem("user-data", JSON.stringify(res.data));
                    navigate("/home")
                }
            }
        } catch (err: any) {
            console.error(err);
            setError(err?.response?.data)
        }
        setLoading(false)
    }

    if (loading) {
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
                    {error && <Typography className="text-red-300" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={11}>
                        {error?.[0]}
                    </Typography>}

                    <Button className="w-full text-white bg-primary-blue hover:bg-blue-600">{t('loginToAccount')}</Button>
                  
                </form>
            </main>
        </div>
    );
}

export default Login
