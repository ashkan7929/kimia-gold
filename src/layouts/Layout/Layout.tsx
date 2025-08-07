import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaRegUser, IoNotificationsOutline, LuMoveLeft, PiUsersThreeBold, TbLayoutGrid } from '../../Icons';

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

const Layout = ({ children }: { children: any }) => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => setShowMenu(!showMenu)

    return (
        <>
            <div className="bg-black min-h-screen p-4.5">
                <header className='bg-primary-darker grid grid-cols-3 w-full rounded-lg py-2.5 px-4 mb-3'>
                    <div className='flex gap-1'>
                        <div onClick={handleShowMenu} className='w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 cursor-pointer'>
                            <TbLayoutGrid fontSize={19} className='text-white' />
                        </div>
                        <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 cursor-pointer'>
                            <IoNotificationsOutline fontSize={19} className='text-white' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img alt='' src='/images/ki-logo.svg' width={34} height={34} />
                    </div>
                    <div className='flex justify-end'>
                        <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 cursor-pointer'>
                            <PiUsersThreeBold fontSize={19} className='text-white' />
                        </div>
                    </div>
                </header>
                {children}
            </div>
            {
                showMenu && <div className='overflow-y-auto fixed top-0 right-0 h-screen w-full bg-primary-dark/90 z-20'>
                    <div className="absolute top-0 right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] blur-[30px]"></div>
                    <div className="absolute bottom-0 right-0 left-0 w-full h-[8.5rem] bg-[#2256FE] blur-[30px]"></div>
                    <div className='flex flex-col p-4.5'>
                        <div className='grid grid-cols-3 w-full z-20'>
                            <div className='flex gap-1'>
                                <div onClick={handleShowMenu} className='w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer'>
                                    <TbLayoutGrid fontSize={19} className='text-white' />
                                </div>
                            </div>
                            <div className='flex justify-center cursor-pointer'>
                                <img alt='' src='/images/ki-logo.svg' width={34} height={34} />
                            </div>
                            <div className='flex justify-end'>
                                <div className='w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer'>
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
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Layout