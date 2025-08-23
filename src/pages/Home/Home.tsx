
import Typography from '@mui/material/Typography';
import { BiLike, FaChartLine, FaRegNewspaper, FaRegStar, FiEye, PiCaretUpDownBold } from '../../Icons';
import { useAuth } from '../../stores/auth.store';
import { Link } from 'react-router-dom';
import BottomNav from '../../layouts/BottomNav';

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

    // Fallback to localStorage if user is not in store (for backward compatibility)
    const userData = user || (() => {
        try {
            return JSON.parse(localStorage.getItem("user-data") || "{}");
        } catch {
            return {};
        }
    })();
    console.log(userData);
    return (<>
        <div className="">
            <div className='flex flex-col gap-3 items-center pb-25'>
                <div className='bg-primary-darker flex gap-1 w-full p-3 rounded-lg'>
                    <div className='flex flex-col gap-1'>
                        <Typography className='!font-alibaba text-white' fontSize={13}><strong>{userData?.firstName && userData?.lastName ? userData.firstName + " " + userData.lastName : 'کاربر گرامی'}</strong> خوش امدید</Typography>
                        <Typography className='!font-alibaba text-neutral-300' fontSize={11}>{'به باشگاه وِم خوش آمدید، از این صفحه می‌توانید خدمات خود را انتخاب کنید'}</Typography>
                    </div>
                    <div>
                        <img alt='' src='/images/welcome-home.svg' width={79} height={63} />
                    </div>
                </div>
                <div className='bg-primary-dark flex w-full p-3 rounded-lg'>
                    <main
                        className="px-4 flex-grow py-5 flex gap-3 flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center"
                    >
                        <div className='flex flex-col items-center gap-1.5'>
                            <Typography className='!font-alibaba text-white' fontSize={16}>صفحه <strong>باشگاه وِم</strong></Typography>
                            <Typography className='!font-alibaba text-neutral-300' fontSize={11}>{'محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر'}</Typography>
                        </div>
                        <button className='bg-accent-orange text-white text-[9px] font-kalameh px-3 py-1.5 rounded-3xl'>{'مشاهده خدمت'}</button>
                    </main>
                </div>
                <div className='grid gap-2 grid-cols-3 w-full'>
                    <div className='bg-primary-darker flex flex-col gap-2 justify-center items-center p-3 rounded-lg'>
                        <img alt='' src='/images/Hand, Arm, Coins.svg' />
                        <Typography className='!font-alibaba text-neutral-300 text-center' fontSize={10}>{'دریافت خدمات'}</Typography>
                    </div>
                    <Link to="/buy">
                     <div className='bg-primary-darker flex flex-col gap-2 justify-center items-center p-3 rounded-lg'>
                        <img alt='' src='/images/moneybag-modern-coins.svg' />
                        <Typography className='!font-alibaba text-neutral-300 text-center' fontSize={10}>{'سرمایه‌گذاری در طلا'}</Typography>
                    </div>
                  </Link>
                    <div className='bg-primary-darker flex flex-col gap-2 justify-center items-center p-3 rounded-lg'>
                        <img alt='' src='/images/coins-document-chart.svg' />
                        <Typography className='!font-alibaba text-neutral-300 text-center' fontSize={10}>{'بینش بازار'}</Typography>
                    </div>
                </div>
                <div className='bg-primary-darker w-full rounded-lg py-2.5 px-3'>
                    <div className='odd:bg-primary-dark grid grid-cols-9 w-full'>
                        <div className='flex gap-1 items-center col-span-3 py-2'>
                            <FaRegStar className='text-white' />
                            <Typography fontSize={9} className='text-white !font-peyda text-nowrap'>{'نام'}</Typography>
                            <PiCaretUpDownBold className='text-white' />
                        </div>
                        <div className='flex justify-center items-center col-span-2 py-2'>
                            <Typography fontSize={9} className='text-white !font-peyda text-nowrap'>{'قیمت'}</Typography>
                            <PiCaretUpDownBold className='text-white' />
                        </div>
                        <div className='flex justify-center items-center col-span-2 py-2'>
                            <Typography fontSize={9} className='text-white !font-peyda text-nowrap'>{'24H'}</Typography>
                            <PiCaretUpDownBold className='text-white' />
                        </div>
                        <div className='flex justify-center items-center col-span-2 py-2'>
                            <Typography fontSize={9} className='text-white !font-peyda text-nowrap'>{'مشاهده'}</Typography>
                            <PiCaretUpDownBold className='text-white' />
                        </div>
                    </div>
                    {
                        rows.map((row) => (
                            <div key={row.id} className='odd:bg-primary-dark grid grid-cols-9 w-full'>
                                <div className='flex gap-1 items-center col-span-3 py-2'>
                                    <FaRegStar className='text-white' />
                                    <div className='w-6.5 h-6.5 flex justify-center items-center rounded-full bg-gold-100'></div>
                                    <div>
                                        <Typography fontSize={9} className='text-white !font-peyda text-nowrap'>{row.name}</Typography>
                                        <Typography fontSize={9} className='text-white !font-peyda text-nowrap'>{row.enName}</Typography>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center col-span-2 py-2'>
                                    <Typography fontSize={13} className='text-white !font-peyda text-nowrap'>{row.price}</Typography>
                                    <Typography fontSize={9} className='text-white !font-peyda text-nowrap'>{row.dollar}</Typography>
                                </div>
                                <div className='flex justify-center items-center col-span-2 py-2'>
                                    <div className='text-[10px] text-green-500 bg-green-500/30 w-fit px-1 py-0.5 rounded-lg'>{row.change}</div>
                                </div>
                                <div className='flex justify-center items-center col-span-2 py-2'>
                                    <FiEye className='text-white' />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='bg-primary-darker grid grid-cols-3 w-full rounded-lg py-2.5 px-8'>
                    <div className='flex justify-start w-full'>
                        <div className='flex flex-col gap-1 justify-center items-center w-fit'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full bg-accent-orange'>
                                <BiLike fontSize={19} className='text-white' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda'>کمپین</Typography>
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <div className='flex flex-col gap-1 justify-center items-center w-fit'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full bg-accent-orange'>
                                <FaChartLine fontSize={19} className='text-white' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda'>تحلیلگر</Typography>
                        </div>
                    </div>
                    <div className='flex justify-end w-full'>
                        <div className='flex flex-col gap-1 justify-center items-center w-fit'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full bg-accent-orange'>
                                <FaRegNewspaper fontSize={19} className='text-white' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda'>اخبار</Typography>
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