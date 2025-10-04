import { useTheme } from '../../contexts/ThemeContext';
import { logoDarkMode, logoLightMode } from '../../asset/index';
import { useMemo } from 'react';

const Loading = () => {
    const { theme } = useTheme();
    const logo = useMemo(() => (theme === 'dark' ? logoDarkMode : logoLightMode), [theme]);

    return (
        <>
            <div className="mx-auto flex min-h-screen w-full flex-col bg-white text-black dark:bg-black dark:text-white">
                <main
                    className="flex h-full flex-grow items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <div className="relative text-center">
                        <div className="mx-auto h-24 w-24">
                            <img
                                src={logo}
                                width={96}
                                height={96}
                                alt="VEM Club logo"
                                decoding="async"
                                fetchPriority="high"
                                draggable={false}
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div className="fixed inset-x-0 bottom-10 flex items-center justify-center">
                            <span className="sr-only">در حال بارگذاری…</span>
                            <span
                                className="
                                inline-block h-12 w-12 animate-spin rounded-full
                                border-2 border-white                      
                                border-b-primary-blue dark:border-b-accent-orange  
                                drop-shadow-sm "
                                />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Loading;
