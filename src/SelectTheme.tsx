import { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

const SelectTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={
        (isDark ? "bg-primary text-white " : "bg-gold-500 text-dark-900 ")
        + "p-2 rounded bg-primary-darker text-white flex items-center gap-2"
      }
    >
      {isDark ? <BiSolidMoon /> :  <FiSun />}
    </button>
  );
};

export default SelectTheme;
