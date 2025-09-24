// import type { NationalCodeProps } from "../../types/input"

// const NationalCodeInput = ({ MdOutlineBadge, placeholder }: NationalCodeProps) => {
//   return (
//     <div className="flex items-center text-custom-lightergray gap-custom m-2 bg-input border border-light rounded-xsm px-2.2">
//       <MdOutlineBadge className="" />
//       <input
//         type="number"
//         placeholder={placeholder}
//         className="font-medium text-xl-custom w-full bg-transparent outline-none py-2 placeholder-custom-lightGray"
//       />
//     </div>
//   );
// };


// export default NationalCodeInput


import type { NationalCodeProps } from "../../types/input"

const NationalCodeInput = ({ MdOutlineBadge, placeholder }: NationalCodeProps) => {
  return (
<div className="flex flex-col mb-8" style={{ gap: "0.578125rem" }} >
      <label className="text-custom-text-primary text-xl-custom font-bold mb-2 block">
        {placeholder}
      </label>
      <div style={{ gap: "0.578125rem" }} className="flex items-center dark:bg-custom-bg-input bg-custom-gray border border-gray-500 rounded-xsm px-3.5 py-2.5">
       <div className="text-custom-text-gray">
         <MdOutlineBadge className="" />
        </div>
        
        <input
          type="number"
          placeholder={placeholder}
          className="w-full bg-white outline-none text-custom-text-primary placeholder-custom-text-gray font-medium text-xl-custom"
        />
   
      </div>
    </div>
  );
};

export default NationalCodeInput;