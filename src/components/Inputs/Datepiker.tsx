import type { Datepicker } from '../../types/input';
import { PiCalendarBlank } from 'react-icons/pi';

const Datepicker = ({ placeholder }: Datepicker) => {
    return (
        <div className="flex bg-custom-backdrop flex-col gap-2">
            <div className="w-full max-w-xs mx-auto relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-light p-3 pr-10 text-xl-custom bg-transparent outline-none placeholder:text-custom-lightergray"
                />
                <PiCalendarBlank
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-custom-lightergray pointer-events-none"
                    size={20}
                />
            </div>
        </div>
    );
};

export default Datepicker;
