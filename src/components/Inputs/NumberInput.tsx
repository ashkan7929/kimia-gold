import type { NumberInputProps } from "../../types/input";

const NumberInput = ({ placeholder }: NumberInputProps) => {
  return (
    <div className="flex bg-custom-backdrop flex-col gap-2 px-2 py-3 items-center">
      <div className="border border-custom-border-light rounded-xl w-full">
        <input
          type="number"
          placeholder={placeholder}
          className=" placeholder-custom-lightGray p-2 text-custom-text-gray text-xl-custom bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default NumberInput;