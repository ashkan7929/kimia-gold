import nationalCode from "../../assets/nationalCode.svg"

const nationalCodeInput = () => {
  return (
     <div className='flex items-center text-white rounded-default border-light border px-smal w-full'>  
     <img src={nationalCode} alt="آیکون  کد ملی" />
     <input type="number"  placeholder='کد ملی خود را وارد کنید' className='font-medium text-xl-custom w-full bg-transparent outline-none py-2 placeholder-custom-lightGray'/>
    </div>
  )
}

export default nationalCodeInput