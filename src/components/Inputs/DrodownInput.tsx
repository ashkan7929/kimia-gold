import React from 'react';
import type { SubjectSelectProps } from '../../types/input';

const SubjectSelect: React.FC<SubjectSelectProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label className="text-custom-text-primary text-xl-custom font-bold mb-2 block">
        موضوع
      </label>
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border dark:border-custom-border-light border-custom-gray rounded-xsm p-3.5 text-custom-text-primary text-xl-custom font-medium bg-transparent outline-none"
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="text-custom-text-primary bg-custom-bg-menu font-peyda "
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubjectSelect;
