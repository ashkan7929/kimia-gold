import mobileIcon from "../../assets/mobileIcon.svg"

const MobileInput = () => {
  return (
    <div className='flex items-center text-white rounded-default border-light border px-smal w-full'>  
     <img src={mobileIcon} alt="آیکون شماره موبایل" />
     <input type="number"  placeholder='شماره موبایل خود را وارد کنید' className='font-medium text-xl-custom w-full bg-transparent outline-none py-2 placeholder-custom-lightGray'/>
    </div>
  )
}

export default MobileInput