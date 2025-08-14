import { useState } from 'react';
import '../statics/assets/lib/Swiper/swiper-bundle.min.css';
import '../fonts.css';

const goldRate = Number('7496400');

const Buy = () => {
    const [weight, setWeight] = useState<number>(0);

    const handleWeight: React.ChangeEventHandler<HTMLSelectElement> = e => {
        const v = e.currentTarget.value;
        setWeight(Number(v));
    };

    // const price = useMemo(() => weight * goldRate, [weight, goldRate]);
    const price = weight * goldRate;

    return (
        <>
            <div className="min-h-screen bg-primary font-peyda text-white">
                <header className="container mx-auto px-4">
                    <nav className="flex items-center justify-between py-4">
                        <div className="flex gap-1">
                            <div>
                                <button>
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
                            <div className="font-peyda text-sm font-medium text-white">
                                سرمایه‌گذاری در طلا
                            </div>
                        </div>
                        <div>
                            <div>
                                <button>
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
                <main className="flex-1">
                    <div className="container mx-auto px-4 flex flex-col gap-3 mb-3">
                        <section className="buy-sell-selected">
                            <div className="bg-primary-light rounded-lg border border-custom-border">
                                <div className="p-4 flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center">
                                            <img
                                                src="./assets/images/gold.png"
                                                alt=""
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-peyda text-sm font-medium text-white">
                                                طلای 18 عیار
                                            </div>
                                            <div className="font-peyda text-xs text-custom-gray">
                                                Anas gold
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col items-end gap-1">
                                            <div className="font-peyda text-xs text-custom-gray">
                                                قیمت هر گرم
                                            </div>
                                            <div className="font-peyda text-lg font-bold text-white flex items-center gap-1">
                                                <span>2,566,890</span>
                                                <i>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={10}
                                                        height={8}
                                                        viewBox="0 0 10 8"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M1.91148 4.19806C2.12285 4.09493 2.28138 3.99181 2.4399 3.83712C2.54558 3.68243 2.65127 3.52774 2.75695 3.37305C2.8098 3.1668 2.86264 2.96055 2.86264 2.75429H7.88259C8.19966 2.75429 8.46385 2.65117 8.67521 2.49648C8.83375 2.29023 8.93946 2.03241 8.93946 1.67147V0.43396H8.25249V1.61991C8.25249 1.87772 8.09395 2.03241 7.82976 2.03241H2.86264V1.7746C2.86264 1.51679 2.8098 1.3621 2.75695 1.15584C2.75695 1.00115 2.65127 0.846464 2.54558 0.743338C2.4399 0.640212 2.33422 0.588649 2.22853 0.537086C2.07001 0.485523 1.91148 0.43396 1.8058 0.43396C1.59443 0.43396 1.43591 0.485523 1.27738 0.537086C1.1717 0.640212 1.01317 0.691775 0.96033 0.846464C0.854648 0.949593 0.748965 1.05272 0.748965 1.20741C0.696123 1.3621 0.643281 1.51679 0.643281 1.67147C0.643281 1.82616 0.643281 1.98085 0.696123 2.13554C0.748965 2.29023 0.801805 2.39336 0.854648 2.49648C0.96033 2.54805 1.06602 2.65117 1.22454 2.70274C1.38307 2.75429 1.54159 2.75429 1.8058 2.75429H2.22853C2.22853 2.85742 2.17569 2.96055 2.17569 3.06367C2.12285 3.1668 2.01717 3.26993 1.96433 3.37305C1.91148 3.42462 1.8058 3.47618 1.64728 3.52774C1.54159 3.57931 1.38307 3.63087 1.22454 3.63087H0.537598V4.35275H1.22454C1.48875 4.30119 1.70012 4.24962 1.91148 4.19806ZM1.8058 2.03241C1.59443 2.03241 1.48875 2.03241 1.38307 1.92929C1.33022 1.87772 1.27738 1.7746 1.27738 1.61991C1.27738 1.46522 1.33022 1.31053 1.38307 1.25897C1.48875 1.20741 1.59443 1.15584 1.75296 1.15584C1.91148 1.15584 2.01717 1.20741 2.12285 1.31053C2.22853 1.41366 2.22853 1.56835 2.22853 1.7746V2.08398H1.8058V2.03241Z"
                                                            fill="#F4F4F4"
                                                        />
                                                        <path
                                                            d="M7.35613 0.43396H5.34814V1.05272H7.35613V0.43396Z"
                                                            fill="#F4F4F4"
                                                        />
                                                        <path
                                                            d="M8.8853 5.79413C8.83242 5.63946 8.77959 5.5363 8.67394 5.4332C8.56823 5.33007 8.46257 5.22694 8.30404 5.17538C8.19833 5.12382 8.03979 5.07225 7.88131 5.07225C7.72277 5.07225 7.56424 5.12382 7.4057 5.17538C7.24717 5.22694 7.14151 5.33007 7.0358 5.4332C6.93015 5.5363 6.87732 5.63946 6.82444 5.79413C6.77161 5.94884 6.77161 6.10351 6.77161 6.25822V6.41289C6.77161 6.5676 6.71878 6.61916 6.66595 6.72226C6.56025 6.77382 6.45454 6.82537 6.29606 6.82537H6.08469C5.97898 6.82537 5.87333 6.77382 5.82045 6.72226C5.76762 6.61916 5.71479 6.516 5.71479 6.41289V3.93787H5.02783V6.516C5.02783 6.72226 5.02783 6.87698 5.08068 6.98009C5.13352 7.0832 5.18636 7.18636 5.29204 7.28947C5.39772 7.34102 5.45055 7.44413 5.60908 7.44413C5.71479 7.49574 5.82045 7.49574 5.97898 7.49574H6.34888C6.45454 7.49574 6.61308 7.44413 6.71878 7.39258C6.82444 7.34102 6.98297 7.23791 7.0358 7.0832C7.14151 7.23791 7.24717 7.34102 7.4057 7.39258C7.56424 7.44413 7.72277 7.49574 7.93414 7.49574C8.25121 7.49574 8.56823 7.39258 8.72676 7.18636C8.93813 6.98009 9.04384 6.67071 9.04384 6.30978C8.99096 6.10351 8.93813 5.94884 8.8853 5.79413ZM7.88131 6.77382C7.72277 6.77382 7.61707 6.72226 7.56424 6.67071C7.4057 6.5676 7.4057 6.46444 7.4057 6.30978C7.4057 6.15506 7.45858 6.05195 7.51141 5.94884C7.56424 5.84568 7.72277 5.79413 7.88131 5.79413C8.03979 5.79413 8.19833 5.84568 8.25121 5.94884C8.30404 6.05195 8.35686 6.15506 8.35686 6.30978C8.30404 6.61916 8.1455 6.77382 7.88131 6.77382Z"
                                                            fill="#F4F4F4"
                                                        />
                                                        <path
                                                            d="M3.65527 5.79687C3.65527 5.95158 3.65527 6.05469 3.60242 6.20936C3.54958 6.31252 3.49674 6.41563 3.4439 6.51874C3.33822 6.6219 3.23253 6.67345 3.12685 6.72501C3.02117 6.77656 2.86264 6.82812 2.65127 6.82812H2.17569C2.01717 6.82812 1.85864 6.82812 1.70012 6.77656C1.59443 6.67345 1.48875 6.6219 1.43591 6.51874C1.38307 6.41563 1.27738 6.31252 1.27738 6.20936C1.22454 6.10625 1.22454 5.95158 1.22454 5.79687V5.22968H0.537598V5.84842C0.537598 6.36407 0.696123 6.77656 0.96033 7.08594C1.22454 7.39532 1.59443 7.55003 2.12285 7.55003H2.65127C2.91548 7.55003 3.12685 7.49848 3.33822 7.39532C3.54958 7.29221 3.70811 7.1891 3.86663 7.03438C4.02516 6.87972 4.13084 6.67345 4.18368 6.46718C4.23652 6.26096 4.28937 6.05469 4.28937 5.79687V3.9406L3.60242 3.88904L3.65527 5.79687Z"
                                                            fill="#F4F4F4"
                                                        />
                                                        <path
                                                            d="M2.8622 5.07458H2.06982V5.79622H2.8622V5.07458Z"
                                                            fill="#F4F4F4"
                                                        />
                                                    </svg>
                                                </i>
                                            </div>
                                        </div>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M16.7498 9.99998C16.7498 10.192 16.6768 10.384 16.5298 10.53L12.5298 14.53C12.2368 14.823 11.7618 14.823 11.4688 14.53L7.46877 10.53C7.17577 10.237 7.17577 9.76197 7.46877 9.46897C7.76177 9.17597 8.23681 9.17597 8.52981 9.46897L11.9998 12.9389L15.4698 9.46897C15.7628 9.17597 16.2378 9.17597 16.5308 9.46897C16.6768 9.61597 16.7498 9.80798 16.7498 9.99998Z"
                                                    fill="#E9E9E9"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="buy-sell-form">
                            <div className="bg-primary-light rounded-lg border border-custom-border">
                                <div className="p-4">
                                    <div className="bg-primary rounded-3xl border border-custom-border">
                                        <div className="p-2">
                                            {/* nav nav-pills nav-fill */}
                                            <nav
                                                className="flex w-full"
                                                id="nav-pills"
                                                role="tablist"
                                            >
                                                <button
                                                    className="flex-1 py-2 px-4 rounded-3xl bg-primary-blue text-white font-peyda text-sm font-medium"
                                                    id="pills-buy-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#pills-buy"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-buy"
                                                    aria-selected="true"
                                                >
                                                    خرید
                                                </button>
                                                <button
                                                    className="flex-1 py-2 px-4 rounded-3xl bg-transparent text-custom-gray font-peyda text-sm font-medium"
                                                    id="pills-sell-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#pills-sell"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-sell"
                                                    aria-selected="false"
                                                >
                                                    فروش
                                                </button>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="" id="pills-tabContent">
                                        <div
                                            className="block"
                                            id="pills-buy"
                                            role="tabpanel"
                                            aria-labelledby="pills-buy-tab"
                                            tabIndex={0}
                                        >
                                            <div className="flex flex-col gap-3 mt-3">
                                                <div className="flex flex-col gap-2">
                                                    <label className="font-peyda text-sm text-white">
                                                        مقدار طلا
                                                    </label>
                                                    <div>
                                                        <select
                                                            id="weight"
                                                            value={weight === 0 ? '' : weight}
                                                            onChange={handleWeight}
                                                            className="w-full p-3 bg-primary border border-custom-border rounded-lg text-white font-peyda text-sm focus:outline-none focus:border-primary-blue"
                                                        >
                                                            <option value="" disabled>
                                                                انتخاب کنید
                                                            </option>
                                                            <option value={1}>مقدار 1 گرم</option>
                                                            <option value={2}>مقدار 2 گرم</option>
                                                            <option value={3}>مقدار 3 گرم</option>
                                                            <option value={4}>مقدار 4 گرم</option>
                                                            <option value={5}>مقدار 5 گرم</option>
                                                            <option value={6}>مقدار 6 گرم</option>
                                                            <option value={7}>مقدار 7 گرم</option>
                                                            <option value={8}>مقدار 8 گرم</option>
                                                            <option value={9}>مقدار 9 گرم</option>
                                                            <option value={10}>مقدار 10 گرم</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="font-peyda text-sm text-white">
                                                        مبلغ پرداختی
                                                    </label>
                                                    <div className="relative">
                                                        <i className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={21}
                                                                height={16}
                                                                viewBox="0 0 21 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4.35632 8.53468C4.79793 8.31921 5.12914 8.10375 5.46035 7.78056C5.68115 7.45736 5.90196 7.13417 6.12277 6.81097C6.23317 6.38005 6.34358 5.94912 6.34358 5.51819H16.8318C17.4943 5.51819 18.0463 5.30273 18.4879 4.97954C18.8191 4.54862 19.04 4.00996 19.04 3.25584V0.670288H17.6047V3.14811C17.6047 3.68676 17.2734 4.00996 16.7214 4.00996H6.34358V3.4713C6.34358 2.93265 6.23317 2.60945 6.12277 2.17853C6.12277 1.85533 5.90197 1.53214 5.68115 1.31668C5.46035 1.10121 5.23955 0.993483 5.01873 0.885751C4.68752 0.77802 4.35632 0.670288 4.13551 0.670288C3.6939 0.670288 3.36269 0.77802 3.03148 0.885751C2.81068 1.10121 2.47947 1.20895 2.36906 1.53214C2.14826 1.74761 1.92745 1.96307 1.92745 2.28626C1.81705 2.60945 1.70665 2.93265 1.70665 3.25584C1.70665 3.57904 1.70665 3.90223 1.81705 4.22543C1.92745 4.54862 2.03785 4.76408 2.14826 4.97954C2.36906 5.08728 2.58987 5.30273 2.92108 5.41047C3.25229 5.51819 3.5835 5.51819 4.13551 5.51819H5.01873C5.01873 5.73366 4.90834 5.94912 4.90834 6.16458C4.79793 6.38005 4.57713 6.59551 4.46672 6.81097C4.35632 6.91871 4.13551 7.02644 3.8043 7.13417C3.5835 7.2419 3.25229 7.34963 2.92108 7.34963H1.48584V8.85787H2.92108C3.47309 8.75014 3.91471 8.6424 4.35632 8.53468ZM4.13551 4.00996C3.6939 4.00996 3.47309 4.00996 3.25229 3.7945C3.14189 3.68676 3.03148 3.4713 3.03148 3.14811C3.03148 2.82491 3.14189 2.50172 3.25229 2.39398C3.47309 2.28626 3.6939 2.17853 4.02511 2.17853C4.35632 2.17853 4.57713 2.28626 4.79793 2.50172C5.01873 2.71718 5.01873 3.04037 5.01873 3.4713V4.11769H4.13551V4.00996Z"
                                                                    fill="#C1C8D7"
                                                                />
                                                                <path
                                                                    d="M15.7295 0.670288H11.5342V1.96307H15.7295V0.670288Z"
                                                                    fill="#C1C8D7"
                                                                />
                                                                <path
                                                                    d="M18.9266 11.8747C18.8162 11.5515 18.7058 11.336 18.485 11.1205C18.2642 10.9051 18.0434 10.6896 17.7122 10.5819C17.4913 10.4742 17.1601 10.3664 16.829 10.3664C16.4978 10.3664 16.1665 10.4742 15.8353 10.5819C15.5041 10.6896 15.2833 10.9051 15.0625 11.1205C14.8417 11.336 14.7313 11.5515 14.6209 11.8747C14.5105 12.1979 14.5105 12.521 14.5105 12.8443V13.1674C14.5105 13.4907 14.4001 13.5984 14.2897 13.8138C14.0689 13.9215 13.848 14.0292 13.5169 14.0292H13.0753C12.8544 14.0292 12.6337 13.9215 12.5232 13.8138C12.4128 13.5984 12.3025 13.3829 12.3025 13.1674V7.99634H10.8672V13.3829C10.8672 13.8138 10.8672 14.1371 10.9776 14.3525C11.088 14.5679 11.1984 14.7835 11.4192 14.9989C11.64 15.1066 11.7504 15.322 12.0816 15.322C12.3025 15.4298 12.5232 15.4298 12.8544 15.4298H13.6273C13.848 15.4298 14.1793 15.322 14.4001 15.2143C14.6209 15.1066 14.9521 14.8912 15.0625 14.5679C15.2833 14.8912 15.5041 15.1066 15.8353 15.2143C16.1665 15.322 16.4978 15.4298 16.9394 15.4298C17.6018 15.4298 18.2642 15.2143 18.5954 14.7835C19.037 14.3525 19.2579 13.7061 19.2579 12.952C19.1474 12.521 19.037 12.1979 18.9266 11.8747ZM16.829 13.9215C16.4978 13.9215 16.2769 13.8138 16.1665 13.7061C15.8353 13.4907 15.8353 13.2751 15.8353 12.952C15.8353 12.6288 15.9458 12.4133 16.0562 12.1979C16.1665 11.9824 16.4978 11.8747 16.829 11.8747C17.1601 11.8747 17.4913 11.9824 17.6018 12.1979C17.7122 12.4133 17.8226 12.6288 17.8226 12.952C17.7122 13.5984 17.381 13.9215 16.829 13.9215Z"
                                                                    fill="#C1C8D7"
                                                                />
                                                                <path
                                                                    d="M7.99963 11.8753C7.99963 12.1986 7.99963 12.414 7.88922 12.7372C7.77881 12.9527 7.66842 13.1681 7.55801 13.3835C7.33721 13.5991 7.11639 13.7068 6.89559 13.8145C6.67479 13.9222 6.34358 14.0299 5.90197 14.0299H4.90834C4.57713 14.0299 4.24592 14.0299 3.91471 13.9222C3.6939 13.7068 3.47309 13.5991 3.36269 13.3835C3.25229 13.1681 3.03148 12.9527 3.03148 12.7372C2.92108 12.5217 2.92108 12.1986 2.92108 11.8753V10.6903H1.48584V11.9831C1.48584 13.0604 1.81705 13.9222 2.36906 14.5686C2.92108 15.215 3.6939 15.5382 4.79793 15.5382H5.90197C6.45398 15.5382 6.89559 15.4305 7.33721 15.215C7.77881 14.9996 8.11002 14.7841 8.44123 14.4609C8.77244 14.1378 8.99325 13.7068 9.10365 13.2758C9.21406 12.845 9.32446 12.414 9.32446 11.8753V7.99702L7.88922 7.88928L7.99963 11.8753Z"
                                                                    fill="#C1C8D7"
                                                                />
                                                                <path
                                                                    d="M6.34204 10.3669H4.68652V11.8747H6.34204V10.3669Z"
                                                                    fill="#C1C8D7"
                                                                />
                                                            </svg>
                                                        </i>
                                                        <input
                                                            type="text"
                                                            className="w-full p-3 pl-12 bg-primary border border-custom-border rounded-lg text-white font-peyda text-sm placeholder-custom-gray focus:outline-none focus:border-primary-blue"
                                                            placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                                                        />
                                                        {price
                                                            ? price.toLocaleString('fa-IR')
                                                            : '—'}
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                                        <button
                                                            type="button"
                                                            className="p-2 bg-primary border border-custom-border rounded-lg text-custom-gray font-peyda text-sm hover:border-primary-blue"
                                                        >
                                                            1,000,000
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="p-2 bg-primary border border-custom-border rounded-lg text-custom-gray font-peyda text-sm hover:border-primary-blue"
                                                        >
                                                            5,000,000
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="p-2 bg-primary border border-custom-border rounded-lg text-custom-gray font-peyda text-sm hover:border-primary-blue"
                                                        >
                                                            10,000,000
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="p-2 bg-primary border border-custom-border rounded-lg text-custom-gray font-peyda text-sm hover:border-primary-blue"
                                                        >
                                                            15,000,000
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="w-full py-3 bg-primary-blue text-white font-peyda text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                                                        خرید
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="hidden"
                                            id="pills-sell"
                                            role="tabpanel"
                                            aria-labelledby="pills-sell-tab"
                                            tabIndex={0}
                                        >
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="faq-section">
                            <div className="bg-primary-light rounded-lg border border-custom-border">
                                <div className="p-4">
                                    <div className="space-y-2" id="accordionInfo">
                                        <div className="border border-custom-border rounded-lg overflow-hidden">
                                            <h2>
                                                <button
                                                    className="w-full p-4 text-right bg-primary border-none text-white font-peyda text-sm font-medium flex items-center justify-between"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    آیا خرید طلا از باشگاه وِم مطمئن است؟ و چگونگی
                                                    خرید از این صرافی
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="block"
                                                data-bs-parent="#accordionInfo"
                                            >
                                                <div className="p-4 bg-primary-light border-t border-custom-border text-custom-gray font-peyda text-sm leading-relaxed">
                                                    محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر در
                                                    ثبت
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-custom-border rounded-lg overflow-hidden">
                                            <h2>
                                                <button
                                                    className="w-full p-4 text-right bg-primary border-none text-white font-peyda text-sm font-medium flex items-center justify-between"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    آیا خرید طلا از باشگاه وِم مطمئن است؟ و چگونگی
                                                    خرید از این صرافی
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="hidden"
                                                data-bs-parent="#accordionInfo"
                                            >
                                                <div className="p-4 bg-primary-light border-t border-custom-border text-custom-gray font-peyda text-sm leading-relaxed">
                                                    محیط کاربری ساده، امنیت بالا، و سرعت بی‌نظیر در
                                                    ثبت سفارش‌ها.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <footer>
                    <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-custom-border">
                        <nav className="flex items-center justify-around py-2">
                            <button className="flex flex-col items-center gap-1 py-2 px-3 text-white">
                                <span className="w-5 h-5 flex items-center justify-center">
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
                                            d="M16.3623 7.06404L11.4943 3.27761C10.6157 2.59366 9.3849 2.59366 8.50543 3.27761L3.63751 7.06404C3.04443 7.52487 2.698 8.23396 2.698 8.98525V14.9347C2.698 16.279 3.7876 17.3686 5.13196 17.3686H14.8678C16.2122 17.3686 17.3018 16.279 17.3018 14.9347V8.98525C17.3018 8.23396 16.9553 7.52487 16.3623 7.06404Z"
                                            stroke="white"
                                            strokeWidth="1.21698"
                                        />
                                        <path
                                            d="M7.56592 14.1232H12.4338"
                                            stroke="white"
                                            strokeWidth="1.21698"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                صفحه اصلی
                            </button>
                            <button className="flex flex-col items-center gap-1 py-2 px-3 text-primary-blue">
                                <span className="w-7 h-7 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={29}
                                        height={29}
                                        viewBox="0 0 29 29"
                                        fill="none"
                                    >
                                        <path
                                            d="M24.7499 14.4976H20.6715C19.7786 14.4976 19.0554 15.2208 19.0554 16.1136V17.437C19.0554 18.3299 19.7786 19.0531 20.6715 19.0531H24.7499"
                                            stroke="white"
                                            strokeWidth="1.70833"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22.4722 24.7479H6.52778C5.26931 24.7479 4.25 23.7286 4.25 22.4701V11.0812C4.25 9.82277 5.26931 8.80347 6.52778 8.80347H22.4722C23.7307 8.80347 24.75 9.82277 24.75 11.0812V22.4701C24.75 23.7286 23.7307 24.7479 22.4722 24.7479Z"
                                            stroke="white"
                                            strokeWidth="1.70833"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.7776 8.80382L13.0273 5.05346C12.5819 4.60816 11.861 4.60816 11.4169 5.05346L7.6665 8.80382"
                                            stroke="white"
                                            strokeWidth="1.70833"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.5 6.52604L15.9726 5.05346C16.4179 4.60816 17.1388 4.60816 17.583 5.05346L21.3333 8.80382"
                                            stroke="white"
                                            strokeWidth="1.70833"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                کیف پول
                            </button>
                            <button className="flex flex-col items-center gap-1 py-2 px-3 text-white">
                                <span className="w-5 h-5 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={21}
                                        height={20}
                                        viewBox="0 0 21 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.6158 2.76248H2.38403"
                                            stroke="white"
                                            strokeWidth="1.21687"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.5 10.8783V6.41455"
                                            stroke="white"
                                            strokeWidth="1.21687"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.25369 10.8778V9.39014"
                                            stroke="white"
                                            strokeWidth="1.21687"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.7464 10.8784V7.90234"
                                            stroke="white"
                                            strokeWidth="1.21687"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M17.8041 2.76221V12.4055C17.8041 13.3551 16.9869 14.1244 15.9781 14.1244H5.02163C4.01283 14.1244 3.19556 13.3551 3.19556 12.4055V2.76221"
                                            stroke="white"
                                            strokeWidth="1.21687"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M11.3115 14.1245L12.9347 17.3709"
                                            stroke="white"
                                            strokeWidth="1.21687"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.68836 14.1245L8.06519 17.3709"
                                            stroke="white"
                                            strokeWidth="1.21687"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                همه تراکنش‌ها
                            </button>
                        </nav>
                    </div>
                </footer>
            </div>
            <div className="fixed inset-0 z-50 hidden">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-black bg-opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black bg-opacity-50" />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <nav className="relative bg-primary border-b border-custom-border px-4 py-3 flex items-center justify-between">
                    <div>
                        <button>
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
                        <div className="flex items-center">
                            <img src="./assets/images/logo/logo.png" alt="logo" className="" />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {}}>
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
                <div className="max-w-md mx-auto flex flex-col gap-2 flex-grow overflow-auto px-4">
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            اطلاعات کاربری
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            در این بخش می‌توانید اطلاعات کاربری را ویرایش کنید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            قوانین و مقررات
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            در این بخش می‌توانید قوانین و مقررات را مشاهده کنید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            صندوق پیام‌ها
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            در این بخش می‌توانید آخرین پیام‌های خود را مشاهده کنید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            دعوت از دوستان
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            از این بخش می‌توانید دوستان خود را به اپلیکیشن دعوت
                                            کنید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            نظرات و پیشنهادات
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            در این بخش می‌توانید نظرات خود را با ما به اشتراک
                                            بگذارید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            گزارشات ریز تراکنش‌ها
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            در این بخش می‌توانید تراکنش‌ها را با جزئیات مشاهده کنید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            تنظیمات
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            در این بخش می‌توانید تنظیمات را مشاهده کنید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            درباره باشگاه وِم
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
                                            در این بخش می‌توانید ما را بهتر بشناسید.
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
                    <div className="bg-primary-light rounded-lg border border-custom-border">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center text-red-400">
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
                                        <div className="font-peyda text-sm font-medium text-white">
                                            خروج از حساب کاربری
                                        </div>
                                        <div className="font-peyda text-xs text-custom-gray">
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
                <div className="fixed bottom-20 right-4 z-40">
                    <div className="relative">
                        <button className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
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
    );
};

export default Buy;
