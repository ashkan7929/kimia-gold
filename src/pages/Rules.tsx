const Rules = () => {
    return (
        <>
            <div className="w-full max-w-[375px] mx-auto bg-[#040320] min-h-screen flex flex-col font-peyda text-xs rtl">
                <header className="container">
                    <nav className="mt-4 mb-4 flex h-[54px] px-[15px] justify-between items-center bg-[#010048] rounded-[10px] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                        <div className="flex gap-1">
                            <div>
                                <button
                                    onClick={() => { }}
                                    className="bg-transparent flex w-[34px] h-[34px] justify-center items-center rounded-[19.27px] border-[0.704px] border-[#213163] shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
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
                            <div className="font-alibaba text-center text-[11px] font-bold leading-normal text-white">قوانین و مقررات</div>
                        </div>
                        <div>
                            <div>
                                <button className="bg-transparent flex w-[34px] h-[34px] justify-center items-center rounded-[19.27px] border-[0.704px] border-[#213163] shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
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

                <main className="flex-grow bg-[url('/images/main-lines-pattern.png')] bg-cover bg-center">
                    <div className="container flex flex-col gap-3 mb-3 px-4">
                        <section className="rules">
                            <div className="bg-[#010048] rounded-[10px] shadow-[0px_0px_91.921px_0px_rgba(0,0,0,0.08)] mb-3">
                                <div className="p-[14px_12px]">
                                    <nav className="tab-responsive">
                                        <div
                                            className="flex justify-between"
                                            id="nav-tab"
                                            role="tablist"
                                        >
                                            <button
                                                className="bg-[#2256FF] text-white px-3 py-2 rounded-[9px] text-[10.18px] font-semibold leading-normal"
                                                id="nav-1-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-1"
                                                aria-selected="true"
                                            >
                                                قوانین مربوط به خرید طلا
                                            </button>
                                            <button
                                                className="bg-transparent text-[#D4D4D4] px-3 py-2 rounded-[9px] text-[10.18px] font-semibold leading-normal"
                                                id="nav-2-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-2"
                                                aria-selected="false"
                                            >
                                                قوانین مربوط به فروش طلا
                                            </button>
                                            <button
                                                className="bg-transparent text-[#D4D4D4] px-3 py-2 rounded-[9px] text-[10.18px] font-semibold leading-normal"
                                                id="nav-3-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-3"
                                                aria-selected="false"
                                            >
                                                قوانین سرمایه گذاری
                                            </button>
                                            <button
                                                className="bg-transparent text-[#D4D4D4] px-3 py-2 rounded-[9px] text-[10.18px] font-semibold leading-normal"
                                                id="nav-4-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-4"
                                                aria-selected="false"
                                            >
                                                قوانین مربوط به خرید طلا
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-1"
                                    role="tabpanel"
                                    aria-labelledby="nav-1-tab"
                                    tabIndex={0}
                                >
                                    <div className="flex flex-col gap-2">
                                        <div className="bg-[#010048] rounded-[10px] shadow-[0px_0px_91.921px_0px_rgba(0,0,0,0.08)]">
                                            <div className="p-[14px_12px]">
                                                <div className="text-white font-alibaba text-[15.36px] font-normal leading-normal mb-4">قوانین مربوط به فروش طلا</div>
                                                <div className="text-white">
                                                    <section className="mb-6">
                                                        <div className="text-[#F8F8F8] text-[10.8px] font-semibold leading-normal mb-3">
                                                            1. قوانین عمومی تجارت الکترونیک
                                                        </div>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2">قانون تجارت الکترونیک (مصوب 1382):</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>رعایت حقوق مصرف‌کننده (ماده 32)</li>
                                                            <li>الزام به شفافیت در معاملات (ماده 34)</li>
                                                            <li>
                                                                ارائه اطلاعات کامل کالا (وزن، عیار، قیمت، هزینه‌های
                                                                جانبی)
                                                            </li>
                                                            <li>
                                                                امکان بازگرداندن کالا در صورت عدم تطابق با مشخصات
                                                                اعلامی (حق فسخ)
                                                            </li>
                                                        </ul>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2 mt-3">قانون حمایت از حقوق مصرف‌کنندگان:</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>ارائه فاکتور رسمی با ذکر جزئیات معامله</li>
                                                            <li>ضمانت اصالت کالا</li>
                                                            <li>مسئولیت فروشنده در قبال هرگونه تخلف</li>
                                                        </ul>
                                                    </section>

                                                    <section className="mb-6">
                                                        <div className="text-[#F8F8F8] text-[10.8px] font-semibold leading-normal mb-3">
                                                            2. مقررات اختصاصی طلا و نقره
                                                        </div>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2">قانون نظام صنفی کشور:</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>نیاز به پروانه کسب معتبر برای فروش طلا و نقره</li>
                                                            <li>
                                                                رعایت عیار استاندارد (طلا: حداقل 18 عیار، نقره:
                                                                حداقل 84 درصد)
                                                            </li>
                                                            <li>نصب برچسب اصالت اتحادیه طلا و جواهر</li>
                                                        </ul>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2 mt-3">مقررات بانک مرکزی و اتحادیه صنف طلا و جواهر:</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>
                                                                اعلام روزانه قیمت بر اساس نرخ جهانی و مالیات ارزش
                                                                افزوده
                                                            </li>
                                                            <li>ممنوعیت فروش اقساطی بدون مجوز بانک مرکزی</li>
                                                            <li>
                                                                الزام به درج شناسه یکتا (کد رهگیری) برای هر قطعه
                                                            </li>
                                                        </ul>
                                                    </section>

                                                    <section className="mb-6">
                                                        <div className="text-[#F8F8F8] text-[10.8px] font-semibold leading-normal mb-3">3. مالیات و عوارض</div>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2">مالیات بر ارزش افزوده (9%):</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>
                                                                اعمال مالیات بر قیمت طلا و نقره (به جز سکه بهار
                                                                آزادی)
                                                            </li>
                                                            <li>
                                                                معافیت مالیاتی برای خریدهای زیر 5 میلیون تومان (در
                                                                برخی شرایط)
                                                            </li>
                                                        </ul>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2 mt-3">عوارض شهرداری و صنفی:</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>پرداخت عوارض بر اساس ارزش معامله</li>
                                                        </ul>
                                                    </section>

                                                    <section className="mb-6">
                                                        <div className="text-[#F8F8F8] text-[10.8px] font-semibold leading-normal mb-3">
                                                            4. حریم خصوصی و پرداخت الکترونیک
                                                        </div>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2">قانون جرایم رایانه‌ای:</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>
                                                                محافظت از اطلاعات کاربران و ممنوعیت سوءاستفاده از
                                                                داده‌ها
                                                            </li>
                                                            <li>
                                                                الزام به استفاده از درگاه‌های پرداخت بانکی دارای
                                                                مجوز
                                                            </li>
                                                        </ul>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-2 mt-3">مقررات بانکی:</p>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>
                                                                تطابق حساب فروشنده با هویت ثبت‌شده در سامانه‌های
                                                                مالیاتی
                                                            </li>
                                                        </ul>
                                                    </section>

                                                    <section className="mb-6">
                                                        <div className="text-[#F8F8F8] text-[10.8px] font-semibold leading-normal mb-3">5. تحریم‌ها و ممنوعیت‌ها</div>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>
                                                                ممنوعیت خرید و فروش طلا و نقره با ارزهای دیجیتال
                                                            </li>
                                                            <li>
                                                                ممنوعیت تبلیغات فریب‌دهنده در قیمت یا کیفیت کالا
                                                            </li>
                                                        </ul>
                                                    </section>

                                                    <section className="mb-6">
                                                        <div className="text-[#F8F8F8] text-[10.8px] font-semibold leading-normal mb-3">6. ضمانت اجرا و جرایم</div>
                                                        <ul className="list-disc pr-4 text-[#EDEDED] text-[9px] font-normal leading-[14.4px] space-y-1">
                                                            <li>تخلفات صنفی: پلمپ مغازه یا مسدودسازی اپلیکیشن</li>
                                                            <li>جریمه مالیاتی: در صورت عدم صدور فاکتور رسمی</li>
                                                            <li>مسئولیت کیفری: در صورت فروش جنس تقلبی</li>
                                                        </ul>
                                                    </section>

                                                    <section>
                                                        <div className="text-[#F8F8F8] text-[10.8px] font-semibold leading-normal mb-3">نتیجه‌گیری</div>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px] mb-3">
                                                            اپلیکیشن‌های فروش طلا و نقره باید مجوزهای لازم از
                                                            اتحادیه صنف طلا و جواهر، وزارت صنعت، معدن و تجارت و
                                                            سامانه‌های مالیاتی را دریافت کنند و تمام معاملات را
                                                            شفاف و مطابق قانون انجام دهند.
                                                        </p>
                                                        <p className="text-[#EDEDED] text-[9px] font-normal leading-[14.4px]">
                                                            در صورت نیاز به جزئیات بیشتر، می‌توانید به قانون تجارت
                                                            الکترونیک، قانون مالیات بر ارزش افزوده و آیین‌نامه
                                                            اتحادیه صنف طلا و جواهر مراجعه کنید.
                                                        </p>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Rules;