import React, { useState } from 'react';
import { IoMdShare } from 'react-icons/io';

const ShareBtn = () => {
    const [showModal, setShowModal] = useState(false);
    const url = 'google.com';
    const message = 'این یک تست است';
    const title = 'رسید پرداخت';
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
    const smsLink = `sms:?body=${encodeURIComponent(message + ' ' + url)}`;

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return  <div>
            <button
                onClick={toggleModal}
                className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold leading-[150%] text-center no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg bg-primary-darker border-primbg-primary-darker text-white w-full flex items-center justify-center gap-2 transition-all duration-150 ease-in-out"
            >
                <IoMdShare />
                اشتراک رسید
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                        <h2 className="text-lg font-semibold mb-4">اشتراک‌گذاری رسید</h2>
                        
                        <div className="flex flex-col gap-3">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                                onClick={() => window.open(whatsappLink, "_blank")}
                            >
                                اشتراک‌گذاری در واتساپ
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                onClick={() => window.open(telegramLink, "_blank")}
                            >
                                اشتراک‌گذاری در تلگرام
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                                onClick={() => window.open(smsLink, "_blank")}
                            >
                                ارسال پیامک
                            </button>
                        </div>

                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg w-full"
                            onClick={toggleModal}
                        >
                            بستن
                        </button>
                    </div>
                </div>
            )}
        </div>
};

export default ShareBtn;
