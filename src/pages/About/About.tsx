import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { useTheme } from '../../contexts/ThemeContext';

import logoDarkMode from '/images/vemLogo1.png';
import logoLightMode from '/images/vemLogoSite.png';

const BG_IMAGE_URL = '/images/main-lines-pattern.png';
const GROUP_ICON_URL = '/images/about-group-icon.png';

const About = () => {
    const { t } = useTranslation('');
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const logoSrc = useMemo(() => (isDark ? logoDarkMode : logoLightMode), [isDark]);

    return (
        <div dir="rtl" className="min-h-screen flex flex-col">
            <main
                className="flex-1 bg-cover bg-center"
                style={{ backgroundImage: `url('${BG_IMAGE_URL}')` }}
            >
                <section className="container mx-auto px-4 py-6">
                    <div className="rounded-lg shadow-[0_0_92px_0_rgba(0,0,0,0.08)] bg-light-primary-darker dark:bg-black">
                        <div className="p-4 flex flex-col gap-4">
                            <header className="text-center">
                                <div className="relative w-56 h-[8.25rem] mx-auto my-2 flex items-center justify-center">
                                    <img
                                        src={GROUP_ICON_URL}
                                        alt=""
                                        aria-hidden="true"
                                        loading="eager"
                                        fetchPriority="high" 
                                        className="absolute inset-0 w-full h-full object-contain opacity-80 dark:opacity-60 pointer-events-none"
                                    />

                                    <img
                                        alt={t('siteLogoAlt', { defaultValue: 'نشان وِم' })}
                                        src={logoSrc}
                                        className="relative z-10 w-24 h-24 object-contain"
                                    />
                                </div>

                                <h1 className="font-peyda text-lg font-bold text-neutral-900 dark:text-white">
                                    {t('about_title', { defaultValue: 'درباره وِم' })}
                                </h1>
                            </header>

                            <section className="text-right leading-loose">
                                <p className="mb-2 font-peyda text-neutral-700 dark:text-neutral-200">
                                    {t('about_p1', { defaultValue: '' })}
                                    <br />
                                    {t('about_p2', { defaultValue: '' })}
                                </p>
                            </section>

                            <Button
                                type="button"
                                className="w-full text-white text-sm bg-primary-blue hover:brightness-110 dark:bg-accent-orange dark:text-white dark:border dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-black"
                                aria-label={t('support', { defaultValue: 'پشتیبانی' })}
                            >
                                {t('support', { defaultValue: 'پشتیبانی' })}
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
