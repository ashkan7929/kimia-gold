
// import { forwardRef } from 'react';
// import type { TextFieldProps } from '../../types/input';

// const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
//   (
//     {
//       name,          
//       mobileIcon,
//       placeholder,
//       className,
//       onChange,      
//       onBlur,         
//       defaultValue,
//       disabled,
//       type = 'text',
//       value,        
//       ...rest
//     },
//     ref
//   ) => {
//     return (
//       <div className={`${className} relative`}>
//         <div className="flex items-center dark:text-text-color text-light-text-color border-custom-gray rounded-xsm dark:border-gray-500 border">
//           <div className="absolute h-full right-4 flex items-center justify-center text-gray-500 dark:text-gray-300">
//             {mobileIcon}
//           </div>

//           <input
//             ref={ref}
//             name={name}            
//             type={type}
//             disabled={disabled}
//             defaultValue={defaultValue}
//             onChange={onChange}   
//             onBlur={onBlur}          
//             placeholder={placeholder}
//             className="
//               text-sm w-full h-10 pr-10 pl-5
//               dark:bg-black bg-white shadow-md
//               border-custom-gray rounded-lg
//               dark:text-text-color text-gray-500
//               dark:placeholder:text-gray-200
//               placeholder:text-black placeholder:opacity-20 dark:placeholder:opacity-40
//               focus:outline-none dark:focus:border-accent-orange focus:border-primary-blue
//             "
//             {...rest}             
//           />
//         </div>
//       </div>
//     );
//   }
// );

// TextField.displayName = 'TextField';
// export default TextField;



// // import { forwardRef } from 'react';
// // import type { TextFieldProps } from '../../types/input';

// // const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
// //     (
// //         {
// //             name,
// //             mobileIcon,
// //             placeholder,
// //             className,
// //             onChange,
// //             value,
// //             defaultValue,
// //             disabled,
// //             type = 'text',
// //             ...rest
// //         },
// //         ref,
// //     ) => {
// //         return (
// //             <div className={`${className} relative`}>
// //                 <div className="flex items-center dark:text-text-color text-light-text-color border-custom-gray rounded-xsm dark:border-gray-500 border">
// //                     <div className="absolute h-full right-4 flex items-center justify-center text-gray-500 dark:text-gray-300">
// //                         {mobileIcon}
// //                     </div>
// //                     <input
// //                         name={name}
// //                         ref={ref}
// //                         defaultValue={defaultValue}
// //                         disabled={disabled}
// //                         onChange={onChange}
// //                         type={type}
// //                         className="
             
// //               text-sm w-full h-10 pr-10 pl-5
// //               dark:bg-black bg-white shadow-md
// //               border-custom-gray rounded-lg
// //               dark:text-text-color text-gray-500
// //               dark:placeholder:text-gray-200
// //               placeholder:text-black placeholder:opacity-20 dark:placeholder:opacity-40
// //               focus:outline-none dark:focus:border-accent-orange focus:border-primary-blue
// //             "
// //                         placeholder={placeholder}
// //                         {...rest}
// //                     />
// //                 </div>
// //             </div>
// //         );
// //     },
// // );

// // TextField.displayName = 'TextField';
// // export default TextField;
import { forwardRef } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  mobileIcon?: React.ReactNode;
  className?: string;
};

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ mobileIcon, className = '', name, onChange, onBlur, value, defaultValue, disabled, type='text', ...rest }, ref) => {
    return (
      <div className={`relative ${className}`}>
        <div className="flex items-center dark:text-text-color text-light-text-color border-custom-gray rounded-xsm dark:border-gray-500 border">
          <div className="absolute h-full right-4 flex items-center justify-center text-gray-500 dark:text-gray-300">
            {mobileIcon}
          </div>
          <input
            ref={ref}
            name={name}                // ⬅️ الزامی برای RHF
            onChange={onChange}        // ⬅️ الزامی
            onBlur={onBlur}            // ⬅️ الزامی
            value={value as any}       // ⬅️ اگر RHF کنترل‌شده پاس داد
            defaultValue={defaultValue}
            disabled={disabled}
            type={type}
            className="text-sm w-full h-10 pr-10 pl-5 dark:bg-black bg-transparent border-custom-gray dark:border-none rounded-lg dark:text-text-color text-light-text-color font-peyda placeholder-custom-text-secondary focus:outline-none dark:focus:border-gray-600 focus:border-light-text-color"
            {...rest}                  // ⬅️ بقیه پراپرتی‌ها مثل placeholder
          />
        </div>
      </div>
    );
  }
);
export default TextField;
