import Typography from '@mui/material/Typography';
import TextField from '../../components/Inputs/TextField';
import { IoMdPerson } from '../../Icons';

import Button from '../../components/Button/Button';

const Suggestions = () => {
    return (
        <div className="bg-dark text-text-color light:text-light-text-color relative overflow-hidden">
            <main className="flex-1 relative">
                <section className="min-h-screen bg-primary-darker light:bg-light-primary-darker rounded-lg p-4 flex flex-col justify-center items-center py-8 relative">
                    <div className="w-full mx-auto text-center">
                        <div className="mb-8">
                            <img
                                alt=""
                                src="/images/man-checking-comment.svg"
                                height={174}
                                width={232}
                                className="mx-auto"
                            />
                        </div>
                        <Typography
                            className="text-text-color text-right text-sm light:text-light-text-color !font-alibaba"
                            fontSize={17}
                        >
                            نظرات و پیشنهادات
                        </Typography>
                        <Typography className="text-text-color text-xs text-right !mb-3 light:text-light-text-color !font-alibaba" fontSize={12}>
                            شما می‌توانید پیشنهادات و انتقادات خود را با ما به اشتراک بگذارید
                        </Typography>
                        <div className="mb-4">
                            <Typography
                                className="text-text-color light:text-light-text-color !font-alibaba w-full text-start pb-2"
                                fontSize={12}
                            >
                                {' '}
                                نام و نام خانوادگی
                            </Typography>
                            <div className="flex gap-2 items-center relative">
                                <TextField
                                    mobileIcon={<IoMdPerson />}
                                    className="w-full"
                                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Typography
                                className="text-text-color light:text-light-text-color !font-alibaba w-full text-start pb-2"
                                fontSize={12}
                            >
                                {' '}
                                موضوع
                            </Typography>
                            <select className="!font-peyda w-full bg-custom-bg-input light:bg-light-primary-darker light:border-custom-gray light:focus:ring-0 light:focus:ring-custom-gray border border-custom-border-light text-sm rounded-lg px-4 py-3 text-white light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker focus:border-transparent">
                                <option className='!font-peyda' value={1}>خرید محصولات</option>
                                <option className='!font-peyda' value={2}>خرید محصولات</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <Typography
                                className="text-text-color light:text-light-text-color !font-alibaba w-full text-start pb-2"
                                fontSize={12}
                            >
                                {' '}
                                موضوع
                            </Typography>
                            <textarea
                                className="text-sm font-peyda w-full bg-custom-bg-input light:bg-light-primary-darker light:border-custom-gray border border-custom-border-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={4}
                                placeholder="پیغام و پیشنهاد شما"
                                defaultValue={''}
                            />
                        </div>
                        <div>
                            <Button className="bg-primary-blue w-full text-text-color text-sm">ثبت نظر</Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Suggestions;
