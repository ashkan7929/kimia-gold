import Typography from "@mui/material/Typography"
import ToggleButton from "../../components/Inputs/ToggleButton"

const Settings = () => {
    return (
            <div className="w-full mx-auto flex flex-col">
                <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('./assets/images/main-lines-pattern.png')" }}>
                    <div className="flex flex-col gap-3">
                        <div className="bg-custom-bg-card rounded-lg">
                            <div className="p-4 flex flex-col gap-4">
                                <Typography className="!font-alibaba text-white" fontWeight='bold' fontSize={15}>مدیریت پیام ها</Typography>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>اطلاع رسانی با ایمیل</Typography>
                                    <ToggleButton />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>اطلاع رسانی با پیامک</Typography>
                                    <ToggleButton />
                                </div>
                            </div>
                        </div>

                        <div className="bg-custom-bg-card rounded-lg">
                            <div className="p-4 flex flex-col gap-4">
                                <Typography className="!font-alibaba text-white" fontWeight='bold' fontSize={15}>مدیریت معامله ها</Typography>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>دریافت تایید برای ثبت سفارش</Typography>
                                    <ToggleButton />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>تایید با ایمیل کاربری</Typography>
                                    <ToggleButton />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>تایید دو مرحله ای پیامکی</Typography>
                                    <ToggleButton />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>دریافت تایید برای لغو سفارش</Typography>
                                    <ToggleButton />
                                </div>
                            </div>
                        </div>

                        <div className="bg-custom-bg-card rounded-lg">
                            <div className="p-4 flex flex-col gap-4">
                                <Typography className="!font-alibaba text-white" fontWeight='bold' fontSize={15}>اپدیت ها</Typography>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>اپدیت خودکار اپلیکیشن</Typography>
                                    <ToggleButton />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>اپدیت خرید ها موجود</Typography>
                                    <ToggleButton />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography className="!font-peyda text-white" fontSize={13}>اپدیت قیمت لحظه ای</Typography>
                                    <ToggleButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default Settings