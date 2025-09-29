import type { OptionSelectProps } from '../../types/input';
import Typography from '@mui/material/Typography';
import { FaChevronDown, FaChevronUp } from '../../Icons';
import { useState } from 'react';

const OptionSelect = ({ id, value, onChange, placeholder, options }: OptionSelectProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='relative'>
            <select
                id={id}
                value={value === 0 ? '' : value}
                onChange={onChange}
                onClick={() => setOpen(!open)}
                // onBlur={() => setOpen(false)}
                className="appearance-none w-full p-3 bg-transparent border dark:border-gray-400 border-custom-gray rounded-lg font-peyda text-black dark:text-white text-sm focus:outline-none dark:focus:border-accent-orange !text-[10px]"
            >
                <option
                    value=""
                    disabled
                    className="dark:bg-black text-black dark:text-white bg-white "
                >
                    {placeholder}
                </option>
                {options.map(opt => (
                    <option
                        key={opt.value}
                        value={opt.value}
                        className="dark:bg-black bg-white border border-gray-100 outline-dashed outline-10"
                    >
                        <Typography
                            className="dark:text-white font-peyda text-light-text-color dark:bg-accent-orange bg-primary-blue"
                            fontSize={10}
                        >
                            {opt.label}
                        </Typography>
                    </option>
                ))}
            </select>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700 dark:text-gray-300">
                {open ? <FaChevronUp /> : <FaChevronDown />}
            </span>
        </div>
    );
};

export default OptionSelect;
