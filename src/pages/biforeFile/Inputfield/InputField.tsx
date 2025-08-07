type InputFieldProps = {
  label: string;
  placeholder: string;
  icon: string; 

};


const InputField = ({ label, placeholder, icon }: InputFieldProps)  => {
  return (
        <div className="flex gap-[0.56125rem] flex-col">
                  <label className=" text-[0.635625rem] text-white mb-1 font-semibold ">{label}</label>
                  <div className="flex items-center text-white rounded-[0.555rem] gap-[0.56125rem] border-[#303072] border px-[0.954375rem] w-full">
                    <img src={icon} alt={label} />
                    <input  type="text" className="font-medium text-[0.6875rem] w-full bg-transparent outline-none py-2 placeholder-[#A7A7A7]" placeholder={placeholder} />
                  </div>
                </div>
  )
}

export default InputField