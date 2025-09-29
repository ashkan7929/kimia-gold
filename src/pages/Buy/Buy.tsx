import { Disclosure, Transition } from '@headlessui/react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
// import Button from '../../components/Button/Button';
import '../../fonts.css';
import '../../assets/lib/Swiper/swiper-bundle.min.css';
import OptionSelect from '../../components/Inputs/OptionSelect';
import { useTranslation } from 'react-i18next';
import BottomNav from '../../layouts/BottomNav';
import { useTheme } from '../../contexts/ThemeContext';
import tomanBlack from '../../assets/images/blackToman.svg';
import { Button } from '@mui/material';

const tabInfo = [{ title: 'خرید' }, { title: 'فروش' }];

const Buy = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [weight, setWeight] = useState<number | ''>('');
    const goldPrice = 7496400;
    const [selectedTab, setSelectedTab] = useState(tabInfo[0]);

    const gramOptions = Array.from({ length: 10 }, (_, i) => ({
        value: i + 1,
        label: `مقدار ${i + 1} گرم`,
    }));

    const handleWeight: React.ChangeEventHandler<HTMLSelectElement> = e => {
        const number = e.currentTarget.value;
        setWeight(number === 'انتخاب کنید' ? '' : Number(number));
    };
    const price = typeof weight === 'number' ? weight * goldPrice : 0;
    const priceItem = price ? price.toLocaleString('fa-IR') : '—';

    return (
        <div className="min-h-screen !font-peyda text-light-text-color dark:text-white bg-white dark:bg-gray-900">
            <main className="flex-1">
                <div className="container mx-auto mb-3 flex flex-col gap-3">
                    <section>
                        <Disclosure as="div">
                            <div className="w-full rounded-lg bg-white dark:bg-black p-1 transition-all duration-700 ease-out">
                                <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between p-4">
                                    <div className="flex w-full items-center justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-100">
                                                <img
                                                    src="/images/gold.png"
                                                    alt=""
                                                    className="h-5 w-5 object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1 text-start">
                                                <Typography
                                                    className="!font-peyda text-light-text-color dark:text-white"
                                                    fontSize={10}
                                                >
                                                    طلای 18 عیار
                                                </Typography>
                                                <Typography
                                                    className="!font-peyda text-light-text-color dark:text-white"
                                                    fontSize={9}
                                                >
                                                    Anas gold
                                                </Typography>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col items-end gap-1">
                                                <Typography
                                                    className="!font-peyda text-neutral-700 dark:text-neutral-300"
                                                    fontWeight="bold"
                                                    fontSize={12}
                                                >
                                                    قیمت هر گرم
                                                </Typography>
                                                <div className="flex items-center gap-1">
                                                    <Typography
                                                        className="!font-peyda text-light-text-color dark:text-text-color"
                                                        fontWeight="bold"
                                                        fontSize={12}
                                                    >
                                                        {goldPrice}
                                                    </Typography>
                                                    {isDark ? (
                                                        <img
                                                            alt="toman"
                                                            src="/images/toman.svg"
                                                            width={10}
                                                            height={10}
                                                        />
                                                    ) : (
                                                        <img
                                                            alt="toman"
                                                            src={tomanBlack}
                                                            width={10}
                                                            height={10}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Disclosure.Button>

                                <Transition
                                    enter="transition transition-[max-height] duration-500 ease-in"
                                    enterFrom="transform max-h-0"
                                    enterTo="transform max-h-[200vh]"
                                    leave="transition transition-[max-height] duration-500 ease-out"
                                    leaveFrom="transform max-h-screen"
                                    leaveTo="transform max-h-0"
                                >
                                    <Disclosure.Panel as="div" className="overflow-hidden">
                                        <div className="flex flex-col gap-3 p-4"></div>
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        </Disclosure>
                    </section>

                    <section>
                        <div className="rounded-lg bg-white dark:bg-black p-4">
                            <div className="rounded-3xl bg-gray-200 dark:bg-gray-800">
                                <div className="p-1">
                                    <nav className="flex w-full" id="nav-pills" role="tablist">
                                        {tabInfo.map(tab => (
                                            <button
                                                key={tab.title}
                                                disabled={tab.title === 'فروش'}
                                                onClick={() => setSelectedTab(tab)}
                                                className={`${tab === selectedTab ? 'bg-primary-blue dark:bg-accent-orange text-text-color' : ''} flex-1 rounded-3xl py-2 text-white`}
                                                type="button"
                                            >
                                                <Typography
                                                    className={`!font-peyda ${tab === selectedTab ? 'text-white' : 'text-black dark:text-white'}`}
                                                    fontSize={10}
                                                >
                                                    {tab.title}
                                                </Typography>
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>

                            <div className="block" tabIndex={0}>
                                <div className="mt-3 flex flex-col gap-3">
                                    <div className="flex flex-col gap-2">
                                        <label className="!font-peyda text-xs text-light-text-color dark:text-white">
                                            {t('valueGold')}
                                        </label>
                                        <div className="font-peyda text-xs">

                                                <OptionSelect
                                                    id="weight"
                                                    value={weight === 0 ? '' : weight}
                                                    onChange={handleWeight}
                                                    options={gramOptions}
                                                    placeholder="مثال: ۵ گرم"

                                                />
                                            
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="!font-peyda text-xs text-black dark:text-white">
                                            {t('payValue')}
                                        </label>
                                        <div className="relative">
                                            <i className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                                                <img
                                                    alt=""
                                                    src="/images/toman.svg"
                                                    width={15}
                                                    height={15}
                                                />
                                            </i>
                                            <input
                                                value={priceItem}
                                                type="text"
                                                className="w-full rounded-lg border border-custom-gray dark:border-gray-500 bg-transparent p-3 pl-12 !font-peyda text-xs text-light-text-color dark:text-text-color placeholder-custom-gray focus:outline-none focus:border-primary-blue"
                                                placeholder="مبلغ خرید طلا را وارد نمایید"
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Button
                                            sx={{
                                                bgcolor: isDark ? '#ea8a2a' : '#2256ff',
                                                color: 'white',
                                            }}
                                            className="w-full p-3 rounded-lg  text-sm font-peyda"
                                        >
                                            {t('buy')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex flex-col gap-2.5 rounded-lg bg-white dark:bg-black p-4">
                            <Typography
                                className="!font-peyda py-1 text-start text-light-text-color dark:text-text-color"
                                fontWeight={600}
                                fontSize={12}
                            >
                                {t('listRequestGold')}
                            </Typography>
                            <Typography
                                className="!font-peyda text-start text-light-text-color dark:text-text-color"
                                fontSize={11}
                            >
                                به زودی سوالات جدید به این قسمت اضافه می‌شود
                            </Typography>
                        </div>
                    </section>
                </div>
            </main>
            <BottomNav />
        </div>
    );
};

export default Buy;
