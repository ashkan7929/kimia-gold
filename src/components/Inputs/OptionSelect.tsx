import type { OptionSelectProps } from '../../types/input'
import Typography from '@mui/material/Typography';

const OptionSelect = ({
    id,
  value,
  onChange,
  placeholder,
  options,}: OptionSelectProps) => {
  return (
    <div>
    <select
      id={id}
      value={value === 0 ? "" : value}
      onChange={onChange}
      className="w-full p-3 bg-transparent border border-custom-border-default rounded-lg font-peyda text-sm focus:outline-none focus:border-primary-blue !text-[10px]"
    >
      <option value="" disabled className="bg-primary-dark">
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-primary-dark">
          <Typography className="text-white font-peyda" fontSize={10}>
            {opt.label}
          </Typography>
        </option>
      ))}
    </select>
  
    </div>
  )
}

export default OptionSelect