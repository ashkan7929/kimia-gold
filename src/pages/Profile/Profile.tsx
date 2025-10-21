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
  AiOutlineMan,
  AiOutlineWoman,
} from '../../Icons';
import { Disclosure, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import TextField from '../../components/Inputs/TextField';
import LogoutButton from '../../components/LogOut';

const Profile = () => {
  const { t } = useTranslation();

  let userData: any = null;
  try {
    const storUser = localStorage.getItem('user-data');
    userData = storUser ? JSON.parse(storUser) : null;
  } catch (error) {
    console.error('Invalid JSON in user-data:', error);
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <main className="flex-1 h-[80vh] overflow-y-auto pb-[calc(80px+env(safe-area-inset-bottom))] bg-[url('../statics/assets/images/main-lines-pattern.png')] bg-cover bg-center">
          <div className="flex flex-col gap-3 mb-3">
            <section>
              <div className="dark:bg-black bg-white rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                <div className="p-4 flex items-center gap-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                      }}
                      className="rounded-[20.53569rem] bg-primary-blue dark:bg-accent-orange shadow-[0px_-2.629px_46.657px_0px_rgba(0,0,0,0.06)] flex p-[0.24644rem_0.2875rem] justify-center items-center w-[1.375rem] h-[1.375rem] absolute bottom-[-0.15rem] right-0 z-10"
                      aria-label={t('edit', { defaultValue: 'ویرایش' }) as string}
                    >
                      <TbPencilMinus className="text-text-color" />
                    </button>

                    <div className="relative dark:bg-black bg-white w-[2.875rem] h-[2.875rem] rounded-full overflow-hidden">
                      <img
                        src="/images/Avatar.jpg"
                        alt={t('avatar', { defaultValue: 'آواتار' }) as string}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography className="dark:text-text-color text-light-text-color !font-peyda !font-bold !text-4xl-custom">
                      {(userData?.firstName ?? '') + ' ' + (userData?.lastName ?? '')}
                    </Typography>

                    <div className="flex items-center gap-1">
                      <CiMobile3 className="dark:text-text-color text-light-text-color" />
                      <Typography className="dark:text-text-color text-light-text-color !font-peyda !text-4xl-custom">
                        {userData?.phoneNumber ?? ''}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Disclosure as="div">
              {({ open }: { open: boolean }) => (
                <div className="p-1 w-full rounded-lg transition-all duration-700 ease-out dark:bg-black bg-white">
                  <div>
                    <div className="rounded-md duration-300 ease-in-out transition-background-color">
                      <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="dark:bg-accent-orange bg-primary-blue w-6 h-6 flex justify-center items-center rounded-md">
                            <FaRegUser className="text-text-color text-xs" />
                          </span>
                          <span className="dark:text-text-color text-light-text-color font-peyda">
                            {t('personalInfo', { defaultValue: 'اطلاعات فردی' })}
                          </span>
                        </div>
                        {open ? (
                          <FaChevronUp className="dark:text-text-color text-light-text-color" fontSize={12} />
                        ) : (
                          <FaChevronDown className="dark:text-text-color text-light-text-color" fontSize={12} />
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
                              {t('nationalCode', { defaultValue: 'کد ملی' })}
                            </label>
                            <TextField
                              disabled
                              defaultValue={userData?.username ?? ''}
                              mobileIcon={<MdOutlineBadge />}
                              placeholder={t('enterNationalId', { defaultValue: 'کد ملی را وارد کنید' })}
                            />
                          </div>

                          <div>
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color text-light-text-color mb-2 font-peyda">
                              {t('birthDate', { defaultValue: 'تاریخ تولد' })}
                            </label>
                            <div className="relative">
                              <TextField
                                disabled
                                defaultValue={userData?.birthDate ?? ''}
                                mobileIcon={<CiCalendarDate />}
                                placeholder={t('enterBirthday', { defaultValue: 'تاریخ تولد را وارد کنید' })}
                              />
                            </div>
                          </div>

                          {/* First name */}
                          <div>
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color text-light-text-color mb-2 font-peyda">
                              {t('firstName', { defaultValue: 'نام' })}
                            </label>
                            <div className="relative">
                              <TextField
                                disabled
                                defaultValue={userData?.firstName ?? ''}
                                mobileIcon={<FaRegUser />}
                                placeholder={t('enterName', { defaultValue: 'نام را وارد کنید' })}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color text-light-text-color mb-2 font-peyda">
                              {t('lastName', { defaultValue: 'نام خانوادگی' })}
                            </label>
                            <div className="relative">
                              <TextField
                                disabled
                                defaultValue={userData?.lastName ?? ''}
                                mobileIcon={<FaRegUser />}
                                placeholder={t('enterLastName', { defaultValue: 'نام خانوادگی را وارد کنید' })}
                              />
                            </div>
                          </div>

                          <div className="flex justify-between items-center gap-2">
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color mb-2 mt-2 font-peyda">
                              {t('gender', { defaultValue: 'جنسیت' })}
                            </label>

                            <div className="w-full dark:bg-gray-900 py-1 px-1.5 flex justify-center items-center gap-2 rounded-md bg-custom-bg-menu shadow">
                              <div className="flex flex-1">
                                <input
                                  id="gender_man"
                                  type="radio"
                                  name="gender"
                                  className="hidden"
                                  checked={userData?.gender === 1}
                                  readOnly
                                />
                                <label
                                  htmlFor="gender_man"
                                  className={`h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] cursor-pointer ${
                                    userData?.gender === 1
                                      ? 'dark:bg-accent-orange bg-primary-blue text-text-color'
                                      : 'dark:bg-gray-800 dark:text-white bg-gray-200 text-light-text-color'
                                  }`}
                                >
                                  <span className="text-text-color">
                                    <AiOutlineMan />
                                  </span>
                                  <span className="text-sm font-peyda">{t('male', { defaultValue: 'مرد' })}</span>
                                </label>
                              </div>

                              <div className="flex flex-1">
                                <input
                                  id="gender_woman"
                                  type="radio"
                                  name="gender"
                                  className="hidden"
                                  checked={userData?.gender === 0}
                                  readOnly
                                />
                                <label
                                  htmlFor="gender_woman"
                                  className={`h-[1.6875rem] px-[0.5625rem] flex justify-center items-center flex-1 gap-1 rounded-[0.375rem] cursor-pointer ${
                                    userData?.gender === 0
                                      ? 'dark:bg-accent-orange bg-primary-blue text-text-color'
                                      : 'dark:bg-gray-800 dark:text-white bg-gray-200 text-light-text-color'
                                  }`}
                                >
                                  <span>
                                    <AiOutlineWoman />
                                  </span>
                                  <span className="text-sm font-peyda">{t('female', { defaultValue: 'زن' })}</span>
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
                <div className="p-1 w-full rounded-lg transition-all duration-700 ease-out dark:bg-black bg-white">
                  <div>
                    <div className="rounded-md duration-300 ease-in-out transition-background-color">
                      <Disclosure.Button className="flex justify-between items-center p-4 w-full cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="dark:bg-accent-orange bg-primary-blue w-6 h-6 flex justify-center items-center rounded-md">
                            <FaPhoneVolume className="text-text-color text-xs" />
                          </span>
                          <span className="dark:text-text-color text-light-text-color font-peyda">
                            {t('contactInfo', { defaultValue: 'اطلاعات تماس' })}
                          </span>
                        </div>
                        {open ? (
                          <FaChevronUp className="dark:text-text-color text-light-text-color" fontSize={12} />
                        ) : (
                          <FaChevronDown className="dark:text-text-color text-light-text-color" fontSize={12} />
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
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color mb-2 font-peyda">
                              {t('mobile', { defaultValue: 'موبایل' })}
                            </label>
                            <TextField
                              disabled
                              defaultValue={userData?.phoneNumber ?? ''}
                              mobileIcon={<CiMobile3 />}
                              placeholder={t('enterMobile', { defaultValue: 'شماره موبایل را وارد کنید' })}
                            />
                          </div>

                          <div>
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color mb-2 font-peyda">
                              {t('email', { defaultValue: 'ایمیل' })}
                            </label>
                            <div className="relative">
                              <TextField
                                disabled
                                defaultValue={userData?.email ?? ''}
                                mobileIcon={<IoMailOutline />}
                                placeholder={t('enterEmail', { defaultValue: 'ایمیل را وارد کنید' })}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color mb-2 font-peyda">
                              {t('address', { defaultValue: 'آدرس' })}
                            </label>
                            <div className="relative">
                              <TextField
                                disabled
                                defaultValue={userData?.address ?? ''}
                                mobileIcon={<BiSolidMapPin />}
                                placeholder={t('enterAddress', { defaultValue: 'آدرس را وارد کنید' })}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-micro font-semibold leading-normal dark:text-text-color mb-2 font-peyda">
                              {t('postalCode', { defaultValue: 'کد پستی' })}
                            </label>
                            <div className="relative">
                              <TextField
                                disabled
                                defaultValue={userData?.postalCode ?? ''}
                                mobileIcon={<RiRoadMapLine />}
                                placeholder={t('enterPostalCode', { defaultValue: 'کد پستی را وارد کنید' })}
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
