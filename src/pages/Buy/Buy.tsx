import { Disclosure, Transition } from '@headlessui/react';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Button from '../../components/Button/Button';
import "../../fonts.css";
import { FaChevronDown, FaChevronUp } from '../../Icons';
import '../../assets/lib/Swiper/swiper-bundle.min.css';
import OptionSelect from '../../components/Inputs/OptionSelect';
import { useTranslation } from 'react-i18next';
import BottomNav from '../../layouts/BottomNav';
import { useTheme } from '../../contexts/ThemeContext';

import tomanBlack from "../../assets/images/blackToman.svg"

const tabInfo = [
    {
        title: "خرید"
    },
    {
        title: "فروش"
    },
]

const Buy = () => {
  const { t } = useTranslation();
  const [weight, setWeight] = useState<number | ''>('');
  const [goldPrice] = useState<number>(7496400);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const gramOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `مقدار ${i + 1} گرم`,
  }));

  const handleWeight: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const number = e.currentTarget.value;
    setWeight(number === 'انتخاب کنید' ? '' : Number(number));
  };

  const price = typeof weight === 'number' ? weight * goldPrice : 0;
  const priceItem = price ? price.toLocaleString('fa-IR') : '—';
  const [selectedTab, setSelectedTab] = useState(tabInfo[0]);

  return (
    <>
      <div className="min-h-screen !font-peyda text-white ">
        <main className="flex-1">
          <div className="container mx-auto mb-3 flex flex-col gap-3">
            <section>
              <Disclosure as="div">
                {({ open }: { open: boolean }) => (
                  <div className="w-full rounded-lg bg-custom-bg-card light:bg-white p-1 transition-all duration-700 ease-out">
                    <div>
                      <div className="rounded-md transition-background-color duration-300 ease-in-out">
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
                                <Typography className="!font-peyda text-white light:text-light-text-color light:text-xs light:font-peyda" fontSize={10}>
                                  طلای 18 عیار
                                </Typography>
                                <Typography className="!font-peyda text-white light:text-light-text-color light:text-xs light:font-peyda" fontSize={9}>
                                  Anas gold
                                </Typography>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex flex-col items-end gap-1">
                                <Typography
                                  className="!font-peyda text-neutral-300 light:text-neutral-700 light:text-xs light:font-peyda light:bg-white "
                                  fontWeight="bold"
                                  fontSize={12}
                                >
                                  قیمت هر گرم
                                </Typography>
                                <div className="flex items-center gap-1">
                                  <Typography
                                    className="!font-peyda text-text-color light:text-light-text-color"
                                    fontWeight="bold"
                                    fontSize={12}
                                  >
                                    ۷,۴۹۶,۴۰۰
                                  </Typography>
                                      {isDark ? <img alt="toman" src="/images/toman.svg" width={10} height={10} /> : <img src={tomanBlack} alt="toman" />
}

                                </div>
                              </div>
                              {open ? (
                                <FaChevronUp className="text-text-color light:text-light-text-color" fontSize={12} />
                              ) : (
                                <FaChevronDown className="text-text-color light:text-light-text-color" fontSize={12} />
                              )}
                            </div>
                          </div>
                        </Disclosure.Button>
                      </div>
                      <Transition
                        enter="transition transition-[max-height] duration-500 ease-in"
                        enterFrom="transform max-h-0"
                        enterTo="transform max-h-[200vh]"
                        leave="transition transition-[max-height] duration-500 ease-out"
                        leaveFrom="transform max-h-screen"
                        leaveTo="transform max-h-0"
                      >
                        <Disclosure.Panel as="div" className="overflow-hidden">
                          <div className="flex flex-col gap-3 p-4">{/* data */}</div>
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  </div>
                )}
              </Disclosure>
            </section>

            <section>
              <div className="rounded-lg bg-primary-darker light:bg-white p-4">
                <div className="rounded-3xl bg-primary-dark light:bg-gray-200">
                  <div className="p-1">
                    <nav className="flex w-full" id="nav-pills" role="tablist">
                      {tabInfo.map((tab) => (
                        <button
                          key={tab.title}
                          disabled={tab.title === 'فروش'}
                          onClick={() => setSelectedTab(tab)}
                          className={`${
                            tab === selectedTab ? 'bg-primary-blue light:text-text-color' : ''
                          } flex-1 rounded-3xl py-2 text-white `}
                          type="button"
                        >
                          <Typography className={`!font-peyda ${tab === selectedTab ? 'text-white' : 'text-black'}`} fontSize={10}>
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
                      <label className="!font-peyda text-xs text-white light:text-light-text-color">{t('valueGold')}</label>
                      <div className='font-peyda text-xs'>
                        <OptionSelect
                        id="weight"
                        value={weight === 0 ? '' : weight}
                        onChange={handleWeight}
                        options={gramOptions}
                      />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="!font-peyda text-xs text-white light:text-black">
                        {t('payValue')}

                      </label>
                      <div className="relative">
                        <i className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                          <img alt="" src="/images/toman.svg" width={15} height={15} />
                        </i>

                        <input
                          value={priceItem}
                          type="text"
                          className="w-full rounded-lg border border-custom-border-default light:border-custom-gray bg-transparent p-3 pl-12 !font-peyda text-xs text-text-color light:text-light-text-color placeholder-custom-gray focus:outline-none focus:border-primary-blue"
                          placeholder="مبلغ خرید طلا را وارد نمایید"
                          readOnly
                        />
                      </div>
                    </div>

                    <div>
                      <Button className="w-full bg-primary-blue text-sm text-text-color">{t('buy')}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-col gap-2.5 rounded-lg bg-custom-bg-card light:bg-white p-4">
                <Typography
                  className="!font-peyda py-1 text-start text-text-color light:text-light-text-color"
                  fontWeight={600}
                  fontSize={12}
                >
                       {t('listRequestGold')}
                </Typography>

                {/* FAQ 1 */}
                <Disclosure as="div">
                  {({ open }: { open: boolean }) => (
                    <div className="w-full transition-all duration-700 ease-out">
                      <div className="rounded-lg border border-custom-border-default light:border-custom-gray">
                        <div className="rounded-md py-4 transition-background-color duration-300 ease-in-out">
                          <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between px-2">
                            <div className="flex w-full items-center justify-between gap-5">
                              <div className="flex items-center gap-2">
                                <Typography
                                  className="!font-peyda text-start text-text-color light:text-light-text-color"
                                  fontSize={11}
                                >
                                    {t('faqQuestion')}
                                </Typography>
                              </div>
                              <div className="flex items-center gap-2">
                                {open ? (
                                  <FaChevronUp className="text-text-color light:text-light-text-color" fontSize={12} />
                                ) : (
                                  <FaChevronDown className="text-text-color light:text-light-text-color" fontSize={12} />
                                )}
                              </div>
                            </div>
                          </Disclosure.Button>
                        </div>
                        <Transition
                          enter="transition transition-[max-height] duration-500 ease-in"
                          enterFrom="transform max-h-0"
                          enterTo="transform max-h-[200vh]"
                          leave="transition transition-[max-height] duration-500 ease-out"
                          leaveFrom="transform max-h-screen"
                          leaveTo="transform max-h-0"
                        >
                          <Disclosure.Panel as="div" className="overflow-hidden px-2 pb-4">
                            <Typography className="!font-peyda text-neutral-300 light:text-neutral-700" fontSize={10}>
                                 {t('faqAnswer')}

                            </Typography>
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    </div>
                  )}
                </Disclosure>

                {/* FAQ 2 */}
                <Disclosure as="div">
                       {({ open }: { open: boolean }) => (
                    <div className="w-full transition-all duration-700 ease-out">
                      <div className="rounded-lg border border-custom-border-default light:border-custom-gray">
                        <div className="rounded-md py-4 transition-background-color duration-300 ease-in-out">
                          <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between px-2">
                            <div className="flex w-full items-center justify-between gap-5">
                              <div className="flex items-center gap-2">
                                <Typography
                                  className="!font-peyda text-start text-text-color light:text-light-text-color"
                                  fontSize={11}
                                >
                                    {t('faqQuestion')}
                                </Typography>
                              </div>
                              <div className="flex items-center gap-2">
                                {open ? (
                                  <FaChevronUp className="text-text-color light:text-light-text-color" fontSize={12} />
                                ) : (
                                  <FaChevronDown className="text-text-color light:text-light-text-color" fontSize={12} />
                                )}
                              </div>
                            </div>
                          </Disclosure.Button>
                        </div>
                        <Transition
                          enter="transition transition-[max-height] duration-500 ease-in"
                          enterFrom="transform max-h-0"
                          enterTo="transform max-h-[200vh]"
                          leave="transition transition-[max-height] duration-500 ease-out"
                          leaveFrom="transform max-h-screen"
                          leaveTo="transform max-h-0"
                        >
                          <Disclosure.Panel as="div" className="overflow-hidden px-2 pb-4">
                            <Typography className="!font-peyda text-neutral-300 light:text-neutral-700" fontSize={10}>
                                 {t('faqAnswer')}

                            </Typography>
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    </div>
                  )}
                </Disclosure>
              </div>
            </section>
          </div>
        </main>
         <BottomNav />

      </div>
    </>
  );
};

export default Buy;
