import { Link } from 'react-router-dom';
import logoImg from '../../assets/img.png';

import Button from '../../components/Button/Button';

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
                <Link to="/products/:id/card">
                    <Button className="mt-4 w-full rounded-md bg-primary-blue text-white text-sm font-peyda">
                        ثبت اطلاعات
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;
