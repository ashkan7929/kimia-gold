import { useState, forwardRef } from 'react';
import { LuEyeClosed, LuEye } from '../../Icons';
import type { TextFieldProps } from '../../types/input';

const PasswordInput = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ placeholder = 'رمز عبور', className, onChange, defaultValue, disabled, ...rest }, ref) => {
        const [visible, setVisible] = useState(false);

        return (
            <div className={`${className} relative`}>
                <div className="flex items-center dark:text-text-color text-light-text-color border-custom-gray rounded-xsm dark:border-custom-border-light border relative">
                    <div className="absolute h-full right-4 flex items-center justify-center">
                        {rest.mobileIcon}
                    </div>

                    <input
                        ref={ref}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        onChange={onChange}
                        type={visible ? 'text' : 'password'}
                        className="text-sm w-full h-10 pr-10 pl-10 dark:bg-custom-bg-input dark:text-text-color  bg-gray-100 border-custom-gray rounded-lg text-light-text-color font-peyda placeholder-custom-text-secondary  dark:focus:outline-none dark:focus:border-primary-blue focus:border-light-text-color"
                        placeholder={placeholder}
                        {...rest}
                    />

                    <div
                        className="absolute h-full left-3 flex items-center cursor-pointer dark:text-gray-400 text-black"
                        onClick={() => setVisible(prev => !prev)}
                    >
                        {visible ? <LuEye /> : <LuEyeClosed /> }
                    </div>
                </div>
            </div>
        );
    },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
