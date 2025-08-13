import { Disclosure, Transition } from "@headlessui/react";
import Typography from '@mui/material/Typography';
import Button from '../../components/Button/Button';
import ToggleButton from '../../components/Inputs/ToggleButton';
import { FaChevronDown, FaChevronUp, FaMinus, FaRegUser } from '../../Icons';

// CSS imports removed - using Tailwind CSS instead
const MyCards = () => {

    return (
        <>
            <div className="flex flex-col w-full" style={{ backgroundImage: "url('../statics/assets/images/main-lines-pattern.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <main className="flex flex-col flex-grow gap-3">

                    <Disclosure as="div">
                        {({ open }: { open: boolean }) => (
                            <div className={`p-1 w-full rounded-lg border transition-all duration-700 ease-out bg-custom-bg-card border-custom-border-default`}>
                                <div>
                                    <div className={`rounded-md duration-300 ease-in-out transition-background-color`}>
                                        <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                                            <div className="flex gap-3 items-center">
                                                <span className="bg-accent-orange w-6.5 h-6.5 flex justify-center items-center rounded-md">
                                                    <FaRegUser className='text-xs text-white' />
                                                </span>
                                                <Typography className='text-white font-alibaba' fontSize={13} fontWeight='bold'>افزودن کارت جدید</Typography>
                                            </div>
                                            {open ? <div className='bg-primary-blue rounded-full w-6.5 h-6.5 flex justify-center items-center'><FaMinus className='text-white' fontSize={10} /></div> : <FaChevronDown className='text-white' fontSize={12} />}
                                        </Disclosure.Button>
                                    </div>
                                    <Transition
                                        enter='transition transition-[max-height duration-500 ease-in'
                                        enterFrom='transform max-h-0'
                                        enterTo='transform max-h-[200vh]'
                                        leave='transition transition-[max-height duration-500 ease-out'
                                        leaveFrom='transform max-h-screen'
                                        leaveTo='transform max-h-0'>
                                        <Disclosure.Panel as="div" className="overflow-hidden">
                                            <div className="flex flex-col gap-3 p-4">
                                                <div>
                                                    <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">شماره کارت</label>
                                                    <input
                                                        type="text"
                                                        className="font-peyda text-sm w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-center text-white placeholder-gray-400"
                                                        placeholder="شماره کارت را وارد نمایید"
                                                    />
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <div className="flex-grow">
                                                        <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">ماه</label>
                                                        <select className="font-peyda text-sm w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                            <option value={6}>6</option>
                                                            <option value={7}>7</option>
                                                            <option value={8}>8</option>
                                                            <option value={9}>9</option>
                                                            <option value={10}>10</option>
                                                            <option value={11}>11</option>
                                                            <option value={12}>12</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">سال</label>
                                                        <select className="font-peyda text-sm w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                            <option value={1403}>1403</option>
                                                            <option value={1402}>1402</option>
                                                            <option value={1401}>1401</option>
                                                            <option value={1400}>1400</option>
                                                            <option value={1399}>1399</option>
                                                            <option value={1398}>1398</option>
                                                            <option value={1397}>1397</option>
                                                            <option value={1396}>1396</option>
                                                            <option value={1395}>1395</option>
                                                            <option value={1394}>1394</option>
                                                            <option value={1393}>1393</option>
                                                            <option value={1392}>1392</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">بانک</label>
                                                    <select className="font-peyda text-sm w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                        <option value="saman">بانک سامان</option>
                                                        <option value="mellat">بانک ملت</option>
                                                        <option value="melli">بانک ملی</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div className="flex gap-2 items-center">
                                                        <ToggleButton />
                                                        <span className="text-white text-lg-custom">کارت پیش فرض</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                    </Transition>
                                </div>
                            </div>
                        )}
                    </Disclosure>

                    <Disclosure as="div">
                        {({ open }: { open: boolean }) => (
                            <div className={`p-1 w-full rounded-lg border transition-all duration-700 ease-out bg-custom-bg-card border-custom-border-default`}>
                                <div>
                                    <div className={`rounded-md duration-300 ease-in-out transition-background-color`}>
                                        <Disclosure.Button className="flex gap-8 justify-between items-center px-4 py-2 w-full text-white cursor-pointer">
                                            <div className="w-7.5 h-7.5 flex-shrink-0">
                                                <img src="/images/banks/ansar bank.png" alt="" className="object-contain w-full h-full" />
                                            </div>
                                            <div className="flex flex-col flex-grow gap-2">
                                                <div className="text-[0.875rem] font-medium leading-normal text-start" style={{ fontFamily: 'Kalameh' }}>6219 - 86** - **** - 67899</div>
                                                <div className="flex justify-between items-center">
                                                    <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Alibaba' }}>بانک اقتصاد نوین</div>
                                                    <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Kalameh' }}>08/09</div>
                                                </div>
                                            </div>
                                            {open ? <FaChevronUp className='text-white' fontSize={12} /> : <FaChevronDown className='text-white' fontSize={12} />}
                                        </Disclosure.Button>
                                    </div>
                                    <Transition
                                        enter='transition transition-[max-height duration-500 ease-in'
                                        enterFrom='transform max-h-0'
                                        enterTo='transform max-h-[200vh]'
                                        leave='transition transition-[max-height duration-500 ease-out'
                                        leaveFrom='transform max-h-screen'
                                        leaveTo='transform max-h-0'>
                                        <Disclosure.Panel as="div" className="overflow-hidden">
                                            <div className="flex flex-col gap-3 p-4">
                                                <div>
                                                    <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">شماره کارت</label>
                                                    <input
                                                        type="text"
                                                        className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-center text-white placeholder-gray-400"
                                                        placeholder="شماره کارت را وارد نمایید"
                                                    />
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <div className="flex-grow">
                                                        <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">ماه</label>
                                                        <select className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                            <option value={6}>6</option>
                                                            <option value={7}>7</option>
                                                            <option value={8}>8</option>
                                                            <option value={9}>9</option>
                                                            <option value={10}>10</option>
                                                            <option value={11}>11</option>
                                                            <option value={12}>12</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">سال</label>
                                                        <select className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                            <option value={1403}>1403</option>
                                                            <option value={1402}>1402</option>
                                                            <option value={1401}>1401</option>
                                                            <option value={1400}>1400</option>
                                                            <option value={1399}>1399</option>
                                                            <option value={1398}>1398</option>
                                                            <option value={1397}>1397</option>
                                                            <option value={1396}>1396</option>
                                                            <option value={1395}>1395</option>
                                                            <option value={1394}>1394</option>
                                                            <option value={1393}>1393</option>
                                                            <option value={1392}>1392</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">بانک</label>
                                                    <select className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                        <option value="saman">بانک سامان</option>
                                                        <option value="mellat">بانک ملت</option>
                                                        <option value="melli">بانک ملی</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div className="flex gap-2 items-center">
                                                        <ToggleButton />
                                                        <span className="text-white text-lg-custom">کارت پیش فرض</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Button className='w-full text-sm text-white bg-accent-orange'>ذخیره تغییرات</Button>
                                                </div>
                                                <div>
                                                    <Button className='w-full text-sm text-white bg-red-500'>حذف کارت</Button>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                    </Transition>
                                </div>
                            </div>
                        )}
                    </Disclosure>

                    <Disclosure as="div">
                        {({ open }: { open: boolean }) => (
                            <div className={`p-1 w-full rounded-lg border transition-all duration-700 ease-out bg-custom-bg-card border-custom-border-default`}>
                                <div>
                                    <div className={`rounded-md duration-300 ease-in-out transition-background-color`}>
                                        <Disclosure.Button className="flex gap-8 justify-between items-center px-4 py-2 w-full text-white cursor-pointer">
                                            <div className="w-7.5 h-7.5 flex-shrink-0">
                                                <img src="/images/banks/ansar bank.png" alt="" className="object-contain w-full h-full" />
                                            </div>
                                            <div className="flex flex-col flex-grow gap-2">
                                                <div className="text-[0.875rem] font-medium leading-normal text-start" style={{ fontFamily: 'Kalameh' }}>6219 - 86** - **** - 67899</div>
                                                <div className="flex justify-between items-center">
                                                    <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Alibaba' }}>بانک اقتصاد نوین</div>
                                                    <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Kalameh' }}>08/09</div>
                                                </div>
                                            </div>
                                            {open ? <FaChevronUp className='text-white' fontSize={12} /> : <FaChevronDown className='text-white' fontSize={12} />}
                                        </Disclosure.Button>
                                    </div>
                                    <Transition
                                        enter='transition transition-[max-height duration-500 ease-in'
                                        enterFrom='transform max-h-0'
                                        enterTo='transform max-h-[200vh]'
                                        leave='transition transition-[max-height duration-500 ease-out'
                                        leaveFrom='transform max-h-screen'
                                        leaveTo='transform max-h-0'>
                                        <Disclosure.Panel as="div" className="overflow-hidden">
                                            <div className="flex flex-col gap-3 p-4">
                                                <div>
                                                    <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">شماره کارت</label>
                                                    <input
                                                        type="text"
                                                        className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-center text-white placeholder-gray-400"
                                                        placeholder="شماره کارت را وارد نمایید"
                                                    />
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <div className="flex-grow">
                                                        <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">ماه</label>
                                                        <select className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                            <option value={6}>6</option>
                                                            <option value={7}>7</option>
                                                            <option value={8}>8</option>
                                                            <option value={9}>9</option>
                                                            <option value={10}>10</option>
                                                            <option value={11}>11</option>
                                                            <option value={12}>12</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">سال</label>
                                                        <select className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                            <option value={1403}>1403</option>
                                                            <option value={1402}>1402</option>
                                                            <option value={1401}>1401</option>
                                                            <option value={1400}>1400</option>
                                                            <option value={1399}>1399</option>
                                                            <option value={1398}>1398</option>
                                                            <option value={1397}>1397</option>
                                                            <option value={1396}>1396</option>
                                                            <option value={1395}>1395</option>
                                                            <option value={1394}>1394</option>
                                                            <option value={1393}>1393</option>
                                                            <option value={1392}>1392</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block mb-2 font-semibold leading-normal text-white text-lg-custom">بانک</label>
                                                    <select className="text-sm font-peyda w-full h-9.5 px-4 rounded-lg border border-custom-border-default bg-custom-bg-input text-white">
                                                        <option value="saman">بانک سامان</option>
                                                        <option value="mellat">بانک ملت</option>
                                                        <option value="melli">بانک ملی</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div className="flex gap-2 items-center">
                                                        <ToggleButton />
                                                        <span className="text-white text-lg-custom">کارت پیش فرض</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Button className='w-full text-sm text-white bg-accent-orange'>ذخیره تغییرات</Button>
                                                </div>
                                                <div>
                                                    <Button className='w-full text-sm text-white bg-red-500'>حذف کارت</Button>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                    </Transition>
                                </div>
                            </div>
                        )}
                    </Disclosure>
                </main>
            </div>
        </>
    )
}

export default MyCards