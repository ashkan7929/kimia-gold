import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';

const CheckBox = () => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        icon={
          <span className="block w-5 h-5 rounded border border-gray-300" />
        }
        checkedIcon={
          <span className="flex items-center justify-center w-5 h-5 rounded bg-primary-blueCheck">
            <CheckIcon sx={{ fontSize: 14, color: 'white' }} />
          </span>
        }
        sx={{ padding: 0 }}
      />
      <label className="font-peyda font-medium text-xl-custom text-white">
        قوانین اپلیکیشن را می‌پذیرم
      </label>
    </div>
  );
};

export default CheckBox;
