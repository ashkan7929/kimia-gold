const Starter = () => {
    return (
        <div className="w-full mx-auto bg-primary-purple min-h-screen flex flex-col">
            <main className="px-4 flex-grow flex items-center justify-center" style={{
                backgroundImage: "url('./assets/images/Lines-pattern-starters.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div dir="ltr" className="overflow-hidden">
                    <div className="swiper swiper-starter">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="">
                                    <div className="w-80 h-80 mb-4">
                                        <img src="./assets/images/s1.svg" alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2 mb-10 text-right" style={{ direction: 'rtl' }}>
                                        <div className="text-custom-lightgray text-right text-[0.9375rem] font-semibold leading-6">
                                            ولت بانک
                                        </div>
                                        <div className="text-white text-right font-alibaba text-[1.1875rem] font-bold leading-normal" style={{
                                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                                        }}>
                                            اپلیکیشن ولت‌بانک، <span className="font-normal">همیشه همراه تو</span>
                                        </div>
                                        <div className="text-custom-text-subtitle text-[0.8125rem] font-normal leading-[1.3125rem]" style={{
                                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                                        }}>
                                            محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر در ثبت سفارش‌ها.
                                            اپلیکیشن ولت‌بانک برای همه
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="">
                                    <div className="w-80 h-80 mb-4">
                                        <img src="./assets/images/s2.svg" alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2 mb-10 text-right" style={{ direction: 'rtl' }}>
                                        <div className="text-custom-lightgray text-right text-[0.9375rem] font-semibold leading-6">
                                            ولت بانک
                                        </div>
                                        <div className="text-white text-right font-alibaba text-[1.1875rem] font-bold leading-normal" style={{
                                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                                        }}>
                                            <span className="font-normal">
                                                {" "}
                                                مدیریت نقدینگی با مطمئن ترین اپلیکیشن مبادله طلا{" "}
                                            </span>
                                        </div>
                                        <div className="text-custom-text-subtitle text-[0.8125rem] font-normal leading-[1.3125rem]" style={{
                                            textShadow: '0px 0px 64px rgba(245, 245, 245, 0.06)'
                                        }}>
                                            با نصب اپلیکیشن، به راحتی در هر زمان و هر مکان به کیف پول،
                                            خرید و فروش ارز دیجیتال،
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            {/* Pagination bullets will be handled by Swiper JS */}
                        </div>
                    </div>
                    <div className="flex items-center gap-[0.675rem] mt-8">
                        <div className="nav-prev">
                            <button
                                id="prevBtn_starter"
                                className="w-[3.875rem] h-[3.875rem] rounded-[4rem] border-[1.148px] border-[#384673] bg-transparent flex items-center justify-center text-white"
                                style={{
                                    boxShadow: '0px 0px 57.407px 0px rgba(255, 255, 255, 0.12)'
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <path
                                        d="M19.5 12.5L5.5 12.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.5 6.5L5.5 12.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.5 18.5L5.5 12.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="nav-next">
                            <button
                                id="nextBtn_starter"
                                className="w-[3.875rem] h-[3.875rem] rounded-[4rem] bg-primary-blue text-white flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <path
                                        d="M5.5 12.5H19.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.5 18.5L19.5 12.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.5 6.5L19.5 12.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Starter