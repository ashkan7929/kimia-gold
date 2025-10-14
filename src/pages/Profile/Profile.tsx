import Typography from '@mui/material/Typography';
import {
    TbPencilMinus,
    CiMobile3,
    FaRegUser,
    FaChevronDown,
    FaChevronUp,
    MdOutlineBadge,
    CiCalendarDate,
    FaPhoneVolume,
    IoMailOutline,
    RiRoadMapLine,
    BiSolidMapPin,
    IoWomanSharp,
    MdMan,
} from '../../Icons';
import { Disclosure, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import TextField from '../../components/Inputs/TextField';
import LogoutButton from '../../components/LogOut';

const Profile = () => {
    const { t } = useTranslation();
    // const userData = JSON.parse(localStorage.getItem('user-data') || '');
    
    let userData = null;
    try {
        const storUser = localStorage.getItem('user-data');
        if (storUser) {
            userData = JSON.parse(storUser);
        }
    } catch (error) {
        console.error('Invalid JSON in user-data:', error);
    }

    return (
        <>
            <div className="w-full flex flex-col ">
                <main className="flex-1 h-[80vh] pb-[calc(80px+env(safe-area-inset-bottom))] bg-[url('../statics/assets/images/main-lines-pattern.png')] bg-cover bg-center">
                    <div className="flex flex-col gap-3 mb-3">
                        <section className="">
                            <div className="dark:bg-black bg-white rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                                <div className="p-4 flex items-center gap-2">
                                    <div className="relative">
                                        <button className="rounded-[20.53569rem] bg-primary-blue dark:bg-accent-orange shadow-[0px_-2.629px_46.657px_0px_rgba(0,0,0,0.06)] flex p-[0.24644rem_0.2875rem] justify-center items-center w-[1.375rem] h-[1.375rem] absolute bottom-[-0.15rem] right-0 z-10">
                                            <TbPencilMinus className="text-text-color" />
                                        </button>
                                        <div className="relative dark:bg-black bg-white w-[2.875rem] h-[2.875rem] rounded-full overflow-hidden">
                                            <img
                                                src="/images/Avatar.jpg"
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Typography className="dark:text-text-color text-light-text-color !font-peyda !font-bold !text-4xl-custom">
                                            {userData?.firstName + ' ' + userData?.lastName}
                                        </Typography>
                                        <div className="flex items-center gap-1 ">
                                            <CiMobile3 className="dark:text-text-color text-light-text-color" />
                                            <Typography className="dark:text-text-color text-light-text-color !font-peyda !text-4xl-custom">
                                                {userData?.phoneNumber}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Disclosure as="div">
                            {({ open }: { open: boolean }) => (
                                <div
                                    className={`p-1 w-full rounded-lg transition-all duration-700 ease-out dark:bg-black bg-white`}
                                >
                                    <div>
                                        <div
                                            className={`rounded-md duration-300 ease-in-out transition-background-color `}
                                        >
                                            <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <span className="dark:bg-accent-orange bg-primary-blue w-6 h-6 flex justify-center items-center rounded-md">
                                                        <FaRegUser className="text-text-color text-xs" />
                                                    </span>
                                                    <span className="dark:text-text-color text-light-text-color font-peyda">
                                                        اطلاعات فردی
                                                    </span>
                                                </div>
                                                {open ? (
                                                    <FaChevronUp
                                                        className="dark:text-text-color text-light-text-color"
                                                        fontSize={12}
                                                    />
                                                ) : (
                                                    <FaChevronDown
                                                        className="dark:text-text-color text-light-text-color"
                                                        fontSize={12}
                                                    />
                                                )}
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
                                                <div className="p-4 flex flex-col gap-3">
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal dark:text-text-color text-light-text-color mb-2 font-peyda">
                                                            کد ملی
                                                        </label>
                                                        <TextField
                                                            disabled
                                                            defaultValue={userData?.username}
                                                            mobileIcon={<MdOutlineBadge />}
                                                            placeholder={t('enterNationalId')}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal dark:text-text-color text-light-text-color mb-2 font-peyda">
                                                            تاریخ تولد
                                                        </label>
                                                        <div className="relative">
                                                            <TextField
                                                                disabled
                                                                defaultValue={
                                                                    userData?.birthDate ?? ''
                                                                }
                                                                mobileIcon={<CiCalendarDate />}
                                                                placeholder={t('enterBirthday')}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal dark:text-text-color text-light-text-color mb-2 font-peyda">
                                                            {' '}
                                                            نام{' '}
                                                        </label>
                                                        <div className="relative">
                                                            <TextField
                                                                disabled
                                                                defaultValue={userData?.firstName}
                                                                mobileIcon={<FaRegUser />}
                                                                placeholder={t('enterName')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal dark:text-text-color text-light-text-color mb-2 font-peyda">
                                                            {' '}
                                                            نام خانوادگی{' '}
                                                        </label>
                                                        <div className="relative">
                                                            <TextField
                                                                disabled
                                                                defaultValue={userData?.lastName}
                                                                mobileIcon={<FaRegUser />}
                                                                placeholder={t('enterLastName')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center gap-2">
                                                        <label className="block text-micro font-semibold leading-normal dark:text-text-color mb-2 mt-2 font-peyda">
                                                            جنسیت
                                                        </label>
                                                        <div className="w-full dark:bg-gray-900 py-1 px-1.5 flex justify-center items-center gap-2 rounded-md bg-custom-bg-menu shadow">
                                                            <div className="flex flex-1">
                                                                <input
                                                                    id="gender_man"
                                                                    type="radio"
                                                                    name="gender"
                                                                    defaultChecked={true}
                                                                    className="hidden"
                                                                    disabled
                                                                />
                                                                <label
                                                                    htmlFor="gender_man"
                                                                    className="h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] dark:bg-accent-orange bg-primary-blue cursor-pointer"
                                                                >
                                                                    <span className="text-text-color ">
                                                                        <MdMan />
                                                                    </span>
                                                                    <span className="text-text-color text-sm font-peyda">
                                                                        مرد
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="flex flex-1">
                                                                <input
                                                                    id="gender_woman"
                                                                    type="radio"
                                                                    name="gender"
                                                                    className="hidden"
                                                                />
                                                                <label
                                                                    htmlFor="gender_woman"
                                                                    className="h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] cursor-pointer"
                                                                >
                                                                    <span className="dark:text-text-color text-light-text-color">
                                                                        <IoWomanSharp />
                                                                    </span>
                                                                    <span className="dark:text-text-color text-light-text-color text-sm font-peyda">
                                                                        زن
                                                                    </span>
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
                                <div
                                    className={`p-1 w-full rounded-lg transition-all duration-700 ease-out dark:bg-black bg-white`}
                                >
                                    <div>
                                        <div
                                            className={`rounded-md duration-300 ease-in-out transition-background-color `}
                                        >
                                            <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <span className="bg-accent-orange light:bg-primary-blue w-6 h-6 flex justify-center items-center rounded-md">
                                                        <FaPhoneVolume className="text-text-color text-xs" />
                                                    </span>
                                                    <span className="dark:text-text-color text-light-text-color font-peyda">
                                                        اطلاعات تماس
                                                    </span>
                                                </div>
                                                {open ? (
                                                    <FaChevronUp
                                                        className="dark:text-text-color text-light-text-color"
                                                        fontSize={12}
                                                    />
                                                ) : (
                                                    <FaChevronDown
                                                        className="dark:text-text-color text-light-text-color"
                                                        fontSize={12}
                                                    />
                                                )}
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
                                                <div className="p-4 flex flex-col gap-3">
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-text-color light:text-light-text-color mb-2 font-peyda">
                                                            {t('mobile')}
                                                        </label>
                                                        <TextField
                                                            disabled
                                                            defaultValue={userData?.phoneNumber}
                                                            mobileIcon={<CiMobile3 />}
                                                            placeholder={t('enterMobile')}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-text-color light:text-light-text-color mb-2 font-peyda">
                                                            {t('email')}
                                                        </label>
                                                        <div className="relative">
                                                            <TextField
                                                                disabled
                                                                defaultValue={userData?.email}
                                                                mobileIcon={<IoMailOutline />}
                                                                placeholder={t('enterEmail')}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-text-color light:text-light-text-color mb-2 font-peyda">
                                                            {t('address')}
                                                        </label>
                                                        <div className="relative">
                                                            <TextField
                                                                disabled
                                                                mobileIcon={<BiSolidMapPin />}
                                                                placeholder={t('enterAddress')}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-micro font-semibold leading-normal text-text-color light:text-light-text-color mb-2 font-peyda">
                                                            {t('postalCode')}
                                                        </label>
                                                        <div className="relative">
                                                            <TextField
                                                                disabled
                                                                mobileIcon={<RiRoadMapLine />}
                                                                placeholder={t('enterPostalCode')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </div>
                                </div>
                            )}
                        </Disclosure>
                    </div>
                </main>
                <LogoutButton />
            </div>
        </>
    );
};

export default Profile;
