import { useState, forwardRef } from 'react';
import { LuEyeClosed, LuEye } from '../../Icons';
import type { TextFieldProps } from '../../types/input';

const PasswordInput = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ placeholder = 'رمز عبور', className, onChange, defaultValue, disabled, ...rest }, ref) => {
        const [visible, setVisible] = useState(false);

        return (
            <div className={`${className} relative`}>
                <div className="flex items-center text-text-color light:text-light-text-color light:border-custom-gray rounded-xsm border-custom-border-light border relative">
                    <div className="absolute h-full right-4 flex items-center justify-center">
                        {rest.mobileIcon}
                    </div>

                    <input
                        ref={ref}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        onChange={onChange}
                        type={visible ? 'text' : 'password'}
                        className="text-sm w-full h-10 pr-10 pl-10 bg-custom-bg-input light:bg-gray-100 light:border-custom-gray rounded-lg text-text-color light:text-light-text-color font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue light:focus:border-light-text-color"
                        placeholder={placeholder}
                        {...rest}
                    />

                    <div
                        className="absolute h-full left-3 flex items-center cursor-pointer text-gray-400"
                        onClick={() => setVisible(prev => !prev)}
                    >
                        {visible ? <LuEyeClosed /> : <LuEye />}
                    </div>
                </div>
            </div>
        );
    },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
