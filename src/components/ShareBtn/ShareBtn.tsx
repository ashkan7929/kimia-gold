import { useState } from 'react';
import { IoMdShare } from 'react-icons/io';

const ShareBtn = () => {
    const [showModal, setShowModal] = useState(false);

    const receipt = {
        payeeName: '',
        amountIRR: 20_000_000,
        paidAt: new Date(),
        cardNumber: '6219861929676020',
        trackingCode: '784114',
        referenceCode: '',
    };

    const title = 'رسید پرداخت';

    const fmtMoney = new Intl.NumberFormat('fa-IR');
    const amountText = `${fmtMoney.format(receipt.amountIRR)} ریال`;

    const fmtDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    const dateText = fmtDate.format(new Date('2025-09-24T10:08:00Z'));

    const groupCard = (s: string) => s.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    const toFaDigits = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d]);

    const parts: string[] = [];
    if (receipt.payeeName) parts.push(receipt.payeeName);
    parts.push(`مبلغ: ${amountText}`);
    parts.push(`زمان : ${dateText}`);
    parts.push(`واریز به کارت: ${toFaDigits(groupCard(receipt.cardNumber))}`);
    if (receipt.trackingCode) parts.push(`شماره پیگیری: ${toFaDigits(receipt.trackingCode)}`);
    if (receipt.referenceCode) parts.push(`شماره مرجع: ${toFaDigits(receipt.referenceCode)}`);

    const message = parts.join('\n');
    const rtlMessage = '\u202B' + message;

    const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(rtlMessage)}`;
    const telegramLink = `https://t.me/share/url?text=${encodeURIComponent(rtlMessage)}`;
    const smsLink = isIOS
        ? `sms:&body=${encodeURIComponent(rtlMessage)}`
        : `sms:?body=${encodeURIComponent(rtlMessage)}`;

    const handleNativeShare = async () => {
        try {
            if (navigator && (navigator as any).share) {
                await (navigator as any).share({
                    title,
                    text: rtlMessage,
                });
                return;
            }
        } catch (e) {
            console.log(e);
        }
        setShowModal(true);
    };

    const handleCopy = async () => {
        try {
            if (!navigator?.clipboard) throw new Error('no-clipboard');
            await navigator.clipboard.writeText(rtlMessage);
            alert('متن کپی شد ✅');
        } catch {
            alert('کپی نشد. لطفاً دستی کپی کنید.');
        }
    };

    return (
        <div>
            <button
                onClick={handleNativeShare}
                className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold rounded-lg bg-primary-blue dark:bg-accent-orange text-white w-full flex items-center justify-center gap-2"
            >
                <IoMdShare />
                اشتراک رسید
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4 text-right">
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
                                onClick={handleCopy}
                            >
                                کپی متن
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
