import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
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

const Wallet = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { user, isAuthenticated } = useAuth();
    const [selectedTab, setSelectedTab] = useState(tabInfo[0]);
    const [showWithdrawModal, setShowWithdrawModal] = useState<boolean>(false);
    const [showDepositModal, setShowDepositModal] = useState<boolean>(false);
    const [showTransferModal, setShowTransferModal] = useState<boolean>(false);
    const [showNewCardModal, setShowNewCardModal] = useState<boolean>(false);
    const [depositAmount, setDepositAmount] = useState<string>('');
    const [withdrawAmount, setWithdrawAmount] = useState<string>('');
    const [transferAmount, setTransferAmount] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);
    
    // New states for wallets and transactions
    const [userWallets, setUserWallets] = useState<UserWallet[]>([]);
    const [selectedWallet, setSelectedWallet] = useState<UserWallet | null>(null);
    const [walletsLoading, setWalletsLoading] = useState(false);
    const [transactions, setTransactions] = useState<TransactionWallet[]>([]);
    const [transactionsLoading, setTransactionsLoading] = useState(false);

    
    const { walletId } = useWalletData();
    const token: string = localStorage.getItem('auth.token') ?? '';
    const navigate = useNavigate();
    const location = useLocation();
    const alertedRef = useRef(false);

    // Check authentication
    if (!token && !alertedRef.current) {
        alertedRef.current = true;
        alert('نشست شما منقضی شده است. لطفاً دوباره وارد شوید.');
        navigate('/auth/unified', { replace: true, state: { from: location } });
        return null;
    }

    // Fetch user wallets
    useEffect(() => {
        const fetchUserWallets = async () => {
            if (!user?.id || !isAuthenticated) {
                console.log('User not authenticated or user ID not available');
                return;
            }

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
    const fetchTransactions = async (walletId: string) => {
        setTransactionsLoading(true);
        try {
            const walletTransactions = await walletService.getTransactions(walletId);
            setTransactions(walletTransactions);
            // Show transactions for selected wallet
        } catch (error) {
            console.error('Failed to fetch transactions:', error);
        } finally {
            setTransactionsLoading(false);
        }
    };


    
    const handleDeposit = async () => {
        if (!walletId || !depositAmount || isProcessing) return;
        
        setIsProcessing(true);
        try {
            await walletService.deposit(walletId, {
                walletId,
                amount: parseFloat(depositAmount.replace(/,/g, '')),
                description: 'افزایش موجودی کیف پول'
            });
            setDepositAmount('');
            setShowDepositModal(false);
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
                description: 'برداشت از کیف پول'
            });
            setWithdrawAmount('');
            setShowWithdrawModal(false);
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
                toWalletId: 'target-wallet-id', // باید از کاربر دریافت شود
                amount: parseFloat(transferAmount.replace(/,/g, '')),
                description: 'انتقال موجودی'
            });
            setTransferAmount('');
            setShowTransferModal(false);
        } catch (error) {
            console.error('Transfer failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleShowWithdrawModal = () => setShowWithdrawModal(!showWithdrawModal);
    const handleShowDepositModal = () => setShowDepositModal(!showDepositModal);
    const handleShowTransferModal = () => setShowTransferModal(!showTransferModal);
    const handleShowNewCardModal = () => setShowNewCardModal(!showNewCardModal);

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
        <>
            <div className="flex flex-col gap-3 items-center pb-25">
                {/* User Wallets Horizontal Slider */}
                {walletsLoading ? (
                    <div className="text-center py-8">
                        <Typography
                            className="!font-peyda text-custom-gray"
                            fontSize={12}
                        >
                            در حال بارگذاری کیف پول‌ها...
                        </Typography>
                    </div>
                ) : userWallets.length === 0 ? (
                    <div className="text-center py-8">
                        <Typography
                            className="!font-peyda text-custom-gray"
                            fontSize={12}
                        >
                            کیف پولی یافت نشد
                        </Typography>
                    </div>
                ) : (
                    <div className="w-full">
                        {/* Horizontal Wallet Cards Slider */}
                        <div className="overflow-x-auto scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                            <div className="flex gap-4 pb-2 px-2" style={{ scrollSnapType: 'x mandatory' }}>
                                {userWallets.map((wallet, index) => {
                                    const isSelected = selectedWallet?.id === wallet.id;
                                    return (
                                        <div 
                                            key={wallet.id || index} 
                                            className={`min-w-[300px] max-w-[300px] cursor-pointer transition-all duration-300 ${
                                                isSelected 
                                                    ? 'bg-primary-blue light:bg-light-primary-darker scale-105 shadow-lg' 
                                                    : 'bg-primary-darker light:bg-light-primary-light hover:bg-primary-blue light:hover:bg-light-primary-darker'
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
                                                                alt=""
                                                                src={isDark ? logoDarkMode : logoLightMode}
                                                                width={34}
                                                                height={34}
                                                            />
                                                            <Typography
                                                                className="!font-peyda text-text-color light:text-light-text-color"
                                                                fontWeight={600}
                                                                fontSize={11}
                                                            >
                                                                {wallet.walletTypeName || 'کیف پول'}
                                                            </Typography>
                                                        </div>
                                                        <div className="flex gap-1 items-center">
                                                            <Typography
                                                                className="!font-peyda text-text-color light:text-light-text-color"
                                                                fontWeight="bold"
                                                                fontSize={24}
                                                            >
                                                                {(wallet.balance ?? 0).toLocaleString('fa-IR')}
                                                            </Typography>
                                                            <div className="flex justify-center items-center">
                                                                <img
                                                                    alt="toman"
                                                                    src={isDark ? '/images/toman.svg' : tomanBlack}
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
                                                <div className="grid grid-cols-2 gap-1">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleShowDepositModal();
                                                        }}
                                                        className="bg-accent-orange group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                                                    >
                                                        {'افزایش موجودی'}
                                                        <GoArrowUpRight
                                                            className="text-text-color light:text-light-text-color light:group-hover:text-text-color"
                                                            fontSize={15}
                                                        />
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleShowWithdrawModal();
                                                        }}
                                                        className="bg-primary-dark group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                                                    >
                                                        {'برداشت موجودی'}
                                                        <GoArrowDownLeft
                                                            className="text-text-color light:text-light-text-color light:group-hover:text-text-color"
                                                            fontSize={15}
                                                        />
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
                                    className="!font-peyda text-text-color light:text-light-text-color"
                                    fontSize={12}
                                    fontWeight={500}
                                >
                                    کیف پول انتخاب شده: {selectedWallet.walletTypeName}
                                </Typography>
                            </div>
                        )}
                    </div>
                )}

                {/* Transactions Section - Only show when wallet is selected */}
                {selectedWallet && (
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

                        {/* Filtered Transactions based on selected tab */}
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
                                    .filter(transaction => {
                                        if (selectedTab.id === 1) {
                                            // برداشت موجودی - تراکنش‌های منفی
                                            return transaction.amount < 0;
                                        } else if (selectedTab.id === 2) {
                                            // افزایش موجودی - تراکنش‌های مثبت
                                            return transaction.amount > 0;
                                        } else if (selectedTab.id === 3) {
                                            // انتقال موجودی - تراکنش‌هایی که نوع آنها انتقال است
                                            return transaction.transactionTypeName?.includes('انتقال') || transaction.transactionTypeName?.includes('transfer');
                                        }
                                        return true;
                                    })
                                    .map((transaction, index) => (
                                        <div
                                            key={index}
                                            className="bg-primary-light light:bg-light-primary-light p-3 rounded-lg"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <Typography
                                                         className="!font-peyda text-text-color light:text-light-text-color"
                                                         fontWeight={600}
                                                         fontSize={12}
                                                     >
                                                         {transaction.transactionTypeName || 'تراکنش'}
                                                     </Typography>
                                                    <Typography
                                                        className="!font-peyda text-custom-gray"
                                                        fontSize={10}
                                                    >
                                                        {transaction.description || 'توضیحات موجود نیست'}
                                                    </Typography>
                                                </div>
                                                <div className="text-left">
                                                    <Typography
                                                        className={`!font-peyda ${
                                                            transaction.amount > 0 
                                                                ? 'text-green-500' 
                                                                : 'text-red-500'
                                                        }`}
                                                        fontWeight="bold"
                                                        fontSize={14}
                                                    >
                                                        {transaction.amount > 0 ? '+' : ''}
                                                        {transaction.amount?.toLocaleString('fa-IR')}
                                                    </Typography>
                                                    <div className="flex justify-end items-center mt-1">
                                                        <img
                                                            alt="toman"
                                                            src={isDark ? '/images/toman.svg' : tomanBlack}
                                                            className="w-3 h-3"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {transaction.processedAt && (
                                                 <div className="mt-2 pt-2 border-t border-custom-gray border-opacity-20">
                                                     <Typography
                                                         className="!font-peyda text-custom-gray"
                                                         fontSize={9}
                                                     >
                                                         {new Date(transaction.processedAt).toLocaleDateString('fa-IR')}
                                                     </Typography>
                                                 </div>
                                             )}
                                        </div>
                                    ))
                                }
                                {transactions.filter(transaction => {
                                    if (selectedTab.id === 1) {
                                        return transaction.amount < 0;
                                    } else if (selectedTab.id === 2) {
                                        return transaction.amount > 0;
                                    } else if (selectedTab.id === 3) {
                                        return transaction.transactionTypeName?.includes('انتقال') || transaction.transactionTypeName?.includes('transfer');
                                    }
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

            <Modal
                confirmText="افزایش موجودی"
                handleClose={handleShowDepositModal}
                modalTitle="افزایش موجودی"
                open={showDepositModal}
                handleSubmit={handleDeposit}
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
                            value={depositAmount}
                            onChange={e => setDepositAmount(e.target.value)}
                            pattern="[0-9۰-۹٠-٩,٬]*"
                            className="w-full p-3 pl-12 bg-transparent border border-custom-border-default light:border-custom-gray rounded-lg text-white light:text-black font-kalameh text-xs placeholder-custom-gray  focus:outline-none focus:border-primary-blue"
                            placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {['1,000,000', '5,000,000', '10,000,000', '15,000,000'].map(v => (
                            <button
                                key={v}
                                type="button"
                                onClick={() => setDepositAmount(v)}
                                className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                            >
                                {v}
                            </button>
                        ))}
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
                                افزودن کارت
                            </Typography>
                        </div>
                    </div>
                    <FormControl
                        fullWidth
                        size="small"
                        sx={{
                            '.MuiInputLabel-root': { color: isDark ? 'white' : 'black' },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: isDark ? '#3b82f6' : 'gray',
                            },
                            '.MuiSvgIcon-root, .MuiSelect-icon': {
                                color: isDark ? 'white' : 'black',
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
                                                    color: isDark
                                                        ? card === opt.value
                                                            ? 'white'
                                                            : 'white'
                                                        : card === opt.value
                                                          ? 'black'
                                                          : 'black',
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

            <Modal
                confirmText="برداشت موجودی"
                handleClose={handleShowWithdrawModal}
                modalTitle="برداشت موجودی"
                open={showWithdrawModal}
                handleSubmit={handleWithdraw}
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
                            value={withdrawAmount}
                            onChange={e => setWithdrawAmount(e.target.value)}
                            className="w-full p-3 pl-12 bg-transparent  border border-custom-border-default rounded-lg text-white font-kalameh text-xs placeholder-custom-gray focus:outline-none focus:border-primary-blue light:border-custom-gray"
                            placeholder="مبلغ برداشتی را به تومان وارد نمایید"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {['1,000,000', '5,000,000', '10,000,000', '15,000,000'].map(v => (
                            <button
                                key={v}
                                type="button"
                                onClick={() => setWithdrawAmount(v)}
                                className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                            >
                                {v}
                            </button>
                        ))}
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
                handleSubmit={handleTransfer}
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
                            value={transferAmount}
                            onChange={e => setTransferAmount(e.target.value)}
                            className="w-full p-3 pl-12 bg-transparent border border-custom-border-default rounded-lg text-white font-kalameh text-xs placeholder-custom-gray focus:border-primary-blue light:border-custom-gray px-4 py-3 light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker + light:focus:ring-primary-whiteSpecial"
                            placeholder="مبلغ انتقالی به تومان را وارد نمایید"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {['1,000,000', '5,000,000', '10,000,000', '15,000,000'].map(v => (
                            <button
                                key={v}
                                type="button"
                                onClick={() => setTransferAmount(v)}
                                className="p-1 bg-primary-lighter/50 light:bg-primary-lighter/10 rounded-xl text-custom-gray font-peyda text-xs hover:border-primary-blue"
                            >
                                {v}
                            </button>
                        ))}
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
                    <select className="!font-peyda w-full bg-transparent light:bg-white border border-custom-border-light light:border-custom-gray text-xs rounded-lg px-4 py-3 text-white light:text-light-text-color focus:outline-none focus:ring-2 focus:ring-primary-darker + light:focus:ring-primary-whiteSpecial focus:border-transparent">
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
                            <p className="font-peyda text-text-color light:text-light-text-color">
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
        </>
    );
};

export default Wallet;
