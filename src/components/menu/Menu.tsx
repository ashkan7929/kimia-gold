import { Typography } from '@mui/material';
// import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Dispatch, SetStateAction } from 'react';
import logoLightMode from '/images/vemLogoSite.png';
import logoDarkMode from '/images/vemLogo1.png';
import {
    FaArrowLeftLong,
    FaChevronLeft,
    FaUsers,
    TbCircleDottedLetterR,
    HiOutlineHome,
    TbLayoutGrid,
    MdOutlineMessage,
    GoSignOut,
    IoSettingsOutline,
    GrTransaction,
    FaRegComments,
    AiFillInfoCircle,
    CgProfile,
} from '../../Icons';
const menu = [
    {
        id: 1,
        icon: HiOutlineHome,
        title: 'صفحه اصلی',
        subtitle: 'برای بازگشت به صفحه اصلی کلیک کنید.',
        link: '/',
    },
    {
        id: 2,
        icon: CgProfile,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش می‌توانید اطلاعات کاربری را مشاهده و ویرایش کنید.',
        link: '/profile',
    },

    {
        id: 3,
        icon: MdOutlineMessage,
        title: 'صندوق پیام‌ها',
        subtitle: 'در این بخش می‌توانید آخرین پیام‌ها را مشاهده کنید.',
        link: '/message-box',
    },
    {
        id: 4,
        icon: FaUsers,
        title: 'دعوت از دوستان',
        subtitle: 'از این بخش می‌توانید لینک دعوت دوستان را دریافت کنید.',
        link: '/invite',
    },
    {
        id: 5,
        icon: TbCircleDottedLetterR,
        title: 'قوانین و مقررات',
        subtitle: 'در این بخش می‌توانید قوانین و مقررات را مشاهده کنید.',
        link: '/rules',
    },
    {
        id: 6,
        icon: FaRegComments,
        title: 'نظرات و پیشنهادات',
        subtitle: 'برای بهبود کیفیت خدمات، نظراتتان را با ما درمیان بگذارید.',
        link: '/suggestions',
    },
    {
        id: 7,
        icon: GrTransaction,
        title: 'گزارشات ریز تراکنش‌ها',
        subtitle: 'در این بخش می‌توانید تراکنشات اخیر را همراه با جزئیات مشاهده کنید.',
        link: '/transactions',
    },
    {
        id: 8,
        icon: IoSettingsOutline,
        title: 'تنظیمات',
        subtitle: 'برای تغییر تنظیمات وب‌اپلیکیشن کلیک کنید',
        link: '/settings',
    },
    {
        id: 9,
        icon: AiFillInfoCircle,
        title: 'درباره باشگاه وِم',
        subtitle: 'در این بخش می‌توانید بیشتر ما را بشناسید',
        link: '/about',
    },
    {
        id: 10,
        icon: GoSignOut,
        title: 'خروج از حساب کاربری',
        subtitle: 'برای خروج از حساب کاربری کلیک کنید',
        link: '/auth/unified',
    },
];

type MenuProps = {
    setShowMenu: Dispatch<SetStateAction<boolean>>;
    handleShowMenu: () => void;
};
const Menu: React.FC<MenuProps> = ({ handleShowMenu, setShowMenu }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const backHandler = () => {
        try {
            if (pathname === '/app') {
                setShowMenu(false);
                return;
            }
            if (window.history.length > 1) {
                navigate(-1);
            } else {
                navigate('/');
            }
        } catch (e) {
            console.log(e);
            navigate('/');
        } finally {
            setShowMenu(false);
        }
    };

    const handleLogout = () => {
        const savedTheme = localStorage.getItem('theme');
        localStorage.clear();
        if (savedTheme) localStorage.setItem('theme', savedTheme);
        setShowMenu(false);
        navigate('/auth/unified', { replace: true });
        window.location.reload();
    };

    const handleNavigate = (link: string) => {
        navigate(link);
        handleShowMenu();
    };

    return (
        <div className="overflow-y-auto fixed top-0 left-1/2 pb-[calc(env(safe-area-inset-bottom)+40px)] -translate-x-1/2 h-screen w-full max-w-[420px] bg-gray-200 dark:bg-black z-20">
            <div className="absolute top-0 right-0 left-0 w-full h-[8.5rem] dark:bg-black " />
            <div className="flex flex-col p-4.5">
                <div className="grid grid-cols-3 w-full z-20">
                    <button
                        onClick={handleShowMenu}
                        className="w-8.5 h-8.5 flex justify-center items-center rounded-full border dark:border-white/50 border-blak/50 cursor-pointer"
                    >
                        <TbLayoutGrid fontSize={19} className="dark:text-white text-black" />
                    </button>

                    <button
                        onClick={() => {
                            setShowMenu(false);
                            navigate('/home');
                        }}
                        className="flex justify-center cursor-pointer"
                    >
                        <img
                            alt=""
                            src={isDark ? logoDarkMode : logoLightMode}
                            className="w-8 h-8"
                        />
                    </button>

                    <button
                        onClick={backHandler}
                        className="w-8.5 h-8.5 flex justify-center items-center rounded-full border  dark:border-white/50 cursor-pointer justify-self-end"
                    >
                        <FaArrowLeftLong fontSize={14} className="dark:text-white text-black" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 py-5 z-20">
                    {menu.map(item => {
                        const onClick =
                            item.id === 10 ? handleLogout : () => handleNavigate(item.link);
                        return (
                            <button
                                key={item.id}
                                onClick={onClick}
                                className="dark:bg-[#040929] bg-white flex items-center rounded-lg gap-3 p-3 text-start"
                            >
                                <div className="dark:bg-accent-orange bg-primary-blue w-8 h-8 flex justify-center items-center rounded-lg">
                                    <item.icon className="text-text-color" />
                                </div>

                                <div className="grow">
                                    <Typography
                                        className="!font-alibaba dark:text-text-color text-light-text-color"
                                        fontSize={12}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        className="!font-alibaba dark:text-neutral-300 text-neutral-700 line-clamp-1"
                                        fontSize={10}
                                    >
                                        {item.subtitle}
                                    </Typography>
                                </div>

                                <FaChevronLeft className="dark:text-text-color text-light-text-color" />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Menu;
