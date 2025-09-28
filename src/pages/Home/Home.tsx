import Typography from '@mui/material/Typography';
import { FaRegStar, FiEye, PiCaretUpDownBold } from '../../Icons';
import { useAuth } from '../../stores/auth.store';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../../layouts/BottomNav';
import { useTheme } from '../../contexts/ThemeContext';
import { useEffect, useState } from 'react';
import lightwallet from '/images/pic/lightwallet.png';
import walletLogo from '/images/pic/wallet.png';

import goldProduct from '/src/assets/images/gold.svg';
import analizImg from '/images/pic/analyseDark.svg';
import analizImgLight from '/images/pic/analyseLight.svg';

import CampaignImg from '/images/pic/CampaignDark.svg';
import CampaignImgLight from '/images/pic/Campaignlight.svg';

import newsImg from '/images/pic/newsDark.svg';
import newsImgLight from '/images/pic/newsLight.svg';

import insuranceIcon from '/images/pic/insuranceDark.svg';
import insuranceIconLight from '/images/pic/insuranceLight.svg';

import shoppingIcon from '/images/pic/shoppingDark.svg';
import shoppingIconLight from '/images/pic/shoppingLight.svg';

import creditServicesDark from '/images/pic/creditServicesDark.svg';
import creditServicesLight from '/images/pic/creditServicesLight.svg';

import wealthManagementDark from '/images/pic/wealthManagementDark.svg';
import wealthManagementLight from '/images/pic/wealthManagementLight.svg';

import insuranceServices from '/images/pic/InsuranceServicesDark.svg';
import insuranceServicelight from '/images/pic/InsuranceServicesLight.svg';

import moreDark from '/images/pic/moreDark.svg';
import moreLight from '/images/pic/moreLight.svg';
import ServiceBtn from '../../components/ServiceBtn/ServiceBtn';

const services = [
    {
        key: 1,
        label: 'خدمات بیمه',
        darkSrc: insuranceServices,
        lightSrc: insuranceServicelight,
        to: '/insurance',
    },
    {
        key: 2,
        label: 'مدیریت ثروت',
        darkSrc: wealthManagementDark,
        lightSrc: wealthManagementLight,
        to: '/buy',
    },
    {
        key: 3,
        label: 'خدمات اعتباری',
        darkSrc: creditServicesDark,
        lightSrc: creditServicesLight,
        to: '/credit',
    },
    {
        key: 4,
        label: 'کیمیا',
        darkSrc: insuranceIcon,
        lightSrc: insuranceIconLight,
        to: '/products',
    },
    { key: 5, label: 'فروشگاه', darkSrc: shoppingIcon, lightSrc: shoppingIconLight, to: '/store' },
    { key: 6, label: 'کمپین', darkSrc: CampaignImg, lightSrc: CampaignImgLight, to: '/campaigns' },
    { key: 7, label: 'تحلیل‌گر', darkSrc: analizImg, lightSrc: analizImgLight, to: '/analytics' },
    { key: 8, label: 'اخبار', darkSrc: newsImg, lightSrc: newsImgLight, to: '/news' },
    { key: 9, label: 'سایر', darkSrc: moreDark, lightSrc: moreLight, to: '/more' },
];

const rows = [
    {
        id: 1,
        name: 'انس طلا',
        enName: 'Anas gold',
        price: '۶۲,۴۰۷ ت',
        dollar: '۸,۰۸۲ $',
        change: '+۰.۸۳٪',
        changeColor: 'success',
        img: goldProduct,
    },
    {
        id: 2,
        name: 'انس طلا',
        enName: 'Anas gold',
        price: '۶۲,۴۰۷ ت',
        dollar: '۸,۰۸۲ $',
        change: '+۰.۸۳٪',
        changeColor: 'success',
        img: goldProduct,
    },
];

const Home = () => {
    // const { t } = useTranslation();
    const { user } = useAuth();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [showWelcome, setShowWelcome] = useState(false);
    const navigate = useNavigate();
    const userData =
        user ||
        (() => {
            try {
                return JSON.parse(localStorage.getItem('user-data') || '{}');
            } catch {
                return {};
            }
        })();

    useEffect(() => {
        const hasLoggedInBefore = localStorage.getItem('new-user');

        if (hasLoggedInBefore === null) {
            setShowWelcome(true);
            localStorage.setItem('new-user', 'false');
        } else {
            setShowWelcome(false);
        }
    }, [userData]);

    console.log(userData);
    return (
        <>
            <div>
                <div className="flex flex-col gap-3 items-center pb-25">
                    {showWelcome ? (
                        <div>
                            <div className="flex flex-col gap-1">
                                <Typography
                                    className="!font-alibaba text-text-color light:text-light-text-color"
                                    fontSize={13}
                                >
                                    <strong>
                                        {userData?.firstName && userData?.lastName
                                            ? userData.firstName + ' ' + userData.lastName
                                            : 'کاربر گرامی'}
                                    </strong>{' '}
                                    خوش امدید
                                </Typography>
                                <Typography
                                    className="!font-alibaba text-neutral-300 light:text-neutral-700"
                                    fontSize={11}
                                >
                                    {
                                        'به باشگاه وِم خوش آمدید، از این صفحه می‌توانید خدمات خود را انتخاب کنید'
                                    }
                                </Typography>
                            </div>
                            <div>
                                <img alt="" src="/images/welcome-home.svg" width={79} height={63} />
                            </div>
                        </div>
                    ) : (
                        <div className="dark:bg-black bg-light-primary-darker w-full font-peyda dark:text-text-color text-light-text-color flex items-center justify-between p-2 rounded-lg">
                            <div className="flex items-center gap-2">
                                <img
                                    alt=""
                                    src={isDark ? walletLogo : lightwallet}
                                    width={30}
                                    height={30}
                                />
                                <div className="flex flex-col">
                                    <Typography
                                        className="!font-alibaba dark:text-text-color text-light-text-color"
                                        fontSize={12}
                                    >
                                        مانده اعتبار
                                    </Typography>
                                    <Typography
                                        className="!font-alibaba dark:text-text-color text-light-text-color"
                                        fontSize={12}
                                    >
                                        ۰ ریال
                                    </Typography>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('/wallet')}
                                className="dark:bg-accent-orange bg-primary-blue text-white text-[9px] font-kalameh px-7 py-2 rounded-xl"
                            >
                                افزایش اعتبار
                            </button>
                        </div>
                    )}
                    <div className="dark:bg-black bg-light-primary-darker flex w-full p-3 rounded-lg">
                        <main className="px-4 flex-grow py-5 flex gap-3 flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
                            <div className="flex flex-col items-center gap-1.5">
                                <Typography
                                    className="!font-alibaba dark:text-text-color text-light-text-color"
                                    fontSize={16}
                                >
                                    صفحه <strong>باشگاه وِم</strong>
                                </Typography>
                                <Typography
                                    className="!font-alibaba text-neutral-300 light:text-neutral-700"
                                    fontSize={11}
                                >
                                    {'محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر'}
                                </Typography>
                            </div>
                            <button className="dark:bg-accent-orange bg-primary-blue text-white text-[9px] font-kalameh px-3 py-1.5 rounded-3xl">
                                {'مشاهده خدمت'}
                            </button>
                        </main>
                    </div>
                    <div className="grid gap-4 grid-cols-3 w-full">
                    {/* <div className="grid gap-2 light:gap-4 grid-cols-3 w-full"> */}
                        {services.map(card => (
                            <ServiceBtn
                                key={card.key}
                                label={card.label}
                                darkSrc={card.darkSrc}
                                lightSrc={card.lightSrc}
                                to={card.to}
                                isDark={isDark}
                            />
                        ))}
                    </div>

                    <div className="dark:bg-black bg-primary-gray-100 w-full rounded-lg py-2.5 px-3">
                        <div className="dark:odd:bg-black odd:bg-white grid grid-cols-9 w-full">
                            <div className="flex gap-1 items-center col-span-3 py-2">
                                <FaRegStar className="dark:text-text-color text-light-text-color" />
                                <Typography
                                    fontSize={9}
                                    className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'نام'}
                                </Typography>
                                <PiCaretUpDownBold className="text-text-color light:text-light-text-color" />
                            </div>
                            <div className="flex justify-center items-center col-span-2 py-2">
                                <Typography
                                    fontSize={9}
                                    className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'قیمت'}
                                </Typography>
                                <PiCaretUpDownBold className="text-text-color light:text-light-text-color" />
                            </div>
                            <div className="flex justify-center items-center col-span-2 py-2">
                                <Typography
                                    fontSize={9}
                                    className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'24H'}
                                </Typography>
                                <PiCaretUpDownBold className="text-text-color light:text-light-text-color" />
                            </div>
                            <div className="flex justify-center items-center col-span-2 py-2">
                                <Typography
                                    fontSize={9}
                                    className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'مشاهده'}
                                </Typography>
                                <PiCaretUpDownBold className="dark:text-text-color text-light-text-color" />
                            </div>
                        </div>
                        {rows.map(row => (
                            <div
                                key={row.id}
                                className="dark:odd:bg-black odd:bg-white grid grid-cols-9 w-full"
                            >
                                <div className="flex gap-1 items-center col-span-3 py-2">
                                    <FaRegStar className="dark:text-text-color text-light-text-color" />
                                    <div className="w-6.5 h-6.5 flex justify-center items-center rounded-full bg-gold-100">
                                        <Link to={`/product?id=${row.id}`}>
                                            <img src={row.img} alt="image of product gold" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Typography
                                            fontSize={9}
                                            className="dark:text-text-color text-light-text-color !font-peyda text-nowrap"
                                        >
                                            {row.name}
                                        </Typography>
                                        <Typography
                                            fontSize={9}
                                            className="dark:text-text-color text-light-text-color !font-peyda text-nowrap"
                                        >
                                            {row.enName}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center col-span-2 py-2">
                                    <Typography
                                        fontSize={13}
                                        className="dark:text-text-color text-light-text-color !font-peyda text-nowrap"
                                    >
                                        {row.price}
                                    </Typography>
                                    <Typography
                                        fontSize={9}
                                        className="dark:text-text-color text-light-text-color !font-peyda text-nowrap"
                                    >
                                        {row.dollar}
                                    </Typography>
                                </div>
                                <div className="flex justify-center items-center col-span-2 py-2">
                                    <div className="text-[10px] text-green-500 bg-green-500/30 w-fit px-1 py-0.5 rounded-lg">
                                        {row.change}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center col-span-2 py-2">
                                    <FiEye className="dark:text-text-color text-light-text-color" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <BottomNav />
            </div>
        </>
    );
};

export default Home;
