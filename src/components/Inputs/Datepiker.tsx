import type { Datepicker } from "../../types/input";

const Datepicker = ({ placeholder }: Datepicker) => {
  return (
    <div className="flex bg-custom-backdrop flex-col gap-2">
    
      <div className="border border-custom-border-light rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full placeholder:text-custom-text-gray p-3 text-custom-text-gray text-xl-custom bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Datepicker;