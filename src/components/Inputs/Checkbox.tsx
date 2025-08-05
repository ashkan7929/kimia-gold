import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import type { CheckboxProps } from '../../types/input'; // اگر این تایپ در جای درستی تعریف شده باشد

const CheckBox = (props: CheckboxProps) => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        {...props} 
        icon={
          <span className="block w-5 h-5 rounded border border-gray-300" />
        }
        checkedIcon={
          <span className="flex items-center justify-center w-5 h-5 rounded bg-primary-blueCheck">
            <CheckIcon sx={{ fontSize: 14, color: 'white' }} />
          </span>
        }
      />
    </div>
  );
};

export default CheckBox;
