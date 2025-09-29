import { useRef, useState } from 'react';

interface OTPInputProps {
    length?: number;
    onChange: (value: string) => void;
    className?: string;
}

const latinDigital = (s: string): string =>
    s
        .replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
        .replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));

const OTPInput = ({ length = 6, onChange, className }: OTPInputProps) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const setFrom = (raw: string, startIndex = 0) => {
        const digits = latinDigital(raw).replace(/\D/g, '');
        if (!digits) return;

        setOtp(prev => {
            const next = [...prev];
            const slice = digits.slice(0, length - startIndex);
            slice.split('').forEach((ch, i) => {
                next[startIndex + i] = ch;
            });
            onChange(next.join(''));
            return next;
        });

        const focusIdx = Math.min(startIndex + digits.length, length) - 1;
        if (focusIdx >= 0) inputsRef.current[focusIdx]?.focus();
    };

    const handleChange = (value: string, index: number) => {
        if (value.length > 1) {
            setFrom(value, index);
            return;
        }
        if (!/^[0-9]?$/.test(value)) return;

        const next = [...otp];
        next[index] = value;
        setOtp(next);
        onChange(next.join(''));

        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
        if (e.key === 'ArrowLeft' && index > 0) inputsRef.current[index - 1]?.focus();
        if (e.key === 'ArrowRight' && index < length - 1) inputsRef.current[index + 1]?.focus();
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text') || '';
        setFrom(text, index);
    };

    return (
        <div dir="ltr" className={`grid grid-cols-6 gap-2 ${className || ''}`}>
            {Array.from({ length }).map((_, i) => (
                <input
                    key={i}
                    ref={el => {
                        inputsRef.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    onPaste={e => handlePaste(e, i)}
                    maxLength={1}
                    pattern="[0-9]*"
                    value={otp[i]}
                    onChange={e => handleChange(e.target.value, i)}
                    onKeyDown={e => handleKeyDown(e, i)}
                    className="h-12 text-center text-lg font-peyda dark:text-text-color text-light-text-color dark:bg-gray-900 bg-gray-100 border-custom-gray border dark:border-none rounded-lg focus:outline-none focus:border-primary-blue dark:focus:border-light-text-color"
                />
            ))}
        </div>
    );
};

export default OTPInput;
