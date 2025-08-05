import dataCalender from "../../assets/calendar-date.svg"
const Datepiker = () => {
  return (
    <div className='flex items-center text-white rounded-default border-light border px-smal w-full'>  
     <img src={dataCalender} alt="آیکون  تقویم" />
     <input type="date"  placeholder='تاریخ تولد خود را وارد کنید' className='font-medium text-xl-custom w-full bg-transparent outline-none py-2 placeholder-custom-lightGray'/>
    </div>
  )
}

export default Datepiker