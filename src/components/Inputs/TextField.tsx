import { forwardRef } from "react";
import type { TextFieldProps } from "../../types/input";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ mobileIcon, placeholder, className, onChange, defaultValue, disabled, type = "text", ...rest }, ref) => {
    return (
      <div className={`${className} relative`}>
        <div className="flex items-center dark:text-text-color text-light-text-color border-custom-gray rounded-xsm dark:border-custom-border-light border">
          <div className="absolute h-full right-4 flex items-center justify-center">{mobileIcon}</div>
          <input
            ref={ref}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={onChange}
            type={type}
            className="
              text-sm w-full h-10 pr-10 pl-5
              dark:bg-black bg-gray-100
              border-custom-gray rounded-lg
              text-text-color light:text-light-text-color
              placeholder:text-black dark:placeholder:text-white placeholder:opacity-100
              focus:outline-none dark:focus:border-primary-blue focus:border-light-text-color
            "
            placeholder={placeholder}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";
export default TextField;
