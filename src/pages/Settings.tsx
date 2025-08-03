const Settings = () => {
    return (
        <>
            <div className="w-full max-w-[375px] mx-auto bg-primary min-h-screen flex flex-col">
                <header className="px-4">
                    <nav className="mt-4 mb-4 flex h-[3.375rem] px-[0.9375rem] justify-between items-center bg-primary-light rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                        <div className="flex gap-1">
                            <div>
                                <button
                                    onClick={() => { }}
                                    className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-custom-border shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.45833 8.125H4.16667C3.24583 8.125 2.5 7.37917 2.5 6.45833V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H6.45833C7.37917 2.5 8.125 3.24583 8.125 4.16667V6.45833C8.125 7.37917 7.37917 8.125 6.45833 8.125Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.8333 8.125H13.5417C12.6208 8.125 11.875 7.37917 11.875 6.45833V4.16667C11.875 3.24583 12.6208 2.5 13.5417 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V6.45833C17.5 7.37917 16.7542 8.125 15.8333 8.125Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.45833 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V13.5417C2.5 12.6208 3.24583 11.875 4.16667 11.875H6.45833C7.37917 11.875 8.125 12.6208 8.125 13.5417V15.8333C8.125 16.7542 7.37917 17.5 6.45833 17.5Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            opacity="0.5"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.8333 17.5H13.5417C12.6208 17.5 11.875 16.7542 11.875 15.8333V13.5417C11.875 12.6208 12.6208 11.875 13.5417 11.875H15.8333C16.7542 11.875 17.5 12.6208 17.5 13.5417V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="font-alibaba text-center text-xl-custom font-bold leading-normal text-white">تنظیمات</div>
                        </div>
                        <div>
                            <div>
                                <button className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-custom-border shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.3867 6.99992H2.61255M2.61255 6.99992L5.90287 3.70959M2.61255 6.99992L5.90287 10.2902"
                                            stroke="white"
                                            strokeWidth="0.944444"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>

                <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('./assets/images/main-lines-pattern.png')" }}>
                    <div className="px-4 flex flex-col gap-3 mb-3">
                        <div className="bg-custom-bg-card rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                            <div className="p-4 flex flex-col gap-4">
                                <div className="font-alibaba text-2xl-custom font-bold leading-normal text-white">مدیریت پیام ها</div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">اطلاع رسانی با ایمیل</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">اطلاع رسانی با پیامک</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-custom-bg-card rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                            <div className="p-4 flex flex-col gap-4">
                                <div className="font-alibaba text-2xl-custom font-bold leading-normal text-white">مدیریت معامله ها</div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">دریافت تایید برای ثبت سفارش</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">تایید با ایمیل کاربری</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">تایید دو مرحله ای پیامکی</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">دریافت تایید برای لغو سفارش</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-custom-bg-card rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                            <div className="p-4 flex flex-col gap-4">
                                <div className="font-alibaba text-2xl-custom font-bold leading-normal text-white">اپدیت ها</div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">اپدیت خودکار اپلیکیشن</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">اپدیت خرید ها موجود</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-micro font-semibold leading-normal text-white">اپدیت قیمت لحظه ای</div>
                                    <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
                                        <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full checked:bg-primary-blue checked:before:translate-x-[1.5rem]"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <div className="invisible opacity-0 transition-all duration-200 ease-in-out w-full max-w-[375px] flex flex-col overflow-hidden fixed inset-0 z-[1000] mx-auto min-h-screen">
                <div className="absolute right-0 left-0 w-full h-[8.5rem] bg-primary-blue filter blur-[30px] -top-4"></div>
                <div className="absolute right-0 left-0 w-full h-[8.5rem] bg-primary-blue filter blur-[30px] -bottom-4"></div>
                <div className="absolute inset-0 bg-[rgba(1,0,86,0.01)] backdrop-blur-[30px]">
                    <nav className="mt-4 mb-4 flex h-[3.375rem] px-[0.9375rem] justify-between items-center">
                        <div>
                            <button className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.63px] border-[#B7B7B7] shadow-[0px_0px_31.481px_0px_rgba(255,255,255,0.12)]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.45833 8.125H4.16667C3.24583 8.125 2.5 7.37917 2.5 6.45833V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H6.45833C7.37917 2.5 8.125 3.24583 8.125 4.16667V6.45833C8.125 7.37917 7.37917 8.125 6.45833 8.125Z"
                                        stroke="#F3F3F3"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.8333 8.125H13.5417C12.6208 8.125 11.875 7.37917 11.875 6.45833V4.16667C11.875 3.24583 12.6208 2.5 13.5417 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V6.45833C17.5 7.37917 16.7542 8.125 15.8333 8.125Z"
                                        stroke="#F3F3F3"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.45833 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V13.5417C2.5 12.6208 3.24583 11.875 4.16667 11.875H6.45833C7.37917 11.875 8.125 12.6208 8.125 13.5417V15.8333C8.125 16.7542 7.37917 17.5 6.45833 17.5Z"
                                        stroke="#F3F3F3"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        opacity="0.5"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.8333 17.5H13.5417C12.6208 17.5 11.875 16.7542 11.875 15.8333V13.5417C11.875 12.6208 12.6208 11.875 13.5417 11.875H15.8333C16.7542 11.875 17.5 12.6208 17.5 13.5417V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z"
                                        stroke="#F3F3F3"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <div className="w-[34px] h-[34px]">
                                <img
                                    src="./assets/images/logo/logo.png"
                                    alt="logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => { }}
                                className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.63px] border-[#B7B7B7] shadow-[0px_0px_31.481px_0px_rgba(255,255,255,0.12)]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M11.3867 6.99992H2.61255M2.61255 6.99992L5.90287 3.70959M2.61255 6.99992L5.90287 10.2902"
                                        stroke="white"
                                        strokeWidth="0.944444"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>

                    <div className="px-4 flex flex-col gap-2 flex-grow overflow-auto">
                        <div className="bg-custom-bg-card rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-2.5 rounded bg-accent-orange">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="19"
                                                height="19"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                            >
                                                <circle
                                                    cx="9.49992"
                                                    cy="4.75004"
                                                    r="3.16667"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                />
                                                <ellipse
                                                    opacity="0.5"
                                                    cx="9.49992"
                                                    cy="13.4583"
                                                    rx="5.54167"
                                                    ry="3.16667"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-alibaba text-2xl-custom font-bold leading-[150%] text-white">اطلاعات کاربری</div>
                                            <div className="text-custom-gray text-lg-custom font-normal leading-[150%]">در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.</div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                        >
                                            <path
                                                d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                                stroke="#D8D8D8"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-custom-bg-card rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-2.5 rounded bg-accent-orange">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="19"
                                                height="19"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M14.5896 13.4583H4.41038C3.28621 13.4583 2.375 12.5471 2.375 11.423V4.41037C2.375 3.28621 3.28621 2.375 4.41038 2.375H14.5888C15.7138 2.375 16.625 3.28621 16.625 4.41037V11.4222C16.625 12.5471 15.7138 13.4583 14.5896 13.4583Z"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.6653 7.42192V6.35475C10.6653 5.68737 10.1238 5.14587 9.45643 5.14587V5.14587C8.78906 5.14587 8.24756 5.68737 8.24756 6.35475V7.42192"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.8634 7.42346H8.13688C7.69988 7.42346 7.34521 7.77813 7.34521 8.21513V9.89663C7.34521 10.3336 7.69988 10.6883 8.13688 10.6883H10.8634C11.3004 10.6883 11.655 10.3336 11.655 9.89663V8.21513C11.655 7.77813 11.3012 7.42346 10.8634 7.42346V7.42346Z"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M11.0834 13.4584L11.4792 16.625"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M7.91675 13.4584L7.52091 16.625"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M6.44385 16.625H12.5555"
                                                    stroke="white"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-alibaba text-2xl-custom font-bold leading-[150%] text-white">قوانین و مقررات</div>
                                            <div className="text-custom-gray text-lg-custom font-normal leading-[150%]">در این بخش میتوانید قوانین و مقررات را مشاهده کنید.</div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                        >
                                            <path
                                                d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                                stroke="#D8D8D8"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-custom-bg-card rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-2.5 rounded bg-accent-danger text-[rgb(255,190,190)]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="19"
                                                height="19"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.59488 13.4607C2.83171 12.327 2.37492 10.9701 2.37492 9.5C2.37492 5.56462 5.56454 2.375 9.49992 2.375C13.4353 2.375 16.6249 5.56462 16.6249 9.5C16.6249 13.4354 13.4353 16.625 9.49992 16.625C8.29184 16.625 7.15659 16.3186 6.15909 15.7882C5.0935 16.3566 3.88463 16.6915 2.59342 16.6915C2.24984 16.6915 1.91496 16.6606 1.58325 16.6171C2.51188 15.7724 3.21671 14.6935 3.59488 13.4607Z"
                                                    stroke="#FFBEBE"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M3.16659 9.5H11.0833M11.0833 9.5L8.70825 7.125M11.0833 9.5L8.70825 11.875"
                                                    stroke="#FFBEBE"
                                                    strokeWidth="1.1875"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-alibaba text-2xl-custom font-bold leading-[150%] text-white">خروج از حساب کاربری</div>
                                            <div className="text-custom-gray text-lg-custom font-normal leading-[150%]">در این بخش میتوانید قوانین و مقررات را مشاهده کنید.</div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                        >
                                            <path
                                                d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                                stroke="#D8D8D8"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-24 relative z-10">
                        <div className="absolute bottom-4 left-0 w-[4.0625rem] h-[2.4375rem] flex items-center justify-start pr-[0.2rem] rounded-r-[1.25rem] bg-custom-backdrop">
                            <button className="border-0 outline-0 flex w-[2.125rem] h-[2.125rem] justify-center items-center gap-2.5 flex-shrink-0 rounded-full bg-accent-orange">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20V20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20V20C13.875 20.69 13.315 21.25 12.625 21.25Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings