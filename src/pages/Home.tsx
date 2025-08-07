import Header from '../components/Layout/Header';
import ServiceBtn from '../components/btns/ServiceBtn';
import BtnService from '../components/btns/BtnService';
import { useTranslation } from 'react-i18next';
import { FaEye, FaRegStar } from 'react-icons/fa';
import { RxCaretSort } from "react-icons/rx";
import { useState } from 'react';

const Home = () => {
    const datas = [
  {
    id: 1,
    name: "انس طلا",
    price: "۸۵۷,۸۱۴ تومان",
    usd: "$1,808",
    percent: "+۱.۵۵٪",
    label: "Anas gold"
  },
  {
    id: 2,
    name: "طلای ۱۸ عیار",
    label: "Anas gold",
    price: "۲,۴۰۷,۸۱۴ تومان",
    usd: "$62",
    percent: "+۰.۸۳٪",
  },
];
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

            {/* Middle Banner */}
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
            {/* price list section */}
            <section className="px-4 text-sm bg-primary-light font-peyda text-white">
           
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


            {datas.map((data) => (
                <div
                key={data.id}
                onClick={() => setSelectedId(data.id)}
                className={`rounded-lg p-3 flex justify-between items-center shadow-sm cursor-pointer mb-2 transition-colors duration-200 ${
                    selectedId === data.id ? "bg-primary-dark" : "bg-none"
                }`}
                >
            <span className="flex items-center gap-1">
                    <FaRegStar className=" w-4 h-4" />
                <img src='/images/gold.svg' alt='gold image' />
                <span className='flex flex-col gap-xsm mr-1'>
                     {data.name}
                    <br />
                     <span className="text-xs text-gray-300 leading-none">
                    {data.label}
                    </span>
                </span>

            </span>
                <span className="text-right">
                    <span className="text-white font-peyda text-12xl-custom">{data.price}</span>
                    <br />
                    <span className="text-xs text-gray-300 leading-none">
                    {data.usd}
                    </span>
                </span>
                <span className="text-green-400">{data.percent}</span>
                <FaEye className="text-gray-300" />
                </div>
            ))}
    </section>

        

        </div>
    );
};

export default Home;
