import Button from "../../components/Button/Button"
import TextField from "../../components/Inputs/TextField"

const PaymentInformation = () => {
    return (
        <>
            <div className="w-full mx-auto flex flex-col">
                <main className="flex-1">
                    <div className="flex flex-col gap-3 mb-3">
                        <section className="payment-information">
                            <div className="bg-custom-bg-card rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                                <div className="p-4 flex flex-col gap-2">
                                    <div className="text-white text-sm font-semibold font-peyda text-center py-3">اطلاعات نهایی برای پرداخت</div>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between items-center border-b border-dashed border-gray-600 pb-3">
                                            <div className="text-gray-300 text-sm font-peyda">
                                                مقدار <small>(به تومان)</small>
                                            </div>
                                            <div className="text-neutral-300 font-semibold font-peyda">2,500,000</div>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-dashed border-gray-600 pb-3">
                                            <div className="text-gray-300 text-sm font-peyda">تاریخ و زمان :</div>
                                            <div className="text-neutral-300 font-semibold font-peyda">15:25 1403/08/15</div>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-dashed border-gray-600 pb-3">
                                            <div className="text-gray-300 text-sm font-peyda">نوع تراکنش</div>
                                            <div className="text-neutral-300 font-semibold font-peyda">خرید طلای 18 عیار</div>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <label className="block text-white text-xs font-peyda mb-2 font-semibold">کد تخفیف</label>
                                        <div className="flex gap-2">
                                            {/* <input
                                                type="text"
                                                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="کد تخفیف را وارد نمایید"
                                            /> */}
                                            <TextField className="w-full" placeholder="کد تخفیف را وارد نمایید" />
                                            <Button className="bg-accent-orange text-white text-xs px-4">{"اعمال"}</Button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button className="bg-accent-orange text-white px-4 text-xs">{"پرداخت از طریق درگاه بانکی"}</Button>
                                        <Button className="bg-accent-orange text-white px-4 text-xs">{"پرداخت از طریق کیف پول"}</Button>
                                        <Button className="bg-accent-orange text-white px-4 text-xs">{"کپی کردن لینک پرداخت"}</Button>
                                        <Button className="bg-accent-orange text-white px-4 text-xs">{"ارسال لینک پرداخت با پیامک"}</Button>
                                        <Button className="bg-accent-orange text-white px-4 text-xs">{"ارسال لینک پرداخت از طریق واتس آپ"}</Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}

export default PaymentInformation