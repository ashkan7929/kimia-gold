import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { GrGallery } from '../../Icons';
import DetaList from '../../components/List/DetaList';
import ShareBtn from '../../components/ShareBtn/ShareBtn';

export default function FailedTransaction() {
    const items = [
        { label: 'تاریخ و زمان :', value: '15:25 1403/08/15' },
        {
            label: (
                <>
                    مقدار <small>(به تومان)</small>
                </>
            ),
            value: '2,500,000',
        },
        { label: 'نوع تراکنش', value: 'خرید طلای 18 عیار' },
        { label: 'نوع واریز', value: 'عادی' },
        { label: 'شماره کارت', value: '6219861909432576' },
        { label: 'کد رهگیری', value: 'WLX-zd4Ak4xEM' },
        {
            label: 'وضعیت',
            value: (
                <span className="flex h-[1.6365rem] px-[0.99413rem] py-[0.35088rem] justify-center items-center gap-[0.58475rem] rounded-[0.3015rem] text-center text-[0.66675rem] font-bold leading-[120%] text-red-500 bg-red-500/20">
                    ناموفق
                </span>
            ),
            border: false,
        },
    ];
    const navigate = useNavigate();
    return (
        <div className="w-full mx-auto" dir="rtl" lang="fa">
            <div className="w-full mx-auto bg-[#040320] min-h-screen flex flex-col">
                <header>
                    <div
                        className="font-['Alibaba'] h-[11.5rem] w-full text-white text-[1.08331rem] font-bold leading-normal text-center flex items-center justify-center flex-col gap-[1.125rem] bg-[#993F3F]"
                        style={{
                            textShadow: '0px 0px 46.222px rgba(245, 245, 245, 0.06)',
                            boxShadow: 'inset 0px 0px 60px 0px rgb(0, 0, 0)',
                        }}
                    >
                        <div>
                            <img src="/images/failed.png" alt="" />
                        </div>
                        تراکنش ناموفق
                    </div>
                </header>

                <main
                    className="flex-grow relative bg-cover bg-center pb-20"
                    style={{
                        backgroundImage: 'url("../statics/assets/images/main-lines-pattern.png")',
                    }}
                >
                    <div
                        className="absolute z-[1] bottom-full w-full h-5"
                        style={{
                            backgroundImage:
                                'linear-gradient(320deg, #040320 10px, transparent 10px), linear-gradient(40deg, #040320 10px, transparent 10px)',
                            backgroundSize: '20px 20px',
                            backgroundRepeat: 'repeat-x',
                        }}
                    ></div>

                    <div className="container mx-auto px-4">
                        <div className="text-[#FAFAFA] text-center text-[0.9375rem] font-semibold leading-normal py-4 border-b border-[#292946]">
                            مشخصات تراکنش
                        </div>

                        <div className="p-[0.625rem]">
                            <div className="text-[#FAFAFA] text-center text-[0.88019rem] font-semibold leading-normal mb-4">
                                خرید طلای 18 عیار
                            </div>

                            <DetaList items={items} />

                            <div className="flex gap-[0.875rem]">
                                {/* <button onClick={toggleModal} className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold leading-[150%] text-center no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg bg-primary-darker border-primbg-primary-darker text-white w-full flex items-center justify-center gap-2 transition-all duration-150 ease-in-out">
                                    <IoMdShare />
                                    اشتراک رسید
                                </button> */}
                                <div className='w-full max-w-1/2'>
                                    <ShareBtn />
                                </div>
                                <button className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold leading-[150%] text-center no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg bg-primary-darker border-primary-bg-primary-darker text-white w-full flex items-center justify-center gap-2 transition-all duration-150 ease-in-out">
                                    <GrGallery />
                                    ذخیره در گالری
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                <footer>
                    <div className=" bg-primary border-custom-border p-4 mx-auto w-full ">
                        <Button
                            className="dark:bg-accent-orange bg-primary-blue text-white w-full max-w-[410px] text-sm"
                            onClick={() => navigate('/')}
                        >
                            بازگشت
                        </Button>
                    </div>
                </footer>
            </div>
        </div>
    );
}
