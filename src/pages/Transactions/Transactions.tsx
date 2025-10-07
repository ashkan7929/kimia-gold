import Typography from '@mui/material/Typography';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDownLong } from '../../Icons';
import {
  formatFaDateTime,
  formatFaNumber,
  resolveErrorMessage,
  matchesQuery,
  matchesSelectedCategories,
} from '../../utils/transactions';

import { walletService } from '../../services/walletService';
import { useAuth } from '../../stores/auth.store';
import type { UserWallet, TransactionWallet as Tx } from '../../types/wallet';
import { useParams } from 'react-router-dom';
import FilterBar, { type CatKey } from '../../components/FilterBar/FilterBar';

const CATEGORIES: { key: CatKey; label: string }[] = [
  { key: 'all',                label: 'همه' },
  { key: 'PaymentSuccessful',  label: 'پرداخت موفق' },
  { key: 'PaymentFailed',      label: 'پرداخت ناموفق' },
  { key: 'Gold',               label: 'طلای ۱۸ عیار' },
];

export const TransactionStatus = { Failed: 0, Success: 1 } as const;
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]; 


type TxWithDesc = Tx & { description?: string | null | undefined };



const StatusBadge = ({ success }: { success: boolean }) => (
  <span
    className={`!font-peyda w-fit py-0.5 px-2.5 rounded-xl !text-xs ${
      success ? 'text-green-500 bg-green-500/30' : 'text-red-400 bg-red-400/25'
    }`}
    aria-label={success ? 'موفق' : 'ناموفق'}
  >
    {success ? 'موفق' : 'ناموفق'}
  </span>
);

const TransactionRow = ({ tx }: { tx: Tx }) => (
  <Link to={`/detail/${tx.id}`} className="flex justify-between w-full p-2.5 dark:bg-black bg-light-primary-darker rounded-lg hover:ring-1 hover:ring-primary-blue/40 transition">
    <div className="flex gap-2 items-center">
      <div className="flex justify-center items-center w-7 h-7 bg-green-100 rounded-full">
        <FaArrowDownLong className="text-green-600" fontSize={11} />
      </div>
      <div className="flex flex-col gap-1">
        <Typography
          className="!font-kalameh dark:text-white text-light-text-color"
          fontWeight={600}
          fontSize={11}
        >
          {tx.transactionTypeName || 'تراکنش'}
        </Typography>
        <Typography className="!font-kalameh dark:text-white text-light-text-color" fontSize={9}>
          {formatFaDateTime(tx.processedAt)}
        </Typography>
      </div>
    </div>

    <div className="flex flex-col gap-1 items-end">
      <div className="flex gap-1 items-center">
        <Typography
          className="!font-peyda dark:text-text-color text-light-text-color"
          fontWeight="bold"
          fontSize={12}
        >
          {formatFaNumber(tx.amount)}
        </Typography>
        <img alt="تومان" src="/images/toman.svg" width={10} height={10} />
      </div>
      <StatusBadge success={tx.status === TransactionStatus.Success} />
    </div>
  </Link>
);

// =================== Page ===================
const Transactions = () => {
  // const { t } = useTranslation();
  const { walletId: walletIdFromUrl } = useParams<{ walletId: string }>();
  const { user, isAuthenticated } = useAuth();

  const [wallets, setWallets] = useState<UserWallet[]>([]);
  const [isWalletsLoading, setIsWalletsLoading] = useState(false);
  const [walletsError, setWalletsError] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<UserWallet | null>(null);

  const [transactions, setTransactions] = useState<Tx[]>([]);
  const [isTxLoading, setIsTxLoading] = useState(false);
  const [txError, setTxError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<Set<CatKey>>(new Set());

  const handleToggleCategory = (key: CatKey) => {
    if (key === 'all') return setSelectedCategories(new Set());
          setSelectedCategories(prev => {
    const next = new Set(prev);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    return next;
  });
};

  useEffect(() => {
    const loadWallets = async () => {
      if (!user?.id || !isAuthenticated) return;
      setIsWalletsLoading(true);
      setWalletsError(null);
      try {
        const list = await walletService.getUserWallets(user.id);
        const safeList: UserWallet[] = Array.isArray(list) ? list : [];
        setWallets(safeList);

        const byUrl = walletIdFromUrl
          ? safeList.find(w => String(w.id) === String(walletIdFromUrl))
          : null;
        setSelectedWallet(byUrl || safeList[0] || null);
      } catch (e) {
        setWalletsError(resolveErrorMessage(e, 'خطا در دریافت کیف پول‌ها'));
      } finally {
        setIsWalletsLoading(false);
      }
    };
    loadWallets();
  }, [user?.id, isAuthenticated, walletIdFromUrl]);

  const fetchTransactions = async (walletId: string) => {
    setIsTxLoading(true);
    setTxError(null);
    try {
      type TxResponse = { items?: Tx[] } | Tx[] | undefined;
      const data = (await walletService.getTransactions(walletId)) as TxResponse;
      const items = Array.isArray(data) ? data : Array.isArray(data?.items) ? data!.items! : [];
      setTransactions(items);
    } catch (e) {
      setTxError(resolveErrorMessage(e, 'خطا در دریافت تراکنش‌ها'));
    } finally {
      setIsTxLoading(false);
    }
  };

  useEffect(() => {
    if (selectedWallet?.id) fetchTransactions(selectedWallet.id);
  }, [selectedWallet?.id]);

  const filteredTransactions = useMemo(() => {
    if (!transactions.length) return [];
    if (selectedCategories.size === 0 && !searchQuery) return transactions;
    return transactions.filter(
      tx => matchesSelectedCategories(tx, selectedCategories) && matchesQuery(tx as TxWithDesc, searchQuery)
    );
  }, [transactions, selectedCategories, searchQuery]);

  if (isWalletsLoading) {
    return (
      <div className="text-center py-8 w-full">
        <Typography className="!font-peyda text-custom-gray" fontSize={12}>
          در حال بارگذاری کیف‌پول‌ها...
        </Typography>
      </div>
    );
  }

  if (walletsError) {
    return (
      <div className="text-center py-8 w-full">
        <Typography className="!font-peyda text-red-400" fontSize={12}>
          {walletsError}
        </Typography>
      </div>
    );
  }

  if (!wallets || wallets.length === 0) {
    return (
      <div className="text-center py-8 w-full">
        <Typography className="!font-peyda text-custom-gray" fontSize={12}>
          هنوز کیف‌پولی ندارید
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 items-center pb-25">
      <FilterBar
        query={searchQuery}
        onQueryChange={setSearchQuery}
        categories={CATEGORIES}
        selected={selectedCategories}
        onToggle={handleToggleCategory}
      />

      {isTxLoading ? (
        <div className="text-center py-8 w-full">
          <Typography className="!font-peyda text-custom-gray" fontSize={12}>
            در حال بارگذاری تراکنش‌ها...
          </Typography>
        </div>
      ) : txError ? (
        <div className="text-center py-8 w-full">
          <Typography className="!font-peyda text-red-400" fontSize={12}>
            {txError}
          </Typography>
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full px-1">
          {filteredTransactions.map(tx => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8 w-full">
              <Typography className="!font-peyda text-custom-gray" fontSize={12}>
                تراکنشی یافت نشد
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Transactions;
