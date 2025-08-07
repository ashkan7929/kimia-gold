import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaRegStar } from 'react-icons/fa';
import { RxCaretSort } from 'react-icons/rx';

import Header from '../components/Layout/Header';
import ServiceBtn from '../components/btns/ServiceBtn';
import BtnService from '../components/btns/BtnService';

import { datas } from '../data/data';
import { FaSortUp } from 'react-icons/fa6';
import BtnNews from '../components/btns/BtnNews';
import { Footer } from '../components/Layout/Footer';

const Home = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-custom-bg-mainBg text-white font-peyda max-w-wide mx-auto">
            <Header />

            {/* Welcome Section */}
            <section className="p-4">
                <div className="bg-primary-light rounded-lg px-8 shadow-xl shadow-black/10 flex justify-between items-center flex-row gap-8">
                    <div
                        className="flex flex-col"
                        style={{
                            gap: '0.55375rem',
                            marginBottom: '1.504375rem',
                            marginTop: '1.504375rem',
                        }}
                    >
                        <h2
                            className="text-right text-white font-alibaba font-bold"
                            style={{ fontSize: '0.7394375rem' }}
                        >
                            حجت بیدانی <span className="font-normal">خوش آمدید</span>
                        </h2>
                        <span className="text-custom-lightgray text-right font-peyda font-medium text-sm-custom">
                            به اپلیکیشن کیمیاگری خوش آمدید، خدمات موردنظر خود را انتخاب کنید
                        </span>
                    </div>
                    <img src="/images/welcome.svg" alt="welcome" />
                </div>
            </section>

            {/* Banner */}
            <section className="px-4">
                <div
                    className="p-6 text-center bg-servicePatern shrink-0 flex flex-col items-center"
                    style={{
                        borderRadius: '0.7834375rem',
                        boxShadow: '0 0 91.921px 0 rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <h2 className="text-white font-alibaba font-bold leading-normal not-italic text-10xl-custom">
                        صفحه کیمیاگری
                    </h2>
                    <p className="mb-4 text-white font-normal text-center font-peyda text-9xl-custom mt-1.5">
                        محیط کاربری ساده، امنیت بالا و سرعت بی‌نظیر
                    </p>
                    <ServiceBtn type="service" text={t('service')} />
                </div>
            </section>
            {/* Services Section */}
            <section className="px-4 py-4 grid grid-cols-3 gap-1 text-xs text-center">
                <BtnService
                    label={t('services.marketInsight.label')}
                    icon={t('services.marketInsight.icon')}
                />
                <BtnService
                    label={t('services.sellGold.label')}
                    icon={t('services.sellGold.icon')}
                />
                <BtnService
                    label={t('services.receiveService.label')}
                    icon={t('services.receiveService.icon')}
                />
            </section>
            <section className="py-4 bg-primary-light font-peyda text-white mx-3">
                <div className="px-4">
                    {/* Header row */}
                    <div className="flex items-center justify-between px-2 bg-primary-darker text-gray-300 py-2 rounded-md mb-2 text-sm">
                        <span className="flex items-center gap-1">
                            <FaRegStar className="w-4 h-4" />
                            نام
                            <RxCaretSort className="w-4 h-4" />
                        </span>
                        <span className="flex items-center gap-1">
                            قیمت
                            <RxCaretSort className="w-4 h-4" />
                        </span>
                        <span className="flex items-center gap-1 text-xs">
                            ۲۴H
                            <RxCaretSort className="w-4 h-4" />
                        </span>
                        <span className="text-xs">مشاهده</span>
                    </div>

                    {/* Data list */}
                    <div className="flex flex-col gap-2">
                        {datas.map(data => (
                            <div
                                key={data.id}
                                onClick={() => setSelectedId(data.id)}
                                className={`w-full rounded-lg p-3 flex justify-between items-center shadow-sm cursor-pointer transition-colors duration-200 ${
                                    selectedId === data.id ? 'bg-primary-dark' : 'bg-none'
                                }`}
                            >
                                <span className="flex items-center gap-1">
                                    <FaRegStar className="w-4 h-4" />
                                    <img src="/images/gold.svg" alt="gold image" />
                                    <span className="flex flex-col gap-xsm mr-1">
                                        {data.name}
                                        <br />
                                        <span className="text-14xl-custom text-custom-text-muted leading-none">
                                            {data.label}
                                        </span>
                                    </span>
                                </span>
                                <span className="text-right">
                                    <span className="text-white font-peyda text-12xl-custom">
                                        {data.price}
                                    </span>
                                    <br />
                                    <span className="text-15xl-custom text-custom-text-muted leading-none">
                                        {data.usd}
                                    </span>
                                </span>
                                <span
                                    className="flex p-1 gap-2 items-center text-accent-success rounded font-peyda text-right text-12xl-custom leading-normal"
                                    style={{ background: 'rgba(162, 230, 151, 0.20)' }}
                                >
                                    {data.percent}
                                    <FaSortUp />
                                </span>
                                <FaEye className="text-gray-300 w-4 h-4" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* list news */}
            <section className="p-1 bg-primary-light rounded-xl text-white mt-5 mx-3">
                <div className="px-4 grid grid-cols-3 gap-2 text-xs text-center">
                    <BtnNews
                        label={t('newsList.campaign.label')}
                        icon={t('newsList.campaign.icon')}
                    />
                    <BtnNews
                        label={t('newsList.analyst.label')}
                        icon={t('newsList.analyst.icon')}
                    />
                    <BtnNews label={t('newsList.news.label')} icon={t('newsList.news.icon')} />
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
};

export default Home;
