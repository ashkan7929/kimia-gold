import { forwardRef } from "react";
import type { TextFieldProps } from "../../types/input";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ mobileIcon, placeholder, className, onChange, defaultValue, disabled, type = "text", ...rest }, ref) => {
  return (
    <div className={`${className} relative`}>
      <div className="flex items-center text-white rounded-xsm border-custom-border-light border">
        <div className="absolute h-full right-4 flex items-center justify-center">{mobileIcon}</div>
        <input
          ref={ref}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          type={type}
          className="text-sm w-full h-10 pr-10 pl-5 bg-custom-bg-input border border-custom-border-light rounded-lg text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  )
});

TextField.displayName = "TextField";

export default TextField