import { useTheme } from "../../contexts/ThemeContext";
import logoDarkMode from "/images/logo/vemLogoDark.png"
import logoLightMode from "/images/vemLogoSite.png"
const Loading = () => {
        const { theme } = useTheme();
        const isDark = theme === 'light';
    return (
        <>
            <div className="w-full mx-auto bg-black light:bg-white min-h-screen flex flex-col h-full">
                <main
                    className="flex-grow flex items-center justify-center h-full"
                    style={{
                        backgroundImage: "url('/images/Lines-pattern-starters.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="text-center relative h-full">
                        <div className="w-24 h-24">
                         <img alt="" src={isDark ? logoDarkMode : logoLightMode} width={34} height={34} />

                        </div>
                        <div className="fixed bottom-10 right-0 left-0 flex items-center justify-center">
                            <div
                                className="w-12.5 h-12.5 border border-white border-b-primary-blue dark:border-accent-orange light:border-b-primary-gray-200 rounded-full inline-block animate-spin"
                                style={{
                                    animation: 'rotation 1s linear infinite'
                                }}
                            />
                        </div>
                    </div>
                </main>
            </div>
            <style>{`
        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </>
    )
}

export default Loading