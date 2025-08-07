import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';

const CheckBox = ({ label }: { label: string }) => {
    return (
        <div className="flex items-center gap-sm">
            <Checkbox
                icon={<span className="block w-5 h-5 rounded border border-gray-100" />}
                checkedIcon={
                    <div className="flex items-center justify-center w-5 h-5 rounded bg-custom-bg-checkbox">
                        <CheckIcon sx={{ fontSize: 14, color: 'white' }} className='"flex items-center justify-center w-5 h-5 rounded bg-custom-bg-checkbox"' />
                    </div>
                }
                defaultChecked
            />
            <label className="font-peyda font-medium text-xl-custom text-white">{label}</label>
        </div>
    );
};

export default CheckBox;
