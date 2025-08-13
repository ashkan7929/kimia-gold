import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-multi-date-picker/styles/colors/purple.css";

interface DateFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const DateField = ({ value, onChange, placeholder, className }: DateFieldProps) => {
  return (
    <div className={`${className} relative`}>
      <div className="flex items-center text-white rounded-xsm bg-custom-bg-input border-custom-border-light border">
        <div className="absolute h-full right-4 flex items-center justify-center">
          <FaRegCalendarAlt />
        </div>

        <DatePicker
          value={
            value
              ? new DateObject({ date: value, format: "YYYYMMDD", calendar: persian })
              : null
          }
          onChange={(date) => {
            onChange?.(date?.format("YYYYMMDD") || "");
          }}
          calendar={persian}
          locale={persian_fa}
          format="YYYYMMDD"
          calendarPosition="bottom-center"
          inputClass="text-sm w-full h-10 pr-10 pl-5 rounded-lg bg-transparent text-white font-peyda placeholder-custom-text-secondary focus:outline-none focus:border-primary-blue"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default DateField;
