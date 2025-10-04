import { useNavigate } from 'react-router-dom';
import darkLogo from '/images/404_dark.png';
import lightLogo from '/images/404-Light.png';
import { useTheme } from '../../contexts/ThemeContext';
import { useMemo } from 'react';

export default function NotFound404() {
     const { theme } = useTheme();
    const notFoundLogo = useMemo(() => (theme === 'dark' ? darkLogo : lightLogo), [theme]);

    const navigate = useNavigate();

    return (
        <main
            dir="rtl"
            className="
        relative min-h-screen
        bg-white text-neutral-900
        dark:bg-black dark:text-neutral-100
        flex items-center justify-center p-6
      "
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-25"
                style={{
                    backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
                    backgroundSize: '32px 32px',
                    color: 'rgba(255,255,255,0.12)',
                }}
            />
            <div className="relative z-10 w-full max-w-sm text-center">
                <img
                    src={notFoundLogo}
                    alt="404-پیدا نشد"
                    className="mx-auto h-50 w-auto select-none"
                    draggable={false}
                />

                <h1 className="mt-6 text-6xl font-extrabold tracking-tight font-peyda">404</h1>

                <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-300">
                    صفحه‌ای که به‌دنبال آن بودید، یافت نشد
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="
						mt-6 w-full rounded-xl px-5 py-3 text-sm font-bold
						text-black dark:text-white hover:text-white
						bg-white border-primary-blue border dark:bg-black dark:border-accent-orange
						hover:bg-primary-blue
						dark:hover:bg-accent-orange
						transition
						focus:outline-none focus:ring-2 focus:ring-offset-2
						focus:ring-primary-blue dark:focus:ring-account-orange
						focus:ring-offset-white
						dark:focus:ring-offset-black
          "
                >
                    بازگشت به صفحه اصلی
                </button>
            </div>
        </main>
    );
}
