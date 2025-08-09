import type { TextFieldProps } from "../../types/input";

const TextField = ({ mobileIcon, placeholder, className, onChange }: TextFieldProps) => {
  return (
    <div className={`${className} relative`}>
      <div className="flex items-center text-white rounded-xsm border-custom-border-light border">
        <div className="absolute h-full right-4 flex items-center justify-center">{mobileIcon}</div>
        <input
          onChange={onChange}
          type="text"
          className="text-sm w-full h-10 pr-10 pl-5 bg-custom-bg-input border border-custom-border-light rounded-lg text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default TextField