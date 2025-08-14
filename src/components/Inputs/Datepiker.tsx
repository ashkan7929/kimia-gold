import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/colors/purple.css";
import React, { useState } from "react";

interface DateFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  mobileIcon?: React.ReactNode;
  disabled?: boolean;
}

const DateField = ({ value, onChange, placeholder, className, mobileIcon, disabled }: DateFieldProps) => {
  const [stateValue, setStateValue] = useState<any>(new DateObject({
    date: value,
    calendar: persian,
    locale: persian_fa
  }))

  onChange && onChange(stateValue?.format("YYYYMMDD").toString().replace(/[۰-۹]/g, (d: any) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))))

  return (<>
    <div className={`${className} relative`}>
      <div className="flex items-center text-white rounded-xsm bg-custom-bg-input border-custom-border-light border-2">
        <div className="absolute h-full right-4 flex items-center justify-center">
          {mobileIcon}
        </div>

        <DatePicker
          value={value ? stateValue : ""}
          onChange={setStateValue}
          placeholder={placeholder}
          weekStartDayIndex={1}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          disabled={disabled}
          inputClass="text-sm !w-full h-10 pr-10 pl-5 rounded-lg bg-transparent text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
        />
      </div>
    </div>
  </>
  );
};

export default DateField;
