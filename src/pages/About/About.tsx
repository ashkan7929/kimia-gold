import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';

import logoDarkMode from '/images/vemLogo1.png';
import logoLightMode from '/images/vemLogoSite.png';
import { useTheme } from '../../contexts/ThemeContext';

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark'; // ← فیکس شد

  return (
    <div dir="rtl" className="w-full mx-auto min-h-screen flex flex-col">
      <main
        className="flex-grow bg-cover bg-center"
        // اگه مسیر بک‌گراندت فرق داره همینجا عوضش کن
        style={{ backgroundImage: "url('/images/main-lines-pattern.png')" }}
      >
        <section className="px-4 py-6">
          <div className="rounded-lg shadow-[0_0_92px_0_rgba(0,0,0,0.08)]
                          bg-light-primary-darker
                          dark:bg-black">
            <div className="p-4 flex flex-col gap-4">
              {/* لوگو + بک‌دراپ */}
              <div className="text-center relative w-56 h-[8.25rem] mx-auto my-2 flex items-center justify-center">
                {/* بک‌گراند دکوراتیو */}
                <img
                  src="/images/about-group-icon.png"
                  alt=""
                  className="absolute inset-0 object-contain opacity-80 dark:opacity-60 pointer-events-none"
                />
                {/* لوگو روی لایه‌ی بالاتر */}
                <div className="relative z-10 w-24 h-24">
                  <img
                    alt="logo site"
                    src={isDark ? logoDarkMode : logoLightMode}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* تیتر */}
              <h1 className="font-peyda text-lg font-bold text-center my-1
                             text-neutral-900 dark:text-white">
                {t('about_title')}
              </h1>

              {/* متن */}
              <div className="text-right leading-loose">
                <p className="mb-2 font-peyda text-neutral-700 dark:text-neutral-200">
                  {t('about_p1')}
                  <br />
                  {t('about_p2')}
                </p>
              </div>

              {/* دکمه پشتیبانی */}
              <Button
                className="w-full text-white text-sm
                           bg-primary-blue hover:brightness-110
                           dark:bg-accent-orange dark:text-white dark:border dark:border-white/10
                           focus:outline-none focus:ring-2 focus:ring-black"
              >
                {t('support')}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
