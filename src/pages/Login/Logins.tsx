import axios from 'axios';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import TextField from '../../components/Inputs/TextField';
import { CiMobile3 } from '../../Icons';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import OTPInput from '../../components/Inputs/Otp';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const RegisterType = { None: 0, Verify: 1 } as const;

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://62.3.41.64:5016';

const onlyDigits = (v: string) => v.replace(/\D/g, '');
const isValidMobile = (v: string) => /^09\d{9}$/.test(v);

const Login = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [step, setStep] = useState<number>(RegisterType.None);
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [otpCode, setOtpCode] = useState<string>('');
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
		const v = onlyDigits(e.target.value).slice(0, 11);
		setPhoneNumber(v);
		if (error) setError('');
	};

	const handleOtpCode = (value: string) => setOtpCode(onlyDigits(value).slice(0, 6));

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');

		if (step === RegisterType.None) {
			if (!isValidMobile(phoneNumber)) {
				setError('شماره موبایل نامعتبر است');
				return;
			}

			setLoading(true);
			try {
				const checkRes = await axios.get(`${BASE_URL}/api/auth/is-registered`, {
					params: { mobileNumber: phoneNumber },
				});

				const exists =
					checkRes?.data?.exists ??
					checkRes?.data?.isRegistered ??
					checkRes?.data?.registered ??
					false;

				if (!exists) {
					navigate('/register', { state: { prefillPhone: phoneNumber } });
					return;
				}

				await axios.post(`${BASE_URL}/api/auth/send-otp`, {
					mobileNumber: phoneNumber,
					purpose: RegisterType.Verify,
				});
				setStep(RegisterType.Verify);
			} catch (err: any) {
				const data = err?.response?.data;
				const msg =
					(typeof data === 'object' && data?.message) ||
					(Array.isArray(data) && data[0]) ||
					(typeof data === 'string' && data) ||
					'خطا رخ داد';
				setError(msg);
			} finally {
				setLoading(false);
			}
		} else if (step === RegisterType.Verify) {
			if (otpCode.length !== 6) {
				setError('کد تأیید ۶ رقمی را وارد کنید');
				return;
			}

			setLoading(true);
			try {
				const res = await axios.post(`${BASE_URL}/api/auth/login-with-otp`, {
					mobileNumber: phoneNumber,
					otpCode,
					purpose: RegisterType.Verify,
				});

				if (res.data) {
					localStorage.setItem('user-data', JSON.stringify(res.data));
					navigate('/home');
				}
			} catch (err: any) {
				const msg =
					err?.response?.data?.message || err?.response?.data?.[0] || 'خطا در ورود';
				setError(msg);
			} finally {
				setLoading(false);
			}
		}
	};

	if (loading) return <Loading />;

	return (
		<div className="flex flex-col mx-auto w-full min-h-screen bg-primary-darker">
			<main className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
				<div className="text-white py-17">
					<img alt="" src="/images/login.svg" width={193} height={193} />
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
					<div className="flex flex-col gap-2">
						<Typography
							className="text-white"
							fontFamily={'Alibaba, sans-serif'}
							fontWeight={'bold'}
							fontSize={19}
						>
							{t('loginToApp')}
						</Typography>
						<Typography
							className="text-neutral-300"
							fontFamily={'Peyda, sans-serif'}
							fontSize={13}
						>
							{t('enterMobileForLogin')}
						</Typography>
					</div>

					{step === RegisterType.None && (
						<TextField
							onChange={handlePhoneNumber}
							value={phoneNumber}
							mobileIcon={<CiMobile3 />}
							placeholder={t('enterMobile')}
						/>
					)}

					{step === RegisterType.Verify && (
						<OTPInput onChange={handleOtpCode} length={6} />
					)}

					{error && (
						<Typography
							className="text-red-300"
							fontFamily={'Alibaba, sans-serif'}
							fontWeight={'bold'}
							fontSize={11}
						>
							{error}
						</Typography>
					)}

					<Button
						type="submit"
						disabled={
							loading ||
							(step === RegisterType.None && !isValidMobile(phoneNumber)) ||
							(step === RegisterType.Verify && otpCode.length !== 6)
						}
						className="w-full text-white bg-primary-blue hover:bg-blue-600 disabled:bg-primary-lighter disabled:text-neutral-300"
					>
						{t('loginToAccount')}
					</Button>
				</form>
			</main>
		</div>
	);
};

export default Login;
