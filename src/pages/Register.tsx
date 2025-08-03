const Register = () => {
    return (
        <div className="w-full max-w-[375px] mx-auto bg-primary-purple min-h-screen flex flex-col">
            <main
                className="px-4 flex-grow py-5 flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('./assets/images/Lines-pattern-starters.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Login Image */}
                <div className="w-[11.77594rem] h-[11.075rem] mx-auto mb-16">
                    <img src="./assets/images/login.svg" alt="" className="w-full h-full object-contain" />
                </div>

                {/* Form Container */}
                <div className="flex flex-col gap-3 w-full">
                    {/* Title Section */}
                    <div className="flex flex-col gap-2">
                        <div className="text-white font-alibaba text-[1.1875rem] font-bold leading-normal text-center" style={{
                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                        }}>
                            ثبت نام در اپلیکیشن
                        </div>
                        <div className="text-custom-text-subtitle text-[0.8125rem] font-normal leading-[1.3125rem] text-center" style={{
                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                        }}>
                            با استفاده از کد ملی و شماره موبایل ثبت نام کنید
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-3">
                        {/* National ID Input */}
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
                                className="w-full h-[2.4375rem] pr-[2.6875rem] pl-[0.9545rem] bg-custom-bg-input border border-custom-border-light rounded-[0.55494rem] text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
                                placeholder="کد ملی را وارد نمایید"
                            />
                        </div>

                        {/* Mobile Number Input */}
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
                                className="w-full h-[2.4375rem] pr-[2.6875rem] pl-[0.9545rem] bg-custom-bg-input border border-custom-border-light rounded-[0.55494rem] text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
                                placeholder="شماره موبایل را وارد نمایید"
                            />
                        </div>

                        {/* Referral Code Input */}
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
                                className="w-full h-[2.4375rem] pr-[2.6875rem] pl-[0.9545rem] bg-custom-bg-input border border-custom-border-light rounded-[0.55494rem] text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
                                placeholder="کد معرف را وارد نمایید"
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <label className="flex items-center gap-1 text-white text-[0.6875rem] font-medium leading-normal">
                            <input
                                className="w-[1.375rem] h-[1.3125rem] bg-transparent border border-custom-border-light rounded accent-primary-blue"
                                type="checkbox"
                                defaultValue=""
                            />
                            قوانین اپلیکیشن را میپذیرم
                        </label>

                        {/* Submit Button */}
                        <div>
                            <button className="w-full bg-primary-blue text-white font-peyda py-3 rounded-lg hover:bg-blue-600 transition-colors">
                                ورود به حساب
                            </button>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-4 text-center text-custom-text-subtitle text-[0.8125rem] font-normal leading-[1.3125rem]" style={{
                        textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                    }}>
                        حساب کاربری ندارید ؟
                        <a href="#" className="text-white font-semibold mr-1 hover:underline">
                            ثبت نام
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register