const SuccessfulTransaction = () => {
    return (
        <>
            <div className="w-full max-w-[375px] mx-auto bg-[#040320] min-h-screen flex flex-col">
                <header>
                    <div className="flex items-center justify-center gap-4 p-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-sm rounded-lg mx-4 mt-4">
                        <div>
                            <img src="./assets/images/successful.png" alt="" className="w-6 h-6" />
                        </div>
                        تراکنش با موفقیت انجام شد
                    </div>
                </header>
                <main className="flex-1 relative" style={{ backgroundImage: 'url("./assets/images/main-lines-pattern.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0" />
                    <div className="px-4 py-6 relative z-10">
                        <div className="text-white text-lg font-semibold mb-6 text-center">مشخصات تراکنش</div>
                        <div className="bg-[#010048] rounded-lg p-4 shadow-lg">
                            <div className="text-white text-base font-semibold mb-4 text-center">خرید طلای 18 عیار</div>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">تاریخ و زمان :</div>
                                    <div className="text-white text-xs font-medium">15:25 1403/08/15</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">
                                        مقدار <small className="text-xs">(به تومان)</small>
                                    </div>
                                    <div className="text-white text-xs font-medium">2,500,000</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">نوع تراکنش</div>
                                    <div className="text-white text-xs font-medium">خرید طلای 18 عیار</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">نوع واریز</div>
                                    <div className="text-white text-xs font-medium">عادی</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">شماره کارت</div>
                                    <div className="text-white text-xs font-medium">6219861909432576</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">کد رهگیری</div>
                                    <div className="text-white text-xs font-medium">WLX-zd4Ak4xEM</div>
                                </li>
                                <li className="flex justify-between items-center py-2">
                                    <div className="text-gray-300 text-xs font-medium">وضعیت</div>
                                    <div className="text-white text-xs font-medium">
                                        <span className="inline-flex justify-center items-center px-2 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-semibold">موفق</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#090088] text-white text-xs font-semibold rounded-lg hover:bg-[#0a0099] transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={21}
                                        height={21}
                                        viewBox="0 0 21 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.37706 8.92769C8.245 9.79563 8.245 11.2028 7.37706 12.0708C6.50911 12.9387 5.10191 12.9387 4.23396 12.0708C3.36602 11.2028 3.36602 9.79563 4.23396 8.92769C5.10191 8.05975 6.50911 8.05975 7.37706 8.92769"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.2657 4.48433C17.1337 5.35227 17.1337 6.75948 16.2657 7.62742C15.3978 8.49536 13.9906 8.49536 13.1226 7.62742C12.2547 6.75948 12.2547 5.35227 13.1226 4.48433C13.9906 3.61639 15.3978 3.61639 16.2657 4.48433"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.2657 13.3726C17.1337 14.2406 17.1337 15.6478 16.2657 16.5157C15.3978 17.3837 13.9906 17.3837 13.1226 16.5157C12.2547 15.6478 12.2547 14.2406 13.1226 13.3726C13.9906 12.5047 15.3978 12.5047 16.2657 13.3726"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.7832 9.50805L12.7165 7.04138"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.7832 11.4912L12.7165 13.9579"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    اشتراک رسید
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#090088] text-white text-xs font-semibold rounded-lg hover:bg-[#0a0099] transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={21}
                                        height={21}
                                        viewBox="0 0 21 21"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.416 15.5H6.58268C5.66185 15.5 4.91602 14.7542 4.91602 13.8333V4.66667C4.91602 3.74583 5.66185 3 6.58268 3H17.416C18.3368 3 19.0827 3.74583 19.0827 4.66667V13.8333C19.0827 14.7542 18.3368 15.5 17.416 15.5Z"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.0793 17.9995H4.08268C3.16185 17.9995 2.41602 17.2537 2.41602 16.3328V7.49866"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.2045 6.18361C10.747 6.72611 10.747 7.60569 10.2045 8.14819C9.66196 8.69069 8.78239 8.69069 8.23989 8.14819C7.69738 7.60568 7.69738 6.72611 8.23989 6.18361C8.78239 5.64111 9.66196 5.64111 10.2045 6.18361"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19.083 12.027L16.2613 9.76954C15.9022 9.48204 15.3772 9.54037 15.0897 9.89954L12.9463 12.5787C12.6588 12.9379 12.1347 12.9962 11.7747 12.7087L10.6922 11.8429C10.338 11.5595 9.82217 11.6112 9.53134 11.9604L6.58301 15.4995"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    ذخیره در گالری
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="fixed bottom-4 left-4 right-4 max-w-[375px] mx-auto px-4">
                        <button className="w-full py-3 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">بازگشت</button>
                    </div>
                </footer>
            </div>
            <div className="w-full max-w-[375px] mx-auto bg-[#040320] min-h-screen flex flex-col">
                <header>
                    <div className="flex items-center justify-center gap-4 p-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-sm rounded-lg mx-4 mt-4">
                        <div>
                            <img src="./assets/images/successful.png" alt="" className="w-6 h-6" />
                        </div>
                        تراکنش با موفقیت انجام شد
                    </div>
                </header>
                <main className="flex-1 relative" style={{ backgroundImage: 'url("./assets/images/main-lines-pattern.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0" />
                    <div className="px-4 py-6 relative z-10">
                        <div className="text-white text-lg font-semibold mb-6 text-center">مشخصات تراکنش</div>
                        <div className="bg-[#010048] rounded-lg p-4 shadow-lg">
                            <div className="text-white text-base font-semibold mb-4 text-center">خرید طلای 18 عیار</div>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">تاریخ و زمان :</div>
                                    <div className="text-white text-xs font-medium">15:25 1403/08/15</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">
                                        مقدار <small className="text-xs">(به تومان)</small>
                                    </div>
                                    <div className="text-white text-xs font-medium">2,500,000</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">نوع تراکنش</div>
                                    <div className="text-white text-xs font-medium">خرید طلای 18 عیار</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">نوع واریز</div>
                                    <div className="text-white text-xs font-medium">عادی</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">شماره کارت</div>
                                    <div className="text-white text-xs font-medium">6219861909432576</div>
                                </li>
                                <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600">
                                    <div className="text-gray-300 text-xs font-medium">کد رهگیری</div>
                                    <div className="text-white text-xs font-medium">WLX-zd4Ak4xEM</div>
                                </li>
                                <li className="flex justify-between items-center py-2">
                                    <div className="text-gray-300 text-xs font-medium">وضعیت</div>
                                    <div className="text-white text-xs font-medium">
                                        <span className="inline-flex justify-center items-center px-2 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-semibold">موفق</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#090088] text-white text-xs font-semibold rounded-lg hover:bg-[#0a0099] transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={21}
                                        height={21}
                                        viewBox="0 0 21 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.37706 8.92769C8.245 9.79563 8.245 11.2028 7.37706 12.0708C6.50911 12.9387 5.10191 12.9387 4.23396 12.0708C3.36602 11.2028 3.36602 9.79563 4.23396 8.92769C5.10191 8.05975 6.50911 8.05975 7.37706 8.92769"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.2657 4.48433C17.1337 5.35227 17.1337 6.75948 16.2657 7.62742C15.3978 8.49536 13.9906 8.49536 13.1226 7.62742C12.2547 6.75948 12.2547 5.35227 13.1226 4.48433C13.9906 3.61639 15.3978 3.61639 16.2657 4.48433"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.2657 13.3726C17.1337 14.2406 17.1337 15.6478 16.2657 16.5157C15.3978 17.3837 13.9906 17.3837 13.1226 16.5157C12.2547 15.6478 12.2547 14.2406 13.1226 13.3726C13.9906 12.5047 15.3978 12.5047 16.2657 13.3726"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.7832 9.50805L12.7165 7.04138"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.7832 11.4912L12.7165 13.9579"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    اشتراک رسید
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#090088] text-white text-xs font-semibold rounded-lg hover:bg-[#0a0099] transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={21}
                                        height={21}
                                        viewBox="0 0 21 21"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.416 15.5H6.58268C5.66185 15.5 4.91602 14.7542 4.91602 13.8333V4.66667C4.91602 3.74583 5.66185 3 6.58268 3H17.416C18.3368 3 19.0827 3.74583 19.0827 4.66667V13.8333C19.0827 14.7542 18.3368 15.5 17.416 15.5Z"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.0793 17.9995H4.08268C3.16185 17.9995 2.41602 17.2537 2.41602 16.3328V7.49866"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.2045 6.18361C10.747 6.72611 10.747 7.60569 10.2045 8.14819C9.66196 8.69069 8.78239 8.69069 8.23989 8.14819C7.69738 7.60568 7.69738 6.72611 8.23989 6.18361C8.78239 5.64111 9.66196 5.64111 10.2045 6.18361"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19.083 12.027L16.2613 9.76954C15.9022 9.48204 15.3772 9.54037 15.0897 9.89954L12.9463 12.5787C12.6588 12.9379 12.1347 12.9962 11.7747 12.7087L10.6922 11.8429C10.338 11.5595 9.82217 11.6112 9.53134 11.9604L6.58301 15.4995"
                                            stroke="white"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    ذخیره در گالری
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="fixed bottom-4 left-4 right-4 max-w-[375px] mx-auto px-4">
                        <button className="w-full py-3 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">بازگشت</button>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default SuccessfulTransaction