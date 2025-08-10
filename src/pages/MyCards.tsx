// CSS imports removed - using Tailwind CSS instead
const MyCards = () => {
    return (
        <>
            <div className="w-full mx-auto bg-[#040320] min-h-screen flex flex-col" style={{ backgroundImage: "url('../statics/assets/images/main-lines-pattern.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <header className="px-4">
                    <nav className="mt-4 mb-4 flex h-[3.375rem] px-[0.9375rem] justify-between items-center bg-[#010048] rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                        <div className="flex gap-1">
                            <div>
                                <button onClick={() => { }} className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-[#213163] shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.45833 8.125H4.16667C3.24583 8.125 2.5 7.37917 2.5 6.45833V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H6.45833C7.37917 2.5 8.125 3.24583 8.125 4.16667V6.45833C8.125 7.37917 7.37917 8.125 6.45833 8.125Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.8333 8.125H13.5417C12.6208 8.125 11.875 7.37917 11.875 6.45833V4.16667C11.875 3.24583 12.6208 2.5 13.5417 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V6.45833C17.5 7.37917 16.7542 8.125 15.8333 8.125Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.45833 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V13.5417C2.5 12.6208 3.24583 11.875 4.16667 11.875H6.45833C7.37917 11.875 8.125 12.6208 8.125 13.5417V15.8333C8.125 16.7542 7.37917 17.5 6.45833 17.5Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            opacity="0.5"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.8333 17.5H13.5417C12.6208 17.5 11.875 16.7542 11.875 15.8333V13.5417C11.875 12.6208 12.6208 11.875 13.5417 11.875H15.8333C16.7542 11.875 17.5 12.6208 17.5 13.5417V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z"
                                            stroke="#F3F3F3"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="text-center text-[0.6875rem] font-bold leading-normal" style={{ fontFamily: 'Alibaba' }}>کارت های من</div>
                        </div>
                        <div>
                            <div>
                                <button className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-[#213163] shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.3867 6.99992H2.61255M2.61255 6.99992L5.90287 3.70959M2.61255 6.99992L5.90287 10.2902"
                                            stroke="white"
                                            strokeWidth="0.944444"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* <main> */}
                <main className="flex-grow">
                    <div className="px-4 flex flex-col gap-3 mb-3">
                        <div className="" id="accordionAddCard">
                            <div className="bg-[#010048] rounded-lg border border-[#31299C]">
                                <h2 className="">
                                    <button
                                        className="w-full flex items-center justify-start gap-3 p-4 text-white bg-transparent border-0 text-right"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#AddCard"
                                        aria-expanded="true"
                                        aria-controls="AddCard"
                                    >
                                        <span className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={19}
                                                height={19}
                                                viewBox="0 0 19 19"
                                                fill="none"
                                            >
                                                <path
                                                    d="M4.25 12.5H5.75"
                                                    stroke="white"
                                                    strokeWidth="1.125"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M13.25 6.5H14.75"
                                                    stroke="white"
                                                    strokeWidth="1.125"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M15.5 14.75H3.5C2.67125 14.75 2 14.0788 2 13.25V5.75C2 4.92125 2.67125 4.25 3.5 4.25H15.5C16.3288 4.25 17 4.92125 17 5.75V13.25C17 14.0788 16.3288 14.75 15.5 14.75Z"
                                                    stroke="white"
                                                    strokeWidth="1.125"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.8258 8.17417C11.5581 8.90641 11.5581 10.0936 10.8258 10.8258C10.0936 11.5581 8.90641 11.5581 8.17417 10.8258C7.44194 10.0936 7.44194 8.90641 8.17417 8.17417C8.90641 7.44194 10.0936 7.44194 10.8258 8.17417"
                                                    stroke="white"
                                                    strokeWidth="1.125"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        افزودن کارت جدید
                                    </button>
                                </h2>
                                <div
                                    id="AddCard"
                                    className="collapse show"
                                    data-bs-parent="#accordionAddCard"
                                >
                                    <div className="p-4">
                                        <div className="flex flex-col gap-3">
                                            <div>
                                                <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">شماره کارت</label>
                                                <input
                                                    type="text"
                                                    className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-center text-white placeholder-gray-400"
                                                    placeholder="شماره کارت را وارد نمایید"
                                                />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-grow">
                                                    <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">ماه</label>
                                                    <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                        <option value={11}>11</option>
                                                        <option value={12}>12</option>
                                                    </select>
                                                </div>
                                                <div className="flex-grow">
                                                    <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">سال</label>
                                                    <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                        <option value={1403}>1403</option>
                                                        <option value={1402}>1402</option>
                                                        <option value={1401}>1401</option>
                                                        <option value={1400}>1400</option>
                                                        <option value={1399}>1399</option>
                                                        <option value={1398}>1398</option>
                                                        <option value={1397}>1397</option>
                                                        <option value={1396}>1396</option>
                                                        <option value={1395}>1395</option>
                                                        <option value={1394}>1394</option>
                                                        <option value={1393}>1393</option>
                                                        <option value={1392}>1392</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">بانک</label>
                                                <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                    <option value="saman">بانک سامان</option>
                                                    <option value="mellat">بانک ملت</option>
                                                    <option value="melli">بانک ملی</option>
                                                </select>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <label className="relative inline-block w-[3.125rem] h-[1.75rem]" dir="ltr">
                                                        <input type="checkbox" defaultChecked={true} className="opacity-0 w-0 h-0" />
                                                        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-all duration-400 rounded-[1.75rem] before:absolute before:content-[''] before:h-[1.3125rem] before:w-[1.3125rem] before:left-[0.21875rem] before:bottom-[0.21875rem] before:bg-white before:transition-all before:duration-400 before:rounded-[50%] checked:bg-[#2196F3] checked:before:transform checked:before:translate-x-[1.375rem]" />
                                                    </label>
                                                    <span className="text-white text-[0.63588rem]">کارت پیش فرض</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" id="accordionCards">
                        <div className="bg-[#010048] rounded-lg border border-[#31299C]">
                            <h2 className="">
                                <button
                                    className="w-full flex items-center gap-3 p-4 text-white bg-transparent border-0 text-right"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <div className="w-[3.125rem] h-[1.875rem] flex-shrink-0">
                                        <img src="./assets/images/banks/ansar bank.png" alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-grow">
                                        <div className="text-[0.875rem] font-medium leading-normal" style={{ fontFamily: 'Kalameh' }}>6219 - 86** - **** - 67899</div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Alibaba' }}>بانک اقتصاد نوین</div>
                                            <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Kalameh' }}>08/09</div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="collapse show"
                                data-bs-parent="#accordionCards"
                            >
                                <div className="p-4">
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">شماره کارت</label>
                                            <input
                                                type="text"
                                                className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-center text-white placeholder-gray-400"
                                                placeholder="شماره کارت را وارد نمایید"
                                            />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-grow">
                                                <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">ماه</label>
                                                <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                    <option value={9}>9</option>
                                                    <option value={10}>10</option>
                                                    <option value={11}>11</option>
                                                    <option value={12}>12</option>
                                                </select>
                                            </div>
                                            <div className="flex-grow">
                                                <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">سال</label>
                                                <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                    <option value={1403}>1403</option>
                                                    <option value={1402}>1402</option>
                                                    <option value={1401}>1401</option>
                                                    <option value={1400}>1400</option>
                                                    <option value={1399}>1399</option>
                                                    <option value={1398}>1398</option>
                                                    <option value={1397}>1397</option>
                                                    <option value={1396}>1396</option>
                                                    <option value={1395}>1395</option>
                                                    <option value={1394}>1394</option>
                                                    <option value={1393}>1393</option>
                                                    <option value={1392}>1392</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">بانک</label>
                                            <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                <option value="saman">بانک سامان</option>
                                                <option value="mellat">بانک ملت</option>
                                                <option value="melli">بانک ملی</option>
                                            </select>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <label className="relative inline-block w-[3.125rem] h-[1.75rem]" dir="ltr">
                                                    <input type="checkbox" defaultChecked={true} className="opacity-0 w-0 h-0" />
                                                    <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-all duration-400 rounded-[1.75rem] before:absolute before:content-[''] before:h-[1.3125rem] before:w-[1.3125rem] before:left-[0.21875rem] before:bottom-[0.21875rem] before:bg-white before:transition-all before:duration-400 before:rounded-[50%] checked:bg-[#2196F3] checked:before:transform checked:before:translate-x-[1.375rem]" />
                                                </label>
                                                <span className="text-white text-[0.63588rem]">کارت پیش فرض</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="w-full h-[2.4375rem] rounded-[0.55494rem] bg-[#6c757d] text-white font-semibold border-0">
                                                ذخیره تغییرات
                                            </button>
                                        </div>
                                        <div>
                                            <button className="w-full h-[2.4375rem] rounded-[0.55494rem] bg-[#dc3545] text-white font-semibold border-0 flex items-center justify-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={17}
                                                    height={17}
                                                    viewBox="0 0 17 17"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12.5 4.5V13C12.5 13.8287 11.8153 14.5 10.9873 14.5H5.98733C5.15867 14.5 4.5 13.8287 4.5 13V4.5"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M13.5 4.50008H3.5"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.1665 2.50008H9.83317"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M9.83333 7.16675V11.8334"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.16683 11.8334V7.16675"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                حذف کارت
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#010048] rounded-lg border border-[#31299C] mt-3">
                            <h2 className="">
                                <button
                                    className="w-full flex items-center gap-3 p-4 text-white bg-transparent border-0 text-right"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <div className="w-[3.125rem] h-[1.875rem] flex-shrink-0">
                                        <img src="./assets/images/banks/ansar bank.png" alt="" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-grow">
                                        <div className="text-[0.875rem] font-medium leading-normal" style={{ fontFamily: 'Kalameh' }}>6219 - 86** - **** - 67899</div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Alibaba' }}>بانک اقتصاد نوین</div>
                                            <div className="text-[0.6875rem] font-normal leading-normal" style={{ fontFamily: 'Kalameh' }}>08/09</div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="collapse"
                                data-bs-parent="#accordionCards"
                            >
                                <div className="p-4">
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">شماره کارت</label>
                                            <input
                                                type="text"
                                                className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-center text-white placeholder-gray-400"
                                                placeholder="شماره کارت را وارد نمایید"
                                            />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-grow">
                                                <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">ماه</label>
                                                <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                    <option value={9}>9</option>
                                                    <option value={10}>10</option>
                                                    <option value={11}>11</option>
                                                    <option value={12}>12</option>
                                                </select>
                                            </div>
                                            <div className="flex-grow">
                                                <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">سال</label>
                                                <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                    <option value={1403}>1403</option>
                                                    <option value={1402}>1402</option>
                                                    <option value={1401}>1401</option>
                                                    <option value={1400}>1400</option>
                                                    <option value={1399}>1399</option>
                                                    <option value={1398}>1398</option>
                                                    <option value={1397}>1397</option>
                                                    <option value={1396}>1396</option>
                                                    <option value={1395}>1395</option>
                                                    <option value={1394}>1394</option>
                                                    <option value={1393}>1393</option>
                                                    <option value={1392}>1392</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[0.63588rem] font-semibold leading-normal text-white mb-2">بانک</label>
                                            <select className="w-full h-[2.4375rem] px-[0.9545rem] rounded-[0.55494rem] border border-[#303072] bg-[#12116B] text-white">
                                                <option value="saman">بانک سامان</option>
                                                <option value="mellat">بانک ملت</option>
                                                <option value="melli">بانک ملی</option>
                                            </select>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <label className="relative inline-block w-[3.125rem] h-[1.75rem]" dir="ltr">
                                                    <input type="checkbox" defaultChecked={true} className="opacity-0 w-0 h-0" />
                                                    <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-all duration-400 rounded-[1.75rem] before:absolute before:content-[''] before:h-[1.3125rem] before:w-[1.3125rem] before:left-[0.21875rem] before:bottom-[0.21875rem] before:bg-white before:transition-all before:duration-400 before:rounded-[50%] checked:bg-[#2196F3] checked:before:transform checked:before:translate-x-[1.375rem]" />
                                                </label>
                                                <span className="text-white text-[0.63588rem]">کارت پیش فرض</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="w-full h-[2.4375rem] rounded-[0.55494rem] bg-[#6c757d] text-white font-semibold border-0">
                                                ذخیره تغییرات
                                            </button>
                                        </div>
                                        <div>
                                            <button className="w-full h-[2.4375rem] rounded-[0.55494rem] bg-[#dc3545] text-white font-semibold border-0 flex items-center justify-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={17}
                                                    height={17}
                                                    viewBox="0 0 17 17"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M12.5 4.5V13C12.5 13.8287 11.8153 14.5 10.9873 14.5H5.98733C5.15867 14.5 4.5 13.8287 4.5 13V4.5"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M13.5 4.50008H3.5"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.1665 2.50008H9.83317"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M9.83333 7.16675V11.8334"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.16683 11.8334V7.16675"
                                                        stroke="white"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                حذف کارت
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="fixed inset-0 z-50 flex flex-col bg-[#040320] transform translate-x-full transition-transform duration-300 ease-in-out">
                <div className="absolute inset-0 bg-gradient-to-b from-[#040320] to-[#040320] opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#040320] to-[#040320] opacity-90" />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <nav className="relative z-10 flex items-center justify-between p-4 bg-[#040320] border-b border-[#213163]">
                    <div>
                        <button className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-[#213163] shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.45833 8.125H4.16667C3.24583 8.125 2.5 7.37917 2.5 6.45833V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H6.45833C7.37917 2.5 8.125 3.24583 8.125 4.16667V6.45833C8.125 7.37917 7.37917 8.125 6.45833 8.125Z"
                                    stroke="#F3F3F3"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.8333 8.125H13.5417C12.6208 8.125 11.875 7.37917 11.875 6.45833V4.16667C11.875 3.24583 12.6208 2.5 13.5417 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V6.45833C17.5 7.37917 16.7542 8.125 15.8333 8.125Z"
                                    stroke="#F3F3F3"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.45833 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V13.5417C2.5 12.6208 3.24583 11.875 4.16667 11.875H6.45833C7.37917 11.875 8.125 12.6208 8.125 13.5417V15.8333C8.125 16.7542 7.37917 17.5 6.45833 17.5Z"
                                    stroke="#F3F3F3"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    opacity="0.5"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.8333 17.5H13.5417C12.6208 17.5 11.875 16.7542 11.875 15.8333V13.5417C11.875 12.6208 12.6208 11.875 13.5417 11.875H15.8333C16.7542 11.875 17.5 12.6208 17.5 13.5417V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z"
                                    stroke="#F3F3F3"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-center items-center">
                            <img src="./assets/images/logo/logo.png" alt="logo" className="h-8 w-auto" />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => { }} className="bg-transparent flex w-[2.125rem] h-[2.125rem] justify-center items-center rounded-[1.20438rem] border-[0.704px] border-[#213163] shadow-[0px_0px_35.185px_0px_rgba(255,255,255,0.12)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                            >
                                <path
                                    d="M11.3867 6.99992H2.61255M2.61255 6.99992L5.90287 3.70959M2.61255 6.99992L5.90287 10.2902"
                                    stroke="white"
                                    strokeWidth="0.944444"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
                <div className="relative z-10 flex flex-col gap-2 flex-grow overflow-auto px-4 py-4">
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <circle
                                                cx="9.49992"
                                                cy="4.75004"
                                                r="3.16667"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                            />
                                            <ellipse
                                                opacity="0.5"
                                                cx="9.49992"
                                                cy="13.4583"
                                                rx="5.54167"
                                                ry="3.16667"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>اطلاعات کاربری</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                            در این بخش میتوانید اطلاعات کاربری را ویرایش کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14.5896 13.4583H4.41038C3.28621 13.4583 2.375 12.5471 2.375 11.423V4.41037C2.375 3.28621 3.28621 2.375 4.41038 2.375H14.5888C15.7138 2.375 16.625 3.28621 16.625 4.41037V11.4222C16.625 12.5471 15.7138 13.4583 14.5896 13.4583Z"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.6653 7.42192V6.35475C10.6653 5.68737 10.1238 5.14587 9.45643 5.14587V5.14587C8.78906 5.14587 8.24756 5.68737 8.24756 6.35475V7.42192"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.8634 7.42346H8.13688C7.69988 7.42346 7.34521 7.77813 7.34521 8.21513V9.89663C7.34521 10.3336 7.69988 10.6883 8.13688 10.6883H10.8634C11.3004 10.6883 11.655 10.3336 11.655 9.89663V8.21513C11.655 7.77813 11.3012 7.42346 10.8634 7.42346V7.42346Z"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.0834 13.4584L11.4792 16.625"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.91675 13.4584L7.52091 16.625"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.44385 16.625H12.5555"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>قوانین و مقررات</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                            در این بخش میتوانید قوانین و مقررات را مشاهده کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.59488 13.4607C2.83171 12.327 2.37492 10.9701 2.37492 9.5C2.37492 5.56462 5.56454 2.375 9.49992 2.375C13.4353 2.375 16.6249 5.56462 16.6249 9.5C16.6249 13.4354 13.4353 16.625 9.49992 16.625C8.29184 16.625 7.15659 16.3186 6.15909 15.7882C5.0935 16.3566 3.88463 16.6915 2.59342 16.6915C2.24984 16.6915 1.91496 16.6606 1.58325 16.6171C2.51188 15.7724 3.21013 14.6878 3.59488 13.4607Z"
                                                stroke="white"
                                                strokeWidth="1.25733"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>صندوق پیام ها</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                            در این بخش میتوانید قوانین و مقررات را مشاهده کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.4601 7.53927C17.0855 8.16471 17.0855 9.17875 16.4601 9.80419C15.8346 10.4296 14.8206 10.4296 14.1952 9.80419C13.5697 9.17875 13.5697 8.16471 14.1952 7.53927C14.8206 6.91383 15.8346 6.91383 16.4601 7.53927"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.2432 4.67993C12.2063 5.64297 12.2063 7.20439 11.2432 8.16744C10.2802 9.13049 8.71879 9.13049 7.75573 8.16744C6.79269 7.20439 6.79269 5.64298 7.75573 4.67993C8.71878 3.71688 10.2802 3.71688 11.2432 4.67993"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.80407 7.53927C5.42951 8.16471 5.42951 9.17875 4.80407 9.80419C4.17863 10.4296 3.16459 10.4296 2.53915 9.80419C1.91371 9.17875 1.91371 8.16471 2.53915 7.53927C3.16459 6.91383 4.17863 6.91383 4.80407 7.53927"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.208 15.0412V14.1735C18.208 13.0802 17.3221 12.1943 16.2289 12.1943H15.5947"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M0.79126 15.0412V14.1735C0.79126 13.0802 1.67713 12.1943 2.77043 12.1943H3.40455"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.7264 15.0405V13.773C13.7264 12.2427 12.4859 11.0022 10.9556 11.0022H8.04305C6.51276 11.0022 5.27222 12.2427 5.27222 13.773V15.0405"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>دعوت از دوستان</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                            در این بخش میتوانید قوانین و مقررات را مشاهده کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.79761 11.4799H11.2018"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.33301 8.90548H12.6663"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.79761 6.33333H11.2018"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.6249 8.93872C16.6249 12.5321 13.4202 15.4161 9.49989 15.4161C8.99243 15.4161 8.49843 15.3663 8.02026 15.2744"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.22421 14.1123C3.49917 12.9327 2.375 11.0628 2.375 8.93872"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.22441 14.1132C5.22361 14.7892 5.2252 15.7012 5.2252 16.6584"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.375 8.93744C2.375 5.34407 5.57967 2.46082 9.5 2.46082C13.4203 2.46082 16.625 5.34486 16.625 8.93823"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.01895 15.2705L5.22437 16.6559"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>نظرات و پیشنهادات</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                            در این بخش میتوانید قوانین و مقررات را مشاهده کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={17}
                                            viewBox="0 0 18 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.54175 5.72921H11.6667"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.54175 8.49996H5.33341"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4.54175 11.2708H5.33341"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <circle
                                                cx="12.0624"
                                                cy="12.0625"
                                                r="1.38542"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <rect
                                                x="7.70825"
                                                y="8.5"
                                                width="8.70833"
                                                height="7.125"
                                                rx="1.58333"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.33334 15.625H2.95834C2.08388 15.625 1.375 14.9161 1.375 14.0417V2.63999C1.37435 2.34886 1.53413 2.08104 1.79063 1.94332C2.1709 1.73923 2.67472 1.46901 2.67472 1.46901C2.90678 1.34455 3.18554 1.34362 3.41842 1.46653L4.74446 2.16636L6.04408 1.46957C6.2768 1.3448 6.55642 1.34427 6.78961 1.46817L8.10417 2.16668L9.41874 1.46821C9.65193 1.3443 9.93155 1.34483 10.1643 1.46961L11.4639 2.16639L12.7899 1.46656C13.0228 1.34365 13.3016 1.34458 13.5336 1.46904C13.5336 1.46904 14.0374 1.73925 14.4177 1.94334C14.6742 2.08105 14.8339 2.34887 14.8333 2.64001L14.8333 5.72918"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>گزارشات ریز تراکنش ها</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                            در این بخش میتوانید قوانین و مقررات را مشاهده کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.1794 7.82062C12.1069 8.74811 12.1069 10.2519 11.1794 11.1794C10.2519 12.1069 8.74811 12.1069 7.82062 11.1794C6.89313 10.2519 6.89313 8.74811 7.82062 7.82062C8.74811 6.89313 10.2519 6.89313 11.1794 7.82062"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.8092 14.824V14.824C13.2074 15.2222 13.8542 15.2222 14.2524 14.824L14.824 14.2524C15.2222 13.8542 15.2222 13.2074 14.824 12.8092V12.8092C14.5215 12.5068 14.4329 12.0531 14.5991 11.6589C14.6165 11.6169 14.634 11.575 14.6506 11.5322C14.7955 11.1633 15.1549 10.9258 15.5507 10.9258H15.6038C16.1674 10.9258 16.6242 10.469 16.6242 9.90533V9.09704C16.6242 8.53338 16.1674 8.07658 15.6038 8.07658H15.5507C15.1549 8.07658 14.7955 7.83829 14.6506 7.47017C14.634 7.42742 14.6165 7.38546 14.5991 7.3435C14.4329 6.94925 14.5215 6.49563 14.824 6.19321V6.19321C15.2222 5.795 15.2222 5.14821 14.824 4.75L14.2524 4.17842C13.8542 3.78021 13.2074 3.78021 12.8092 4.17842V4.17842C12.5067 4.48083 12.0531 4.5695 11.6589 4.40325C11.6169 4.38583 11.575 4.36842 11.5322 4.35179C11.1633 4.20454 10.925 3.84433 10.925 3.4485V3.39546C10.925 2.83179 10.4682 2.375 9.90454 2.375H9.09625C8.53179 2.375 8.075 2.83179 8.075 3.39546V3.4485C8.075 3.84433 7.83671 4.20375 7.46858 4.34863C7.42583 4.36604 7.38387 4.38267 7.34192 4.40088C6.94767 4.56713 6.49404 4.47846 6.19162 4.17604V4.17604C5.79342 3.77783 5.14662 3.77783 4.74842 4.17604L4.17604 4.74763C3.77783 5.14583 3.77783 5.79263 4.17604 6.19083V6.19083C4.47846 6.49325 4.56712 6.94688 4.40087 7.34113C4.38267 7.38388 4.36604 7.42583 4.34942 7.46858C4.20454 7.83671 3.84433 8.075 3.4485 8.075H3.39546C2.83179 8.075 2.375 8.53179 2.375 9.09546V9.90375C2.375 10.4682 2.83179 10.925 3.39546 10.925H3.4485C3.84433 10.925 4.20375 11.1633 4.34862 11.5314C4.36525 11.5742 4.38267 11.6161 4.40008 11.6581C4.56633 12.0523 4.47767 12.506 4.17525 12.8084V12.8084C3.77704 13.2066 3.77704 13.8534 4.17525 14.2516L4.74683 14.8232C5.14504 15.2214 5.79183 15.2214 6.19004 14.8232V14.8232C6.49246 14.5208 6.94608 14.4321 7.34033 14.5983C7.38229 14.6158 7.42425 14.6332 7.467 14.6498C7.83592 14.7947 8.07342 15.1541 8.07342 15.5499V15.603C8.07342 16.1666 8.53021 16.6234 9.09388 16.6234H9.90217C10.4658 16.6234 10.9226 16.1666 10.9226 15.603V15.5499C10.9226 15.1541 11.1609 14.7947 11.529 14.6498C11.5718 14.6332 11.6137 14.6158 11.6557 14.5983C12.0523 14.4329 12.506 14.5215 12.8092 14.824V14.824Z"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>تنظیمات</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                            در این بخش میتوانید قوانین و مقررات را مشاهده کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#EA8A2A] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <circle
                                                cx="9.49992"
                                                cy="4.75004"
                                                r="3.16667"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                            />
                                            <ellipse
                                                opacity="0.5"
                                                cx="9.49992"
                                                cy="13.4583"
                                                rx="5.54167"
                                                ry="3.16667"
                                                stroke="white"
                                                strokeWidth="1.1875"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>درباره باشگاه وِم </div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                                    برای کسب اطلاعات بیشتر در مورد باشگاه وِم کلیک کنید.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={19}
                                        height={19}
                                        viewBox="0 0 19 19"
                                        fill="none"
                                    >
                                        <circle
                                            cx="11.0833"
                                            cy="9.49996"
                                            r="1.58333"
                                            stroke="white"
                                            strokeWidth="1.1875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.54159 7.125V11.875"
                                            stroke="white"
                                            strokeWidth="1.1875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.70825 7.125L9.96367 8.38042"
                                            stroke="white"
                                            strokeWidth="1.1875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.4583 11.8749L12.2029 10.6195"
                                            stroke="white"
                                            strokeWidth="1.1875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.70825 11.8749L9.96367 10.6195"
                                            stroke="white"
                                            strokeWidth="1.1875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.4583 7.125L12.2029 8.38042"
                                            stroke="white"
                                            strokeWidth="1.1875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <rect
                                            x="2.375"
                                            y="2.375"
                                            width="14.25"
                                            height="14.25"
                                            rx="3.95833"
                                            stroke="white"
                                            strokeWidth="1.1875"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#010048] rounded-lg border border-[#31299C] p-4">
                        <div className="">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex w-[1.9375rem] h-[1.9375rem] justify-center items-center gap-[0.625rem] rounded border-[0.488px] border-[#3B476D] bg-[#dc3545] shadow-[0px_0px_24.394px_0px_rgba(255,255,255,0.12)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <path
                                                opacity="0.5"
                                                d="M9.5 15.8335C12.9978 15.8335 15.8333 12.998 15.8333 9.5002C15.8333 6.0024 12.9978 3.16687 9.5 3.16687"
                                                stroke="#FFBEBE"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M3.16659 9.5H11.0833M11.0833 9.5L8.70825 7.125M11.0833 9.5L8.70825 11.875"
                                                stroke="#FFBEBE"
                                                strokeWidth="1.1875"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-[0.75rem] font-semibold leading-normal text-white" style={{ fontFamily: 'Alibaba' }}>خروج از حساب کاربری</div>
                                        <div className="text-[0.6875rem] font-normal leading-normal text-[#B8B8B8]" style={{ fontFamily: 'Alibaba' }}>
                                                    برای خروج از حساب کاربری کلیک کنید
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.5 4.66663L7.5 10.5L12.5 16.3333"
                                            stroke="#D8D8D8"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-4 right-4 z-50">
                    <div className="">
                        <button className="flex w-[3.5rem] h-[3.5rem] justify-center items-center rounded-full bg-[#EA8A2A] shadow-[0px_4px_20px_rgba(234,138,42,0.3)] border-0 hover:bg-[#d17a24] transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20V20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20V20C13.875 20.69 13.315 21.25 12.625 21.25Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default MyCards