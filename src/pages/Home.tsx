import React from "react";
import Header from "../components/Layout/Header";

const Home: React.FC = () => {
  const services: string[] = ["خدمات آنلاین", "پشتیبانی ۲۴/۷", "تحلیل بازار", "مشاوره رایگان"];
  const quickActions: string[] = ["خرید طلا", "فروش طلا", "تراکنش‌ها", "تاریخچه"];
  const marketActions: string[] = ["پیشنهاد بازار", "فروش محصول طلا", "دریافت خدمات"];
  const bottomNav: string[] = ["خانه", "خرید", "فروش", "کیف پول", "پروفایل"];

  const prices = [
    { title: "سکه امامی", price: "۶۴,۷۰۶,۰۰۰", change: "+۲.۵٪" },
    { title: "طلا ۱۸ عیار", price: "۲۶,۴۰۷,۰۰۰", change: "+۲.۷٪" },
  ];

  return (
    <div className=" flex flex-col items-center min-h-screen">

   <Header />
      {/* Welcome Box */}
      <section className="w-full max-w-[375px] px-4">
        <div className=" rounded-lg p-6 text-center min-h-[10.875rem] relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('./assets/images/Lines-pattern.png')" }}></div>
          <div className="relative z-10">
            <img src="./assets/images/logo/logo.png" alt="logo" className="w-[34px] h-[34px] mx-auto mb-2" />
            <h2 className="text-white font-bold text-lg">خرید و فروش طلا در کیمیا گلد</h2>
            <p className="text-white text-[0.58913rem] mt-2">همیشه بهترین قیمت طلا را از ما بخواهید</p>
          </div>
        </div>
      </section>

      {/* صفحه کیمیاگری */}
      <section className="mt-6 px-4 w-full max-w-[375px]">
        <div className="bg-[#090088] text-white rounded-lg p-4 text-center shadow-md relative">
          <h3 className="text-base font-bold mb-2">صفحه کیمیاگری</h3>
          <p className="text-xs">محیطی برای ترکیب طلا، محاسبات قیمت، و دسترسی پیشرفته</p>
          <button className="mt-3 px-4 py-1 bg-orange-400 rounded-full text-xs font-bold">مشاهده خدمات</button>
        </div>
      </section>

      {/* بازار و خدمات */}
      <section className="mt-6 px-4 w-full max-w-[375px] grid grid-cols-3 gap-3 text-white text-xs font-bold">
        {marketActions.map((label, i) => (
          <div key={i} className="bg-primary-light rounded-lg p-3 flex flex-col items-center justify-center shadow-md">
            {/* SVG */}
            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* جدول قیمت */}
      <section className="prices-table mt-6 px-4 w-full max-w-[375px]">
        {prices.map((item, i) => (
          <div key={i} className="bg-primary-light rounded-lg border border-custom-border p-3 mb-2">
            <div className="flex items-center justify-between mb-2 text-white text-sm font-semibold">
              <span>{item.title}</span>
              <span>{item.price}</span>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex justify-center items-center px-2 py-1 rounded bg-[rgba(162,230,151,0.2)] text-[#21AF30] text-[0.5rem] font-semibold leading-normal">
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* خدمات سریع */}
      <section className="quick-access text-center mt-6 px-4 w-full max-w-[375px]">
        <div className="grid grid-cols-4 gap-4">
          {quickActions.map((label, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-[1.9rem] h-[1.9rem] rounded-full bg-[#EA8A2A] border border-[#3B476D] mb-1 flex justify-center items-center shadow-md">
                {/* SVG */}
              </div>
              <span className="text-[#E8E8E8] text-[0.433rem] font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-4 left-0 right-0 z-[1000] mx-auto w-full max-w-[375px] px-4">
        <nav className="flex h-[3.5625rem] px-8 justify-between items-center rounded-[2.8125rem] bg-[#2256FF] text-xs font-semibold text-white shadow-md">
          {bottomNav.map((label, i) => (
            <button
              key={i}
              className={`flex flex-col items-center gap-1 ${label === "فروش" ? "-mt-4" : ""}`}
            >
              <div className={`${label === "فروش" ? "w-[2.5625rem] h-[2.5625rem] rounded-full bg-[#EA8A2A] flex justify-center items-center" : ""}`}>
                {/* SVG */}
              </div>
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </footer>


   
    </div>
  );
};

export default Home;
