import Header from '../components/Layout/Header';
import ServiceBtn from '../components/btns/ServiceBtn';
import BtnService from '../components/btns/BtnService';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#0B0E2F] text-white font-peyda max-w-wide mx-auto">
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
        </div>
    );
};

export default Home;
