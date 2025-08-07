import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import avatarImg from "../assets/Avatar Image.svg"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { useState } from "react";
import nationalCodeIcon from "../assets/icon/NationalCode.svg"
import userProfile from "../assets/images/User-Profile,.svg"
import InputField from "./Inputfield/InputField";
import jobIcon from "../assets/images/suitcase-portfolio.svg"
import timeIcon from "../assets/images/calendar-date.svg"
import GenderSelector from "./Ui/GenderSelector"
 

const Test = () => {
  const [isShowOpen, setIsShowOpen] = useState(true);
  const [selectedGender, setGender] = useState<"man" | "woman">("man");;
const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);

   const onSelectGender = (value: "man" | "woman") => {
    setGender(value);
  };

  const handleOpen = () => {
    setIsShowOpen(prev => !prev)
  }


   const handleInfoOpen = () => {
    setIsContactInfoOpen(prev => !prev)
  }
  return (
    <div>

  <main className="flex-grow">
  <div className=" flex flex-col gap-3 mb-3 mt-[15px]">
    <section className="font-alibaba text-[0.8125rem] font-bold leading-normal mx-[18px]">
      <div className="bg-primary rounded-[10px] p-4">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-start gap-3">
            <button className="rounded-[20.535625rem] bg-[#2256FF] shadow-custom  flex justify-center items-center w-[1.375rem] h-[1.375rem] absolute bottom-[-0.15rem] right-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path d="M2.90015 12.802H12.1001" stroke="white" stroke-width="0.985713" stroke-linecap="round" />
                        <path
                        d="M8.58577 2.25818L9.01214 1.83182C9.71856 1.1254 10.8639 1.1254 11.5703 1.83182C12.2767 2.53824 12.2767 3.68358 11.5703 4.39L11.144 4.81637M8.58577 2.25818C8.58577 2.25818 8.63907 3.16421 9.4385 3.96364C10.2379 4.76307 11.144 4.81637 11.144 4.81637M8.58577 2.25818L4.666 6.17795C4.40051 6.44344 4.26776 6.57619 4.1536 6.72256C4.01893 6.89522 3.90347 7.08204 3.80926 7.27971C3.7294 7.44728 3.67004 7.62537 3.5513 7.98157L3.04818 9.49095M11.144 4.81637L7.22419 8.73614C6.95869 9.00163 6.82595 9.13438 6.67958 9.24854C6.50692 9.38321 6.3201 9.49867 6.12243 9.59288C5.95486 9.67274 5.77676 9.7321 5.42057 9.85083L3.91119 10.354M3.91119 10.354L3.54223 10.4769C3.36694 10.5354 3.17369 10.4898 3.04304 10.3591C2.91238 10.2285 2.86676 10.0352 2.92519 9.85991L3.04818 9.49095M3.91119 10.354L3.04818 9.49095"
                        stroke="white" stroke-width="0.985713" />
                </svg>
            </button>
            <div className="w-14 h-14 overflow-hidden rounded-full">
              <img src={avatarImg} alt="" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-white text-base">حجت بندانی</div>
            <div className="flex items-center gap-1 text-white">
              <MdOutlinePhoneAndroid />
              <span className="font-peyda font-medium text-[0.8125rem]" dir="ltr">0938774563</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="">
      <div className="" id="accordionInfo">
        {/* اطلاعات فردی */}
        <div className=" rounded-lg overflow-hidden mx-[18px]">
          <div  className=" flex items-center justify-between  gap-2 p-4 text-white bg-primary" onClick={handleOpen}>
                <div className="flex items-center gap-2 ml-[18px]">
                  <div className="bg-[#EA8A2A] rounded-[4px] w-[1.5625rem] h-[1.5625rem] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M4.25 15.4997C4.25 13.6247 5.75 12.1997 7.55 12.1997H11.375C13.25 12.1997 14.675 13.6997 14.675 15.4997"
                        stroke="white" stroke-width="1.1118" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M11.7504 4.4C13.0254 5.675 13.0254 7.7 11.7504 8.9C10.4754 10.1 8.45036 10.175 7.25036 8.9C6.05036 7.625 5.97536 5.6 7.25036 4.4C8.52536 3.2 10.4754 3.2 11.7504 4.4"
                        stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                 <h2 className="font-alibaba font-bold text-white text-[0.8125rem] leading-normal">اطلاعات فردی</h2>
                </div>
                {isShowOpen ? ( <IoIosArrowDown className="w-[1.25rem] h-[1.1875rem]" />) : (<IoIosArrowUp className="w-[1.25rem] h-[1.1875rem]" />)}

          </div>
          {isShowOpen && (
            <div id="collapseOne" className="bg-primary">
            <div className="p-4">
              <div className="flex flex-col gap-3 ">
            <InputField
                label="کد ملی"
                placeholder="کد ملی را وارد کنید"
                icon={nationalCodeIcon}
             />
                  <InputField
                label="تاریخ تولد"
                placeholder="تاریخ تولد خود را وارد کنید"
                icon={timeIcon}
             />
                <div>
                  <button type="submit" className="w-full bg-[#2256FF] font-peyda font-semibold text-[0.6875rem]  rounded-lg text-white py-2">جستجو و استعلام ثبت احوال</button>
                </div>
                 <InputField
                label="نام"
                placeholder="نام خود را وارد کنید"
                icon={userProfile}
             />
              <InputField
                label="نام خانوادگی"
                placeholder=" نام خانوادگی را وارد کنید"
                icon={userProfile}
             />
               <InputField
                label="شغل"
                placeholder="شغل خود را انتخاب کنید"
                icon={jobIcon}
             />
                <GenderSelector onSelectGender={onSelectGender} selectedGender={selectedGender} />
              </div>
            </div>
          </div>
          )}
        </div>
{/* data contact */}
       <div className=" rounded-lg overflow-hidden mx-[18px] mb-[199px]">
          <div  className=" flex items-center justify-between  gap-2 p-4 text-white bg-primary" onClick={handleInfoOpen}>
                <div className="flex items-center gap-2 ml-[18px]">
                  <div className="bg-[#EA8A2A] rounded-[4px] w-[1.5625rem] h-[1.5625rem] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M4.25 15.4997C4.25 13.6247 5.75 12.1997 7.55 12.1997H11.375C13.25 12.1997 14.675 13.6997 14.675 15.4997"
                        stroke="white" stroke-width="1.1118" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M11.7504 4.4C13.0254 5.675 13.0254 7.7 11.7504 8.9C10.4754 10.1 8.45036 10.175 7.25036 8.9C6.05036 7.625 5.97536 5.6 7.25036 4.4C8.52536 3.2 10.4754 3.2 11.7504 4.4"
                        stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                 <h2 className="font-alibaba font-bold text-white text-[0.8125rem] leading-normal">اطلاعات تماس</h2>
                </div>
                {isContactInfoOpen ? ( <IoIosArrowDown className="w-[1.25rem] h-[1.1875rem]" />) : (<IoIosArrowUp className="w-[1.25rem] h-[1.1875rem]" />)}

          </div>
          {isContactInfoOpen && (
            <div id="collapseOne" className="bg-primary">
            <div className="p-4">
              <div className="flex flex-col gap-3 ">
            <InputField
                label="شماره موبایل "
                placeholder="شماره موبایل را وارد کنید"
                icon={nationalCodeIcon}
             />
                  <InputField
                label="ایمیل"
                placeholder=" ایمیل خود را وارد کنید"
                icon={timeIcon}
             />
              
                 <InputField
                label="آدرس"
                placeholder="آدرس خود را وارد کنید"
                icon={userProfile}
             />
              <InputField
                label=" کدپستی"
                placeholder="  کدپستی را وارد کنید"
                icon={userProfile}
             />
              
              </div>
            </div>
          </div>
          )}
        </div>

      </div>
    </section>

  </div>
</main>
    </div>
  )
}

export default Test