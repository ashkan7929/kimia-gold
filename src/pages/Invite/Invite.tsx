import Typography from '@mui/material/Typography';
import {
    MdOutlineCopyAll,
    IoIosLink,
    FaInstagram,
    FaXTwitter,
    FaWhatsapp,
    PiTelegramLogo,
    TbBrandLinkedin,
} from '../../Icons';
import { useTheme } from '../../contexts/ThemeContext';

import inviteLight from '/images/pic/invite.svg';
import inviteDark from '/images/pic/inviteDark.svg';
import { useTranslation } from 'react-i18next';

const Invite = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-col ">
            <main className="flex-1 bg-[url('../images/main-lines-pattern.png')] bg-cover bg-center">
                <div className="flex flex-col gap-3 mb-3">
                    <section className="invite">
                        <div className="dark:bg-black bg-light-primary-darker rounded-lg">
                            <div className="p-4 flex flex-col items-center gap-2">
                                <div className="text-center">
                                    <img src={isDark ? inviteDark : inviteLight} alt="invite img" />
                                </div>
                                {/* <Typography
                                    variant="h1"
                                    className="!font-alibaba text-white pb-2"
                                    fontWeight="bold"
                                    fontSize={16}
                                >
                                    {t('Invite.title')}
                                </Typography> */}

                                <div className="pb-3 w-full">
                                    <Typography
                                        variant="h1"
                                        className="!font-peyda dark:text-white text-light-text-color pb-2"
                                        fontWeight="bold"
                                        fontSize={12}
                                    >
                                        {t('Invite.inviteCode')}
                                    </Typography>
                                    <Typography
                                        className="!font-peyda dark:text-white py-2  text-neutral-600 w-full"
                                        fontSize={12}
                                    >
                                        {t('Invite.des')}
                                    </Typography>
                                    <div className="flex gap-2 relative border dark:border-custom-border-light border-custom-gray rounded-xsm">
                                        <input
                                            type="text"
                                            className="form-control flex-1 ps-5 bg-transparent focus:outline-0 text-black dark:text-white font-peyda text-xs"
                                            placeholder="کد دعوت را وارد نمایید"
                                        />
                                        <button className="px-2 py-2.5 font-semibold text-center dark:text-white no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg dark:bg-black bg-white  border-[#010048] text-primary-blue flex items-center justify-center gap-2 transition-all duration-150 ease-in-out">
                                            <MdOutlineCopyAll fontSize={22} />
                                        </button>
                                    </div>
                                </div>

                                <div className="social-label"></div>
                                <Typography
                                    className="!font-peyda dark:text-neutral-300 text-neutral-700 w-full"
                                    fontWeight="medium"
                                    fontSize={14}
                                >
                                    {t('Invite.share')}
                                </Typography>
                                <div className="flex gap-3 w-full">
                                    <div className="">
                                        <a href="#">
                                            <PiTelegramLogo className="h-5 w-5 hover:text-primary-blue dark:hover:text-primary-blue dark:dark:text-text-color text-neutral-600 " />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#">
                                            <FaWhatsapp className="h-5 w-5 dark:text-text-color hover:text-green-500 dark:hover:text-green-500 text-neutral-600 " />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#">
                                            <TbBrandLinkedin className="h-5 w-5 hover:text-primary-blue dark:hover:text-primary-blue dark:text-text-color text-neutral-600 " />
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#" className="group inline-flex items-center">
                                            <span
                                                className="
                                                    inline-grid place-items-center h-5 w-5 rounded-lg transition
                                                    bg-transparent group-hover:[background:radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]
                                                    "
                                            >
                                                <FaInstagram className="h-5 w-5 text-neutral-600 dark:text-white group-hover:text-white transition" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#">
                                            <FaXTwitter className="h-5 w-5 hover:text-primary-lighter dark:hover:text-primary-lighter  dark:text-text-color text-neutral-600 " />
                                        </a>
                                    </div>
                                    <div className="border dark:border-primary-lighter border-custom-gray"></div>
                                    <div className="">
                                        <a href="#">
                                            <IoIosLink className="h-5 w-5 dark:text-text-color hover:text-primary-blue dark:hover:text-primary-blue text-neutral-600 " />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Invite;
