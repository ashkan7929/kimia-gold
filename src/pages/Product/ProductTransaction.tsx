import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const ProductTransaction = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/")
    }
    return (
        <div className="bg-primary-darker light:bg-white">
            <section>
                <div className="bg-primary-darker light:bg-light-primary-darker rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                    <div className="p-4 flex flex-col gap-2">
                        <div className="text-white light:text-light-text-color font-semibold text-sm mb-2">
                            اطلاعات نهایی تراکنش
                        </div>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600 light:border-custom-gray">
                                <div className="text-gray-300 light:text-gray-700 text-xs">
                                    تاریخ و زمان :
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium">
                                    ۱۵:۲۵ ۱۴۰۳/۰۸/۱۵
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600 light:border-custom-gray">
                                <div className="text-gray-300 light:text-gray-700 text-xs">
                                    عنوان
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-sm">
                                    کیمیا
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600 light:border-custom-gray">
                                <div className="text-gray-300 light:text-gray-700 text-xs">
                                    طلا <small>(به گرم)</small>
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-sm">
                                    ۱
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600 light:border-custom-gray">
                                <div className="text-gray-300 light:text-gray-700 text-xs">
                                    قیمت طلا 18 عیار
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium">
                                    ۸۶,۸۴۰,۰۰۰
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600 light:border-custom-gray">
                                <div className="text-gray-300 light:text-gray-700 text-xs">
                                    هزینه بیمه
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium">
                                    ۲۵,۰۰۰,۰۰۰
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed border-gray-600 light:border-custom-gray">
                                <div className="text-gray-300 light:text-gray-700 text-xs">
                                    کل مبلغ پرداختی
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium">
                                    ۱۱۱,۸۴۰,۰۰۰
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <Button className="bg-accent-orange light:bg-primary-darker text-white text-sm">
                        {'دانلود فاکتور'}
                    </Button>
				      <Button onClick={handleNavigate} className="bg-primary-blue text-white text-sm">
                        {'بازگشت به صفحه اصلی'}
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ProductTransaction;
