import logoDarkMode from "/images/logo/darkLogo.png";
import logoLightMode from "/images/logo/lightLogo.png";       
import { useTheme } from "../contexts/ThemeContext";

const Loading = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark"; 
  
  return (
    <div className="w-full max-w-[375px] mx-auto min-h-screen flex flex-col bg-white dark:bg-black">
      <main
        className="flex-grow flex items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center"
      >
        <div className="text-center relative">
          <div className="w-24 h-24 mx-auto">
            <img
              src={isDark ? logoDarkMode : logoLightMode} 
              alt="لوگوی وِم"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-8 right-0 left-0 flex items-center justify-center">
            <span
              className="
                w-14 h-14 rounded-full inline-block animate-spin
                border-[3px] border-neutral-900 dark:border-white
                border-b-transparent
              "
              aria-label="در حال بارگذاری"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loading;
