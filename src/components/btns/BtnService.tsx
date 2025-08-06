import type { ServiceButtonProps } from "../../types/btn";

const BtnService = ({ icon, label }: ServiceButtonProps) => {
  return (
    <div className="bg-primary-light rounded-md flex flex-col items-center gap-2 text-white px-3 py-2 w-full">
      <img src={icon} alt={label} className="w-8 h-8" />
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default BtnService;
