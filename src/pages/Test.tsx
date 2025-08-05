import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-custom-backdrop pt-10 font-peyda">
      <div className="w-full max-w-md bg-custom-bg-card border border-custom-border-card rounded-2xl p-6 shadow-lg">
        {/* هدر فرم */}
        <div className="text-center mb-6">
          <h1 className="text-custom-text-primary text-3xl-custom font-bold mb-2">
            نظران و پیشنهادات خود را با ما در میان بگذارید
          </h1>
          <p className="text-custom-text-subtitle text-base-custom">
            شما میتوانید پیشنهادات و انتظارات خود را با ما به اشتراک بگذارید.
          </p>
        </div>

        {/* فرم اصلی */}
        <form className="space-y-4">
          {/* بخش پیشنهاد خانوادگی */}
          <div className="space-y-2">
            <h2 className="text-custom-text-primary text-xl-custom font-bold">پیشنهاد خانوادگی</h2>
            
            <div className="flex gap-4">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input 
                  type="radio" 
                  name="suggestionType"
                  className="appearance-none w-3.5 h-3.5 rounded-full border border-custom-border-light checked:bg-gold-500"
                  defaultChecked
                />
                <span className="text-custom-text-secondary text-sm-custom">خانوادگی</span>
              </label>
              
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input 
                  type="radio" 
                  name="suggestionType" 
                  className="appearance-none w-3.5 h-3.5 rounded-full border border-custom-border-light checked:bg-gold-500"
                />
                <span className="text-custom-text-secondary text-sm-custom">کارکنان</span>
              </label>
            </div>
          </div>

          {/* بخش موضوع و پیشنهادات */}
		      <div className="flex justify-center items-start min-h-screen bg-custom-backdrop pt-10 font-peyda">
      <div className="w-full max-w-md bg-custom-bg-card border border-custom-border-card rounded-2xl p-6 shadow-lg"></div>
          <div className="space-y-4">
            <div>
              <h2 className="text-custom-text-primary text-xl-custom font-bold mb-2">موضوع</h2>
              <div className="bg-custom-bg-input border border-custom-border-light rounded-xl p-3">
                <p className="text-custom-text-gray text-sm-custom">خود پیشنهادات</p>
              </div>
            </div>

            <div>
              <h2 className="text-custom-text-primary text-xl-custom font-bold mb-2">پیشنهاد خود را ثبت نمایید</h2>
              <div className="bg-custom-bg-input border border-custom-border-light rounded-xl p-3 h-24">
                <p className="text-custom-text-gray text-sm-custom">متن پیشنهاد خود را وارد کنید...</p>
              </div>
            </div>
          </div>

          {/* بخش پرداخت پرسشنامه */}
          <div>
            <h2 className="text-custom-text-primary text-xl-custom font-bold mb-2">پرداخت پرسشنامه شما</h2>
            <div className="flex items-center gap-2.5">
              <div className="flex-1 bg-custom-bg-input border border-custom-border-dashed border-dashed rounded-xl px-3.5 py-2.5">
                <p className="text-custom-text-gray text-sm-custom">فایل خود را انتخاب کنید</p>
              </div>
              <button 
                type="button"
                className="bg-custom-bg-checkbox text-white text-sm-custom px-3.5 py-2.5 rounded-xl hover:bg-primary-blue transition"
              >
                آپلود
              </button>
            </div>
          </div>

          {/* دکمه ارسال */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-700 text-white font-bold py-3 rounded-xl hover:from-gold-600 hover:to-gold-800 transition-all shadow-lg"
            >
              استخراج
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;