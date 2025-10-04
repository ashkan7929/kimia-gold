import { useMemo, useState } from 'react';
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
import { useTranslation } from 'react-i18next';

import {inviteLight, inviteDark} from "../../asset/index"


 import {openCentered, copyToClipboard, buildInviteUrl} from "../../utils/invite"

const BG_URL = "url('/images/main-lines-pattern.png')";


const Invite = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { t } = useTranslation();

  const [inviteCode, setInviteCode] = useState('');
  const [copied, setCopied] = useState(false);

  const heroImg = useMemo(() => (isDark ? inviteDark : inviteLight), [isDark]);
  const inviteUrl = useMemo(() => buildInviteUrl(inviteCode), [inviteCode]);

  const handleCopyCode = async () => {
    const ok = await copyToClipboard(inviteCode);
    setCopied(ok);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCopyLink = async () => {
    const ok = await copyToClipboard(inviteUrl);
    setCopied(ok);
    setTimeout(() => setCopied(false), 1500);
  };

//   const handleShareNative = async () => {
//     if (navigator?.share) {
//       try {
//         await navigator.share({
//           title: t('Invite.title', { defaultValue: 'دعوت به وِم' }),
//           text: t('Invite.des', { defaultValue: 'با این لینک به وِم بپیوندید.' }),
//           url: inviteUrl,
//         });
//         return;
//       } catch {
//         console.log("test");
//       }
//     }
//     handleCopyLink();
//   };


  const shareTo = (network: 'telegram' | 'whatsapp' | 'linkedin' | 'x' | 'instagram') => {
    const text = t('Invite.des', { defaultValue: 'با این لینک به وِم بپیوندید.' });
    const encodedInviteUrl  = encodeURIComponent(inviteUrl);
    const textencodedInviteUrl  = encodeURIComponent(text);
    //  const phoneNumber = "9809912885231";
    switch (network) {
      case 'telegram':
        openCentered(`https://t.me/share/url?url=${encodedInviteUrl }&text=${textencodedInviteUrl}`);
        break;
      case 'whatsapp':
        openCentered(`https://wa.me/?text=${encodeURIComponent(`${text}\n${inviteUrl}`)}`);
        break;
      case 'linkedin':
        openCentered(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedInviteUrl }`);
        break;
      case 'x':
        openCentered(`https://twitter.com/intent/tweet?url=${encodedInviteUrl }&text=${textencodedInviteUrl}`);
        break;
      case 'instagram':
        handleCopyLink();
        break;
    }
  };

  return (
    <div className="w-full flex flex-col">
      <main
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: BG_URL }}
      >
        <div className="flex flex-col gap-3 mb-3">
          <section className="invite">
            <div className="dark:bg-black bg-light-primary-darker rounded-lg">
              <div className="p-4 flex flex-col items-center gap-3">
                <div className="text-center">
                  <img src={heroImg} alt={t('Invite.heroAlt', { defaultValue: 'تصویر دعوت' })} />
                </div>

                <div className="w-full">
                  <Typography
                    variant="h1"
                    className="!font-peyda dark:text-white text-light-text-color pb-2"
                    fontWeight="bold"
                    fontSize={12}
                  >
                    {t('Invite.inviteCode', { defaultValue: 'کد دعوت' })}
                  </Typography>

                  <Typography
                    className="!font-peyda dark:text-white py-2 text-neutral-600 w-full"
                    fontSize={12}
                  >
                    {t('Invite.des', { defaultValue: 'کد یا لینک دعوت خود را برای دوستان‌تان ارسال کنید.' })}
                  </Typography>

                  <div className="flex gap-2 relative border dark:border-custom-border-light border-custom-gray rounded-xsm p-1">
                    <input
                      type="text"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      className="flex-1 ps-5 bg-transparent focus:outline-0 text-black dark:text-white font-peyda text-xs"
                      placeholder={t('Invite.placeholder', { defaultValue: 'کد دعوت را وارد نمایید' }) as string}
                      aria-label={t('Invite.inviteCode', { defaultValue: 'کد دعوت' })}
                    />
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="px-2 py-2.5 font-semibold rounded-lg border border-transparent dark:bg-black bg-white text-primary-blue flex items-center justify-center gap-2"
                      aria-label={t('Invite.copyCode', { defaultValue: 'کپی کد' })}
                      title={t('Invite.copyCode', { defaultValue: 'کپی کد' })}
                    >
                      <MdOutlineCopyAll fontSize={20} />
                    </button>
                  </div>

                  {copied && (
                    <Typography className="mt-1 text-green-600 dark:text-green-400 !font-peyda" fontSize={11}>
                      {t('Invite.copied', { defaultValue: 'کپی شد!' })}
                    </Typography>
                  )}
                </div>

                <Typography
                  className="!font-peyda dark:text-neutral-300 text-neutral-700 w-full"
                  fontWeight="medium"
                  fontSize={14}
                >
                  {t('Invite.share', { defaultValue: 'اشتراک‌گذاری' })}
                </Typography>

                <div className="flex items-center gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => shareTo('telegram')}
                    className="p-1"
                    aria-label={t('Invite.shareTelegram', { defaultValue: 'اشتراک‌گذاری در تلگرام' })}
                    title={t('Invite.shareTelegram', { defaultValue: 'تلگرام' })}
                  >
                    <PiTelegramLogo className="h-5 w-5 text-neutral-600 dark:text-text-color hover:text-primary-blue dark:hover:text-primary-blue" />
                  </button>

                  <button
                    type="button"
                    onClick={() => shareTo('whatsapp')}
                    className="p-1"
                    aria-label={t('Invite.shareWhatsApp', { defaultValue: 'اشتراک‌گذاری در واتس‌اپ' })}
                    title={t('Invite.shareWhatsApp', { defaultValue: 'واتس‌اپ' })}
                  >
                    <FaWhatsapp className="h-5 w-5 text-neutral-600 dark:text-text-color hover:text-green-500 dark:hover:text-green-500" />
                  </button>

                  <button
                    type="button"
                    onClick={() => shareTo('linkedin')}
                    className="p-1"
                    aria-label={t('Invite.shareLinkedIn', { defaultValue: 'اشتراک‌گذاری در لینکدین' })}
                    title={t('Invite.shareLinkedIn', { defaultValue: 'لینکدین' })}
                  >
                    <TbBrandLinkedin className="h-5 w-5 text-neutral-600 dark:text-text-color hover:text-primary-blue dark:hover:text-primary-blue" />
                  </button>

                  <button
                    type="button"
                    onClick={() => shareTo('instagram')}
                    className="group inline-flex items-center p-1"
                    aria-label={t('Invite.shareInstagram', { defaultValue: 'اشتراک‌گذاری در اینستاگرام' })}
                    title={t('Invite.shareInstagram', { defaultValue: 'اینستاگرام' })}
                  >
                    <span className="inline-grid place-items-center h-5 w-5 rounded-lg transition bg-transparent group-hover:[background:radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]">
                      <FaInstagram className="h-5 w-5 text-neutral-600 dark:text-white group-hover:text-white transition" />
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => shareTo('x')}
                    className="p-1"
                    aria-label={t('Invite.shareX', { defaultValue: 'اشتراک‌گذاری در ایکس' })}
                    title={t('Invite.shareX', { defaultValue: 'X' })}
                  >
                    <FaXTwitter className="h-5 w-5 text-neutral-600 dark:text-text-color hover:text-primary-lighter dark:hover:text-primary-lighter" />
                  </button>

                  <div className=" w-2 border-l h-4 dark:border-primary-lighter border-custom-gray"></div>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="p-1"
                    aria-label={t('Invite.copyLink', { defaultValue: 'کپی لینک' })}
                    title={t('Invite.copyLink', { defaultValue: 'کپی لینک' })}
                  >
                    <IoIosLink className="h-5 w-5 text-neutral-600 dark:text-text-color hover:text-primary-blue dark:hover:text-primary-blue" />
                  </button>

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
