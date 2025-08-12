import { useTranslation } from 'react-i18next';
import { CiMobile3, MdOutlineBadge, FaRegUser } from '../../Icons';
import TextField from '../../components/Inputs/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '../../components/Button/Button';
import CheckBox from '../../components/Inputs/Checkbox';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import OTPInput from '../../components/Inputs/Otp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import DateField from '../../components/Inputs/Datepiker';

const RegisterType = {
    None: 0,
    Verify: 1,
};

const Register = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [step, setStep] = useState<number>(RegisterType.None);
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [birthday, setBirthday] = useState<string>('');
    const [referCode, setReferCode] = useState<string>();
    const [nationalId, setNationalId] = useState<string>();
    const [accept, setAccept] = useState<boolean>(false);
    const [otpCode, setOtpCode] = useState<string>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [msg, setMsg] = useState('');
    const [errorText, setErrorText] = useState<string>('');

    // const handleStep = (event: ChangeEvent<HTMLInputElement>) => setStep()
    const handleNationalId = (event: ChangeEvent<HTMLInputElement>) =>
        setNationalId(event.target.value);
    const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) =>
        setPhoneNumber(event.target.value);
    const handleBirthday = (event: string) => setBirthday(event);
    const handleReferCode = (event: ChangeEvent<HTMLInputElement>) =>
        setReferCode(event.target.value);
    const handleAccept = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) =>
        setAccept(checked);
    const handleOtpCode = (value: string) => setOtpCode(value);

    const toEnDigits = (s = '') => s.replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setMsg('');

        if (step === RegisterType.None) {
            if (!nationalId || !phoneNumber || !birthday) {
                setMsg('لطفاً تمام فیلدهای ضروری را پر کنید.');
                return;
            }
        } else if (step === RegisterType.Verify) {
            if (!otpCode || otpCode.trim().length < 6) {
                setMsg('کد تأیید را به‌درستی وارد کنید.');
                return;
            } else {
                setMsg('');
            }
        }

        setLoading(true);
        try {
            if (step == RegisterType.None) {
                const data: any = {
                    nationalCode: toEnDigits(nationalId!),
                    mobileNumber: toEnDigits(phoneNumber!),
                    birthDate: toEnDigits(birthday!),
                };
                if (referCode) data.referralCode = referCode;

                const res = await axios.post('http://62.3.41.64:5016/api/auth/register', data, {
                    headers: { 'Content-Type': 'application/json' },
                });

                if (res.data) {
                    localStorage.setItem('user-data', JSON.stringify(res.data));
                }
                setStep(RegisterType.Verify);
            } else if (step == RegisterType.Verify) {
                const data = {
                    mobileNumber: toEnDigits(phoneNumber || ''),
                    otpCode: toEnDigits(otpCode || ''),
                    purpose: RegisterType.Verify,
                };

                const res = await axios.post('http://62.3.41.64:5016/api/auth/verify-otp', data, {
                    headers: { 'Content-Type': 'application/json' },
                });

                if (res.data) {
                    navigate('/home');
                }
            }
        } catch (err: any) {
            console.error(err);
            const status = err?.response?.status as number | undefined;
            const response = err?.response?.data;

            let serverMsg = '';
            if (typeof response === 'string') serverMsg = response;
            else if (Array.isArray(response)) serverMsg = String(response[0] ?? '');
            else if (response?.message) serverMsg = String(response.message);
            if (
                status === 400 ||
                (typeof serverMsg === 'string' && serverMsg.includes('نام کاربری قبلا ثبت شده است'))
            ) {
                serverMsg = 'حساب کاربری شما قبلاً ایجاد شده، لطفاً وارد شوید.';
            }
            setErrorText(serverMsg || 'اطلاعات به‌درستی وارد نشده، لطفاً دوباره تلاش کنید.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col mx-auto w-full min-h-screen bg-primary-darker">
            <main className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
                {/* Login Image */}
                <div className="pb-5 mx-auto">
                    <img alt="" src="/images/login.svg" width={193} height={193} />
                </div>

                {/* Form Container */}
                <div className="flex flex-col gap-3 w-full">
                    {/* Title Section */}
                    <div className="flex flex-col gap-2">
                        <Typography
                            className="text-white"
                            fontFamily={'Alibaba, sans-serif'}
                            fontWeight={'bold'}
                            fontSize={19}
                        >
                            {t('registerToApp')}
                        </Typography>
                        <Typography
                            className="text-neutral-300"
                            fontFamily={'Peyda, sans-serif'}
                            fontSize={13}
                        >
                            {t('registerByNationalAndMobile')}
                        </Typography>
                    </div>

                    {/* Form Fields */}
                    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3">
                        {step == RegisterType.None && (
                            <>
                                <TextField
                                    onChange={handleNationalId}
                                    mobileIcon={<MdOutlineBadge />}
                                    placeholder={t('enterNationalId')}
                                />
                                {/* {message && (
                                    <Typography className="text-red-500" fontSize={12}>
                                        {message}
                                    </Typography>
                                )} */}

                                <TextField
                                    onChange={handlePhoneNumber}
                                    mobileIcon={<CiMobile3 />}
                                    placeholder={t('enterMobile')}
                                />

                                <DateField
                                    value={birthday}
                                    onChange={handleBirthday}
                                    placeholder={birthday || 'تاریخ تولد'}
                                />

                                <TextField
                                    onChange={handleReferCode}
                                    mobileIcon={<FaRegUser />}
                                    placeholder={t('enterReferCode')}
                                />

                                <label className="flex items-center font-medium">
                                    <CheckBox onChange={handleAccept} label={t('rules')} />
                                </label>
                            </>
                        )}

                        {step == RegisterType.Verify && (
                            <>
                                <OTPInput onChange={handleOtpCode} length={6} />
                            </>
                        )}
                        {/* 
                        {error && (
                            <Typography
                                className="text-red-300"
                                fontFamily={'Alibaba, sans-serif'}
                                fontWeight={'bold'}
                                fontSize={11}
                            >
                                {error?.[0]}
                            </Typography> */}

                        {Boolean(errorText) && (
                            <Typography
                                dir="rtl"
                                className="text-red-500"
                                fontFamily="Alibaba, sans-serif"
                                fontWeight="bold"
                                marginBottom="1rem"
                                fontSize={11}
                            >
                                {errorText}
                            </Typography>
                        )}

                        {/* Submit Button */}
                        <div>
                            {(msg || error) && (
                                <Typography
                                    className="text-red-500"
                                    fontFamily="Alibaba, sans-serif"
                                    fontWeight="bold"
                                    marginBottom="1rem"
                                    fontSize={11}
                                >
                                    {msg || error}
                                </Typography>
                            )}

                            <Button
                                disabled={!accept}
                                type="submit"
                                className="w-full text-white bg-primary-blue hover:bg-blue-600 disabled:bg-primary-lighter disabled:text-neutral-300"
                            >
                                {t('signUp')}
                            </Button>
                        </div>
                    </form>

                    {/* Sign Up Link */}
                    <div className="flex gap-2 justify-center items-center ">
                        <Typography
                            fontSize={13}
                            fontFamily={'Peyda, sans-serif'}
                            className="text-neutral-300"
                        >
                            {t('haveAccount')}
                        </Typography>
                        <Typography
                            fontSize={13}
                            fontFamily={'Peyda, sans-serif'}
                            component={Link}
                            href="/"
                            sx={{ color: 'white', textDecoration: 'none' }}
                        >
                            {t('login')}
                        </Typography>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
