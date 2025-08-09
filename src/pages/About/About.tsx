import Button from "../../components/Button/Button"

const About = () => {
    return (
        <>
            <div className="w-full mx-auto min-h-screen flex flex-col">
                <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('../statics/assets/images/main-lines-pattern.png')" }}>
                    <div className="flex flex-col gap-3 mb-3">
                        <section className="">
                            <div className="bg-primary-darker rounded-lg shadow-[0px_0px_91.921px_0px_rgba(0,0,0,0.08)]">
                                <div className="p-4 flex flex-col gap-2">
                                    <div className="text-center relative w-56 h-[8.25rem] mx-auto my-4 flex items-center justify-center">
                                        <div className="w-24 h-24">
                                            <img src="/images/logo/logo.png" alt="" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="absolute inset-0">
                                            <img src="/images/about-group-icon.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="text-center font-alibaba text-lg font-bold leading-normal my-3 text-white">درباره ما</div>
                                    <div className="text-white text-right font-normal leading-loose mb-3">
                                        <p className="mb-2 font-peyda">
                                            کیمیا، پلی است بین سنت سرمایه‌گذاری در طلا و فناوری روز. ما با
                                            شناخت عمیق از بازار طلا و نیازهای کاربران، بستری دیجیتال و امن
                                            فراهم کرده‌ایم تا هر فردی، بدون نیاز به تخصص مالی، بتواند
                                            به‌راحتی و با اطمینان در طلا سرمایه‌گذاری کند. در دنیایی که
                                            ارزش پول هر روز دستخوش تغییر است، طلا همیشه نماد ثبات و امنیت
                                            بوده. کیمیا به شما این امکان را می‌دهد تا با چند کلیک، طلا
                                            بخرید، بفروشید یا نگه‌داری کنید، بدون آنکه نگران نوسانات
                                            غیرقابل پیش‌بینی یا ریسک‌های فیزیکی باشید. ما در کیمیا از
                                            فناوری هوش مصنوعی، سیستم‌های امنیتی پیشرفته و تحلیل‌گرهای
                                            بازار استفاده می‌کنیم تا تجربه‌ای بی‌نظیر و شفاف از
                                            سرمایه‌گذاری طلا را در اختیار کاربران قرار دهیم. هدف ما این
                                            است که هر فرد، چه حرفه‌ای باشد و چه مبتدی، بتواند از فرصت‌های
                                            موجود در بازار طلا بهره‌مند شود. کیمیا فقط یک اپلیکیشن نیست؛
                                            یک همراه قابل اعتماد برای ساختن آینده مالی بهتر است.
                                        </p>
                                        <p className="mb-2 font-peyda">
                                            کیمیا، پلی است بین سنت سرمایه‌گذاری در طلا و فناوری روز. ما با
                                            شناخت عمیق از بازار طلا و نیازهای کاربران، بستری دیجیتال و امن
                                            فراهم کرده‌ایم تا هر فردی، بدون نیاز به تخصص مالی، بتواند
                                            به‌راحتی و با اطمینان در طلا سرمایه‌گذاری کند.
                                        </p>
                                    </div>
                                    <div>
                                        <Button className="bg-primary-blue w-full text-white text-sm">برقراری ارتباط با ما</Button>
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

export default About