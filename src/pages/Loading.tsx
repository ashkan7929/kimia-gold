import logoDarkMode from "../../assets/images/logoSite.jpg"
import { useTheme } from "../contexts/ThemeContext";
import logoLightMode from "/images/vemLogoSite.png"

const Loading = () => {
      const { theme } = useTheme();
      const isDark = theme === 'dark';
    return (
        <>
            <div className="w-full max-w-[375px] mx-auto bg-primary-purple min-h-screen flex flex-col">
                <main
                    className="flex-grow flex items-center justify-center"
                    style={{
                        backgroundImage: "url('/images/Lines-pattern-starters.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="text-center relative">
                        <div className="w-24 h-24">
                            <img
                                src={isDark ? logoDarkMode : logoLightMode}

                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="absolute bottom-8 right-0 left-0 flex items-center justify-center">
                            <div
                                className="w-[3.375rem] h-[3.375rem] border-[3px] border-white border-b-[#0F3DFB] rounded-full inline-block animate-spin"
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