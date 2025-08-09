import Typography from "@mui/material/Typography"
import TextField from "../../components/Inputs/TextField"
import { CiCalendarDate } from "../../Icons"
import Button from "../../components/Button/Button"

const Suggestions = () => {
    return (
        <div className="bg-dark text-white relative overflow-hidden">
            <main className="flex-1 relative">
                <section className="min-h-screen bg-primary-darker rounded-lg p-4 flex flex-col justify-center items-center py-8 relative">
                    <div className="w-full mx-auto text-center">
                        <div className="mb-8">
                            <img alt="" src="/images/man-checking-comment.svg" height={174} width={232} className="mx-auto" />
                        </div>
                        <Typography className="text-white !font-alibaba" fontSize={17} fontWeight="bold">نظرات و پیشنهادات خود را با ما در میان بگذارید</Typography>
                        <Typography className="text-white !font-alibaba" fontSize={12}>شما میتوانید پیشنهادات و انتقادات خود را با ما به اشتراک بگذارید</Typography>
                        <div className="mb-4">
                            <Typography className="text-white !font-alibaba w-full text-start pb-2" fontSize={12}> نام و نام خانوادگی</Typography>
                            <div className="flex gap-2 items-center relative">
                                <TextField mobileIcon={<CiCalendarDate />} className="w-full" placeholder="کد تخفیف را وارد نمایید" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Typography className="text-white !font-alibaba w-full text-start pb-2" fontSize={12}> موضوع</Typography>
                            <select className="!font-peyda w-full bg-custom-bg-input border border-custom-border-light text-sm rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-darker focus:border-transparent">
                                <option value={1}>خرید محصولات</option>
                                <option value={2}>خرید محصولات</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <Typography className="text-white !font-alibaba w-full text-start pb-2" fontSize={12}> موضوع</Typography>
                            <textarea
                                className="text-sm font-peyda w-full bg-custom-bg-input border border-custom-border-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={4}
                                placeholder="پیغام و پیشنهاد شما"
                                defaultValue={""}
                            />
                        </div>
                        <div>
                            <Button className="bg-primary-blue w-full text-sm">ثبت نظر</Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Suggestions