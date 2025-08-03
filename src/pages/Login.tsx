const Login = () => {
    return (
        <div className="w-full max-w-[375px] mx-auto bg-[#010056] min-h-screen flex flex-col">
            {/* <main> */}
            <main className="w-full px-6 py-12 flex-grow flex flex-col" style={{
                backgroundImage: "url('/images/Lines-pattern-starters.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="w-[11.77594rem] h-[11.075rem] mx-auto mb-16">
                    <img src="/images/login.svg" alt="" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="font-alibaba text-[1.1875rem] font-bold leading-normal text-white" style={{
                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                        }}>ورود به اپلیکیشن</div>
                        <div className="text-[#C4C4C4] text-[0.8125rem] font-normal leading-[1.3125rem]" style={{
                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                        }}>شماره موبایل خود را جهت ورود وارد نمایید</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative">
                            <i className="absolute h-full right-4 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={19}
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M8.64465 3.16748V4.59248C8.64465 4.85452 8.82199 5.06748 9.04049 5.06748H11.4155C11.634 5.06748 11.8113 4.85452 11.8113 4.59248V3.16748"
                                        stroke="white"
                                        strokeWidth="1.1875"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.34106 13.8549H11.1144"
                                        stroke="white"
                                        strokeWidth="1.1875"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.85299 3.16748H12.603C13.4778 3.16748 14.1863 3.87602 14.1863 4.75081V14.2508C14.1863 15.1256 13.4778 15.8341 12.603 15.8341H7.85299C6.97819 15.8341 6.26965 15.1256 6.26965 14.2508V4.75081C6.26965 3.87602 6.97819 3.16748 7.85299 3.16748Z"
                                        stroke="white"
                                        strokeWidth="1.1875"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </i>
                            <input
                                type="text"
                                className="block w-full h-[2.4375rem] pr-[2.6875rem] pl-[0.9545rem] text-[0.6875rem] font-normal leading-6 text-white bg-[#12116B] border border-[#303072] rounded-[0.55494rem] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="شماره موبایل را وارد نمایید"
                            />
                        </div>
                        <div>
                            <button className="inline-block w-full py-[0.65rem] px-2 text-[0.6875rem] font-semibold leading-[150%] text-white text-center bg-[#2256FF] border border-[#2256FF] rounded-lg hover:bg-[#1d49d9] hover:border-[#1b45cc] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150">ورود به حساب</button>
                        </div>
                    </div>
                    <div className="mt-4 text-[#C4C4C4] text-center text-[0.8125rem] font-normal leading-[1.3125rem]" style={{
                        textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                    }}>
                        حساب کاربری ندارید ؟<a href="#" className="text-white font-semibold">ثبت نام</a>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Login