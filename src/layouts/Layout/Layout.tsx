import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaArrowLeftLong,
    FaChevronLeft,
    FaRegUser,
    IoNotificationsOutline,
    PiUsersThreeBold,
    TbCircleDottedLetterR,
    HiOutlineHome,
    TbLayoutGrid,
    MdOutlineMessage,
    GoSignOut,
    AiOutlineUserAdd,
} from '../../Icons';
import { useTheme } from '../../contexts/ThemeContext';
import { BiSolidMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import logoLightMode from '/images/vemLogoSite.png';
import logoDarkMode from '/images/vemLogo1.png';

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
        icon: FaRegUser,
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
        icon: AiOutlineUserAdd,
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
        icon: FaRegUser,
        title: 'نظرات و پیشنهادات',
        subtitle: 'برای بهبود کیفیت خدمات، نظراتتان را با ما درمیان بگذارید.',
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
        icon: GoSignOut,
        title: 'خروج از حساب کاربری',
        subtitle: 'برای خروج از حساب کاربری کلیک کنید',
        link: '/auth/unified',
    },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();

    const handleShowMenu = () => setShowMenu(s => !s);

    const handleNavigate = (link: string) => {
        setShowMenu(false);
        navigate(link);
    };

    const backHandler = () => {
        try {
            if (window.history.length > 1) {
                navigate(-1);
            } else {
                navigate('/');
            }
        } catch (e) {
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

    return (
        <>
            <div className="dark:bg-gray-900 bg-primary-whiteSpecial min-h-screen p-4.5">
                <header className="dark:bg-black bg-white grid grid-cols-3 w-full rounded-lg py-2.5 px-4 mb-3">
                    <div className="flex gap-1">
                        <button
                            onClick={handleShowMenu}
                            className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 dark:border-primary-lighter/70 border-primary-gray-50 cursor-pointer"
                        >
                            <TbLayoutGrid fontSize={19} className="dark:text-white text-black" />
                        </button>

                        <Link to="/message-box">
                            <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 dark:border-primary-lighter/70 border-primary-gray-50 cursor-pointer">
                                <IoNotificationsOutline
                                    fontSize={19}
                                    className="dark:text-white text-black"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => navigate('/home')} className="cursor-pointer">
                            {isDark ? (
                                <img alt="" src={logoDarkMode} width={34} height={34} />
                            ) : (
                                <img alt="" src={logoLightMode} width={34} height={34} />
                            )}
                        </button>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <button onClick={toggleTheme} className="-ml-2 p-2 bg-secondary rounded">
                            {isDark ? (
                                <FiSun className="dark:text-white text-black" size={18} />
                            ) : (
                                <BiSolidMoon className="dark:text-white text-black" size={18} />
                            )}
                        </button>

                        <Link to="/profile">
                            <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 dark:border-primary-lighter/70 border-primary-gray-50 cursor-pointer">
                                <PiUsersThreeBold
                                    fontSize={19}
                                    className="dark:text-white text-black"
                                />
                            </div>
                        </Link>
                    </div>
                </header>
                {children}
            </div>

            {showMenu && (
                <div className="overflow-y-auto fixed top-0 left-1/2 -translate-x-1/2 h-screen w-full max-w-[420px] bg-primary-dark/90 z-20">
                    <div className="absolute top-0 right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] dark:bg-primary-darker blur-[30px]" />
                    <div className="absolute bottom-0 right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] dark:bg-primary-darker blur-[30px]" />

                    <div className="flex flex-col p-4.5">
                        <div className="grid grid-cols-3 w-full z-20">
                            <button
                                onClick={handleShowMenu}
                                className="w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer"
                            >
                                <TbLayoutGrid fontSize={19} className="text-white" />
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
                                className="w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer justify-self-end"
                            >
                                <FaArrowLeftLong fontSize={14} className="text-white" />
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
                                        className="dark:bg-gray-700 bg-light-primary-darker flex items-center rounded-lg gap-3 p-3 text-start"
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
            )}
        </>
    );
};

export default Layout;
