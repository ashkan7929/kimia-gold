import { Disclosure, Transition } from '@headlessui/react';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';
import '../../fonts.css';
import '../../assets/lib/Swiper/swiper-bundle.min.css';
import OptionSelect from '../../components/Inputs/OptionSelect';
import { useTranslation } from 'react-i18next';
import BottomNav from '../../layouts/BottomNav';
import { useTheme } from '../../contexts/ThemeContext';
import tomanBlack from '../../assets/images/blackToman.svg';
import { Button } from '@mui/material';

type TabKey = 'buy' | 'sell';

const GOLD_PRICE_RIAL = 7_496_400 as const;

const TABS: { key: TabKey; title: string; disabled?: boolean }[] = [
  { key: 'buy', title: 'خرید' },
  { key: 'sell', title: 'فروش', disabled: true },
];

const Buy = () => {
  const { t } = useTranslation(''); 
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [weight, setWeight] = useState<number | ''>('');      
  const [activeTab, setActiveTab] = useState<TabKey>('buy');    

  const gramOptions = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const g = i + 1;
        return { value: g, label: t('gramOption', { g, defaultValue: `مقدار ${g} گرم` }) };
      }),
    [t]
  );

  const priceNumber = useMemo(
    () => (typeof weight === 'number' ? weight * GOLD_PRICE_RIAL : 0),
    [weight]
  );
  const priceDisplay = priceNumber ? priceNumber.toLocaleString('fa-IR') : '—';

  const tomanIconSrc = isDark ? '/images/toman.svg' : tomanBlack;

  const handleWeight: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const val = e.currentTarget.value;
    if (!val || val === 'انتخاب کنید') return setWeight('');
    const n = Number(val);
    setWeight(Number.isFinite(n) ? n : '');
  };

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
                          alt="نماد طلا"
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-start">
                        <Typography className="!font-peyda text-light-text-color dark:text-white" fontSize={10}>
                          {t('gold18', { defaultValue: 'طلای 18 عیار' })}
                        </Typography>
                        <Typography className="!font-peyda text-light-text-color dark:text-white" fontSize={9}>
                          {t('productName', { defaultValue: 'Anas gold' })}
                        </Typography>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-end gap-1">
                        <Typography className="!font-peyda text-neutral-700 dark:text-neutral-300" fontWeight="bold" fontSize={12}>
                          {t('pricePerGram', { defaultValue: 'قیمت هر گرم' })}
                        </Typography>
                        <div className="flex items-center gap-1">
                          <Typography className="!font-peyda text-light-text-color dark:text-text-color" fontWeight="bold" fontSize={12}>
                            {GOLD_PRICE_RIAL.toLocaleString('fa-IR')}
                          </Typography>
                          <img alt="تومان" src={tomanIconSrc} width={10} height={10} />
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
                  leaveFrom="transform max-h-[200vh]"
                  leaveTo="transform max-h-0"
                >
                  <Disclosure.Panel as="div" className="overflow-hidden">
                    <div className="flex flex-col gap-3 p-4" />
                  </Disclosure.Panel>
                </Transition>
              </div>
            </Disclosure>
          </section>

          <section>
            <div className="rounded-lg bg-white dark:bg-black p-4">
              <div className="rounded-3xl bg-gray-200 dark:bg-gray-800">
                <div className="p-1">
                  <nav className="flex w-full" id="nav-pills" role="tablist" aria-label={t('tabsAria', { defaultValue: 'ناوبری تب‌ها' })}>
                    {TABS.map((tab) => {
                      const isActive = tab.key === activeTab;
                      return (
                        <button
                          key={tab.key}
                          disabled={tab.disabled}
                          onClick={() => setActiveTab(tab.key)}
                          className={`${isActive ? 'bg-primary-blue dark:bg-accent-orange text-white' : ''} flex-1 rounded-3xl py-2 text-white disabled:opacity-60`}
                          type="button"
                          aria-pressed={isActive}
                        >
                          <Typography className={`!font-peyda ${isActive ? 'text-white' : 'text-black dark:text-white'}`} fontSize={10}>
                            {tab.title}
                          </Typography>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              <div className="block" tabIndex={0}>
                <div className="mt-3 flex flex-col gap-3">

                  <div className="flex flex-col gap-2">
                    <label htmlFor="weight" className="!font-peyda text-xs text-light-text-color dark:text-white">
                      {t('valueGold', { defaultValue: 'مقدار طلا (گرم)' })}
                    </label>
                    <div className="font-peyda text-xs">
                      <OptionSelect
                        id="weight"
                        value={weight === 0 ? '' : weight}
                        onChange={handleWeight}
                        options={gramOptions}
                        placeholder={t('weightPlaceholder', { defaultValue: 'مثال: ۵ گرم' })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="payValue" className="!font-peyda text-xs text-black dark:text-white">
                      {t('payValue', { defaultValue: 'مبلغ پرداختی' })}
                    </label>
                    <div className="relative">
                      <i className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                        <img alt="تومان" src={tomanIconSrc} width={15} height={15} />
                      </i>
                      <input
                        id="payValue"
                        value={priceDisplay}
                        type="text"
                        className="w-full rounded-lg border border-custom-gray dark:border-gray-500 bg-transparent p-3 pl-12 !font-peyda text-xs text-light-text-color dark:text-text-color placeholder-custom-gray focus:outline-none focus:border-primary-blue"
                        placeholder={t('payPlaceholder', { defaultValue: 'مبلغ خرید طلا را وارد نمایید' })}
                        readOnly
                        aria-readonly="true"
                      />
                    </div>
                  </div>

                  <div>
                    <Button
                      sx={{ bgcolor: isDark ? '#ea8a2a' : '#2256ff', color: 'white' }}
                      className="w-full p-3 rounded-lg text-sm !font-peyda"
                    >
                      {t('buy', { defaultValue: 'خرید' })}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col gap-2.5 rounded-lg bg-white dark:bg-black p-4">
              <Typography className="!font-peyda py-1 text-start text-light-text-color dark:text-text-color" fontWeight={600} fontSize={12}>
                {t('listRequestGold', { defaultValue: 'لیست درخواست‌های طلا' })}
              </Typography>
              <Typography className="!font-peyda text-start text-light-text-color dark:text-text-color" fontSize={11}>
                {t('comingSoon', { defaultValue: 'به زودی سوالات جدید به این قسمت اضافه می‌شود' })}
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
