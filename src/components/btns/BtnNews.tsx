import type { ServiceButtonProps } from "../../types/btn";

const BtnNews = ({ icon, label }: ServiceButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <div className="bg-accent-orange rounded-full w-10 h-10 flex items-center justify-center">
        <img src={icon} alt={label} className=" object-contain" />
      </div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default BtnNews;
