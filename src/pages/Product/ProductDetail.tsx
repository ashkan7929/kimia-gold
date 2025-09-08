import { Link } from 'react-router-dom';
import logoImg from '../../assets/img.png';


const ProductDetail = () => {
    return (
        <div className="bg-primary-darker light:bg-light-primary-darker min-h-max">
            <div className=" flex gap-3 flex-col justify-center items-center">
                <h2 className="text-sm !font-peyda text-text-color light:text-light-text-color mt-4">
                    جدول تعهدات بیمه‌نامه
                </h2>
                <div className="">
                    <img src={logoImg} alt="" />
                </div>
             <Link to="/paymentInsurance" className='px-10 flex justify-center items-center py-4 !w-full rounded-md bg-primary-blue text-sm text-white'>
                <button className="font-peyda mx-4 ">
                    ثبت اطلاعات
                </button>
            </Link>
              
            </div>
        </div>
    );
};

export default ProductDetail;
