// src/components/Inputs/OptionSelect.tsx
import React, { useMemo } from "react";
import Typography from "@mui/material/Typography";

export type OptionItem<T> = {
  label: React.ReactNode;
  value: T;
  disabled?: boolean;
};

type Size = "sm" | "md" | "lg";

export interface OptionSelectProps<T> {
  id: string;
  name?: string;
  value: T | null;                          // null یعنی هیچ گزینه‌ای انتخاب نشده
  onChange: (value: T | null) => void;
  options: OptionItem<T>[];
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  invalid?: boolean;
  size?: Size;
  className?: string;                      
  getOptionKey?: (opt: OptionItem<T>) => string;
}

const keyOf = <T,>(v: T) => JSON.stringify(v);

const sizeClasses: Record<Size, string> = {
  sm: "p-2 text-[10px]",
  md: "p-3 text-sm",
  lg: "p-4 text-base",
};

function OptionSelect<T extends string | number | boolean | object>({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "یک گزینه را انتخاب کنید…",
  disabled,
  isLoading,
  invalid,
  size = "md",
  className = "",
  getOptionKey,
}: OptionSelectProps<T>) {
  const maps = useMemo(() => {
    const strToValue = new Map<string, T>();
    const keyByIndex: string[] = [];
    options.forEach((opt, idx) => {
      const k = getOptionKey ? getOptionKey(opt) : keyOf(opt.value);
      strToValue.set(k, opt.value);
      keyByIndex[idx] = k;
    });
    return { strToValue, keyByIndex };
  }, [options, getOptionKey]);

  const selectedKey = value === null ? "" : keyOf(value);

  const baseCls =
    "w-full bg-transparent rounded-lg font-peyda text-black dark:text-white " +
    "border dark:border-gray-400 border-custom-gray focus:outline-none " +
    "dark:focus:border-accent-orange transition-colors";
  const invalidCls = invalid ? " border-red-500 dark:border-red-400" : "";
  const finalCls = `${baseCls} ${sizeClasses[size]} ${invalidCls} ${className}`;

  return (
    <div>
      <select
        id={id}
        name={name}
        value={selectedKey}
        disabled={disabled || isLoading}
        onChange={(e) => {
          const k = e.target.value;
          if (!k) return onChange(null); 
          const v = maps.strToValue.get(k);
          onChange(v ?? null);
        }}
        className={finalCls}
        dir="rtl"
      >
        <option value="" disabled className="dark:bg-black bg-white">
          {isLoading ? "در حال بارگذاری…" : placeholder}
        </option>

        {options.map((opt) => {
          const k = getOptionKey ? getOptionKey(opt) : keyOf(opt.value);
          return (
            <option
              key={k}
              value={k}
              disabled={opt.disabled}
              className="dark:bg-black bg-white border border-gray-100"
            >
              <Typography className="dark:text-white font-peyda text-light-text-color" fontSize={10}>
                {opt.label}
              </Typography>
            </option>
          );
        })}
      </select>
      {invalid && (
        <div className="mt-1 text-[11px] text-red-600 dark:text-red-400">
          مقدار انتخابی نامعتبر است.
        </div>
      )}
    </div>
  );
}

export default OptionSelect;
