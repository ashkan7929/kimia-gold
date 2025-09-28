import Typography from '@mui/material/Typography';
import { useEffect, useMemo, useState } from 'react';
import { FaArrowDownLong  } from '../../Icons';
// import { useTranslation } from 'react-i18next';

import { walletService } from '../../services/walletService';
import { useAuth } from '../../stores/auth.store';
import type { UserWallet, TransactionWallet as Tx } from '../../types/wallet';
import { useParams } from 'react-router-dom';
import FilterBar, { type CatKey } from '../../components/FilterBar/FilterBar';

const CATEGORIES: { key: CatKey; label: string }[] = [
  { key: 'all',               label: 'همه' },
  { key: 'PaymentSuccessful', label: 'پرداخت موفق' },
  { key: 'PaymentFailed',     label: 'پرداخت ناموفق' },
  { key: 'Gold',              label: 'طلای ۱۸ عیار' },
];

const toLatinDigits = (s: unknown) =>
  String(s ?? '').replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));

const normalize = (s: unknown) => toLatinDigits(s).trim().toLowerCase();

function matchQuery(tx: Tx, q: string) {
  const query = normalize(q);
  if (!query) return true;

  const hay = [
    tx.transactionTypeName,
    (tx as any).description, 
  ].map(normalize).join(' ');

  if (hay.includes(query)) return true;

  const digits = query.replace(/[^\d]/g, '');
  if (digits && String(tx.amount ?? '').includes(digits)) return true;

  return false;
}

function matchCategories(tx: Tx, selected: Set<CatKey>) {
  if (selected.size === 0) return true; 

  const tags = new Set<CatKey>(['all']);
  if (tx.status === 1) tags.add('PaymentSuccessful'); else tags.add('PaymentFailed');

  const typeNorm = normalize(tx.transactionTypeName);
  if (typeNorm.includes('طلا') || typeNorm.includes('طلای 18') || typeNorm.includes('طلای ۱۸')) tags.add('Gold');

  for (const k of selected) if (tags.has(k)) return true;
  return false;
}

const Transactions = () => {
  // const { t } = useTranslation();
  const { walletId: walletIdFromUrl } = useParams<{ walletId: string }>();
  const { user, isAuthenticated } = useAuth();

  const [wallets, setWallets] = useState<UserWallet[]>([]);
  const [walletsLoading, setWalletsLoading] = useState(false);
  const [walletsError, setWalletsError] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<UserWallet | null>(null);

  const [txs, setTxs] = useState<Tx[]>([]);
  const [txLoading, setTxLoading] = useState(false);
  const [txError, setTxError] = useState<string | null>(null);

  const [query, setQuery] = useState<string>('');
  const [selected, setSelected] = useState<Set<CatKey>>(new Set());

  const onToggle = (key: CatKey) => {
    if (key === 'all') return setSelected(new Set());
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  useEffect(() => {
    const loadWallets = async () => {
      if (!user?.id || !isAuthenticated) return;
      setWalletsLoading(true);
      setWalletsError(null);
      try {
        const list = await walletService.getUserWallets(user.id);
        const safeList: UserWallet[] = Array.isArray(list) ? list : (list?.items ?? []);
        setWallets(safeList);

        const byUrl = walletIdFromUrl
          ? safeList.find(w => String(w.id) === String(walletIdFromUrl))
          : null;
        setSelectedWallet(byUrl || safeList[0] || null);
      } catch (e: any) {
        setWalletsError(e?.data || e?.message || 'خطا در دریافت کیف پول‌ها');
      } finally {
        setWalletsLoading(false);
      }
    };
    loadWallets();
  }, [user?.id, isAuthenticated, walletIdFromUrl]);

  
  const fetchTxs = async (wid: string) => {
    setTxLoading(true);
    setTxError(null);
    try {
      type TxResponse = { items?: Tx[] } | Tx[] | undefined;
      const data = (await walletService.getTransactions(wid)) as TxResponse;
      setTxs(Array.isArray(data) ? data : Array.isArray(data?.items) ? data!.items! : []);
    } catch (e: any) {
      setTxError(e?.data || e?.message || 'خطا در دریافت تراکنش‌ها');
    } finally {
      setTxLoading(false);
    }
  };

  useEffect(() => {
    if (selectedWallet?.id) fetchTxs(selectedWallet.id);
  }, [selectedWallet?.id]);

  const filteredTxs = useMemo(() => {
    return txs.filter(tx => matchCategories(tx, selected) && matchQuery(tx, query));
  }, [txs, selected, query]);

  if (walletsLoading) {
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
    <div className="flex flex-col gap-3 items-center pb-25">
      <FilterBar
        query={query}
        onQueryChange={setQuery}
        categories={CATEGORIES}
        selected={selected}
        onToggle={onToggle}
      />

      {txLoading ? (
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
        <div className="flex flex-col gap-2 w-full">
          {filteredTxs.map(tx => (
            <div
              key={tx.id}
              className="flex justify-between w-full p-2.5 dark:bg-black bg-light-primary-darker rounded-lg"
            >
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
                  <Typography
                    className="!font-kalameh dark:text-white text-light-text-color"
                    fontSize={9}
                  >
                    {new Date(tx.processedAt ?? '').toLocaleString('fa-IR')}
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
                    {Number(tx.amount ?? 0).toLocaleString('fa-IR')}
                  </Typography>
                  <img alt="" src="/images/toman.svg" width={10} height={10} />
                </div>
                <Typography
                  className={`!font-peyda w-fit py-0.5 px-2.5 rounded-xl !text-xs ${
                    tx.status === 1 ? 'text-green-500 bg-green-500/30' : 'text-red-400 bg-red-400/25'
                  }`}
                >
                  {tx.status === 1 ? 'موفق' : 'ناموفق'}
                </Typography>
              </div>
            </div>
          ))}

          {filteredTxs.length === 0 && (
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
