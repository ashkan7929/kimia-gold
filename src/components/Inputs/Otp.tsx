import { useRef, useState } from "react";

interface OTPInputProps {
  length?: number;
  onChange: (value: string) => void;
  className?: string;
}

const OTPInput = ({ length = 6, onChange, className }: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // فقط اعداد
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div dir="ltr" className={`grid grid-cols-6 gap-2 ${className || ""}`}>
      {Array(length)
        .fill("")
        .map((_, i) => (
          <input
            key={i}
            ref={(el) => {
              if (el) inputsRef.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={otp[i]}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="h-12 text-center text-lg font-peyda text-text-color light:text-light-text-color bg-custom-bg-input light:bg-gray-100 light:border-custom-gray border border-custom-border-light rounded-lg focus:outline-none focus:border-primary-blue light:focus:border-light-text-color"
          />
        ))}
    </div>
  );
};

export default OTPInput;
