import { Typography } from '@mui/material';
import ToggleButton from '../../components/Inputs/ToggleButton';
import { Disclosure, Transition } from '@headlessui/react';
import { GiBodyHeight, FaWeightScale, FaChevronDown, FaChevronUp, FaUserAlt, MdOutlinePhoneAndroid } from '../../Icons';
import CheckBox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Button';
import SegmentedButtons from '../../components/Button/ButtonGroups';
import { Controller, useForm } from 'react-hook-form';
import TextField from '../../components/Inputs/TextField';
import DateField from '../../components/Inputs/Datepiker';
import Tabel from '../../components/Inputs/Tabel';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const ProductDetailCard = () => {
    const { control } = useForm();
    const [OpenModal, setOpenModal] = useState(false);
    const handleControl = () => {
        setOpenModal(!OpenModal);
    };

    return (
        <div className="bg-primary-darker light:bg-white">
            <h1 className="font-peyda text-md m-4 text-center text-text-color light:text-light-text-color">
                فرم پیشنهاد
            </h1>
            <SegmentedButtons
                className="w-full"
                buttons={[
                    { label: 'برای خودم' },
                    { label: 'کاربر جدید' },
                    { label: 'مشتریان قبلی' },
                ]}
                defaultIndex={0}
            />
            <div className="mx-3 flex items-center justify-between mt-4">
                <Typography
                    className="!font-peyda text-text-color light:text-light-text-color"
                    fontSize={12}
                >
                    آیا بیمه‌شده با بیمه‌گذار یکی است؟
                </Typography>
                <div className="mt-2">
                    <ToggleButton />
                </div>
            </div>

            <Disclosure as="div" className="p-1">
                {({ open }) => (
                    <div className="w-full rounded-lg bg-custom-bg-card light:bg-white transition-all duration-700">
                        <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between p-4">
                            <span className="font-peyda text-xs text-text-color light:text-light-text-color">
                                اطلاعات سلامت
                            </span>
                            {open ? (
                                <FaChevronUp
                                    className="text-text-color light:text-light-text-color"
                                    fontSize={12}
                                />
                            ) : (
                                <FaChevronDown
                                    className="text-text-color light:text-light-text-color"
                                    fontSize={12}
                                />
                            )}
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
                                <div className="flex flex-col gap-3 p-4">
                                    <div>
                                        <label className="mb-2 block font-peyda text-xs font-semibold leading-normal text-text-color dark:text-white">
                                            قد (سانتی‌متر)
                                        </label>
                                        <TextField
                                            mobileIcon={<FaWeightScale />}
                                            placeholder="لطفاً قد خود را وارد کنید"
                                            className="placeholder:text-micro"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block font-peyda text-xs font-semibold leading-normal text-text-color dark:text-white">
                                            وزن
                                        </label>
                                        <TextField
                                            mobileIcon={<GiBodyHeight />}
                                            placeholder="لطفاً وزن خود را وارد کنید"
                                        />
                                    </div>
                                    <div className="flex items-center gap-0 text-sm text-text-color light:text-light-bg-input">
                                        <CheckBox defaultChecked label="آیا بیماری خاصی دارید؟" />
                                    </div>
                                    <Tabel className="w-full border-collapse text-right font-peyda">
                                        <thead>
                                            <tr className="bg-light-primary-darker light:bg-primary-darker">
                                                <th
                                                    scope="col"
                                                    className="border border-gray-300 text-sm text-center light:border-gray-700 light:text-white px-2 py-1"
                                                >
                                                    لیست بیماری‌ها
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="">
                                            <tr className="light:bg-light-primary-darker bg-primary-darker">
                                                <td className="border border-gray-300 text-text-color light:text-light-text-color text-xs text-center  light:border-gray-700 px-4 py-2">
                                                    انواع سرطان‌ها مثل سرطان معده
                                                </td>
                                            </tr>
                                            <tr className="light:bg-light-primary-darker bg-primary-darker">
                                                <td className="border border-gray-300 text-text-color light:text-light-text-color text-xs text-center light:border-gray-700 px-4 py-2">
                                                    صرع
                                                </td>
                                            </tr>
                                            <tr className="light:bg-light-primary-darker bg-primary-darker">
                                                <td className="border border-gray-300 text-text-color light:text-light-text-color text-xs text-center light:border-gray-700 px-4 py-2">
                                                    آسم
                                                </td>
                                            </tr>
                                            <tr className="light:bg-light-primary-darker bg-primary-darker">
                                                <td className="border border-gray-300 text-text-color light:text-light-text-color text-xs text-center light:border-gray-700 px-4 py-2">
                                                    زخم معده
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Tabel>
                                    
                                    <div className="flex items-center text-text-color dark:text-white">
                                        <CheckBox label="آیا سیگار می‌کشید؟" defaultChecked />
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                )}
            </Disclosure>

            <Disclosure as="div" className="p-1">
                {({ open }) => (
                    <div className="w-full rounded-lg bg-custom-bg-card light:bg-white transition-all duration-700">
                        <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between p-4">
                            <span className="font-peyda text-xs text-text-color light:text-light-text-color">
                                اطلاعات فردی{' '}
                            </span>
                            {open ? (
                                <FaChevronUp
                                    className="text-text-color light:text-light-text-color"
                                    fontSize={12}
                                />
                            ) : (
                                <FaChevronDown
                                    className="text-text-color light:text-light-text-color"
                                    fontSize={12}
                                />
                            )}
                        </Disclosure.Button>

                        <Transition
                            enter="transition transition-[max-height] duration-500 ease-in"
                            enterFrom="transform max-h-0"
                            enterTo="transform max-h-[200vh]"
                            leave="transition transition-[max-height] duration-500 ease-out"
                            leaveFrom="transform max-h-screen"
                            leaveTo="transform max-h-0"
                        >
                            <Disclosure.Panel as="div" className="flex gap-2 flex-col">
                                <div>
                                    <Typography
                                        className="text-white light:text-light-text-color !font-peyda mb-2 mr-2 "
                                        fontSize={12}
                                    >
                                        {' '}
                                         نام
                                    </Typography>
                                    <TextField
                                        
                                        mobileIcon={<FaUserAlt className='w-3 h-3' />}
                                        placeholder="لطفاً نام خود را وارد کنید"
                                    />
                                </div>
                                <div>
                                     <Typography
                                        className="text-white light:text-light-text-color !font-peyda mb-2 mr-2"
                                        fontSize={12}
                                    >
                                        {' '}
                                         نام خانوادگی
                                    </Typography>
                                    <TextField
                                        mobileIcon={<FaUserAlt className='w-3 h-3' />}
                                        placeholder="لطفاً نام خانوادگی خود را وارد کنید"
                                    />
                                </div>
                                <div>
                                    <Typography
                                        className="text-white light:text-light-text-color !font-peyda mb-2 "
                                        fontSize={12}
                                    >
                                        {' '}
                                        شماره موبایل
                                    </Typography>
                                    <TextField
                                        mobileIcon={<MdOutlinePhoneAndroid />}
                                        placeholder="لطفاً شماره موبایل خود را وارد کنید"
                                    />
                                </div>
                                <div className="">
                                    <Typography
                                        className="text-white light:text-light-text-color !font-peyda mb-2 "
                                        fontSize={12}
                                    >
                                        تاریخ تولد *
                                    </Typography>
                                    <Controller
                                        name="birthDate"
                                        control={control}
                                        render={({ field }) => (
                                            <DateField
                                                placeholder="تاریخ تولد"
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                className="w-full"
                                            />
                                        )}
                                    />
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </div>
                )}
            </Disclosure>
        <div></div>

            <div>
                <Button
                    onClick={() => setOpenModal(true)}
                    className="font-peyda mt-4 w-full rounded-md bg-accent-orange text-sm text-white"
                >
                    ادامه
                </Button>
                <div>
                    <Modal 
                        open={OpenModal} 
                        handleClose={handleControl}
                        modalTitle="تأیید خرید"
                        confirmText="تأیید"
                    >
                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <p className="font-peyda text-lg font-semibold text-white light:text-gray-800">
                                قابل صدور با ۲۰٪ اضافه نرخ
                            </p>

                            <button
                                className="w-full max-w-xs bg-accent-orange text-white font-peyda text-sm 
                    flex items-center justify-center gap-1 py-3 px-4 rounded-xl 
                    shadow-md transition-all hover:bg-accent-orange/90 active:scale-95"
                            >
                                <span>تایید عامل فروش</span>
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>

            <Link to="/products/:id/card">
                <Button className="font-peyda mt-4 w-full rounded-md bg-primary-blue text-sm text-white">
                    ثبت اطلاعات
                </Button>
            </Link>
        </div>
    );
};

export default ProductDetailCard;
