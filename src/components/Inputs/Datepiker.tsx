import type { IDatepicker } from "../../types/input";

const Datepicker = ({ placeholder }: IDatepicker) => {
  return (
    <div className="flex flex-col gap-2 bg-custom-backdrop">
    
      <div className="rounded-xl border border-custom-border-light">
        <input
          type="text"
          placeholder={placeholder}
          className="p-3 w-full bg-transparent outline-none placeholder:text-custom-text-gray text-custom-text-gray text-xl-custom"
        />
      </div>
    </div>
  );
};

export default Datepicker;