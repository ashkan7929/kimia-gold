import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong, FaChevronLeft, FaRegUser, TbLayoutGrid } from '../../Icons';

import logoDarkMode from "/images/vemLogo1.png"
import logoLightMode from "/images/vemLogoSite.png"

import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
const menu = [
    {
        id: 1,
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش می‌توانید اطلاعات کاربری را مشاهده و ویرایش کنید.',
        link: '/profile',
        img: FaRegUser,
    },
    {
        id: 2,
        icon: FaRegUser,
        title: 'قوانین و مقررات',
        subtitle: 'در این بخش می‌توانید قوانین و مقررات را مشاهده کنید.',
        link: '/rules',
        img: FaRegUser,
    },
    {
        id: 3,
        icon: FaRegUser,
        title: 'صندوق پیام‌ها',
        subtitle: 'در این بخش می‌توانید آخرین پیام‌ها را مشاهده کنید.',
        link: '/message-box',
        img: FaRegUser,
    },
    {
        id: 4,
        icon: FaRegUser,
        title: 'دعوت از دوستان',
        subtitle: 'از این بخش می‌توانید دوستان خود را به باشگاه وِم دعوت کنید.',
        link: '/invite',
        img: FaRegUser,
    },
    {
        id: 5,
        icon: FaRegUser,
        title: 'نظرات و پیشنهادات',
        subtitle: '.برای بهبود کیفیت خدمات، نظراتتان را با ما درمیان بگذارید',
        link: '/suggestions',
        img: FaRegUser,
    },
    {
        id: 6,
        icon: FaRegUser,
        title: 'گزارشات ریز تراکنش‌ها',
        subtitle: 'در این بخش می‌توانید کلیه تراکنش‌های خود را مشاهده کنید.',
        link: '/transaction-details',
        img: FaRegUser,
    },
    {
        id: 7,
        icon: FaRegUser,
        title: 'تنظیمات',
        subtitle: 'برای تغییر تنظیمات، کلیک کنید.',
        link: '/settings',
        img: FaRegUser,
    },
    {
        id: 8,
        icon: FaRegUser,
        title: 'صفحه اصلی',
        subtitle: 'برای بازگشت به صفحه اصلی کلیک کنید.',
        link: '/',
        img: FaRegUser,
    },
    {
        id: 9,
        icon: FaRegUser,
        title: 'درباره باشگاه وِم',
        subtitle: 'برای شناخت بیشتر باشگاه وِم کلیک کنید.',
        link: '/about',
        img: FaRegUser,
    },
    {
        id: 10,
        icon: FaRegUser,
        title: 'خروج از حساب کاربری',
        subtitle: 'برای خروج از حساب کاربری کلیک کنید.',
        link: '/',
        img: FaRegUser,
    },
];

const SimpleLayout = ({
    children,
    title,
    img,
    headerImg,
}: {
    children: any;
    title?: string;
    img?: any;
    headerImg?: string;
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'light';
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();

    const handleShowMenu = () => setShowMenu(!showMenu);

    const handleNavigate = (link: string) => {
        navigate(link);
        handleShowMenu();
    };

    return (
        <>
            <div className="dark:bg-black bg-primary-whiteSpecial min-h-screen p-4.5">
                <header className="dark:bg-primary-darker bg-white grid grid-cols-3 w-full rounded-lg py-2.5 px-4 mb-3">
                    <div className="flex gap-1">
                        <div
                            onClick={handleShowMenu}
                            className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 dark:border-primary-lighter/70 border-primary-gray-50 cursor-pointer"
                        >
                            <TbLayoutGrid fontSize={19} className="dark:text-white text-black" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        {headerImg ? (
                            <img src={headerImg} alt="" className="h-6 object-contain" />
                        ) : (
                            <Typography
                                className="!font-alibaba dark:text-white text-black"
                                fontWeight="bold"
                                fontSize={11}
                            >
                                {title}
                            </Typography>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <div
                            onClick={() => navigate(-1)}
                            className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 dark:border-primary-lighter/70 border-primary-gray-50 cursor-pointer"
                        >
                            <FaArrowLeftLong
                                fontSize={13}
                                className="dark:text-white text-black"
                            />
                        </div>
                    </div>
                </header>
                {img && (
                    <div className="mb-3">
                        <img src={img} alt="" className="w-full rounded-lg object-cover" />
                    </div>
                )}

                {children}
            </div>
            {showMenu && (
                <div className="overflow-y-auto fixed top-0 left-1/2 -translate-x-1/2 h-screen w-full max-w-[420px] bg-primary-dark/90 z-20">
                    {/* // <div className='overflow-y-auto fixed top-0 right-0 h-screen w-full max-w- bg-primary-dark/90 z-20'> */}
                    <div className="absolute top-0 right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] blur-[30px]"></div>
                    <div className="absolute bottom-0 right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] blur-[30px]"></div>
                    <div className="flex flex-col p-4.5">
                        <div className="grid grid-cols-3 w-full z-20">
                            <div className="flex gap-1">
                                <div
                                    onClick={handleShowMenu}
                                    className="w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer"
                                >
                                    <TbLayoutGrid fontSize={19} className="text-white" />
                                </div>
                            </div>
                            <div className="flex justify-center cursor-pointer">
                                <img
                                    alt=""
                                    src={isDark ? logoDarkMode : logoLightMode}
                                    width={34}
                                    height={34}
                                />
                            </div>
                            <div className="flex justify-end">
                                <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer">
                                    <FaArrowLeftLong fontSize={14} className="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 py-5 z-20">
                            {menu.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => handleNavigate(item.link)}
                                    className="dark:bg-primary-darker bg-light-primary-darker flex items-center rounded-lg gap-3 p-3 cursor-pointer"
                                >
                                    <div className="dark:bg-accent-orange bg-primary-blue w-8 h-8 flex justify-center items-center rounded-lg">
                                        <item.icon className="text-white" />
                                    </div>
                                    <div className="grow">
                                        <Typography
                                            className="!font-alibaba dark:text-text-color text-light-text-color"
                                            fontSize={13}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            className="!font-alibaba dark:text-neutral-300 text-neutral-700 line-clamp-1"
                                            fontSize={11}
                                        >
                                            {item.subtitle}
                                        </Typography>
                                    </div>
                                    <Link to='/'>
                                          <FaChevronLeft className="dark:text-text-color text-light-text-color" />

                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SimpleLayout;
