import type { MobileInputProps } from '../../types/input';

const MobileInput = ({ mobileIcon, label, placeholder }: MobileInputProps) => {
    return (
        <div className="flex gap-custom flex-col mb-2 text-custom-lightergray">
            <label className=" text-8xl-custom text-white mb-1 font-semibold ">{label}</label>
            <div className="flex items-center text-white rounded-xsm gap-custom border-light border px-2.2 w-full bg-input">
                {mobileIcon}
                <input
                    type="text"
                    className="font-medium text-xl-custom w-full bg-transparent outline-none py-2 placeholder-lightergray"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default MobileInput;
