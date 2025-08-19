import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaChevronLeft, FaRegUser, IoNotificationsOutline, PiUsersThreeBold, TbLayoutGrid } from '../../Icons';

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
        icon: FaRegUser,
        title: 'نظرات و پیشنهادات',
        subtitle: 'برای بهبود کیفیت خدمات، نظراتتان را با ما درمیان بگذارید',
        link: '/suggestions',
    },
    {   
        id: 6,
        icon: FaRegUser,
        title: 'گزارشات ریز تراکنش‌ها',
        subtitle: 'در این بخش می‌توانید تراکنشات اخیر را همراه با جزئیات مشاهده کنید.',
        link: '/transaction-details',
    },
    { 
        id: 7,
        icon: FaRegUser,
        title: 'تنظیمات',
        subtitle: 'برای تغییر تنظیمات وب‌اپلیکیشن کلیک کنید',
        link: '/settings',
    },
    { 
        id: 8,
        icon: FaRegUser,
        title: 'درباره باشگاه وِم',
        subtitle: 'در این بخش می‌توانید بیشتر ما را بشناسید',
        link: '/about',
    },
    { 
        id: 9,
        icon: FaRegUser,
        title: 'خروج از حساب کاربری',
        subtitle: 'برای خروج از حساب کاربری کلیک کنید',
        link: '/',
    },
];

const Layout = ({ children }: { children: any }) => {
    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate()

    const handleShowMenu = () => setShowMenu(!showMenu)
    
    const handleNavigate = (link:string) => {
        navigate(link)
        handleShowMenu()
    }

  return (
    <>
      <div className="bg-black min-h-screen p-4.5">
        <header className="bg-primary-darker grid grid-cols-3 w-full rounded-lg py-2.5 px-4 mb-3">
          <div className="flex gap-1">
            <div
              onClick={handleShowMenu}
              className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 cursor-pointer"
            >
              <TbLayoutGrid fontSize={19} className="text-white" />
            </div>
            <Link to={"/message-box"}>
              <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 cursor-pointer">
                <IoNotificationsOutline fontSize={19} className="text-white" />
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to={"/home"}>
              <img alt="" src="/images/ki-logo.svg" width={34} height={34} />
            </Link>
          </div>
          <div className="flex justify-end">
            <Link to={"/profile"}>
              <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 cursor-pointer">
                <PiUsersThreeBold fontSize={19} className="text-white" />
              </div>
            </Link>
          </div>
        </header>
        {children}
      </div>

      {showMenu && (
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
              <div className="flex justify-center cursor-pointer">
                <img alt="" src="/images/ki-logo.svg" width={34} height={34} />
              </div>
              <div className="flex justify-end">
                <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border border-white/50 cursor-pointer">
                  <FaArrowLeftLong fontSize={14} className="text-white" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 py-5 z-20">
              {menu.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.id === 9) {
                      localStorage.clear();
                      navigate("/auth");
                    } else {
                      handleNavigate(item.link);
                    }
                  }}
                  className="bg-primary-darker flex items-center rounded-lg gap-3 p-3 cursor-pointer"
                >
                  <div className="bg-accent-orange w-8 h-8 flex justify-center items-center rounded-lg">
                    <item.icon className="text-white" />
                  </div>
                  <div className="grow">
                    <Typography
                      className="!font-alibaba text-white"
                      fontSize={12}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="!font-alibaba text-neutral-300 line-clamp-1"
                      fontSize={10}
                    >
                      {item.subtitle}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout