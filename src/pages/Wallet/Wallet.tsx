import React, { useRef, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { GoArrowDownLeft, GoArrowUpRight, MdAddCard } from '../../Icons';
import { useTheme } from '../../contexts/ThemeContext';
import Modal from '../../components/Modal/Modal';
import { FormControl, Select, MenuItem, Stack, Box } from '@mui/material';
import tomanBlack from '../../assets/images/blackToman.svg';
import type { CardOption, UserWallet, TransactionWallet } from '../../types/wallet';
import { useWalletData } from '../../hooks/useWalletData';
import { walletService } from '../../services/walletService';
import { useAuth } from '../../stores/auth.store';

import logoDarkMode from '/images/vemLogo1.png';
import logoLightMode from '/images/vemLogoSite.png';
import { useLocation, useNavigate } from 'react-router-dom';

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

const Wallet: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();
    const location = useLocation();

    const { user, isAuthenticated } = useAuth();
    const { walletId } = useWalletData();

    const [selectedTab, setSelectedTab] = useState(tabInfo[0]);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [_, setShowNewCardModal] = useState(false);

    const [depositAmount, setDepositAmount] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const [userWallets, setUserWallets] = useState<UserWallet[]>([]);
    const [selectedWallet, setSelectedWallet] = useState<UserWallet | null>(null);
    const [walletsLoading, setWalletsLoading] = useState(false);

    const [transactions, setTransactions] = useState<TransactionWallet[]>([]);
    const [transactionsLoading, setTransactionsLoading] = useState(false);

    const token: string = localStorage.getItem('auth.token') ?? '';
    const alertedRef = useRef(false);

    useEffect(() => {
        if (!token && !alertedRef.current) {
            alertedRef.current = true;
            alert('نشست شما منقضی شده است. لطفاً دوباره وارد شوید.');
            navigate('/auth/unified', { replace: true, state: { from: location } });
        }
    }, [token, navigate, location]);

    // Fetch user wallets
    useEffect(() => {
        const fetchUserWallets = async () => {
            if (!user?.id || !isAuthenticated) return;
            setWalletsLoading(true);
            try {
                const wallets = await walletService.getUserWallets(user.id);
                setUserWallets(wallets);
                if (wallets.length > 0) {
                    setSelectedWallet(wallets[0]);
                }
            } catch (error) {
                console.error('Failed to fetch user wallets:', error);
            } finally {
                setWalletsLoading(false);
            }
        };
        fetchUserWallets();
    }, [user?.id, isAuthenticated]);

    // Fetch transactions for selected wallet
    const fetchTransactions = async (wid: string) => {
        setTransactionsLoading(true);
        try {
            const walletTransactions = await walletService.getTransactions(wid);
            setTransactions(walletTransactions);
        } catch (error) {
            console.error('Failed to fetch transactions:', error);
        } finally {
            setTransactionsLoading(false);
        }
    };

    // Actions
    const handleDeposit = async () => {
        if (!walletId || !depositAmount || isProcessing) return;
        setIsProcessing(true);
        try {
            await walletService.deposit(walletId, {
                walletId,
                amount: parseFloat(depositAmount.replace(/,/g, '')),
                description: 'افزایش موجودی کیف پول',
            });
            setDepositAmount('');
            setShowDepositModal(false);
            if (selectedWallet) fetchTransactions(selectedWallet.id);
        } catch (error) {
            console.error('Deposit failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleWithdraw = async () => {
        if (!walletId || !withdrawAmount || isProcessing) return;
        setIsProcessing(true);
        try {
            await walletService.withdraw(walletId, {
                walletId,
                amount: parseFloat(withdrawAmount.replace(/,/g, '')),
                description: 'برداشت از کیف پول',
            });
            setWithdrawAmount('');
            setShowWithdrawModal(false);
            if (selectedWallet) fetchTransactions(selectedWallet.id);
        } catch (error) {
            console.error('Withdraw failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleTransfer = async () => {
        if (!walletId || !transferAmount || isProcessing) return;
        setIsProcessing(true);
        try {
            await walletService.transfer(walletId, {
                fromWalletId: walletId,
                toWalletId: 'target-wallet-id', // TODO: دریافت از کاربر
                amount: parseFloat(transferAmount.replace(/,/g, '')),
                description: 'انتقال موجودی',
            });
            setTransferAmount('');
            setShowTransferModal(false);
            if (selectedWallet) fetchTransactions(selectedWallet.id);
        } catch (error) {
            console.error('Transfer failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleShowWithdrawModal = () => setShowWithdrawModal(v => !v);
    const handleShowDepositModal = () => setShowDepositModal(v => !v);
    const handleShowTransferModal = () => setShowTransferModal(v => !v);
    const handleShowNewCardModal = () => setShowNewCardModal(v => !v);

    const options: CardOption[] = [
        {
            value: '6219861909436779',
            bankName: 'بانک اقتصاد نوین',
            icon: '/images/banks/ansar bank.png',
            display: '6219-8619-0943-6779',
        },
        {
            value: '6219861909436789',
            bankName: 'بانک اقتصاد نوین',
            icon: '/images/banks/ansar bank.png',
            display: '6219-8619-0943-6789',
        },
    ];
    const [card, setCard] = useState<string>(options[0].value);
    const selected = options.find(o => o.value === card)!;

    return (
        <div className="min-h-screen dark:bg-black bg-light-primary-darker text-white">
            <main className="px-4 py-6 flex flex-col items-center gap-6">
                <div className="flex flex-col gap-3 items-center w-full pb-10">
                    {/* Wallets */}
                    {walletsLoading ? (
                        <div className="text-center py-8">
                            <Typography className="!font-peyda text-custom-gray" fontSize={12}>
                                در حال بارگذاری کیف پول‌ها...
                            </Typography>
                        </div>
                    ) : userWallets.length === 0 ? (
                        <div className="text-center py-8">
                            <Typography className="!font-peyda text-custom-gray" fontSize={12}>
                                کیف پولی یافت نشد
                            </Typography>
                        </div>
                    ) : (
                        <div className="w-full">
                            <div
                                className="overflow-x-auto scrollbar-hide"
                                style={{ scrollBehavior: 'smooth' }}
                            >
                                <div
                                    className="flex gap-4 pb-2 px-2"
                                    style={{ scrollSnapType: 'x mandatory' }}
                                >
                                    {userWallets.map((wallet, index) => {
                                        const isSelected = selectedWallet?.id === wallet.id;
                                        return (
                                            <div
                                                key={wallet.id || index}
                                                className={`min-w-[300px] max-w-[300px] cursor-pointer transition-all duration-300 ${
                                                    isSelected
                                                        ? 'dark:bg-gray-800 bg-blue-50 border-primary-blue scale-105 shadow-md'
                                                        : 'dark:bg-dark-900 bg-light-primary-darker shadow-md  hover:bg-light-primary-darker'
                                                } flex p-4 rounded-lg`}
                                                style={{ scrollSnapAlign: 'center' }}
                                                onClick={() => {
                                                    setSelectedWallet(wallet);
                                                    fetchTransactions(wallet.id);
                                                }}
                                            >
                                                <main className="flex-grow flex gap-3 flex-col bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <div className="flex items-center gap-1">
                                                                <img
                                                                    alt="logo"
                                                                    src={
                                                                        isDark
                                                                            ? logoDarkMode
                                                                            : logoLightMode
                                                                    }
                                                                    width={34}
                                                                    height={34}
                                                                />
                                                                <Typography
                                                                    className="!font-peyda dark:text-text-color text-light-text-color"
                                                                    fontWeight={600}
                                                                    fontSize={11}
                                                                >
                                                                    {wallet.walletTypeName ||
                                                                        'کیف پول'}
                                                                </Typography>
                                                            </div>
                                                            <div className="flex gap-1 items-center mt-2">
                                                                <Typography
                                                                    className="!font-peyda dark:text-text-color text-light-text-color"
                                                                    fontWeight="bold"
                                                                    fontSize={24}
                                                                >
                                                                    {(
                                                                        wallet.balance ?? 0
                                                                    ).toLocaleString('fa-IR')}
                                                                </Typography>
                                                                <div className="flex justify-center items-center">
                                                                    <img
                                                                        alt="toman"
                                                                        loading="lazy"
                                                                        src={
                                                                            isDark
                                                                                ? '/images/toman.svg'
                                                                                : tomanBlack
                                                                        }
                                                                        className="w-5 h-5 shrink-0 min-w-[20px]"
                                                                    />
                                                                </div>
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

                                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                                        <button
                                                            onClick={e => {
                                                                e.stopPropagation();
                                                                handleShowDepositModal();
                                                            }}
                                                            className="dark:bg-accent-orange bg-primary-blue text-white hover:opacity-90 transition-colors text-[10px] font-peyda px-3 py-2 rounded-md flex items-center justify-center gap-1"
                                                        >
                                                            افزایش موجودی
                                                            <GoArrowUpRight fontSize={15} />
                                                        </button>

                                                        <button
                                                            onClick={e => {
                                                                e.stopPropagation();
                                                                handleShowWithdrawModal();
                                                            }}
                                                            className={`
                                                              hover:opacity-90 transition-colors text-[10px] font-peyda 
                                                              px-3 py-2 rounded-md flex items-center justify-center gap-1
                                                              ${
                                                                  isSelected
                                                                      ? 'dark:border-accent-orange border-primary-blue border text-black dark:text-white  bg-white dark:bg-black'
                                                                      : 'dark:bg-accent-orange border-primary-blue text-black dark:text-white'
                                                              }`}
                                                        >
                                                            برداشت موجودی
                                                            <GoArrowDownLeft fontSize={15} />
                                                        </button>
                                                    </div>
                                                </main>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Selected Wallet Indicator */}
                            {selectedWallet && (
                                <div className="mt-4 text-center">
                                    <Typography
                                        className="!font-peyda dark:text-text-color text-light-text-color"
                                        fontSize={12}
                                        fontWeight={500}
                                    >
                                        کیف پول انتخاب شده: {selectedWallet.walletTypeName}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Transactions */}
                    {selectedWallet && (
                        <div className="w-full dark:bg-dark-900 bg-light-primary-darker rounded-lg">
                            <div className="p-3">
                                <nav className="w-full">
                                    <div className="grid grid-cols-3 gap-3 w-full">
                                        {tabInfo.map(tab => {
                                            const isSelected = selectedTab?.id === tab.id;
                                            return (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setSelectedTab(tab)}
                                                    type="button"
                                                    className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                                                        isSelected
                                                            ? 'dark:bg-accent-orange bg-primary-blue'
                                                            : 'bg-transparent hover:bg-white/5'
                                                    }`}
                                                >
                                                    <Typography
                                                        className={`!font-kalameh text-nowrap font-semibold ${
                                                            isSelected
                                                                ? '!text-white'
                                                                : 'dark:text-text-color text-light-text-color'
                                                        }`}
                                                        fontSize={11}
                                                    >
                                                        {tab.title}
                                                    </Typography>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </nav>
                            </div>

                            {transactionsLoading ? (
                                <div className="text-center py-8">
                                    <Typography
                                        className="!font-peyda text-custom-gray"
                                        fontSize={12}
                                    >
                                        در حال بارگذاری تراکنش‌ها...
                                    </Typography>
                                </div>
                            ) : (
                                <div className="space-y-3 max-h-96 overflow-y-auto p-4">
                                    {transactions
                                        .filter(tr => {
                                            if (selectedTab.id === 1) return tr.amount < 0; // برداشت
                                            if (selectedTab.id === 2) return tr.amount > 0; // افزایش
                                            if (selectedTab.id === 3)
                                                return (
                                                    tr.transactionTypeName?.includes('انتقال') ||
                                                    tr.transactionTypeName
                                                        ?.toLowerCase()
                                                        .includes('transfer')
                                                );
                                            return true;
                                        })
                                        .map((tr, idx) => (
                                            <div
                                                key={idx}
                                                className="dark:bg-black bg-light-primary-light p-3 rounded-lg"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <Typography
                                                            className="!font-peyda dark:text-text-color text-light-text-color"
                                                            fontWeight={600}
                                                            fontSize={12}
                                                        >
                                                            {tr.transactionTypeName || 'تراکنش'}
                                                        </Typography>
                                                        <Typography
                                                            className="!font-peyda text-custom-gray"
                                                            fontSize={10}
                                                        >
                                                            {tr.description || 'توضیحات موجود نیست'}
                                                        </Typography>
                                                    </div>
                                                    <div className="text-left">
                                                        <Typography
                                                            className={`!font-peyda ${
                                                                tr.amount > 0
                                                                    ? 'text-green-500'
                                                                    : 'text-red-500'
                                                            }`}
                                                            fontWeight="bold"
                                                            fontSize={14}
                                                        >
                                                            {tr.amount > 0 ? '+' : ''}
                                                            {tr.amount?.toLocaleString('fa-IR')}
                                                        </Typography>
                                                        <div className="flex justify-end items-center mt-1">
                                                            <img
                                                                alt="toman"
                                                                src={
                                                                    isDark
                                                                        ? '/images/toman.svg'
                                                                        : tomanBlack
                                                                }
                                                                className="w-3 h-3"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {tr.processedAt && (
                                                    <div className="mt-2 pt-2 border-t border-custom-gray/20">
                                                        <Typography
                                                            className="!font-peyda text-custom-gray"
                                                            fontSize={9}
                                                        >
                                                            {new Date(
                                                                tr.processedAt,
                                                            ).toLocaleDateString('fa-IR')}
                                                        </Typography>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                    {transactions.filter(tr => {
                                        if (selectedTab.id === 1) return tr.amount < 0;
                                        if (selectedTab.id === 2) return tr.amount > 0;
                                        if (selectedTab.id === 3)
                                            return (
                                                tr.transactionTypeName?.includes('انتقال') ||
                                                tr.transactionTypeName
                                                    ?.toLowerCase()
                                                    .includes('transfer')
                                            );
                                        return true;
                                    }).length === 0 && (
                                        <div className="text-center py-8">
                                            <Typography
                                                className="!font-peyda text-custom-gray"
                                                fontSize={12}
                                            >
                                                تراکنشی برای این دسته یافت نشد
                                            </Typography>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Deposit Modal */}
                <Modal
                    confirmText="افزایش موجودی"
                    handleClose={handleShowDepositModal}
                    modalTitle="افزایش موجودی"
                    open={showDepositModal}
                    handleSubmit={handleDeposit}
                >
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 dark:bg-primary-lighter/50 bg-accent-orange text-text-color font-peyda text-center rounded-md">
                                1
                            </div>
                            <Typography
                                className="!font-peyda dark:text-text-color text-light-text-color"
                                fontWeight={600}
                                fontSize={13}
                            >
                                مبلغ افزایش موجودی
                            </Typography>
                        </div>

                        <div className="relative">
                            <i className="absolute left-3 top-1/2 -translate-y-1/2">
                                <img alt="" src="/images/toman.svg" width={15} height={15} />
                            </i>
                            <input
                                type="text"
                                value={depositAmount}
                                onChange={e => setDepositAmount(e.target.value)}
                                pattern="[0-9۰-۹٠-٩,٬]*"
                                className="w-full p-3 pl-12 bg-transparent border dark:border-custom-border-default border-custom-gray rounded-lg dark:text-white text-black font-kalameh text-xs placeholder-custom-gray focus:outline-none dark:focus:border-accent-orange"
                                placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {['1,000,000', '5,000,000', '10,000,000', '15,000,000'].map(v => (
                                <button
                                    key={v}
                                    type="button"
                                    onClick={() => setDepositAmount(v)}
                                    className="p-1 dark:bg-primary-lighter/50 bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:opacity-90"
                                >
                                    {v}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <div className="w-5 h-5 dark:bg-accent-orange bg-primary-blue text-text-color font-peyda text-center rounded-md">
                                    2
                                </div>
                                <Typography
                                    className="!font-peyda dark:text-text-color text-light-text-color"
                                    fontWeight={600}
                                    fontSize={13}
                                >
                                    شماره کارت
                                </Typography>
                            </div>

                            <div
                                onClick={handleShowNewCardModal}
                                className="flex gap-1 text-white dark:bg-accent-orange bg-primary-blue rounded-md px-3 py-1.5 cursor-pointer hover:opacity-90"
                            >
                                <MdAddCard fontSize={12} />
                                <Typography className="!font-peyda text-white" fontSize={9}>
                                    افزودن کارت
                                </Typography>
                            </div>
                        </div>

                        <FormControl
                            fullWidth
                            size="small"
                            sx={{
                                '.MuiOutlinedInput-root': {
                                    bgcolor: isDark ? 'black' : 'white',
                                    borderRadius: '8px',
                                },
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: isDark ? '#f97316' : 'gray',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: isDark ? '#000' : '#fff',
                                },

                                '.MuiInputBase-input': { color: isDark ? 'white' : 'black' },
                            }}
                        >
                            <Select
                                labelId="card-select"
                                value={card}
                                onChange={e => setCard(e.target.value as string)}
                                renderValue={() => (
                                    <Stack direction="row" alignItems="center" spacing={1.25}>
                                        <Box
                                            component="img"
                                            src={selected.icon}
                                            alt=""
                                            sx={{ width: 20, height: 20 }}
                                        />
                                        <Box>
                                            <Typography
                                                sx={{
                                                    color: isDark ? 'white' : 'black',
                                                    whiteSpace: 'nowrap',
                                                    direction: 'ltr',
                                                    fontFeatureSettings: '"tnum"',
                                                }}
                                            >
                                                {selected.display}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: isDark
                                                        ? 'rgba(255,255,255,0.65)'
                                                        : 'rgba(0,0,0,0.6)',
                                                    fontSize: 12,
                                                }}
                                            >
                                                {selected.bankName}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                )}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: isDark ? '#0b1c7a' : 'white',
                                            color: isDark ? 'white' : 'black',
                                        },
                                    },
                                }}
                                sx={{
                                    '.MuiSelect-select': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        py: 1.25,
                                    },
                                }}
                            >
                                {options.map(opt => (
                                    <MenuItem key={opt.value} value={opt.value}>
                                        <Stack
                                            direction="row"
                                            spacing={1.25}
                                            alignItems="center"
                                            sx={{ width: '100%' }}
                                        >
                                            <Box
                                                component="img"
                                                src={opt.icon}
                                                alt=""
                                                sx={{ width: 20, height: 20 }}
                                            />
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        color: isDark ? 'white' : 'black',
                                                        whiteSpace: 'nowrap',
                                                        direction: 'ltr',
                                                        fontFeatureSettings: '"tnum"',
                                                    }}
                                                >
                                                    {opt.display}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: isDark
                                                            ? 'rgba(255,255,255,0.65)'
                                                            : 'rgba(0,0,0,0.6)',
                                                        fontSize: 12,
                                                    }}
                                                >
                                                    {opt.bankName}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </Modal>

                {/* Withdraw Modal */}
                <Modal
                    confirmText="برداشت موجودی"
                    handleClose={handleShowWithdrawModal}
                    modalTitle="برداشت موجودی"
                    open={showWithdrawModal}
                    handleSubmit={handleWithdraw}
                >
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 dark:bg-primary-lighter/50 bg-accent-orange text-text-color font-peyda text-center rounded-md">
                                1
                            </div>
                            <Typography
                                className="!font-peyda dark:text-text-color text-light-text-color"
                                fontWeight={600}
                                fontSize={13}
                            >
                                مبلغ برداشتی
                            </Typography>
                        </div>

                        <div className="relative">
                            <i className="absolute left-3 top-1/2 -translate-y-1/2">
                                <img
                                    alt="toman img"
                                    src="/images/toman.svg"
                                    width={15}
                                    height={15}
                                />
                            </i>
                            <input
                                type="text"
                                value={withdrawAmount}
                                onChange={e => setWithdrawAmount(e.target.value)}
                                className="w-full p-3 pl-12 bg-transparent border dark:border-custom-border-default border-custom-gray rounded-lg dark:text-white text-black font-kalameh text-xs placeholder-custom-gray focus:outline-none focus:dark:border-accent-orange"
                                placeholder="مبلغ برداشتی را به تومان وارد نمایید"
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {['1,000,000', '5,000,000', '10,000,000', '15,000,000'].map(v => (
                                <button
                                    key={v}
                                    type="button"
                                    onClick={() => setWithdrawAmount(v)}
                                    className="p-1 dark:bg-primary-lighter/50 bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:opacity-90"
                                >
                                    {v}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <div className="w-5 h-5 dark:bg-primary-lighter/50 bg-accent-orange text-text-color font-peyda text-center rounded-md">
                                    2
                                </div>
                                <Typography
                                    className="!font-peyda dark:text-text-color text-light-text-color"
                                    fontWeight={600}
                                    fontSize={13}
                                >
                                    شماره کارت واریز
                                </Typography>
                            </div>

                            <div
                                onClick={handleShowNewCardModal}
                                className="flex gap-1 text-white dark:bg-accent-orange bg-primary-blue rounded-md px-3 py-1.5 cursor-pointer hover:opacity-90"
                            >
                                <MdAddCard fontSize={12} />
                                <Typography className="!font-peyda text-white" fontSize={9}>
                                    افزودن کارت
                                </Typography>
                            </div>
                        </div>

                        <select className="!font-peyda w-full bg-transparent bg-white border dark:bg-black dark:border-gray-500 border-custom-gray text-xs rounded-lg px-4 py-3 dark:text-white text-light-text-color focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent">
                            <option value={1}>6219-8619-0943-6779</option>
                            <option value={2}>6219-8619-0943-6789</option>
                        </select>
                    </div>
                </Modal>

                {/* Transfer Modal */}
                <Modal
                    confirmText="انتقال موجودی"
                    handleClose={handleShowTransferModal}
                    modalTitle="انتقال موجودی"
                    open={showTransferModal}
                    handleSubmit={handleTransfer}
                >
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 dark:bg-primary-lighter/50 bg-accent-orange text-text-color font-peyda text-center rounded-md">
                                1
                            </div>
                            <Typography
                                className="!font-peyda text-text-color dark:text-light-text-color"
                                fontWeight={600}
                                fontSize={13}
                            >
                                مبلغ انتقالی
                            </Typography>
                        </div>

                        <div className="relative">
                            <i className="absolute left-3 top-1/2 -translate-y-1/2">
                                <img alt="" src="/images/toman.svg" width={15} height={15} />
                            </i>
                            <input
                                type="text"
                                value={transferAmount}
                                onChange={e => setTransferAmount(e.target.value)}
                                className="w-full p-3 pl-12 bg-transparent border dark:border-custom-border-default border-custom-gray rounded-lg dark:text-white text-black font-kalameh text-xs placeholder-custom-gray focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {['1,000,000', '5,000,000', '10,000,000', '15,000,000'].map(v => (
                                <button
                                    key={v}
                                    type="button"
                                    onClick={() => setTransferAmount(v)}
                                    className="p-1 dark:bg-primary-lighter/50 bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:opacity-90"
                                >
                                    {v}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <div className="w-5 h-5 dark:bg-primary-lighter/50 bg-accent-orange text-text-color font-peyda text-center rounded-md">
                                    2
                                </div>
                                <Typography
                                    className="!font-peyda dark:text-text-color text-light-text-color"
                                    fontWeight={600}
                                    fontSize={13}
                                >
                                    از کارت
                                </Typography>
                            </div>

                            <div
                                onClick={handleShowNewCardModal}
                                className="flex gap-1 text-white dark:bg-accent-orange bg-primary-blue rounded-md px-3 py-1.5 cursor-pointer hover:opacity-90"
                            >
                                <MdAddCard fontSize={12} />
                                <Typography className="!font-peyda text-white" fontSize={9}>
                                    افزودن کارت
                                </Typography>
                            </div>
                        </div>

                        <select className="!font-peyda w-full bg-transparent bg-white border dark:border-gray-500 border-custom-gray text-xs rounded-lg px-4 py-3 dark:text-white text-light-text-color focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent">
                            <option value={1}>6219-8619-0943-6789</option>
                            <option value={2}>6219-8619-0943-6779</option>
                        </select>

                        <div className="flex gap-1 items-center mt-2">
                            <div className="w-5 h-5 dark:bg-primary-lighter/50 bg-accent-orange text-text-color font-peyda text-center rounded-md">
                                3
                            </div>
                            <Typography
                                className="!font-peyda dark:text-text-color text-light-text-color"
                                fontWeight={600}
                                fontSize={13}
                            >
                                به کارت
                            </Typography>
                        </div>

                        <select className="!font-peyda w-full bg-transparent bg-white border dark:border-gray-500 border-custom-gray text-xs rounded-lg px-4 py-3 dark:text-white text-light-text-color focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent">
                            <option value={1}>6219-8619-0943-6779</option>
                            <option value={2}>6219-8619-0943-6789</option>
                        </select>
                    </div>
                </Modal>
            </main>
        </div>
    );
};

export default Wallet;
