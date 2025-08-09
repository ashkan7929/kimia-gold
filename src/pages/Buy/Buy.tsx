
import { Disclosure, Transition } from "@headlessui/react";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Button from '../../components/Button/Button';
import "../../fonts.css";
import { FaChevronDown, FaChevronUp } from '../../Icons';
import "../../statics/assets/lib/Swiper/swiper-bundle.min.css";

const tabInfo = [
    {
        title: "خرید"
    },
    {
        title: "فروش"
    },
]

const Buy = () => {
    // const { t } = useTranslation();

    const [selectedTab, setSelectedTab] = useState(tabInfo[0])

    return (
        <>
            <div className="min-h-screen font-peyda text-white">
                <main className="flex-1">
                    <div className="container mx-auto flex flex-col gap-3 mb-3">
                        <section>
                            <Disclosure as="div">
                                {({ open }: { open: boolean }) => (
                                    <div className={`p-1 w-full rounded-lg transition-all duration-700 ease-out bg-custom-bg-card`}>
                                        <div>
                                            <div className={`rounded-md duration-300 ease-in-out transition-background-color `}>
                                                <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                                                    <div className="flex items-center justify-between gap-2 w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                                                                <img
                                                                    src="/images/gold.png"
                                                                    alt=""
                                                                    className="object-contain w-5 h-5"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col gap-1 text-start">
                                                                <Typography className='text-white !font-peyda' fontSize={10}>طلای 18 عیار</Typography>
                                                                <Typography className='text-white !font-peyda' fontSize={9}>Anas gold</Typography>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex flex-col items-end gap-1">
                                                                <Typography className='!font-peyda text-neutral-300' fontWeight='bold' fontSize={12}>قیمت هر گرم</Typography>
                                                                <div className='flex gap-1 items-center'>
                                                                    <Typography className='!font-peyda text-white' fontWeight='bold' fontSize={12}>2,566,890</Typography>
                                                                    <img alt='' src='/images/toman.svg' width={10} height={10} />
                                                                </div>
                                                            </div>
                                                            {open ? <FaChevronUp className='text-white' fontSize={12} /> : <FaChevronDown className='text-white' fontSize={12} />}
                                                        </div>
                                                    </div>
                                                </Disclosure.Button>
                                            </div>
                                            <Transition
                                                enter='transition transition-[max-height] duration-500 ease-in'
                                                enterFrom='transform max-h-0'
                                                enterTo='transform max-h-[200vh]'
                                                leave='transition transition-[max-height] duration-500 ease-out'
                                                leaveFrom='transform max-h-screen'
                                                leaveTo='transform max-h-0'>
                                                <Disclosure.Panel as="div" className="overflow-hidden">
                                                    <div className="p-4 flex flex-col gap-3">
                                                        {/* data */}
                                                    </div>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </div>
                                    </div>
                                )}
                            </Disclosure>
                        </section>

                        <section>
                            <div className="bg-primary-darker rounded-lg p-4">
                                <div className="bg-primary-dark rounded-3xl ">
                                    <div className="p-1">
                                        <nav
                                            className="flex w-full"
                                            id="nav-pills"
                                            role="tablist"
                                        >
                                            {
                                                tabInfo.map((tab) => (
                                                    <button
                                                        onClick={() => setSelectedTab(tab)}
                                                        className={`${tab == selectedTab ? 'bg-primary-blue' : ''} flex-1 py-2 rounded-3xl text-white`}
                                                        type="button"
                                                    >
                                                        <Typography className='text-white !font-kalameh' fontSize={10}>{tab.title}</Typography>
                                                    </button>
                                                ))
                                            }
                                        </nav>
                                    </div>
                                </div>
                                <div
                                    className="block"
                                    tabIndex={0}
                                >
                                    <div className="flex flex-col gap-3 mt-3">
                                        <div className="flex flex-col gap-2">
                                            <label className="font-peyda text-xs text-white">مقدار طلا</label>
                                            <div>
                                                <select className="w-full p-3 bg-transparent border border-custom-border-default rounded-lg font-peyda text-sm focus:outline-none focus:border-primary-blue !text-[10px]">
                                                    <option value={1}>
                                                        <Typography className='text-white !font-peyda' fontSize={10}>مقدار 1 گرم</Typography>
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-peyda text-xs text-white">مبلغ پرداختی</label>
                                            <div className="relative">
                                                <i className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                    <img alt='' src='/images/toman.svg' width={15} height={15} />
                                                </i>
                                                <input
                                                    type="text"
                                                    className="w-full p-3 pl-12 bg-transparent border border-custom-border-default rounded-lg text-white font-kalameh text-xs placeholder-custom-gray focus:outline-none focus:border-primary-blue"
                                                    placeholder="مبلغ خرید طلا را وارد نمایید"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 gap-2 mt-3">
                                                <button type="button" className="p-1 bg-primary-lighter/50  rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue">
                                                    1,000,000
                                                </button>
                                                <button type="button" className="p-1 bg-primary-lighter/50  rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue">
                                                    5,000,000
                                                </button>
                                                <button type="button" className="p-1 bg-primary-lighter/50  rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue">
                                                    10,000,000
                                                </button>
                                                <button type="button" className="p-1 bg-primary-lighter/50  rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue">
                                                    15,000,000
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <Button className="bg-primary-blue text-white w-full text-sm">خرید</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="bg-custom-bg-card p-4 rounded-lg flex flex-col gap-2.5">
                                <Typography className='text-white !font-peyda text-start py-1' fontWeight={600} fontSize={12}>
                                    لیست درخواستهای خرید و فروش
                                </Typography>
                                <Disclosure as="div">
                                    {({ open }: { open: boolean }) => (
                                        <div className={`w-full transition-all duration-700 ease-out`}>
                                            <div className="border border-custom-border-default rounded-lg">
                                                <div className={`rounded-md duration-300 ease-in-out transition-background-color py-4`}>
                                                    <Disclosure.Button className="flex justify-between items-center px-2 w-full cursor-pointer">
                                                        <div className="flex items-center justify-between gap-5 w-full">
                                                            <div className="flex items-center gap-2">
                                                                <Typography className='text-white !font-peyda text-start' fontSize={11}>
                                                                    آیا خرید طلا از کیمیا مطمعن است؟ و چگونگی خرید از این صرافی
                                                                </Typography>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {open ? <FaChevronUp className='text-white' fontSize={12} /> : <FaChevronDown className='text-white' fontSize={12} />}
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                </div>
                                                <Transition
                                                    enter='transition transition-[max-height] duration-500 ease-in'
                                                    enterFrom='transform max-h-0'
                                                    enterTo='transform max-h-[200vh]'
                                                    leave='transition transition-[max-height] duration-500 ease-out'
                                                    leaveFrom='transform max-h-screen'
                                                    leaveTo='transform max-h-0'>
                                                    <Disclosure.Panel as="div" className="px-2 pb-4 overflow-hidden">
                                                        <Typography className='text-neutral-300 !font-peyda' fontSize={10}>
                                                            محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر در ثبت سفارش‌ها. اپلیکیشن ولت‌بانک برای همه
                                                        </Typography>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </div>
                                        </div>
                                    )}
                                </Disclosure>

                                <Disclosure as="div">
                                    {({ open }: { open: boolean }) => (
                                        <div className={`w-full transition-all duration-700 ease-out`}>
                                            <div className="border border-custom-border-default rounded-lg">
                                                <div className={`rounded-md duration-300 ease-in-out transition-background-color py-4`}>
                                                    <Disclosure.Button className="flex justify-between items-center px-2 w-full cursor-pointer">
                                                        <div className="flex items-center justify-between gap-5 w-full">
                                                            <div className="flex items-center gap-2">
                                                                <Typography className='text-white !font-peyda text-start' fontSize={11}>
                                                                    آیا خرید طلا از کیمیا مطمعن است؟ و چگونگی خرید از این صرافی
                                                                </Typography>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {open ? <FaChevronUp className='text-white' fontSize={12} /> : <FaChevronDown className='text-white' fontSize={12} />}
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                </div>
                                                <Transition
                                                    enter='transition transition-[max-height] duration-500 ease-in'
                                                    enterFrom='transform max-h-0'
                                                    enterTo='transform max-h-[200vh]'
                                                    leave='transition transition-[max-height] duration-500 ease-out'
                                                    leaveFrom='transform max-h-screen'
                                                    leaveTo='transform max-h-0'>
                                                    <Disclosure.Panel as="div" className="px-2 pb-4 overflow-hidden">
                                                        <Typography className='text-neutral-300 !font-peyda' fontSize={10}>
                                                            محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر در ثبت سفارش‌ها. اپلیکیشن ولت‌بانک برای همه
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
            </div>
        </>


    )
}

export default Buy