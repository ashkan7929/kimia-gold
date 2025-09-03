import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {
    BiTransferAlt,
    FaArrowDownLong,
    GoArrowDownLeft,
    GoArrowUpRight,
    MdAddCard,
} from '../../Icons';
import Modal from '../../components/Modal/Modal';

const tabInfo = [
    {
        id: 1,
        title: 'برداشت موجودی',
    },
    {
        id: 2,
        title: 'افزایش موجودی',
    },
    {
        id: 3,
        title: 'انتقال موجودی',
    },
];

const Wallet = () => {
    const [selectedTab, setSelectedTab] = useState(tabInfo[0]);
    const [showWithdrawModal, setShowWithdrawModal] = useState<boolean>(false);
    const [showDepositModal, setShowDepositModal] = useState<boolean>(false);
    const [showTransferModal, setShowTransferModal] = useState<boolean>(false);
    const [showNewCardModal, setShowNewCardModal] = useState<boolean>(false);

    const handleShowWithdrawModal = () => setShowWithdrawModal(!showWithdrawModal);
    const handleShowDepositModal = () => setShowDepositModal(!showDepositModal);
    const handleShowTransferModal = () => setShowTransferModal(!showTransferModal);
    const handleShowNewCardModal = () => setShowNewCardModal(!showNewCardModal);

    return (
        <>
            <div className="flex flex-col gap-3 items-center pb-25">
                <div className="bg-primary-blue light:bg-light-primary-darker flex w-full p-4 rounded-lg">
                    <main className="flex-grow flex gap-3 flex-col bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
                        <div className="flex justify-between">
                            <div>
                                <div className="flex items-center gap-1">
                                    <img alt="" src="/images/ki-logo.svg" width={34} height={34} />
                                    <Typography
                                        className="!font-peyda text-text-color light:text-light-text-color"
                                        fontWeight={600}
                                        fontSize={11}
                                    >
                                        {'کیف پول'}
                                    </Typography>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Typography
                                        className="!font-peyda text-text-color light:text-light-text-color"
                                        fontWeight="bold"
                                        fontSize={24}
                                    >
                                        2,566,890
                                    </Typography>
                                    <img alt="" src="/images/toman.svg" width={22} height={17} />
                                </div>
                            </div>
                            <div>
                                <img
                                    alt="wallet img"
                                    src="/images/wallet.svg"
                                    width={96}
                                    height={76}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                            <button
                                onClick={handleShowDepositModal}
                                className="bg-accent-orange group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                            >
                                {'افزایش موجودی'}
                                <GoArrowUpRight className="text-text-color light:text-light-text-color light:group-hover:text-text-color" fontSize={15} />
                            </button>
                            <button
                                onClick={handleShowWithdrawModal}
                                className="bg-primary-dark group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                            >
                                {'برداشت موجودی'}
                                <GoArrowDownLeft className="text-text-color light:text-light-text-color light:group-hover:text-text-color" fontSize={15} />
                            </button>
                            <button
                                onClick={handleShowTransferModal}
                                className="bg-primary-light group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                            >
                                <BiTransferAlt className="text-text-color light:text-light-text-color light:group-hover:text-text-color" fontSize={15} />
                                {'انتقال موجودی'}
                            </button>
                        </div>
                    </main>
                </div>

                <div className="bg-primary-darker light:bg-light-primary-darker rounded-lg">
                    <div className="p-2">
                        <nav className="w-full">
                            <div className="grid grid-cols-3 gap-12 w-full">
                                {tabInfo.map(tab => {
                                    const isSelected = selectedTab?.id === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setSelectedTab(tab)}
                                            type="button"
                                            className={`${
                                                isSelected
                                                    ? 'bg-primary-blue text-xs'
                                                    : 'bg-transparent'
                                            } cursor-pointer px-4 py-2 rounded-md`}
                                        >
                                            <Typography
                                                className={`!font-kalameh text-nowrap font-semibold ${
                                                    isSelected
                                                        ? '!text-white'
                                                        : ' text-text-color light:text-light-text-color'
                                                }`}
                                                fontSize={9}
                                            >
                                                {tab.title}
                                            </Typography>
                                        </button>
                                    );
                                })}
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="bg-primary-darker light:bg-light-primary-darker rounded-lg w-full flex justify-between p-4">
                    <Typography
                        className="!font-kalameh text-text-color light:text-light-text-color text-nowrap"
                        fontWeight="semibold"
                        fontSize={11}
                    >
                        نوع عملیات
                    </Typography>
                    <Typography
                        className="!font-kalameh text-text-color light:text-light-text-color text-nowrap"
                        fontWeight="semibold"
                        fontSize={11}
                    >
                        مقدار تراکنش
                    </Typography>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    {[0, 0, 0].map(() => (
                        <div className="flex justify-between w-full p-2.5 bg-primary-dark light:bg-light-primary-darker rounded-lg">
                            <div className="flex gap-2 items-center">
                                <div className="bg-green-100 w-7 h-7 rounded-full flex justify-center items-center">
                                    <FaArrowDownLong className="text-green-600" fontSize={11} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        className="!font-kalameh text-text-color light:text-light-text-color text-nowrap"
                                        fontWeight={600}
                                        fontSize={11}
                                    >
                                        افزایش موجودی
                                    </Typography>
                                    <Typography
                                        className="!font-kalameh text-text-color light:text-light-text-color text-nowrap"
                                        fontSize={9}
                                    >
                                        1403/09/14 15:25
                                    </Typography>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <div className="flex gap-1 items-center">
                                    <Typography
                                        className="!font-peyda text-text-color light:text-light-text-color"
                                        fontWeight="bold"
                                        fontSize={12}
                                    >
                                        2,566,890
                                    </Typography>
                                    <img alt="" src="/images/toman.svg" width={10} height={10} />
                                </div>
                                <Typography
                                    className="!font-peyda text-green-500 bg-green-500/30 w-fit py-0.5 px-2.5 rounded-xl"
                                    fontSize={9}
                                >
                                    موفق
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                confirmText="افزایش موجودی"
                handleClose={handleShowDepositModal}
                modalTitle="افزایش موجودی"
                open={showDepositModal}
                handleSubmit={handleShowDepositModal}
            >
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center">
                        <div className="w-5 h-5 bg-primary-lighter/50 light:bg-primary-blue light:text-text-color font-peyda text-center rounded-md">
                            1
                        </div>
                        <Typography
                            className="!font-peyda text-text-color light:text-light-text-color"
                            fontWeight={600}
                            fontSize={13}
                        >
                            {'مبلغ افزایش موجودی'}
                        </Typography>
                    </div>
                    <div className="relative">
                        <i className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <img alt="" src="/images/toman.svg" width={15} height={15} />
                        </i>
                        <input
                            type="text"
                            className="w-full p-3 pl-12 bg-transparent border border-custom-border-default light:border-custom-gray rounded-lg text-white light:text-black font-kalameh text-xs placeholder-custom-gray  focus:outline-none focus:border-primary-blue"
                            placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            1,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10  rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            5,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            10,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10  rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            15,000,000
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 bg-primary-lighter/50 light:bg-primary-blue light:text-text-color font-peyda text-center rounded-md">
                                2
                            </div>
                            <Typography
                                className="!font-peyda text-text-color light:text-light-text-color "
                                fontWeight={600}
                                fontSize={13}
                            >
                                {'شماره کارت'}
                            </Typography>
                        </div>
                        <div
                            onClick={handleShowNewCardModal}
                            className="flex gap-1 text-white bg-primary-light light:bg-primary-blue rounded-md px-3 py-1.5"
                        >
                            <MdAddCard fontSize={12} />
                            <Typography className="!font-peyda text-white" fontSize={9}>
                                {'افزودن کارت'}
                            </Typography>
                        </div>
                    </div>
                    <select className="!font-peyda w-full bg-transparent light:bg-white border border-custom-border-light light:border-custom-gray text-xs rounded-lg px-4 py-3 text-white light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker + light:focus:ring-primary-whiteSpecial focus:border-transparent">
                        <option value={1}>
                            <div className="w-7.5 h-7.5 flex-shrink-0 !font-peyda light:text-black">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            6219-8619-0943-6779
                        </option>
                        <option value={2}>
                            <div className="w-7.5 h-7.5 flex-shrink-0 font-peyda">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt="bank ansar"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            6219-8619-0943-6789
                        </option>
                    </select>
                </div>
            </Modal>

            <Modal
                confirmText="برداشت موجودی"
                handleClose={handleShowWithdrawModal}
                modalTitle="برداشت موجودی"
                open={showWithdrawModal}
                handleSubmit={handleShowWithdrawModal}
            >
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center">
                        <div className="w-5 h-5 bg-primary-lighter/50 light:bg-primary-blue light:text-text-color font-peyda text-center rounded-md">
                            1
                        </div>
                        <Typography
                            className="!font-peyda text-text-color light:text-light-text-color"
                            fontWeight={600}
                            fontSize={13}
                        >
                            {'مبلغ برداشتی'}
                        </Typography>
                    </div>
                    <div className="relative">
                        <i className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <img alt="toman img" src="/images/toman.svg" width={15} height={15} />
                        </i>
                        <input
                            type="text"
                            className="w-full p-3 pl-12 bg-transparent  border border-custom-border-default rounded-lg text-white font-kalameh text-xs placeholder-custom-gray focus:outline-none focus:border-primary-blue light:border-custom-gray"
                            placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10   rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            1,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10   rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            5,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10  rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            10,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            15,000,000
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 bg-primary-lighter/50 light:bg-primary-blue light:text-text-color font-peyda text-center rounded-md">
                                2
                            </div>
                            <Typography
                                className="!font-peyda text-text-color light:text-light-text-color"
                                fontWeight={600}
                                fontSize={13}
                            >
                                {'شماره کارت واریز'}
                            </Typography>
                        </div>
                       <div
                            onClick={handleShowNewCardModal}
                            className="flex gap-1 text-white bg-primary-light light:bg-primary-blue rounded-md px-3 py-1.5"
                        >
                            <MdAddCard fontSize={12} />
                            <Typography className="!font-peyda text-white" fontSize={9}>
                                {'افزودن کارت'}
                            </Typography>
                        </div>
                    </div>
                     <select className="!font-peyda w-full bg-transparent light:bg-white border border-custom-border-light light:border-custom-gray text-xs rounded-lg px-4 py-3 text-white light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker + light:focus:ring-primary-whiteSpecial focus:border-transparent">
                        <option value={1}>
                            <div className="w-7.5 h-7.5 flex-shrink-0 !font-peyda light:text-black">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            6219-8619-0943-6779
                        </option>
                        <option value={2}>
                            <div className="w-7.5 h-7.5 flex-shrink-0 font-peyda">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt="bank ansar"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            6219-8619-0943-6789
                        </option>
                    </select>
                </div>
            </Modal>

            <Modal
                confirmText="انتقال موجودی"
                handleClose={handleShowTransferModal}
                modalTitle="انتقال موجودی"
                open={showTransferModal}
                handleSubmit={handleShowTransferModal}
            >
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center">
                        <div className="w-5 h-5 bg-primary-lighter/50 light:bg-primary-blue light:text-text-color font-peyda text-center rounded-md">
                            1
                        </div>
                        <Typography
                            className="!font-peyda text-text-color light:text-light-text-color"
                            fontWeight={600}
                            fontSize={13}
                        >
                            {'مبلغ انتقالی'}
                        </Typography>
                    </div>
                    <div className="relative">
                        <i className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <img alt="" src="/images/toman.svg" width={15} height={15} />
                        </i>
                        <input
                            type="text"
                            className="w-full p-3 pl-12 bg-transparent border border-custom-border-default rounded-lg text-white font-kalameh text-xs placeholder-custom-gray focus:border-primary-blue light:border-custom-gray px-4 py-3 light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker + light:focus:ring-primary-whiteSpecial"
                            placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            1,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            5,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            10,000,000
                        </button>
                        <button
                            type="button"
                            className="p-1 bg-primary-lighter/50 rounded-xl light:bg-primary-lighter/10 text-custom-gray font-peyda text-xs hover:border-primary-blue"
                        >
                            15,000,000
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 bg-primary-lighter/50 light:bg-primary-blue light:text-text-color font-peyda text-center rounded-md">
                                2
                            </div>
                            <Typography
                                className="!font-peyda text-text-color light:text-light-text-color"
                                fontWeight={600}
                                fontSize={13}
                            >
                                {'از کارت'}
                            </Typography>
                        </div>
                        <div
                            onClick={handleShowNewCardModal}
                            className="flex gap-1 text-white bg-primary-light light:bg-primary-blue rounded-md px-3 py-1.5"
                        >
                            <MdAddCard fontSize={12} />
                            <Typography className="!font-peyda text-white" fontSize={9}>
                                {'افزودن کارت'}
                            </Typography>
                        </div>
                    </div>
                    <select className="!font-peyda w-full bg-transparent border border-custom-border-light text-xs rounded-lg px-4 py-3 text-text-color light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker focus:border-transparent light:border-custom-gray light:focus:border-primary-whiteSpecial">
                        <option value={1}>
                            <div className="w-7.5 h-7.5 flex-shrink-0">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            6219-8619-0943-6789
                        </option>
                        <option value={2}>
                            <div className="w-7.5 h-7.5 flex-shrink-0">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className='font-peyda text-text-color light:text-light-text-color'>
                               6219-8619-0943-6789
 
                            </p>
                        </option>
                    </select>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 bg-primary-lighter/50 light:bg-primary-blue light:text-text-color font-peyda text-center rounded-md">
                                3
                            </div>
                            <Typography
                                className="!font-peyda text-text-color light:text-light-text-color"
                                fontWeight={600}
                                fontSize={13}
                            >
                                {'به کارت'}
                            </Typography>
                        </div>
                    </div>
                       <select className="!font-peyda w-full bg-transparent light:bg-white border border-custom-border-light light:border-custom-gray text-xs rounded-lg px-4 py-3 text-white light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker + light:focus:ring-primary-whiteSpecial focus:border-transparent">
                        <option value={1}>
                            <div className="w-7.5 h-7.5 flex-shrink-0 !font-peyda light:text-black">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            6219-8619-0943-6779
                        </option>
                        <option value={2}>
                            <div className="w-7.5 h-7.5 flex-shrink-0 font-peyda">
                                <img
                                    src="/images/banks/ansar bank.png"
                                    alt="bank ansar"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            6219-8619-0943-6789
                        </option>
                    </select>
                </div>
            </Modal>

            <Modal
                confirmText="اضافه کردن کارت جدید"
                handleClose={handleShowNewCardModal}
                modalTitle="کارت های من"
                open={showNewCardModal}
                handleSubmit={handleShowNewCardModal}
            >
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center py-3 px-4 w-full rounded-lg bg-custom-bg-card border border-custom-border-default light:bg-light-primary-darker light:border-custom-gray">
                        <div className="w-7.5 h-7.5 flex-shrink-0">
                            <img
                                src="/images/banks/ansar bank.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div
                                className="text-[0.875rem] font-medium leading-normal text-start"
                                style={{ fontFamily: 'Kalameh' }}
                            >
                                6219 - 86** - **** - 6789
                            </div>
                            <div className="flex items-center justify-between">
                                <div
                                    className="text-[0.6875rem] font-normal leading-normal"
                                    style={{ fontFamily: 'Alibaba' }}
                                >
                                    بانک اقتصاد نوین
                                </div>
                                <div
                                    className="text-[0.6875rem] font-normal leading-normal"
                                    style={{ fontFamily: 'Kalameh' }}
                                >
                                    08/09
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-3 px-4 w-full rounded-lg bg-custom-bg-card border border-custom-border-default light:bg-light-primary-darker light:border-custom-gray">
                        <div className="w-7.5 h-7.5 flex-shrink-0">
                            <img
                                src="/images/banks/ansar bank.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div
                                className="text-[0.875rem] font-medium leading-normal text-start"
                                style={{ fontFamily: 'Kalameh' }}
                            >
                                6219 - 86** - **** - 6789
                            </div>
                            <div className="flex items-center justify-between">
                                <div
                                    className="text-[0.6875rem] font-normal leading-normal"
                                    style={{ fontFamily: 'Alibaba' }}
                                >
                                    بانک اقتصاد نوین
                                </div>
                                <div
                                    className="text-[0.6875rem] font-normal leading-normal"
                                    style={{ fontFamily: 'Kalameh' }}
                                >
                                    08/09
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Wallet;
