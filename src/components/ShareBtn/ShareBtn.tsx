import { useMemo, useState } from 'react';
import { IoMdShare } from 'react-icons/io';

const ShareBtn = () => {
    const [showModal, setShowModal] = useState(false);

    const message = 'این یک تست است';
    const title = 'رسید پرداخت';

    const url = useMemo(() => {
        if (typeof window !== 'undefined') return window.location.href;
        return 'https://google.com';
    }, []);

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;

    const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const smsBody = encodeURIComponent(`${message} ${url}`);
    const smsLink = isIOS ? `sms:&body=${smsBody}` : `sms:?body=${smsBody}`;

    const handleNativeShare = async () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share({ title, text: message, url });
                return;
            } catch (err) {
                console.log(err);
            }
        }
        setShowModal(true);
    };

    return (
        <div>
            <button
                onClick={handleNativeShare}
                className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold leading-[150%] text-center no-underline align-middle cursor-pointer select-none rounded-lg bg-primary-darker text-white w-full flex items-center justify-center gap-2 transition-all"
            >
                <IoMdShare />
                اشتراک رسید
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[340px]">
                        <h2 className="text-lg font-semibold mb-4">اشتراک‌گذاری رسید</h2>

                        <div className="flex flex-col gap-3">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                                onClick={() => window.open(whatsappLink, '_blank')}
                            >
                                اشتراک در واتساپ
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                onClick={() => window.open(telegramLink, '_blank')}
                            >
                                اشتراک در تلگرام
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
                                onClick={() => (window.location.href = smsLink)}
                            >
                                ارسال پیامک
                            </button>
                            <button
                                className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-lg"
                                onClick={async () => {
                                    try {
                                        await navigator.clipboard.writeText(`${message}\n${url}`);
                                        alert('لینک کپی شد ✅');
                                    } catch {
                                        alert('کپی نشد. دستی کپی کنید.');
                                    }
                                }}
                            >
                                کپی لینک
                            </button>
                        </div>

                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg w-full"
                            onClick={() => setShowModal(false)}
                        >
                            بستن
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShareBtn;
