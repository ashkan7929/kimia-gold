
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiLike, FaChartLine, FaRegNewspaper, FaRegStar, FaRegUser, FiEye, HiOutlineHome, HiOutlinePresentationChartBar, PiCaretUpDownBold, PiUsersThreeBold } from '../../Icons';

const rows = [
    {
        name: 'انس طلا',
        enName: 'Anas gold',
        price: '۶۲,۴۰۷ ت',
        dollar: '۸,۰۸۲ $',
        change: '+۰.۸۳٪',
        changeColor: 'success',
    },
    {
        name: 'طلای ۱۸ عیار',
        enName: 'Anas gold',
        price: '۶۲,۴۰۷ ت',
        dollar: '۸,۰۸۲ $',
        change: '+۰.۸۳٪',
        changeColor: 'success',
    },
];

const menu = [
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/profile',
    },
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/',
    },
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/',
    },
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/',
    },
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/',
    },
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/',
    },
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/',
    },
    {
        icon: FaRegUser,
        title: 'اطلاعات کاربری',
        subtitle: 'در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.',
        link: '/',
    },
];

const Home = () => {
    const { t } = useTranslation();

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => setShowMenu(!showMenu)

    return (<>
        <div className="">
            <>
                <div className='flex flex-col gap-3 items-center pb-25'>
                    {/* <div className='bg-primary-darker grid grid-cols-3 w-full rounded-lg py-2.5 px-4'>
                        <div className='flex gap-1'>
                            <div onClick={handleShowMenu} className='w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter'>
                                <TbLayoutGrid fontSize={19} className='text-white' />
                            </div>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter'>
                                <IoNotificationsOutline fontSize={19} className='text-white' />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <img alt='' src='/images/ki-logo.svg' width={34} height={34} />
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter'>
                                <PiUsersThreeBold fontSize={19} className='text-white' />
                            </div>
                        </div>
                    </div> */}
                    <div className='bg-primary-darker flex gap-1 w-full p-3 rounded-lg'>
                        <div className='flex flex-col gap-1'>
                            <Typography className='!font-alibaba text-white' fontSize={13}><strong>حجت بندانی</strong> خوش امدید</Typography>
                            <Typography className='!font-alibaba text-neutral-300' fontSize={11}>{'به اپلیکیشن کیمیا گری خوش امدید میتوانید خدمات خود را انتخاب کنید'}</Typography>
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
                                <Typography className='!font-alibaba text-white' fontSize={16}>صفحه <strong>کیمیاگری</strong></Typography>
                                <Typography className='!font-alibaba text-neutral-300' fontSize={11}>{'محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر'}</Typography>
                            </div>
                            <button className='bg-orange-500 text-white text-[9px] font-kalameh px-3 py-1.5 rounded-3xl'>{'مشاهده خدمت'}</button>
                        </main>
                    </div>
                    <div className='grid gap-2 grid-cols-3 w-full'>
                        <div className='bg-primary-darker flex flex-col gap-2 justify-center items-center p-3 rounded-lg'>
                            <img alt='' src='/images/Hand, Arm, Coins.svg' />
                            <Typography className='!font-alibaba text-neutral-300 text-center' fontSize={10}>{'دریافت خدمات'}</Typography>
                        </div>
                        <div className='bg-primary-darker flex flex-col gap-2 justify-center items-center p-3 rounded-lg'>
                            <img alt='' src='/images/moneybag-modern-coins.svg' />
                            <Typography className='!font-alibaba text-neutral-300 text-center' fontSize={10}>{'فروش محصول طلا'}</Typography>
                        </div>
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
                                <div className='odd:bg-primary-dark grid grid-cols-9 w-full'>
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
                        <div className='flex flex-col gap-1 justify-center items-start'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full bg-orange-500'>
                                <BiLike fontSize={19} className='text-white' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda'>کیف پول</Typography>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full bg-orange-500'>
                                <FaChartLine fontSize={19} className='text-white' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda'>کیف پول</Typography>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-end'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full bg-orange-500'>
                                <FaRegNewspaper fontSize={19} className='text-white' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda'>کیف پول</Typography>
                        </div>
                    </div>
                </div>
                <div className='fixed bottom-0 right-0 w-full p-4.5'>
                    <div className='grid grid-cols-3 bg-primary-blue rounded-3xl'>
                        <div className='flex flex-col justify-center items-center p-2 gap-1.5'>
                            <HiOutlineHome className='text-white' fontSize={20} />
                            <Typography fontSize={10} className='text-white !font-peyda'>صفحه اصلی</Typography>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-10.5 h-10.5 flex justify-center items-center rounded-full bg-orange-500 -translate-y-3 shadow shadow-black/50'>
                                <PiUsersThreeBold fontSize={19} className='text-white' />
                            </div>
                            <Typography fontSize={10} className='text-white !font-peyda -translate-y-2'>کیف پول</Typography>
                        </div>
                        <div className='flex flex-col justify-center items-center p-2 gap-1.5'>
                            <HiOutlinePresentationChartBar className='text-white' fontSize={20} />
                            <Typography fontSize={10} className='text-white !font-peyda'>همه تراکنش ها</Typography>
                        </div>
                    </div>
                </div>
            </>
            {/* {showMenu && <div className='overflow-y-auto fixed top-0 right-0 h-screen w-full bg-primary-dark/90 z-20'>
            <div className="absolute top-[-1rem] right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] blur-[30px]"></div>
                <div className="absolute bottom-[-1rem] right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] blur-[30px]"></div>
                <div className='flex flex-col p-4.5'>
                    <div className='grid grid-cols-3 w-full z-20'>
                        <div className='flex gap-1'>
                            <div onClick={handleShowMenu} className='w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50'>
                                <TbLayoutGrid fontSize={19} className='text-white' />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <img alt='' src='/images/ki-logo.svg' width={34} height={34} />
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50'>
                                <LuMoveLeft fontSize={14} className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 py-5 z-20'>
                        {
                            menu.map((item) => (
                                <Link to={item.link}>
                                    <div className='bg-primary-darker flex items-center rounded-lg gap-3 p-3 cursor-pointer'>
                                        <div className='bg-orange-400 w-8 h-8 flex justify-center items-center rounded-lg'>
                                            <item.icon className='text-white' />
                                        </div>
                                        <div className='grow'>
                                            <Typography className='!font-alibaba text-white' fontSize={13}>{item.title}</Typography>
                                            <Typography className='!font-alibaba text-neutral-300 line-clamp-1' fontSize={11}>{item.subtitle}</Typography>
                                        </div>
                                        <FaChevronLeft className='text-white' />
                                        { }
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>} */}
        </div>
    </>
    );
};

export default Home;