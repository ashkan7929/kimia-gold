import WomanIcon from "../../assets/images/girl-student.svg";
import ManIcon from "../../assets/images/student-boy.svg";

type GenderSelectorProps = {
  selectedGender: "man" | "woman";
  onSelectGender: (value: "man" | "woman") => void;
};

const GenderSelector = ({ selectedGender, onSelectGender } : GenderSelectorProps) => {
  const options = [
   { label: "مرد", icon: ManIcon, value: "man" },
   { label: "زن", icon: WomanIcon, value: "woman" },
  ];

  return (
    <div className="flex gap-4 justify-between w-full mt-4 items-center">
      <label className="text-white font-semibold text-[0.635625rem]">جنسیت</label>
        <div className="bg-[#1C1A7D] shadow-custom px-2 py-2 w-full max-w-[249px] rounded flex justify-between">
      {options.map(({ label, icon, value }) => (
         <button
          key={value}
          onClick={() => onSelectGender(value)}
          className={`flex items-center justify-center gap-2 px-[9px] w-1/2 py-2 rounded-[6px] text-white text-sm transition-all duration-300
            ${selectedGender === value ? "bg-[#2256FF]" : ""}`}
        >
          <span>{label}</span>
          <img src={icon} alt={label} className="w-5 h-5" />
        </button>

      ))}
             </div>
    </div>
  );
};


export default GenderSelector;
