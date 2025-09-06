import { Typography } from '@mui/material';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from '../../Icons';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Product = () => {
    const [OpenMenu, setOpenMenu] = useState(false);
    const [open, setIsOpen] = useState(true);

    const handleMenu = () => {
        setOpenMenu(!OpenMenu);
        setIsOpen(!open);
    };
    return (
        <div className="w-full mx-auto min-h-screen flex flex-col">
            <main
                className="flex-grow bg-cover bg-center"
                style={{
                    backgroundImage: "url('../statics/assets/images/main-lines-pattern.png')",
                }}
            >
                <div className="flex flex-col gap-3 mb-3">
                    <section className="">
                        <div className="bg-primary-darker light:bg-light-primary-darker rounded-lg shadow-[0px_0px_91.921px_0px_rgba(0,0,0,0.08)]">
                            <div className="p-4 flex flex-col gap-2 justify-center items-center">
                                <div className="bg-primary-darker light:bg-light-primary-darker flex flex-col gap-4 rounded-lg shadow-[0_0_92px_rgba(0,0,0,0.08)]">
                                    <div className="w-full rounded-lg border border-custom-gray bg-white p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full border border-custom-gray flex items-center justify-center overflow-hidden">
                                                <img
                                                    src="/images/gold.png"
                                                    alt="بیمه سامان"
                                                    className="w-4 h-4 object-contain"
                                                />
                                            </div>
                                            <h2 className="font-peyda text-sm text-slate-900 text-nowrap">
                                                طرح کیمیا ۱ - بیمه سامان
                                            </h2>
                                            {OpenMenu ? (
                                                <IoIosArrowDown onClick={handleMenu} />
                                            ) : (
                                                <IoIosArrowUp onClick={handleMenu} />
                                            )}
                                        </div>

                                        <div className="mt-3 space-y-1 text-right text-xs text-slate-700 font-alibaba">
                                            <Typography className="!font-peyda" fontSize={10}>
                                                سرمایه اولیه: ۱۰,۰۰۰ تومان
                                            </Typography>
                                            <Typography className="!font-peyda" fontSize={10}>
                                                حق بیمه سالانه: ۵۰۰,۰۰۰ تومان
                                            </Typography>
                                            {OpenMenu && (
                                                <div>
                                                    <Typography
                                                        className="!font-peyda"
                                                        fontSize={10}
                                                    >
                                                        پوشش فوت ناشی از حادثه: ۵,۰۰۰ تومان
                                                    </Typography>
                                                    <Typography
                                                        className="!font-peyda"
                                                        fontSize={10}
                                                    >
                                                        مدت بیمه‌نامه: ۲ سال
                                                    </Typography>
                                                </div>
                                            )}
                                        </div>
                                        <Link to="/products/:id">
                                            <Button className="mt-4 w-full rounded-md bg-primary-blue  text-white text-sm font-peyda">
                                                انتخاب
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="w-full rounded-lg border border-custom-gray bg-white p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full border border-custom-gray flex items-center justify-center overflow-hidden">
                                                <img
                                                    src="/images/gold.png"
                                                    alt="بیمه سامان"
                                                    className="w-4 h-4 object-contain"
                                                />
                                            </div>
                                            <h2 className="font-peyda text-sm text-slate-900 text-nowrap">
                                                طرح کیمیا ۲ - بیمه ایران
                                            </h2>
                                            {open ? (
                                                <IoIosArrowDown onClick={handleMenu} />
                                            ) : (
                                                <IoIosArrowUp onClick={handleMenu} />
                                            )}
                                        </div>

                                        <div className="mt-3 space-y-1 text-right text-xs text-slate-700 font-alibaba">
                                            <Typography className="!font-peyda" fontSize={10}>
                                                سرمایه اولیه: ۱۰,۰۰۰ تومان
                                            </Typography>
                                            <Typography className="!font-peyda" fontSize={10}>
                                                حق بیمه سالانه: ۵۰۰,۰۰۰ تومان
                                            </Typography>
                                            {open && (
                                                <div>
                                                    <Typography
                                                        className="!font-peyda"
                                                        fontSize={10}
                                                    >
                                                        پوشش فوت ناشی از حادثه: ۵,۰۰۰ تومان
                                                    </Typography>
                                                    <Typography
                                                        className="!font-peyda"
                                                        fontSize={10}
                                                    >
                                                        مدت بیمه‌نامه: ۲ سال
                                                    </Typography>
                                                </div>
                                            )}
                                        </div>

                                        <Link to="/products/:id">
                                            <Button className="mt-4 w-full rounded-md bg-primary-blue text-white text-sm font-peyda">
                                                انتخاب
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Product;
