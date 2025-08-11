import Typography from "@mui/material/Typography";
import { useState } from "react";
const tabInfo = [
    {
        title: "قوانین مربوط به سرمایه‌گذاری طلا"
    },
    {
        title: "قوانین مربوط به اپلیکیشن"
    },
]
const Rules = () => {
    const [selectedTab, setSelectedTab] = useState(tabInfo[0])

    return (
        <>
            <div className="w-full mx-auto min-h-screen flex flex-col font-peyda text-xs rtl">
                <main className="flex-grow bg-[url('/images/main-lines-pattern.png')] bg-cover bg-center">
                    <div className="container flex flex-col gap-3 mb-3">
                        <section className="rules">
                            <div className="bg-primary-darker rounded-lg mb-3">
                                <div className="p-2">
                                    <nav className="w-full">
                                        <div
                                            className="flex justify-between overflow-x-auto scrollbar-hide"
                                        >
                                            {
                                                tabInfo.map((tab) => (
                                                    <button onClick={() => setSelectedTab(tab)} className={`${selectedTab == tab ? "bg-primary-blue" : "bg-transparent"} cursor-pointer text-neutral-200 px-3 py-2 rounded-md`}>
                                                        <Typography className="!font-peyda text-white text-nowrap" fontWeight='semibold' fontSize={9}>
                                                            {tab.title}
                                                        </Typography>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <div
                                className="fade show active"
                                tabIndex={0}
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="bg-primary-darker rounded-lg">
                                        <div className="p-[14px_12px]">
                                            <div className="text-white font-alibaba text-[15.36px] font-normal leading-normal mb-4">قوانین مربوط به فروش طلا</div>
                                            <div className="text-white">
                                                <section className="mb-6">
                                                    <div className="text-neutral-100 text-[10.8px] font-semibold leading-normal mb-3">
                                                            این پلتفرم براساس قوانین دولت جمهوری اسلامی ایران فعالیت می‌کند و به فراخور محصولات مختلف که در حوزه فعالیت آن ارائه می‌گردد. مجوزهای لازم توسط ارائه‌دهندگان محصولات خدمات مختلف:
                                                    </div>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2">قانون تجارت الکترونیک (مصوب 1382):</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
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
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2 mt-3">قانون حمایت از حقوق مصرف‌کنندگان:</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>ارائه فاکتور رسمی با ذکر جزئیات معامله</li>
                                                        <li>ضمانت اصالت کالا</li>
                                                        <li>مسئولیت فروشنده در قبال هرگونه تخلف</li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <div className="text-neutral-100 text-[10.8px] font-semibold leading-normal mb-3">
                                                        2. مقررات اختصاصی طلا و نقره
                                                    </div>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2">قانون نظام صنفی کشور:</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>نیاز به پروانه کسب معتبر برای فروش طلا و نقره</li>
                                                        <li>
                                                            رعایت عیار استاندارد (طلا: حداقل 18 عیار، نقره:
                                                            حداقل 84 درصد)
                                                        </li>
                                                        <li>نصب برچسب اصالت اتحادیه طلا و جواهر</li>
                                                    </ul>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2 mt-3">مقررات بانک مرکزی و اتحادیه صنف طلا و جواهر:</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
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
                                                    <div className="text-neutral-100 text-[10.8px] font-semibold leading-normal mb-3">3. مالیات و عوارض</div>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2">مالیات بر ارزش افزوده (9%):</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            اعمال مالیات بر قیمت طلا و نقره (به جز سکه بهار
                                                            آزادی)
                                                        </li>
                                                        <li>
                                                            معافیت مالیاتی برای خریدهای زیر 5 میلیون تومان (در
                                                            برخی شرایط)
                                                        </li>
                                                    </ul>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2 mt-3">عوارض شهرداری و صنفی:</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>پرداخت عوارض بر اساس ارزش معامله</li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <div className="text-neutral-100 text-[10.8px] font-semibold leading-normal mb-3">
                                                        4. حریم خصوصی و پرداخت الکترونیک
                                                    </div>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2">قانون جرایم رایانه‌ای:</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            محافظت از اطلاعات کاربران و ممنوعیت سوءاستفاده از
                                                            داده‌ها
                                                        </li>
                                                        <li>
                                                            الزام به استفاده از درگاه‌های پرداخت بانکی دارای
                                                            مجوز
                                                        </li>
                                                    </ul>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-2 mt-3">مقررات بانکی:</p>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            تطابق حساب فروشنده با هویت ثبت‌شده در سامانه‌های
                                                            مالیاتی
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <div className="text-neutral-100 text-[10.8px] font-semibold leading-normal mb-3">5. تحریم‌ها و ممنوعیت‌ها</div>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            ممنوعیت خرید و فروش طلا و نقره با ارزهای دیجیتال
                                                        </li>
                                                        <li>
                                                            ممنوعیت تبلیغات فریب‌دهنده در قیمت یا کیفیت کالا
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <div className="text-neutral-100 text-[10.8px] font-semibold leading-normal mb-3">6. ضمانت اجرا و جرایم</div>
                                                    <ul className="list-disc pr-4 text-neutral-200 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>تخلفات صنفی: پلمپ مغازه یا مسدودسازی اپلیکیشن</li>
                                                        <li>جریمه مالیاتی: در صورت عدم صدور فاکتور رسمی</li>
                                                        <li>مسئولیت کیفری: در صورت فروش جنس تقلبی</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <div className="text-neutral-100 text-[10.8px] font-semibold leading-normal mb-3">نتیجه‌گیری</div>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px] mb-3">
                                                        اپلیکیشن‌های فروش طلا و نقره باید مجوزهای لازم از
                                                        اتحادیه صنف طلا و جواهر، وزارت صنعت، معدن و تجارت و
                                                        سامانه‌های مالیاتی را دریافت کنند و تمام معاملات را
                                                        شفاف و مطابق قانون انجام دهند.
                                                    </p>
                                                    <p className="text-neutral-200 text-[9px] font-normal leading-[14.4px]">
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
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Rules;