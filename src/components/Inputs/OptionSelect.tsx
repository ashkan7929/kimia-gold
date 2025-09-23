import type { OptionSelectProps } from '../../types/input';
import Typography from '@mui/material/Typography';

const OptionSelect = ({ id, value, onChange, placeholder, options }: OptionSelectProps) => {
    return (
        <div>
            <select
                id={id}
                value={value === 0 ? '' : value}
                onChange={onChange}
                className="w-full p-3 bg-transparent border dark:border-gray-400 border-custom-gray rounded-lg font-peyda text-black dark:text-white text-sm focus:outline-none dark:focus:border-accent-orange !text-[10px]"
            >
                <option value="" disabled className="dark:bg-black bg-white ">
                    {placeholder}
                </option>
                {options.map(opt => (
                    <option
                        key={opt.value}
                        value={opt.value}
                        className="dark:bg-black bg-white border border-gray-100 outline-dashed outline-10"
                    >
                        <Typography
                            className="dark:text-white font-peyda text-light-text-color"
                            fontSize={10}
                        >
                            {opt.label}
                        </Typography>
                    </option>
                ))}
            </select>
        </div>
    );
};

export default OptionSelect;

