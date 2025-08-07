import { useTranslation } from "react-i18next";
// import MobileInput from "../../components/Inputs/MobileInput"
import { CiMobile3, MdOutlineBadge, FaRegUser } from '../../Icons';
import TextField from "../../components/Inputs/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "../../components/Button/Button";
import CheckBox from "../../components/Inputs/Checkbox";
// import Button from "@mui/material/Button";

const Register = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full mx-auto bg-primary-darker min-h-screen flex flex-col">
            <main
                className="px-4 flex-grow py-5 flex flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center"
            >
                {/* Login Image */}
                <div className="mx-auto mb-16">
                    <img alt='' src='/images/login.svg' width={193} height={193} />
                </div>

                {/* Form Container */}
                <div className="flex flex-col gap-3 w-full">
                    {/* Title Section */}
                    <div className="flex flex-col gap-2">
                        <Typography className="text-white" fontFamily={'Alibaba, sans-serif'} fontWeight={'bold'} fontSize={19}>{t('registerToApp')}</Typography>
                        <Typography className="text-neutral-300" fontFamily={'Peyda, sans-serif'} fontSize={13}>{t('registerByNationalAndMobile')}</Typography>
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-3">
                        {/* National ID Input */}
                        <TextField mobileIcon={<MdOutlineBadge />} placeholder={t('enterNationalId')} />

                        {/* Mobile Number Input */}
                        <TextField mobileIcon={<CiMobile3 />} placeholder={t('enterMobile')} />

                        {/* Referral Code Input */}
                        <TextField mobileIcon={<FaRegUser />} placeholder={t('enterReferCode')} />

                        {/* Terms Checkbox */}
                        <label className="flex items-center font-medium">
                            <CheckBox label={t('rules')}/>
                        </label>

                        {/* Submit Button */}
                        <div>
                            <Button className="bg-primary-blue text-white hover:bg-blue-600 w-full">{t('signUp')}</Button>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className='flex gap-2'>
                        <Typography fontSize={13} fontFamily={'Peyda, sans-serif'} className='text-neutral-300'>{t('noAccount')}</Typography>
                        <Typography fontSize={13} fontFamily={'Peyda, sans-serif'} component={Link} href='/register' sx={{ color: "white", textDecoration: 'none' }}>{t('signUp')}</Typography>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register