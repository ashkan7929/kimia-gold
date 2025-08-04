import CheckBox from "../components/Inputs/Checkbox"
import { useTranslation } from 'react-i18next';
import MobileInput from "../components/Inputs/MobileInput";
import { CiMobile3 } from "../Icons";

const Home = () => {
    const { t } = useTranslation();

  return (
    <div className="bg-primary-light">
        <CheckBox label={t('rules')}/>
        <MobileInput label={t('mobileInput')} placeholder={t('mobilePlaceholder')}  mobileIcon={<CiMobile3 />}
/>
    </div>
  )
}

export default Home


//                 <header className="max-w-full px-4">
//                     <nav className="mt-4 mb-4 flex h-[3.375rem] px-[0.9375rem] justify-between items-center bg-primary-light rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
// const Home = () => {
//                         </div>
//                     </nav>
//             <div className="w-full max-w-[375px] mx-auto bg-primary min-h-screen flex flex-col">
//                                     <div className="flex flex-col gap-2">
//                     <nav className="mt-4 mb-4 flex h-[3.375rem] px-[0.9375rem] justify-between items-center bg-primary-light rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
//                                             <span className="font-bold">حجت بندانی</span> خوش آمدید
//                             <div>
//                                 <button onClick={() => { }} className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-custom-border shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                         <path fillRule="evenodd" clipRule="evenodd" d="M6.45833 8.125H4.16667C3.24583 8.125 2.5 7.37917 2.5 6.45833V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H6.45833C7.37917 2.5 8.125 3.24583 8.125 4.16667V6.45833C8.125 7.37917 7.37917 8.125 6.45833 8.125Z" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 8.125H13.5417C12.6208 8.125 11.875 7.37917 11.875 6.45833V4.16667C11.875 3.24583 12.6208 2.5 13.5417 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V6.45833C17.5 7.37917 16.7542 8.125 15.8333 8.125Z" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path fillRule="evenodd" clipRule="evenodd" d="M6.45833 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V13.5417C2.5 12.6208 3.24583 11.875 4.16667 11.875H6.45833C7.37917 11.875 8.125 12.6208 8.125 13.5417V15.8333C8.125 16.7542 7.37917 17.5 6.45833 17.5Z" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M15.8333 17.5H13.5417C12.6208 17.5 11.875 16.7542 11.875 15.8333V13.5417C11.875 12.6208 12.6208 11.875 13.5417 11.875H15.8333C16.7542 11.875 17.5 12.6208 17.5 13.5417V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div>
//                                 <button className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-custom-border shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                         <path d="M15.6243 8.09127V7.5041C15.6243 4.28015 13.1062 1.66663 10 1.66663C6.8938 1.66663 4.37573 4.28015 4.37573 7.5041V8.09127C4.37573 8.79592 4.17476 9.48481 3.79817 10.0711L2.8753 11.5079C2.03235 12.8202 2.67587 14.6041 4.14197 15.0191C7.97728 16.1047 12.0227 16.1047 15.858 15.0191C17.3241 14.6041 17.9676 12.8202 17.1247 11.5079L16.2018 10.0711C15.8252 9.48482 15.6243 8.79592 15.6243 8.09127Z" stroke="#F3F3F3" strokeWidth="1.25" />
//                                         <path opacity="0.5" d="M6.25 15.8334C6.79586 17.2899 8.26871 18.3334 10 18.3334C11.7313 18.3334 13.2041 17.2899 13.75 15.8334" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="bg-[#090088] rounded-lg p-6 text-center min-h-[10.875rem] relative overflow-hidden" style={{ boxShadow: '0px 0px 91.921px 0px rgba(0, 0, 0, 0.08)' }}>
//                                 <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('./assets/images/Lines-pattern.png')" }}></div>
//                             <div className="w-[34px] h-[34px]">
//                                 <img src="./assets/images/logo/logo.png" alt="logo" className="w-full h-full object-contain" />
//                                         <span className="font-bold">خرید و فروش طلا</span> در کیمیا گلد
//                                     </h2>
//                                     <p className="text-white text-center text-[0.58913rem] font-normal leading-[0.95163rem]" style={{ textShadow: '0px 0px 46.404px rgba(245, 245, 245, 0.06)' }}>
//                             <div>
//                                 <button className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-custom-border shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                         <path d="M17.3271 7.93749C17.9855 8.59585 17.9855 9.66326 17.3271 10.3216C16.6688 10.98 15.6013 10.98 14.943 10.3216C14.2846 9.66326 14.2846 8.59585 14.943 7.93749C15.6013 7.27914 16.6688 7.27914 17.3271 7.93749" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path fillRule="evenodd" clipRule="evenodd" d="M11.8354 4.92766C12.8492 5.94139 12.8492 7.58498 11.8354 8.59872C10.8217 9.61246 9.17809 9.61246 8.16435 8.59872C7.15062 7.58499 7.15062 5.9414 8.16435 4.92766C9.17809 3.91393 10.8217 3.91393 11.8354 4.92766Z" stroke="#F3F3F3" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M5.05709 7.93749C5.71545 8.59585 5.71545 9.66326 5.05709 10.3216C4.39873 10.98 3.33133 10.98 2.67297 10.3216C2.01461 9.66326 2.01461 8.59585 2.67297 7.93749C3.33133 7.27914 4.39874 7.27914 5.05709 7.93749" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M19.1666 15.8343V14.921C19.1666 13.7701 18.2341 12.8376 17.0833 12.8376H16.4158" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M0.833252 15.8343V14.921C0.833252 13.7701 1.76575 12.8376 2.91659 12.8376H3.58409" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M14.449 15.8336V14.4994C14.449 12.8886 13.1431 11.5828 11.5323 11.5828H8.46647C6.85564 11.5828 5.5498 12.8886 5.5498 14.4994V15.8336" stroke="#F3F3F3" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="grid grid-cols-4 gap-3">
//                                 <div className="bg-primary-light rounded-lg border border-custom-border">
//                                     <div className="p-4 py-4">
//                                         <div className="mb-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
//                                                 <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.02L12 19L6.82 22.02L8 14.74L2 9L9.91 8.26L12 2Z" fill="#EA8A2A" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-[#F8F8F8] text-[0.675rem] font-semibold leading-normal" style={{ textShadow: '0px 0px 48.248px rgba(245, 245, 245, 0.06)' }}>
//                                             خدمات آنلاین
//                                         </h3>
//                                     </div>
//                                 </div>
//                                 <div className="bg-primary-light rounded-lg border border-custom-border">
//                                     <div className="p-4 py-4">
//                                         <div className="mb-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
//                                                 <path d="M12 6V12L16 14" stroke="#EA8A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                                 <circle cx="12" cy="12" r="10" stroke="#EA8A2A" strokeWidth="2" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-[#F8F8F8] text-[0.675rem] font-semibold leading-normal" style={{ textShadow: '0px 0px 48.248px rgba(245, 245, 245, 0.06)' }}>
//                                             پشتیبانی ۲۴/۷
//                                         </h3>
//                                     </div>
//                                 </div>
//                                 <div className="bg-primary-light rounded-lg border border-custom-border">
//                                     <div className="p-4 py-4">
//                                         <div className="mb-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
//                                                 <path d="M3 3L21 21M9 9L3 15L9 21L15 15M21 3L15 9L21 15" stroke="#EA8A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-[#F8F8F8] text-[0.675rem] font-semibold leading-normal" style={{ textShadow: '0px 0px 48.248px rgba(245, 245, 245, 0.06)' }}>
//                                             تحلیل بازار
//                                         </h3>
//                                     </div>
//                                 </div>
//                                 <div className="bg-primary-light rounded-lg border border-custom-border">
//                                     <div className="p-4 py-4">
//                                         <div className="mb-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto">
//                                                 <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#EA8A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-[#F8F8F8] text-[0.675rem] font-semibold leading-normal" style={{ textShadow: '0px 0px 48.248px rgba(245, 245, 245, 0.06)' }}>
//                                             مشاوره رایگان
//                                         </h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         {/* Prices Table */}
//                         <section className="prices-table">
//                             <div className="bg-primary-light rounded-lg border border-custom-border">
//                                 <div className="p-3">
//                                     <div className="flex items-center justify-between mb-3">
//                                         <div className="flex items-center gap-2">
//                                             <div className="w-6 h-6 bg-[#FBEDC9] rounded-full flex items-center justify-center">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
//                                                     <circle cx="6" cy="6" r="6" fill="#EA8A2A" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <div className="text-[0.5625rem] font-semibold leading-normal text-white">طلای ۱۸ عیار</div>
//                                                 <div className="text-[#D3D3D3] text-[0.49563rem] font-normal leading-normal">Gold 18K</div>
//                                             </div>
//                                         </div>
//                                         <div className="text-left">
//                                             <div className="text-white text-xs font-semibold leading-normal">۱,۲۳۰,۰۰۰</div>
//                                             <div className="text-[0.55338rem] font-medium leading-normal text-white">تومان</div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-center">
//                                         <span className="inline-flex justify-center items-center px-2 py-1 rounded-[0.24569rem] bg-[rgba(162,230,151,0.2)] text-[#21AF30] text-[0.49138rem] font-semibold leading-normal">
//                                             +۲.۵%
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         {/* Quick Access */}
//                         <section className="quick-access text-center">
//                             <div className="grid grid-cols-4 gap-4">
//                                 <div className="flex flex-col items-center">
//                                     <div className="flex w-[1.90656rem] h-[1.90656rem] justify-center items-center gap-[0.30494rem] rounded-[1.34325rem] border-[0.488px] border-[#3B476D] bg-[#EA8A2A] mb-1" style={{ boxShadow: '0px 0px 24.394px 0px rgba(255, 255, 255, 0.12)' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                             <path d="M8 2L10 6L14 6L11 9L12 14L8 11L4 14L5 9L2 6L6 6L8 2Z" fill="white" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-[#E8E8E8] text-[0.43331rem] font-semibold leading-[0.73663rem]" style={{ textShadow: '0px 0px 44.371px rgba(245, 245, 245, 0.06)' }}>
//                                         خرید طلا
//                                     </span>
//                                 </div>
//                                 <div className="flex flex-col items-center">
//                                     <div className="flex w-[1.90656rem] h-[1.90656rem] justify-center items-center gap-[0.30494rem] rounded-[1.34325rem] border-[0.488px] border-[#3B476D] bg-[#EA8A2A] mb-1" style={{ boxShadow: '0px 0px 24.394px 0px rgba(255, 255, 255, 0.12)' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                             <path d="M2 8H14M8 2V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-[#E8E8E8] text-[0.43331rem] font-semibold leading-[0.73663rem]" style={{ textShadow: '0px 0px 44.371px rgba(245, 245, 245, 0.06)' }}>
//                                         فروش طلا
//                                     </span>
//                                 </div>
//                                 <div className="flex flex-col items-center">
//                                     <div className="flex w-[1.90656rem] h-[1.90656rem] justify-center items-center gap-[0.30494rem] rounded-[1.34325rem] border-[0.488px] border-[#3B476D] bg-[#EA8A2A] mb-1" style={{ boxShadow: '0px 0px 24.394px 0px rgba(255, 255, 255, 0.12)' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                             <path d="M3 8L6 11L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-[#E8E8E8] text-[0.43331rem] font-semibold leading-[0.73663rem]" style={{ textShadow: '0px 0px 44.371px rgba(245, 245, 245, 0.06)' }}>
//                                         تراکنش‌ها
//                                     </span>
//                                 </div>
//                                 <div className="flex flex-col items-center">
//                                     <div className="flex w-[1.90656rem] h-[1.90656rem] justify-center items-center gap-[0.30494rem] rounded-[1.34325rem] border-[0.488px] border-[#3B476D] bg-[#EA8A2A] mb-1" style={{ boxShadow: '0px 0px 24.394px 0px rgba(255, 255, 255, 0.12)' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                             <path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2Z" stroke="white" strokeWidth="2" />
//                                             <path d="M8 5V8L10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-[#E8E8E8] text-[0.43331rem] font-semibold leading-[0.73663rem]" style={{ textShadow: '0px 0px 44.371px rgba(245, 245, 245, 0.06)' }}>
//                                         تاریخچه
//                                     </span>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </main>

//                 {/* Footer */}
//                 <footer className="h-[3.5625rem] w-full max-w-[375px] mb-4 mt-4 flex flex-col">
//                     <div className="max-w-[375px] fixed bottom-4 right-0 left-0 z-[1000] mx-auto px-4">
//                         <nav className="flex h-[3.5625rem] px-8 justify-between items-center rounded-[2.8125rem] bg-[#2256FF] text-xs font-semibold leading-normal" style={{ boxShadow: '0px 0px 67px 0px rgba(0, 0, 0, 0.09)' }}>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <path d="M7.5 2.5H12.5L17.5 7.5V17.5H2.5V2.5H7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>خانه</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>خرید</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white -mt-4">
//                                 <div className="w-[2.5625rem] h-[2.5625rem] flex justify-center items-center gap-[0.7765rem] rounded-[38.82575rem] bg-[#EA8A2A]">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                         <path d="M12 2L14.5 9L22 9.5L16.5 14.5L18 22L12 18.5L6 22L7.5 14.5L2 9.5L9.5 9L12 2Z" fill="white" />
//                                     </svg>
//                                 </div>
//                                 <span>فروش</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <path d="M2.5 7.5L10 12.5L17.5 7.5M2.5 7.5L10 2.5L17.5 7.5M2.5 7.5V12.5L10 17.5L17.5 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>کیف پول</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
//                                     <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>پروفایل</span>
//                             </button>
//                         </nav>
//                     </div>
//                 </footer>
//             </div>
//         </>

//                 {/* Footer */}
//                 <footer className="h-[3.5625rem] w-full max-w-[375px] mb-4 mt-4 flex flex-col">
//                     <div className="max-w-[375px] fixed bottom-4 right-0 left-0 z-[1000] mx-auto px-4">
//                         <nav className="flex h-[3.5625rem] px-8 justify-between items-center rounded-[2.8125rem] bg-[#2256FF] text-xs font-semibold leading-normal" style={{ boxShadow: '0px 0px 67px 0px rgba(0, 0, 0, 0.09)' }}>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <path d="M7.5 2.5H12.5L17.5 7.5V17.5H2.5V2.5H7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>خانه</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>خرید</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white -mt-4">
//                                 <div className="w-[2.5625rem] h-[2.5625rem] flex justify-center items-center gap-[0.7765rem] rounded-[38.82575rem] bg-[#EA8A2A]">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                         <path d="M12 2L14.5 9L22 9.5L16.5 14.5L18 22L12 18.5L6 22L7.5 14.5L2 9.5L9.5 9L12 2Z" fill="white" />
//                                     </svg>
//                                 </div>
//                                 <span>فروش</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <path d="M2.5 7.5L10 12.5L17.5 7.5M2.5 7.5L10 2.5L17.5 7.5M2.5 7.5V12.5L10 17.5L17.5 12.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>کیف پول</span>
//                             </button>
//                             <button className="bg-transparent flex flex-col gap-1 border-0 outline-0 text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
//                                     <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
//                                     <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                                 <span>پروفایل</span>
//                             </button>
//                         </nav>
//                     </div>
//                 </footer>
//     );
// export default Home;

