
// type MobileInputProps = {
//   label: string;
//   placeholder?: string;
//   mobileIcon?: React.ReactNode;
// };

// const MobileInput = ({mobileIcon, label, placeholder}: MobileInputProps) => {
//   return (
//     <div className="flex gap-[0.56125rem] flex-col">
//                   <label className=" text-[0.635625rem] text-white mb-1 font-semibold ">{label}</label>
//                   <div className="flex items-center text-white rounded-[0.555rem] gap-[0.56125rem] border-[#303072] border px-[0.954375rem] w-full">
//                     {mobileIcon}
//                     <input  type="text" className="font-medium text-[0.6875rem] w-full bg-transparent outline-none py-2 placeholder-[#A7A7A7]" placeholder={placeholder} />
//                   </div>
//                 </div>
//   )
// }

// export default MobileInput


type MobileInputProps = {
  label: string;
  placeholder?: string;
  mobileIcon?: React.ReactNode;
};

const MobileInput = ({mobileIcon, label, placeholder}: MobileInputProps) => {
  return (
    <div className="flex gap-custom flex-col mb-2">
                  <label className=" text-8xl-custom text-white mb-1 font-semibold ">{label}</label>
                  <div className="flex items-center text-white rounded-xsm gap-custom border-light border px-2.2 w-full bg-input">
                    {mobileIcon}
                    <input  type="text" className="font-medium text-xl-custom w-full bg-transparent outline-none py-2 placeholder-lightergray" placeholder={placeholder} />
                  </div>
                </div>
  )
}

export default MobileInput