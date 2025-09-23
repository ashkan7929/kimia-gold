import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
const tabInfo = [
    {
        id: 1,
        title: 'قوانین مربوط به سرمایه‌گذاری طلا',
    },
    {
        id: 2,
        title: 'قوانین مربوط به باشگاه وِم',
    },
];
const Rules = () => {
    const [selectedTab, setSelectedTab] = useState(tabInfo[0]);
    const { t } = useTranslation();
    return (
        <>
            <div
                className="w-full mx-auto min-h-screen flex flex-col font-peyda text-xs rtl"
                style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
            >
                <main className="flex-grow bg-[url('/images/main-lines-pattern.png')] bg-cover bg-center">
                    <div className="container flex flex-col gap-3 mb-3">
                        <section className="rules">
                            <div className="dark:bg-black bg-white rounded-lg mb-3">
                                <div className="p-2">
                                    <nav className="w-full">
                                        <div className="flex justify-between overflow-x-auto scrollbar-hide !font-peyda text-white">
                                            {tabInfo.map(tab => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setSelectedTab(tab)}
                                                    className={` ${
                                                        selectedTab === tab
                                                            ? 'bg-primary-blue dark:bg-gray-800 text-white'
                                                            : 'bg-transparent'
                                                    } cursor-pointer group dark:text-neutral-200 text-light-text-color px-6 py-2 rounded-md !font-peyda`}
                                                >
                                                    <Typography
                                                        className="!font-peyda text-nowrap group-focus:text-white"
                                                        fontWeight="semibold"
                                                        fontSize={10}
                                                    >
                                                        {tab.title}
                                                    </Typography>
                                                </button>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <div className="fade show active" tabIndex={0}>
                                <div className="flex flex-col gap-2">
                                    <div className="dark:bg-black bg-light-primary-darker rounded-lg">
                                        <div className="p-[14px_12px]">
                                            <div className="dark:text-text-color text-light-text-color font-alibaba text-[15.36px] font-normal leading-normal mb-4">
                                                 {t('rulePage.title')}
                                            </div>
                                            <div className="text-white">
                                                <section className="mb-6">
                                                    <div className="dark:text-neutral-100 text-neutral-900 text-[10.8px] font-normal leading-normal mb-3">
                                                        {t('rulePage.des1')}

                                                    </div>
                                                    <h3 className="dark:text-neutral-100 text-neutral-900 text-[10.8px] font-semibold leading-normal mb-3">
                                                        {t('rulePage.des2')}

                                                    </h3>
                                                    <ul className="list-disc pr-4 dark:text-neutral-100 text-neutral-900 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>{t('rulePage.desList2.1')}</li>

                                                        <li>
                                                            {t('rulePage.desList2.2')}
                                                        </li>
                                                        <li>
                                                            {t('rulePage.desList2.3')}
                                                        </li>
                                                        <li>
                                                         {t('rulePage.desList2.4')}
                                                        </li>
                                                        <li>
                                                             {t('rulePage.desList2.5')}
                                                        </li>
                                                        <li>
                                                           {t('rulePage.desList2.6')}

                                                        </li>
                                                        <li>
                                                           {t('rulePage.desList2.7')}

                                                        </li>
                                                        <li>
                                                              {t('rulePage.desList2.8')}                                                            
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <h3 className="dark:text-neutral-100 text-neutral-900 text-[10.8px] font-semibold leading-normal mb-3">
                                                        2. مقررات اختصاصی طلا و نقره
                                                    </h3>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] mb-2">
                                                        قانون نظام صنفی کشور:
                                                    </p>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            نیاز به پروانه کسب معتبر برای فروش طلا و
                                                            نقره
                                                        </li>
                                                        <li>
                                                            رعایت عیار استاندارد (طلا: حداقل 18
                                                            عیار، نقره: حداقل 84 درصد)
                                                        </li>
                                                        <li>نصب برچسب اصالت اتحادیه طلا و جواهر</li>
                                                    </ul>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] mb-2 mt-3">
                                                        مقررات بانک مرکزی و اتحادیه صنف طلا و جواهر:
                                                    </p>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            اعلام روزانه قیمت براساس نرخ جهانی و
                                                            مالیات ارزش افزوده
                                                        </li>
                                                        <li>
                                                            ممنوعیت فروش اقساطی بدون مجوز بانک مرکزی
                                                        </li>
                                                        <li>
                                                            الزام به درج شناسه یکتا (کد رهگیری) برای
                                                            هر قطعه
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <h3 className="dark:text-neutral-100 text-neutral-900 text-[10.8px] font-semibold leading-normal mb-3">
                                                        3. مالیات و عوارض
                                                    </h3>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] mb-2">
                                                        مالیات بر ارزش افزوده (9%):
                                                    </p>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            اعمال مالیات بر قیمت طلا و نقره (به جز
                                                            سکه بهار آزادی)
                                                        </li>
                                                        <li>
                                                            معافیت مالیاتی برای خریدهای زیر 5 میلیون
                                                            تومان (در برخی شرایط)
                                                        </li>
                                                    </ul>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] mb-2 mt-3">
                                                        عوارض شهرداری و صنفی:
                                                    </p>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>پرداخت عوارض بر اساس ارزش معامله</li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <div className="dark:text-neutral-100 text-neutral-900 text-[10.8px] font-semibold leading-normal mb-3">
                                                        4. رعایت محرمانگی و حریم خصوصی و پرداخت
                                                        الکترونیک
                                                    </div>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] mb-2">
                                                        قانون جرایم رایانه‌ای:
                                                    </p>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            محافظت از اطلاعات کاربران و ممنوعیت
                                                            سوءاستفاده از داده‌ها
                                                        </li>
                                                        <li>
                                                            الزام به استفاده از درگاه‌های پرداخت
                                                            بانکی دارای مجوز
                                                        </li>
                                                    </ul>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] mb-2 mt-3">
                                                        مقررات بانکی:
                                                    </p>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            تطابق حساب فروشنده با هویت ثبت‌شده در
                                                            سامانه‌های مالیاتی
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <h3 className="text-neutral-100 light:text-neutral-900 text-[10.8px] font-semibold leading-normal mb-3">
                                                        5. تحریم‌ها و ممنوعیت‌ها
                                                    </h3>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            ممنوعیت خرید و فروش طلا و نقره با ارزهای
                                                            دیجیتال
                                                        </li>
                                                        <li>
                                                            ممنوعیت تبلیغات فریب‌دهنده در قیمت یا
                                                            کیفیت کالا
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section className="mb-6">
                                                    <h3 className="dark:text-neutral-100 text-neutral-900 text-[10.8px] font-semibold leading-normal mb-3">
                                                        6. ضمانت اجرا و جرایم
                                                    </h3>
                                                    <ul className="list-disc pr-4 dark:text-neutral-200 text-neutral-800text-[9px] font-normal leading-[14.4px] space-y-1">
                                                        <li>
                                                            تخلفات صنفی: پلمپ مغازه یا مسدودسازی
                                                            اپلیکیشن
                                                        </li>
                                                        <li>
                                                            جریمه مالیاتی: در صورت عدم صدور فاکتور
                                                            رسمی
                                                        </li>
                                                        <li>
                                                            مسئولیت کیفری: در صورت کلاه‌برداری، جلب
                                                            و فروش جنس تقلبی
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h2 className="text-neutral-100 light:text-neutral-900 text-[10.8px] font-semibold leading-normal mb-3">
                                                        نتیجه‌گیری
                                                    </h2>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px] mb-3">
                                                        اپلیکیشن‌های فروش طلا و نقره باید مجوزهای
                                                        لازم از اتحادیه صنف طلا و جواهر، وزارت صنعت،
                                                        معدن و تجارت و سامانه‌های مالیاتی را دریافت
                                                        کنند و تمام معاملات را شفاف و مطابق قانون
                                                        انجام دهند.
                                                    </p>
                                                    <p className="dark:text-neutral-200 text-neutral-800 text-[9px] font-normal leading-[14.4px]">
                                                        در صورت نیاز به جزئیات بیشتر، می‌توانید به
                                                        قانون تجارت الکترونیک، قانون مالیات بر ارزش
                                                        افزوده و آیین‌نامه اتحادیه صنف طلا و جواهر و
                                                        سایر آیین‌نامه و مقررات مربوطه مراجعه کنید.
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
