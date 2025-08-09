import Typography from '@mui/material/Typography';
import { TbPencilMinus, CiMobile3, FaRegUser, FaChevronDown, FaChevronUp, MdOutlineBadge, CiCalendarDate, FaPhoneVolume, IoMailOutline, RiRoadMapLine, BiSolidMapPin } from '../../Icons';
import { Disclosure, Transition } from "@headlessui/react"
import { useTranslation } from 'react-i18next';
import TextField from '../../components/Inputs/TextField';
import Button from '../../components/Button/Button';

const Profile = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="w-full flex flex-col">
                <main className="flex-1 bg-[url('../statics/assets/images/main-lines-pattern.png')] bg-cover bg-center">
                    <div className="flex flex-col gap-3 mb-3">
                        <section className="">
                            <div className="bg-custom-bg-card rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                                <div className="p-4 flex items-center gap-2">
                                    <div className="relative">
                                        <button className="rounded-[20.53569rem] bg-primary-blue shadow-[0px_-2.629px_46.657px_0px_rgba(0,0,0,0.06)] flex p-[0.24644rem_0.2875rem] justify-center items-center w-[1.375rem] h-[1.375rem] absolute bottom-[-0.15rem] right-0 z-10">
                                            <TbPencilMinus className='text-white' />
                                        </button>
                                        <div className="relative bg-primary-darker w-[2.875rem] h-[2.875rem] rounded-full overflow-hidden">
                                            <img
                                                src="/images/Avatar.jpg"
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Typography className='text-white !font-alibaba !font-bold !text-4xl-custom'>حجت بندانی</Typography>
                                        <div className="flex items-center gap-1 ">
                                            <CiMobile3 className='text-white' />
                                            <Typography className='text-white !font-peyda !text-4xl-custom'>0938774563</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Disclosure as="div">
                            {({ open }: { open: boolean }) => (
                                <div className={`p-1 w-full rounded-lg transition-all duration-700 ease-out bg-custom-bg-card`}>
                                    <div>
                                        <div className={`rounded-md duration-300 ease-in-out transition-background-color `}>
                                            <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <span className="bg-accent-orange w-6 h-6 flex justify-center items-center rounded-md">
                                                        <FaRegUser className='text-white text-xs' />
                                                    </span>
                                                    <span className="text-white font-peyda">اطلاعات فردی</span>
                                                </div>
                                                {open ? <FaChevronUp className='text-white' fontSize={12} /> : <FaChevronDown className='text-white' fontSize={12} />}
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
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">کد ملی</label>
                                                        <TextField mobileIcon={<MdOutlineBadge />} placeholder={t('enterNationalId')} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">تاریخ تولد</label>
                                                        <div className="relative">
                                                            <TextField mobileIcon={<CiCalendarDate />} placeholder={t('enterBirthday')} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Button className='bg-primary-blue text-white rounded-md hover:bg-blue-600 w-full'>{t('searchRegistryOffice')}</Button>
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda"> نام </label>
                                                        <div className="relative">
                                                            <TextField mobileIcon={<FaRegUser />} placeholder={t('enterName')} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda"> نام خانوادگی </label>
                                                        <div className="relative">
                                                            <TextField mobileIcon={<FaRegUser />} placeholder={t('enterLastName')} />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between items-center gap-6'>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">جنسیت</label>
                                                        <div className="w-full py-1 px-1.5 flex justify-center items-center gap-2 rounded-md bg-custom-bg-menu shadow">
                                                            <div className="flex flex-1">
                                                                <input
                                                                    id="gender_man"
                                                                    type="radio"
                                                                    name="gender"
                                                                    defaultChecked={true}
                                                                    className="hidden"
                                                                />
                                                                <label htmlFor="gender_man" className="h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] bg-primary-blue cursor-pointer">
                                                                    <span className="text-white">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            viewBox="0 0 16 16"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6Z"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M10 6V14"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M7 9H13"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span className="text-white text-sm font-peyda">مرد</span>
                                                                </label>
                                                            </div>
                                                            <div className="flex flex-1">
                                                                <input
                                                                    id="gender_woman"
                                                                    type="radio"
                                                                    name="gender"
                                                                    className="hidden"
                                                                />
                                                                <label htmlFor="gender_woman" className="h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] cursor-pointer">
                                                                    <span className="text-white">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            viewBox="0 0 16 16"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M8 9C9.65685 9 11 7.65685 11 6C11 4.34315 9.65685 3 8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9Z"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M8 9V13"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M6 11H10"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span className="text-white text-sm font-peyda">زن</span>
                                                                </label>
                                                            </div>
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
                                <div className={`p-1 w-full rounded-lg transition-all duration-700 ease-out bg-custom-bg-card`}>
                                    <div>
                                        <div className={`rounded-md duration-300 ease-in-out transition-background-color `}>
                                            <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <span className="bg-accent-orange w-6 h-6 flex justify-center items-center rounded-md">
                                                        <FaPhoneVolume className='text-white text-xs' />
                                                    </span>
                                                    <span className="text-white font-peyda">اطلاعات تماس</span>
                                                </div>
                                                {open ? <FaChevronUp className='text-white' fontSize={12} /> : <FaChevronDown className='text-white' fontSize={12} />}
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
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">{t('mobile')}</label>
                                                        <TextField mobileIcon={<CiMobile3 />} placeholder={t('enterMobile')} />
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">{t('email')}</label>
                                                        <div className="relative">
                                                            <TextField mobileIcon={<IoMailOutline />} placeholder={t('enterEmail')} />
                                                        </div>
                                                    </div>
                                                    {/* <div>
                                                        <Button className='bg-primary-blue text-white rounded-md hover:bg-blue-600 w-full'>{t('searchRegistryOffice')}</Button>
                                                    </div> */}
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">{t('address')}</label>
                                                        <div className="relative">
                                                            <TextField mobileIcon={<BiSolidMapPin />} placeholder={t('enterAddress')} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">{t('postalCode')}</label>
                                                        <div className="relative">
                                                            <TextField mobileIcon={<RiRoadMapLine />} placeholder={t('enterPostalCode')} />
                                                        </div>
                                                    </div>
                                                    {/* <div className='flex justify-between items-center gap-6'>
                                                        <label className="block text-micro font-semibold leading-normal text-white mb-2 font-peyda">جنسیت</label>
                                                        <div className="w-full py-1 px-1.5 flex justify-center items-center gap-2 rounded-md bg-custom-bg-menu shadow">
                                                            <div className="flex flex-1">
                                                                <input
                                                                    id="gender_man"
                                                                    type="radio"
                                                                    name="gender"
                                                                    defaultChecked={true}
                                                                    className="hidden"
                                                                />
                                                                <label htmlFor="gender_man" className="h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] bg-primary-blue cursor-pointer">
                                                                    <span className="text-white">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            viewBox="0 0 16 16"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6Z"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M10 6V14"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M7 9H13"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span className="text-white text-sm font-peyda">مرد</span>
                                                                </label>
                                                            </div>
                                                            <div className="flex flex-1">
                                                                <input
                                                                    id="gender_woman"
                                                                    type="radio"
                                                                    name="gender"
                                                                    className="hidden"
                                                                />
                                                                <label htmlFor="gender_woman" className="h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] cursor-pointer">
                                                                    <span className="text-white">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={16}
                                                                            height={16}
                                                                            viewBox="0 0 16 16"
                                                                            fill="none"
                                                                        >
                                                                            <path
                                                                                d="M8 9C9.65685 9 11 7.65685 11 6C11 4.34315 9.65685 3 8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9Z"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M8 9V13"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M6 11H10"
                                                                                stroke="white"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                    <span className="text-white text-sm font-peyda">زن</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </div>
                                </div>
                            )}
                        </Disclosure>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Profile