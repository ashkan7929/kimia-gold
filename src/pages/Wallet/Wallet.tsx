import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { BiTransferAlt, GoArrowDownLeft, GoArrowUpRight, MdAddCard } from '../../Icons';

import { useTheme } from '../../contexts/ThemeContext';
import Modal from '../../components/Modal/Modal';
import { FormControl, Select, MenuItem, Stack, Box } from '@mui/material';
import tomanBlack from '../../assets/images/blackToman.svg';
import type { UserWallet, CardOption } from '../../types/wallet';

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
    const baseUrl = "https://vemclub.com/api"
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [selectedTab, setSelectedTab] = useState(tabInfo[0]);
    const [showWithdrawModal, setShowWithdrawModal] = useState<boolean>(false);
    const [showDepositModal, setShowDepositModal] = useState<boolean>(false);
    const [showTransferModal, setShowTransferModal] = useState<boolean>(false);
    const [showNewCardModal, setShowNewCardModal] = useState<boolean>(false);
    const [depositAmount, setDepositAmount] = useState<string>('');
    const [withdrawAmount, setWithdrawAmount] = useState<string>('');
    const [transferAmount, setTransferAmount] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [wallet, setWallet] = useState<UserWallet | null>(null);
    const token: string = localStorage.getItem('auth.token') ?? '';
    // const token = localStorage.getItem('auth_token');
    console.log(token);
    const navigate = useNavigate();
    const location = useLocation();
    const alertedRef = useRef(false);

    useEffect(() => {
        if (!token && !alertedRef.current) {
            alertedRef.current = true;
            setLoading(false);
            alert('نشست شما منقضی شده است. لطفاً دوباره وارد شوید.');
            navigate('/auth/unified', { replace: true, state: { from: location } });
        }
    }, [token, navigate, location]);

    useEffect(() => {
        if (!token) return;

        const ac = new AbortController();
        setLoading(true);

        (async () => {
            try {
                const res = await fetch('/api/Wallet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        userId: '8f6a1b85-2a3c-4f51-9d7a-1b2c34de5f67',
                        walletTypeId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                        currency: 'IRR',
                    }),
                    signal: ac.signal,
                });

                if (res.ok) {
                    const loc = res.headers.get('Location') || res.headers.get('location');
                    const id = loc?.split('/').filter(Boolean).pop();

                    if (id) {
                        const getRes = await fetch(`/api/Wallet/${id}`, {
                            headers: {
                                Accept: 'application/json',
                                Authorization: `Bearer ${token}`,
                            },
                            signal: ac.signal,
                        });
                        if (!getRes.ok) throw new Error(`HTTP ${getRes.status}`);
                        const data: UserWallet = await getRes.json();
                        setWallet(data);
                        return;
                    }

                    const text = await res.text();
                    if (text) {
                        const data = JSON.parse(text) as UserWallet;
                        setWallet(data);
                    }
                    return;
                }

                if (res.status === 409) {
                    const id = wallet?.id; 
                    if (!id) throw new Error('Wallet ID not found');
                    const byIdRes = await fetch(`/api/Wallet/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                        signal: ac.signal,
                    });
                    if (!byIdRes.ok) throw new Error(`HTTP ${byIdRes.status}`);
                    const data: UserWallet = await byIdRes.json();
                    setWallet(data);
                    return;
                }

                throw new Error(`HTTP ${res.status}`);
            } catch (err: any) {
                if (err?.name !== 'AbortError') console.error(err);
            } finally {
                if (!ac.signal.aborted) setLoading(false);
            }
        })();

        return () => ac.abort();
    }, [token, wallet?.id]);

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
                <div className="bg-primary-blue light:bg-light-primary-darker flex w-full p-4 rounded-lg">
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
                                        {'کیف پول'}
                                    </Typography>
                                </div>
                                <div className="flex gap-1 items-center">
                                    {loading && <Typography>در حال بارگذاری کیف پول...</Typography>}
                                    {!loading && wallet && (
                                        <Typography
                                            className="!font-peyda text-text-color light:text-light-text-color"
                                            fontWeight="bold"
                                            fontSize={24}
                                        >
                                            {(wallet?.balance ?? 0).toLocaleString('fa-IR')}
                                        </Typography>
                                    )}

                                    <div className="flex justify-center items-center">
                                        <img
                                            alt="toman"
                                            src={isDark ? '/images/toman.svg' : tomanBlack}
                                            className={`w-5 h-5 shrink-0 min-w-[20px]  ${loading ? 'invisible' : ''}`}
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
                        <div className="grid grid-cols-3 gap-1">
                            <button
                                onClick={handleShowDepositModal}
                                className="bg-accent-orange group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                            >
                                {'افزایش موجودی'}
                                <GoArrowUpRight
                                    className="text-text-color light:text-light-text-color light:group-hover:text-text-color"
                                    fontSize={15}
                                />
                            </button>
                            <button
                                onClick={handleShowWithdrawModal}
                                className="bg-primary-dark group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                            >
                                {'برداشت موجودی'}
                                <GoArrowDownLeft
                                    className="text-text-color light:text-light-text-color light:group-hover:text-text-color"
                                    fontSize={15}
                                />
                            </button>
                            <button
                                onClick={handleShowTransferModal}
                                className="bg-primary-light group light:bg-primary-whiteSpecial text-text-color light:text-light-text-color light:hover:bg-primary-blue hover:light:text-text-color text-[10px] font-peyda px-2 py-1.5 rounded-md flex items-center justify-center gap-0.5"
                            >
                                <BiTransferAlt
                                    className="text-text-color light:text-light-text-color light:group-hover:text-text-color"
                                    fontSize={15}
                                />
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
            </div>

            <Modal
                confirmText="افزایش موجودی"
                handleClose={handleShowDepositModal}
                modalTitle="افزایش موجودی"
                open={showDepositModal}
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
