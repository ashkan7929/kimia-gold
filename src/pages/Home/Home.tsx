import Typography from '@mui/material/Typography';
import { FaRegStar, FiEye, PiCaretUpDownBold } from '../../Icons';
import { useAuth } from '../../stores/auth.store';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../../layouts/BottomNav';
import { useTheme } from '../../contexts/ThemeContext';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ServiceBtn from '../../components/ServiceBtn/ServiceBtn';

import {
  moreLight, moreDark, insuranceServicelight, insuranceServices, wealthManagementLight,
  wealthManagementDark, creditServicesLight, creditServicesDark, shoppingIconLight,
  shoppingIcon, insuranceIconLight, insuranceIcon, newsImgLight, newsImg, lightwallet,
  CampaignImgLight, CampaignImg, analizImgLight, analizImg, goldProduct, walletLogo
} from "../../asset/index";

import type { MarketRow, ServiceItem } from "../../types/index";

// ============ Data ============
const SERVICES: ServiceItem[] = [
  { key: 1, label: 'خدمات بیمه',    darkSrc: insuranceServices,     lightSrc: insuranceServicelight, to: '' },
  { key: 2, label: 'مدیریت ثروت',   darkSrc: wealthManagementDark,  lightSrc: wealthManagementLight, to: '/buy' },
  { key: 3, label: 'خدمات اعتباری', darkSrc: creditServicesDark,    lightSrc: creditServicesLight,   to: '' },
  { key: 4, label: 'کیمیا',         darkSrc: insuranceIcon,         lightSrc: insuranceIconLight,    to: '/products' },
  { key: 5, label: 'فروشگاه',       darkSrc: shoppingIcon,          lightSrc: shoppingIconLight,     to: '' },
  { key: 6, label: 'کمپین',         darkSrc: CampaignImg,           lightSrc: CampaignImgLight,      to: '' },
  { key: 7, label: 'تحلیل‌گر',      darkSrc: analizImg,             lightSrc: analizImgLight,        to: '' },
  { key: 8, label: 'اخبار',         darkSrc: newsImg,               lightSrc: newsImgLight,          to: '' },
  { key: 9, label: 'سایر',          darkSrc: moreDark,              lightSrc: moreLight,             to: '' },
];

const MARKET_ROWS: MarketRow[] = [
  { id: 1, name: 'انس طلا', enName: 'Anas gold', price: '۶۲,۴۰۷ ت', dollar: '۸,۰۸۲ $', change: '+۰.۸۳٪', changeColor: 'success', img: goldProduct },
  { id: 2, name: 'انس طلا', enName: 'Anas gold', price: '۶۲,۴۰۷ ت', dollar: '۸,۰۸۲ $', change: '+۰.۸۳٪', changeColor: 'success', img: goldProduct },
];

// ============ Helpers ============
const themedSrc = (isDark: boolean, darkSrc: string, lightSrc: string) => (isDark ? darkSrc : lightSrc);

// ============ Small UI Pieces ============
const NameCellHeader = () => {
  const { t } = useTranslation('');
  return (
    <div className="flex gap-1 items-center col-span-3 py-2">
      <FaRegStar className="dark:text-text-color text-light-text-color" aria-hidden />
      <Typography fontSize={9} className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap">
        {t('tableHeadName')}
      </Typography>
      <PiCaretUpDownBold className="text-text-color light:text-light-text-color" aria-hidden />
    </div>
  );
};

const BalanceOrWelcome = ({
  showWelcome,
  isDark,
  firstName,
  lastName,
  onIncreaseCredit,
}: {
  showWelcome: boolean;
  isDark: boolean;
  firstName?: string;
  lastName?: string;
  onIncreaseCredit: () => void;
}) => {
  const { t } = useTranslation('');

  if (showWelcome) {
    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    return (
      <div>
        <div className="flex flex-col gap-1">
          <Typography className="!font-peyda text-text-color light:text-light-text-color" fontSize={13}>
            <strong>{fullName || 'کاربر گرامی'}</strong> {t('welcomeTitle')}
          </Typography>
          <Typography className="!font-peyda text-neutral-300 light:text-neutral-700" fontSize={11}>
            {t('welcomeBody')}
          </Typography>
        </div>
        <div>
          <img alt="Welcome illustration" src="/images/welcome-home.svg" width={79} height={63} />
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-black bg-light-primary-darker w-full font-peyda dark:text-text-color text-light-text-color flex items-center justify-between p-2 rounded-lg">
      <div className="flex items-center gap-2">
        <img alt="Wallet logo" src={themedSrc(isDark, walletLogo, lightwallet)} width={30} height={30} />
        <div className="flex flex-col">
          <Typography className="!font-peyda dark:text-text-color text-light-text-color" fontSize={12}>
            {t('balanceLabel')}
          </Typography>
          <Typography className="!font-peyda dark:text-text-color text-light-text-color" fontSize={12}>
            ۰ ریال
          </Typography>
        </div>
      </div>

      <button
        onClick={onIncreaseCredit}
        className="dark:bg-accent-orange bg-primary-blue font-bold text-white text-[10px] font-peyda px-7 py-2 rounded-xl"
        aria-label={t('increaseCredit')}
        title={t('increaseCredit')}
      >
        {t('increaseCredit')}
      </button>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation('');
  return (
    <div className="dark:bg-black bg-light-primary-darker flex w-full p-3 rounded-lg">
      <main className="px-4 flex-grow py-5 flex gap-3 flex-col items-center justify-center bg-[url('/images/Lines-pattern-starters.png')] bg-cover bg-center">
        <div className="flex flex-col items-center gap-1.5">
          <Typography variant="h1" className="!font-peyda dark:text-text-color text-light-text-color" fontSize={16}>
            {t('heroTitlePrefix')} <strong>{t('heroTitleStrong')}</strong>
          </Typography>
          <Typography className="!font-peyda text-neutral-300 light:text-neutral-700" fontSize={11}>
            {t('heroSubtitle')}
          </Typography>
        </div>
        <button className="dark:bg-accent-orange bg-primary-blue text-white text-[9px] font-kalameh px-3 py-1.5 rounded-3xl">
          {t('heroCta')}
        </button>
      </main>
    </div>
  );
};

const ServicesGrid = ({ isDark }: { isDark: boolean }) => (
  <div className="grid gap-4 grid-cols-3 w-full">
    {SERVICES.map((card) => (
      <ServiceBtn
        key={card.key}
        label={card.label}
        darkSrc={card.darkSrc}
        lightSrc={card.lightSrc}
        to={card.to}
        isDark={isDark}
      />
    ))}
  </div>
);

const MarketTableHeader = () => {
  const { t } = useTranslation('');
  return (
    <div className="dark:odd:bg-black odd:bg-white grid grid-cols-9 w-full">
      <NameCellHeader />
      <div className="flex justify-center items-center col-span-2 py-2">
        <Typography fontSize={9} className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap">
          {t('tableHeadPrice')}
        </Typography>
        <PiCaretUpDownBold className="text-text-color light:text-light-text-color" aria-hidden />
      </div>
      <div className="flex justify-center items-center col-span-2 py-2">
        <Typography fontSize={9} className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap">
          {t('tableHead24h')}
        </Typography>
        <PiCaretUpDownBold className="text-text-color light:text-light-text-color" aria-hidden />
      </div>
      <div className="flex justify-center items-center col-span-2 py-2">
        <Typography fontSize={9} className="dark:text-white text-light-text-charcoal !font-peyda text-nowrap">
          {t('tableHeadView')}
        </Typography>
        <PiCaretUpDownBold className="dark:text-text-color text-light-text-color" aria-hidden />
      </div>
    </div>
  );
};

const MarketRowItem = ({ row }: { row: MarketRow }) => {
  const { t } = useTranslation('');
  return (
    <div className="dark:odd:bg-black odd:bg-white grid grid-cols-9 w-full">
      <div className="flex gap-1 items-center col-span-3 py-2">
        <FaRegStar className="dark:text-text-color text-light-text-color" aria-label="Favorite" />
        <div className="w-6.5 h-6.5 flex justify-center items-center rounded-full bg-gold-100">
          <Link to={`/product?id=${row.id}`} aria-label={`${t('tableHeadView')} ${row.name}`}>
            <img src={row.img} alt={`تصویر محصول ${row.name}`} />
          </Link>
        </div>
        <div>
          <Typography fontSize={9} className="dark:text-text-color text-light-text-color !font-peyda text-nowrap">
            {row.name}
          </Typography>
          <Typography fontSize={9} className="dark:text-text-color text-light-text-color !font-peyda text-nowrap">
            {row.enName}
          </Typography>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center col-span-2 py-2">
        <Typography fontSize={13} className="dark:text-text-color text-light-text-color !font-peyda text-nowrap">
          {row.price}
        </Typography>
        <Typography fontSize={9} className="dark:text-text-color text-light-text-color !font-peyda text-nowrap">
          {row.dollar}
        </Typography>
      </div>

      <div className="flex justify-center items-center col-span-2 py-2">
        <div
          className={`text-[10px] ${
            row.changeColor === 'success'
              ? 'text-green-500 bg-green-500/30'
              : row.changeColor === 'danger'
              ? 'text-red-500 bg-red-500/30'
              : 'text-gray-500 bg-gray-500/20'
          } w-fit px-1 py-0.5 rounded-lg`}
          aria-label={`تغییر 24 ساعته ${row.change}`}
          title={`تغییر 24 ساعته ${row.change}`}
        >
          {row.change}
        </div>
      </div>

      <div className="flex justify-center items-center col-span-2 py-2">
        <FiEye className="dark:text-text-color text-light-text-color" aria-label={t('tableHeadView')} />
      </div>
    </div>
  );
};

// ============ Page ============
const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  const userData = useMemo(() => {
    if (user) return user as unknown as { firstName?: string; lastName?: string };
    try {
      return JSON.parse(localStorage.getItem('user-data') || '{}') as { firstName?: string; lastName?: string };
    } catch {
      return {};
    }
  }, [user]);

  useEffect(() => {
    const hasLoggedInBefore = localStorage.getItem('new-user');
    if (hasLoggedInBefore === null) {
      setShowWelcome(true);
      localStorage.setItem('new-user', 'false');
    } else {
      setShowWelcome(false);
    }
  }, [user?.id]);

  return (
    <>
      <div>
        <div className="flex flex-col gap-3 items-center pb-25">
          <BalanceOrWelcome
            showWelcome={showWelcome}
            isDark={isDark}
            firstName={userData?.firstName}
            lastName={userData?.lastName}
            onIncreaseCredit={() => navigate('/wallet')}
          />

          <HeroSection />

          <ServicesGrid isDark={isDark} />

          <div className="dark:bg-black bg-primary-gray-100 w-full rounded-lg py-2.5 px-3">
            <MarketTableHeader />
            {MARKET_ROWS.map((row) => (
              <MarketRowItem key={row.id} row={row} />
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </>
  );
};

export default Home;
