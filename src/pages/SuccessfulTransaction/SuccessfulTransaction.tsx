import Button from "../../components/Button/Button"

const SuccessfulTransaction = () => {
    return (
        <div className="w-full mx-auto" dir="rtl" lang="fa">
            <div className="w-full mx-auto bg-[#040320] min-h-screen flex flex-col">
                <header>
                    <div className="font-['Alibaba'] h-[11.5rem] w-full text-white text-[1.08331rem] font-bold leading-normal text-center flex items-center justify-center flex-col gap-[1.125rem] bg-green-500" style={{ textShadow: '0px 0px 46.222px rgba(245, 245, 245, 0.06)', boxShadow: 'inset 0px 0px 60px 0px rgb(0, 0, 0)' }}>
                        <div>
                            <img src="/images/successful.png" alt="" />
                        </div>
                        تراکنش با موفقیت انجام شد
                    </div>
                </header>

                <main className="flex-grow relative bg-cover bg-center pb-20" style={{ backgroundImage: 'url("../statics/assets/images/main-lines-pattern.png")' }}>
                    <div className="absolute z-[1] bottom-full w-full h-5" style={{ backgroundImage: 'linear-gradient(320deg, #040320 10px, transparent 10px), linear-gradient(40deg, #040320 10px, transparent 10px)', backgroundSize: '20px 20px', backgroundRepeat: 'repeat-x' }}></div>

                    <div className="container mx-auto px-4">
                        <div className="text-[#FAFAFA] text-center text-[0.9375rem] font-semibold leading-normal py-4 border-b border-[#292946]">مشخصات تراکنش</div>

                        <div className="p-[0.625rem]">
                            <div className="text-[#FAFAFA] text-center text-[0.88019rem] font-semibold leading-normal mb-4">خرید طلای 18 عیار</div>

                            <ul className="flex flex-col">
                                <li className="flex items-center justify-between py-3 border-b border-dashed border-[#303030]">
                                    <div className="text-neutral-300 text-sm font-medium leading-[140%]">تاریخ و زمان :</div>
                                    <div className="text-neutral-300 text-md font-bold leading-[140%]">15:25 1403/08/15</div>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-dashed border-[#303030]">
                                    <div className="text-neutral-300 text-sm font-medium leading-[140%]">
                                        مقدار <small>(به تومان)</small>
                                    </div>
                                    <div className="text-neutral-300 text-md font-bold leading-[140%]">2,500,000</div>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-dashed border-[#303030]">
                                    <div className="text-neutral-300 text-sm font-medium leading-[140%]">نوع تراکنش</div>
                                    <div className="text-neutral-300 text-md font-bold leading-[140%]">خرید طلای 18 عیار</div>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-dashed border-[#303030]">
                                    <div className="text-neutral-300 text-sm font-medium leading-[140%]">نوع واریز</div>
                                    <div className="text-neutral-300 text-md font-bold leading-[140%]">عادی</div>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-dashed border-[#303030]">
                                    <div className="text-neutral-300 text-sm font-medium leading-[140%]">شماره کارت</div>
                                    <div className="text-neutral-300 text-md font-bold leading-[140%]">6219861909432576</div>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-dashed border-[#303030]">
                                    <div className="text-neutral-300 text-sm font-medium leading-[140%]">کد رهگیری</div>
                                    <div className="text-neutral-300 text-md font-bold leading-[140%]">WLX-zd4Ak4xEM</div>
                                </li>
                                <li className="flex items-center justify-between py-3">
                                    <div className="text-neutral-300 text-sm font-medium leading-[140%]">وضعیت</div>
                                    <div className="text-neutral-300 text-md font-bold leading-[140%]">
                                        <span className="flex h-[1.6365rem] px-[0.99413rem] py-[0.35088rem] justify-center items-center gap-[0.58475rem] rounded-[0.3015rem] text-center text-[0.66675rem] font-bold leading-[120%] text-green-500 bg-green-900/20">موفق</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="flex gap-[0.875rem]">
                                <button className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold leading-[150%] text-center no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg bg-primary-darker border-primary-darker text-white w-full flex items-center justify-center gap-2 transition-all duration-150 ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
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
                                <button className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold leading-[150%] text-center no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg bg-primary-darker border-primary-darker text-white w-full flex items-center justify-center gap-2 transition-all duration-150 ease-in-out">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
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
                    <div className="fixed bottom-0 left-0 right-0 bg-primary border-custom-border p-4 mx-auto">
                        <Button className="bg-accent-orange text-white w-full text-sm">بازگشت</Button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default SuccessfulTransaction