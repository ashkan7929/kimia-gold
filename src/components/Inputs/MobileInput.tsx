import type { MobileInputProps } from '../../types/input';

const MobileInput = ({ mobileIcon, htmlFor, label = 'شماره موبایل', id, placeholder }: MobileInputProps) => {
    return (
        <div className="flex gap-custom flex-col mb-2 text-custom-lightergray">
            <label className=" text-8xl-custom text-white mb-1 font-semibold" htmlFor={htmlFor}>{label}</label>
            <div className="flex items-center dark:text-text-color text-light-text-color rounded-xsm gap-custom border-light border px-2.2 w-full bg-input">
                {mobileIcon}
                <input
                    id={id}
                    type="text"
                    className="font-medium text-xl-custom w-full bg-transparent outline-none py-2 placeholder-lightergray"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default MobileInput;
