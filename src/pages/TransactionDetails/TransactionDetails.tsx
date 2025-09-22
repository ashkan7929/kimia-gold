import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const TransactionDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full mx-auto flex flex-col">
        <main className="flex-grow bg-[url('../images/main-lines-pattern.png')] bg-cover bg-center">
          <div className="flex flex-col gap-3 mb-3">
            <section>
              <div className="bg-light-primary-darker dark:bg-primary-darker rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                <div className="p-4 flex flex-col gap-2">
                  <div className="text-light-text-color dark:text-white font-semibold text-sm mb-2">
                    اطلاعات نهایی برای پرداخت
                  </div>

                  <ul className="space-y-3">
                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">
                        تاریخ و زمان :
                      </div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        15:25 1403/08/15
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">
                        مقدار <small>(به تومان)</small>
                      </div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        2,500,000
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">نوع تراکنش</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        خرید طلای 18 عیار
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">نوع واریز</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        عادی
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">شماره قرارداد</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        53465490923167
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">شماره کارت</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        6219861909432576
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">کد رهگیری</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        WLX-zd4Ak4xEM
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-2">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">وضعیت</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        <span className="inline-flex justify-center items-center px-2 py-1 rounded-[0.24569rem] bg-red-100 text-red-600 text-[0.49138rem] font-semibold dark:bg-red-900/20 dark:text-red-400">
                          ناموفق
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <Button className="text-white text-sm bg-primary-darker dark:bg-accent-orange">
                  {'دانلود فاکتور'}
                </Button>

                <Button  onClick={() => navigate('/')} className="bg-primary-blue dark:bg-none dark:border-gray-300 text-white text-sm">
                  {'بازگشت به صفحه اصلی'}
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default TransactionDetails;
