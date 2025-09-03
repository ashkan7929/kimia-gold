import Typography from '@mui/material/Typography';
import { BiLike, FaChartLine, FaRegNewspaper, FaRegStar, FiEye, PiCaretUpDownBold } from '../../Icons';
import { useAuth } from '../../stores/auth.store';
import { Link } from 'react-router-dom';
import BottomNav from '../../layouts/BottomNav';
import { useTheme } from '../../contexts/ThemeContext';



import goldProduct  from "/src/assets/images/gold.svg";

const rows = [
    {
        id: 1,
        name: 'انس طلا',
        enName: 'Anas gold',
        price: '۶۲,۴۰۷ ت',
        dollar: '۸,۰۸۲ $',
        change: '+۰.۸۳٪',
        changeColor: 'success',
    },
    {
        id: 2,
        name: 'طلای ۱۸ عیار',
        enName: 'Anas gold',
        price: '۶۲,۴۰۷ ت',
        dollar: '۸,۰۸۲ $',
        change: '+۰.۸۳٪',
        changeColor: 'success',
    },
];

const Home = () => {
    // const { t } = useTranslation();
    const { user } = useAuth();
const { theme } = useTheme();
  const isDark = theme === 'dark';

    // Fallback to localStorage if user is not in store (for backward compatibility)
    const userData = user || (() => {
        try {
            return JSON.parse(localStorage.getItem("user-data") || "{}");
        } catch {
            return {};
        }
    })();
    console.log(userData);
    return (
        <>
            <div className="">
                <div className="flex flex-col gap-3 items-center pb-25">
                    <div className="bg-primary-darker light:bg-white flex gap-1 w-full p-3 rounded-lg">
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
                    <div className="bg-primary-dark light:bg-light-primary-darker flex w-full p-3 rounded-lg">
                        <main className="px-4 flex-grow py-5 flex gap-3 flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
                            <div className="flex flex-col items-center gap-1.5">
                                <Typography
                                    className="!font-alibaba text-text-color light:text-light-text-color"
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
                            <button className="bg-accent-orange light:bg-primary-blue text-white text-[9px] font-kalameh px-3 py-1.5 rounded-3xl">
                                {'مشاهده خدمت'}
                            </button>
                        </main>
                    </div>
                    <div className="grid gap-2 light:gap-4 grid-cols-3 w-full">
                        <div className="bg-primary-darker light:bg-light-primary-darker flex flex-col gap-2 justify-center items-center p-3 rounded-lg">
                            {isDark ? (
                                <img alt="coin" src="/images/Hand, Arm, Coins.svg" />
                            ) : (
                                <img src="/src/assets/images/coin-in-hand.jpg" alt="coin" />
                            )}{' '}
                            <Typography
                                className="!font-alibaba text-neutral-300 light:text-neutral-700 light:font-bold text-center"
                                fontSize={10}
                            >
                                {'دریافت خدمات'}
                            </Typography>
                        </div>
                        <Link to="/buy">
                            <div className="bg-primary-darker light:bg-white flex flex-col gap-2 justify-center items-center p-3 rounded-lg">
                                {isDark ? (
                                    <img alt="" src="/images/moneybag-modern-coins.svg" />
                                ) : (
                                    <img alt="" src="/src/assets/images/moneybag.jpg" />
                                )}
                                <Typography
                                    className="!font-alibaba text-neutral-300 light:text-neutral-700 light:font-bold text-center"
                                    fontSize={10}
                                >
                                    {'مدیریت ثروت'}
                                </Typography>
                            </div>
                        </Link>
                        <div className="bg-primary-darker light:!bg-white flex flex-col gap-2 justify-center items-center p-3 rounded-lg">
                            {isDark ? (
                                <img alt="" src="/images/coins-document-chart.svg" />
                            ) : (
                                <img alt="" src="/src/assets/images/coins-chart.jpg" />
                            )}

                            <Typography
                                className="!font-alibaba text-neutral-300 light:text-neutral-700 light:font-bold text-center"
                                fontSize={10}
                            >
                                {'بینش بازار'}
                            </Typography>
                        </div>
                    </div>
                    <div className="bg-primary-darker light:bg-primary-gray-100 w-full rounded-lg py-2.5 px-3">
                        <div className="odd:bg-primary-dark light:odd:bg-white grid grid-cols-9 w-full">
                            <div className="flex gap-1 items-center col-span-3 py-2">
                                <FaRegStar className="text-text-color light:text-light-text-color" />
                                <Typography
                                    fontSize={9}
                                    className="text-white light:text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'نام'}
                                </Typography>
                                <PiCaretUpDownBold className="text-text-color light:text-light-text-color" />
                            </div>
                            <div className="flex justify-center items-center col-span-2 py-2">
                                <Typography
                                    fontSize={9}
                                    className="text-white light:text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'قیمت'}
                                </Typography>
                                <PiCaretUpDownBold className="text-text-color light:text-light-text-color" />
                            </div>
                            <div className="flex justify-center items-center col-span-2 py-2">
                                <Typography
                                    fontSize={9}
                                    className="text-white light:text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'24H'}
                                </Typography>
                                <PiCaretUpDownBold className="text-text-color light:text-light-text-color" />
                            </div>
                            <div className="flex justify-center items-center col-span-2 py-2">
                                <Typography
                                    fontSize={9}
                                    className="text-white light:text-light-text-charcoal !font-peyda text-nowrap"
                                >
                                    {'مشاهده'}
                                </Typography>
                                <PiCaretUpDownBold className="text-text-color light:text-light-text-color" />
                            </div>
                        </div>
                        {rows.map(row => (
                            <div
                                key={row.id}
                                className="odd:bg-primary-dark light:odd:bg-white grid grid-cols-9 w-full"
                            >
                                <div className="flex gap-1 items-center col-span-3 py-2">
                                    <FaRegStar className="text-text-color light:text-light-text-color" />
                                    <div className="w-6.5 h-6.5 flex justify-center items-center rounded-full bg-gold-100">
                                        <img src={goldProduct} alt="image of product gold" />
                                    </div>
                                    <div>
                                        <Typography
                                            fontSize={9}
                                            className="text-text-color light:text-light-text-color !font-peyda text-nowrap"
                                        >
                                            {row.name}
                                        </Typography>
                                        <Typography
                                            fontSize={9}
                                            className="text-text-color light:text-light-text-color !font-peyda text-nowrap"
                                        >
                                            {row.enName}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center col-span-2 py-2">
                                    <Typography
                                        fontSize={13}
                                        className="text-text-color light:text-light-text-color !font-peyda text-nowrap"
                                    >
                                        {row.price}
                                    </Typography>
                                    <Typography
                                        fontSize={9}
                                        className="text-text-color light:text-light-text-color !font-peyda text-nowrap"
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
                                    <FiEye className="text-text-color light:text-light-text-color" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-primary-darker light:bg-light-primary-darker grid grid-cols-3 w-full rounded-lg py-2.5 px-8">
                        <div className="flex justify-start w-full">
                            <div className="flex flex-col gap-1 justify-center items-center w-fit">
                                <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full bg-accent-orange light:bg-primary-blue ">
                                    <BiLike fontSize={19} className="text-white " />
                                </div>
                                <Typography
                                    fontSize={10}
                                    className="text-text-color light:text-light-text-color !font-peyda"
                                >
                                    کمپین
                                </Typography>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <div className="flex flex-col gap-1 justify-center items-center w-fit">
                                <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full bg-accent-orange light:bg-primary-blue">
                                    <FaChartLine fontSize={19} className="text-white " />
                                </div>
                                <Typography
                                    fontSize={10}
                                    className="text-text-color light:text-light-text-color !font-peyda"
                                >
                                    تحلیل‌گر
                                </Typography>
                            </div>
                        </div>
                        <div className="flex justify-end w-full">
                            <div className="flex flex-col gap-1 justify-center items-center w-fit">
                                <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full bg-accent-orange light:bg-primary-blue">
                                    <FaRegNewspaper fontSize={19} className="text-white " />
                                </div>
                                <Typography
                                    fontSize={10}
                                    className="text-text-color light:text-light-text-color !font-peyda"
                                >
                                    اخبار
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <BottomNav />
            </div>
        </>
    );
};

export default Home;