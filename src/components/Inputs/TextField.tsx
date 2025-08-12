import type { TextFieldProps } from '../../types/input';

const TextField = ({
    mobileIcon,
    placeholder,
    className,
    onChange,
    defaultValue,
    disabled,
    inputMode,
    maxLength,
    variant,
}: TextFieldProps) => {
    const mode = variant === 'number' ? 'numeric' : inputMode;

    return (
        <div className={`${className} relative`}>
            <div className="flex items-center text-white rounded-xsm border-custom-border-light border">
                <div className="absolute h-full right-4 flex items-center justify-center">
                    {mobileIcon}
                </div>
                <input
                    dir="rtl"
                    defaultValue={defaultValue}
                    disabled={disabled}
                    type={variant}
                     maxLength={maxLength}
                    {...(variant === 'number' && {
                        pattern: '[0-9]*',
                        onInput: (e: React.FormEvent<HTMLInputElement>) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                        },
                    })}
                    {...(variant === 'tel' && {
                        pattern: '[0-9+ ]*',
                        onInput: (e: React.FormEvent<HTMLInputElement>) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+ ]/g, '');
                        },
                    })}
                    onChange={onChange}
                    inputMode={mode}
                    className="text-sm w-full h-10 pr-10 pl-5 bg-custom-bg-input border border-custom-border-light rounded-lg text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default TextField;
