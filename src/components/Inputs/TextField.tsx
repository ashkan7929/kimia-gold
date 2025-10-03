import { forwardRef } from 'react';
import type { TextFieldProps } from '../../types/input';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            mobileIcon,
            placeholder,
            className,
            onChange,
            defaultValue,
            disabled,
            type = 'text',
            ...rest
        },
        ref,
    ) => {
        return (
            <div className={`${className} relative`}>
                <div className="flex items-center dark:text-text-color text-light-text-color border-custom-gray rounded-xsm dark:border-gray-500 border">
                    <div className="absolute h-full right-4 flex items-center justify-center text-gray-500 dark:text-gray-300">
                        {mobileIcon}
                    </div>
                    <input
                        ref={ref}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        onChange={onChange}
                        type={type}
                        className="
             
              text-sm w-full h-10 pr-10 pl-5
              dark:bg-black bg-white shadow-md
              border-custom-gray rounded-lg
              dark:text-text-color text-gray-500
              dark:placeholder:text-gray-600
              placeholder:text-black placeholder:opacity-20 dark:placeholder:opacity-40
              focus:outline-none dark:focus:border-primary-blue focus:border-light-text-color
            "
                        placeholder={placeholder}
                        {...rest}
                    />
                </div>
            </div>
        );
    },
);

TextField.displayName = 'TextField';
export default TextField;
