import { Typography } from '@mui/material';
// import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaArrowLeftLong, FaChevronLeft, FaRegUser } from 'react-icons/fa6';
import { TbLayoutGrid } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import logoLightMode from '/images/vemLogoSite.png';
import logoDarkMode from '/images/vemLogo1.png';
import { HiOutlineHome } from 'react-icons/hi';

const menu = [
    {
        id: 1,
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش می‌توانید اطلاعات کاربری را مشاهده و ویرایش کنید.',
        link: '/profile',
    },
    {
        id: 2,
        icon: FaRegUser,
        title: 'قوانین و مقررات',
        subtitle: 'در این بخش می‌توانید قوانین و مقررات را مشاهده کنید.',
        link: '/rules',
    },
    {
        id: 3,
        icon: FaRegUser,
        title: 'صندوق پیام‌ها',
        subtitle: 'در این بخش می‌توانید آخرین پیام‌ها را مشاهده کنید.',
        link: '/message-box',
    },
    {
        id: 4,
        icon: FaRegUser,
        title: 'دعوت از دوستان',
        subtitle: 'از این بخش می‌توانید لینک دعوت دوستان را دریافت کنید.',
        link: '/invite',
    },
    {
        id: 5,
        icon: HiOutlineHome,
        title: 'صفحه اصلی',
        subtitle: 'برای بازگشت به صفحه اصلی کلیک کنید.',
        link: '/',
    },
    {
        id: 6,
        icon: FaRegUser,
        title: 'نظرات و پیشنهادات',
        subtitle: '.برای بهبود کیفیت خدمات، نظراتتان را با ما درمیان بگذارید',
        link: '/suggestions',
    },
    {
        id: 7,
        icon: FaRegUser,
        title: 'گزارشات ریز تراکنش‌ها',
        subtitle: 'در این بخش می‌توانید تراکنشات اخیر را همراه با جزئیات مشاهده کنید.',
        link: '/transaction-details',
    },
    {
        id: 8,
        icon: FaRegUser,
        title: 'تنظیمات',
        subtitle: 'برای تغییر تنظیمات وب‌اپلیکیشن کلیک کنید',
        link: '/settings',
    },
    {
        id: 9,
        icon: FaRegUser,
        title: 'درباره باشگاه وِم',
        subtitle: 'در این بخش می‌توانید بیشتر ما را بشناسید',
        link: '/about',
    },
    {
        id: 10,
        icon: FaRegUser,
        title: 'خروج از حساب کاربری',
        subtitle: 'برای خروج از حساب کاربری کلیک کنید',
        link: '/starter',
    },
];

const Menu = ({ handleShowMenu, setShowMenu }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        navigate(link);
        handleShowMenu();
    };

    return (
        <div className="overflow-y-auto fixed top-0 left-1/2 -translate-x-1/2 h-screen w-full max-w-[420px] bg-primary-dark/90 z-20">
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
                    <Link to="/">
                        <div className="flex justify-center cursor-pointer">
                            <img
                                alt=""
                                src={isDark ? logoDarkMode : logoLightMode}
                                className="w-8 h-8"
                            />
                        </div>
                    </Link>
                    <div className="flex justify-end">
                        <Link to="/">
                            <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer">
                                <FaArrowLeftLong fontSize={14} className="text-white" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2 py-5 z-20">
                    {menu.map(item => (
                        <div
                            key={item.id}
                            onClick={() => {
                                if (item.id === 10) {
                                    const theme = localStorage.getItem('theme');
                                    localStorage.clear();
                                    if (theme) localStorage.setItem('theme', theme);
                                    setShowMenu(false);
                                    window.location.reload();
                                    navigate('/auth', { replace: true });
                                } else {
                                    handleNavigate(item.link);
                                }
                            }}
                            className="bg-primary-darker light:bg-light-primary-darker flex items-center rounded-lg gap-3 p-3 cursor-pointer"
                        >
                            <div className="bg-accent-orange light:bg-primary-blue w-8 h-8 flex justify-center items-center rounded-lg">
                                <item.icon className="text-text-color " />
                            </div>
                            <div className="grow">
                                <Typography
                                    className="!font-alibaba text-text-color light:text-light-text-color"
                                    fontSize={12}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    className="!font-alibaba text-neutral-300 light:text-neutral-700 line-clamp-1"
                                    fontSize={10}
                                >
                                    {item.subtitle}
                                </Typography>
                            </div>
                            <Link to="/">
                                <FaChevronLeft className="text-text-color light:text-light-text-color" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
