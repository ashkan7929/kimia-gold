import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/colors/purple.css";
import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";

interface DateFieldProps {
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  placeholder?: string;
  className?: string;
  mobileIcon?: React.ReactNode;
  disabled?: boolean;
  name?: string;
  onBlur?: (event: { target: { value: string } }) => void;
}

const DateField = forwardRef<HTMLInputElement, DateFieldProps>(({ value, onChange, placeholder, className, mobileIcon, disabled, name, ...rest }, ref) => {
  // Convert YYYYMMDD format to DateObject
  const parseDate = (dateStr: string) => {
    if (!dateStr || dateStr.length !== 8) return null;
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return new DateObject({
      date: `${year}/${month}/${day}`,
      calendar: persian,
      locale: persian_fa
    });
  };

  const [stateValue, setStateValue] = useState<any>(value ? parseDate(value) : null);

  // Update stateValue when value prop changes
  useEffect(() => {
    setStateValue(value ? parseDate(value) : null);
  }, [value]);

  const handleChange = (date: any) => {
    setStateValue(date);
    if (onChange && date) {
      const formattedDate = date.format("YYYYMMDD").toString().replace(/[۰-۹]/g, (d: any) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
      onChange({ target: { value: formattedDate } });
    } else if (onChange) {
      onChange({ target: { value: "" } });
    }
  };

  // Create a hidden input for react-hook-form
  useImperativeHandle(ref, () => ({
    focus: () => {},
    blur: () => {},
    value: stateValue ? stateValue.format("YYYYMMDD").toString().replace(/[۰-۹]/g, (d: any) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))) : "",
    name: name || ""
  } as any));

  return (<>
    <div className={`${className} relative`}>
      <div className="flex items-center dark:text-white !text-black bg-white border-custom-gray rounded-xsm dark:bg-black dark:border-gray-500 border-2">
        <div className="absolute h-full right-4 flex items-center justify-center text-gray-500 dark:text-gray-300">
          {mobileIcon}
        </div>

        <DatePicker
          value={stateValue}
          onChange={handleChange}
          placeholder={placeholder}
          weekStartDayIndex={1}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          disabled={disabled}
          inputClass="text-sm !w-full h-10 pr-10 pl-5 rounded-lg bg-transparent text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
        />
      </div>
      {/* Hidden input for react-hook-form */}
      <input
        type="hidden"
        ref={ref}
        name={name}
        value={stateValue ? stateValue.format("YYYYMMDD").toString().replace(/[۰-۹]/g, (d: any) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))) : ""}
        {...rest}
      />
    </div>
  </>
  );
});

DateField.displayName = "DateField";

export default DateField;
