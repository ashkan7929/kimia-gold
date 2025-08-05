// import Checkbox from '@mui/material/Checkbox';
// import CheckIcon from '@mui/icons-material/Check';
// import type { CheckboxProps } from '../../types/input';

// const CheckBox = ({ label }: CheckboxProps) => {
//     return (
//         <div className="flex items-center gap-3">
//             <Checkbox
//                 icon={<span className="block w-5 h-5 rounded border border-gray-300" />}
//                 checkedIcon={
//                     <span className="flex items-center justify-center w-5 h-5 rounded bg-primary-blueCheck">
//                         <CheckIcon sx={{ fontSize: 14, color: 'white' }} />
//                     </span>
//                 }
//                 sx={{ padding: 0 }}
//                 defaultChecked
//             />
//             <label className="font-peyda font-medium text-xl-custom text-white">
//                 {label}
//             </label>
//         </div>
//     );
// };

// export default CheckBox;


import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import type { CheckboxProps } from '../../types/input';

const CheckBox = ({ label }: CheckboxProps) => {
    return (
        <div className="flex items-center gap-3">
            <Checkbox
                icon={
                    <CheckIcon
                        sx={{
                            fontSize: 20,
                            borderRadius: '4px',
                            border: '1px solid #D1D5DB',
                            color: 'transparent',
                            backgroundColor: 'transparent',
                        }}
                    />
                }
                checkedIcon={
                    <CheckIcon
                        sx={{
                            fontSize: 20,
                            borderRadius: '4px',
                            color: 'white',
                            backgroundColor: '#2256FF',
                            padding: '2px',
                        }}
                    />
                }
                sx={{ padding: 0 }}
                defaultChecked
            />
            <label className="font-peyda font-medium text-xl-custom text-white">{label}</label>
        </div>
    );
};

export default CheckBox;
