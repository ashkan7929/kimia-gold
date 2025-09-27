// Transactions.tsx
import Typography from '@mui/material/Typography';
import { useEffect, useMemo, useState } from 'react';
import { FaArrowDownLong } from '../../Icons';
import { useTranslation } from 'react-i18next';
import { VscListFilter } from 'react-icons/vsc';

import { walletService } from '../../services/walletService';
import { useAuth } from '../../stores/auth.store';
import type { UserWallet, TransactionWallet as Tx } from '../../types/wallet';
import { useParams } from 'react-router-dom';

type StatusFilter = 'all' | 'success' | 'failed';
type Filters = {
  status: StatusFilter;
  productType?: string | null;
  recentCount: 5 | 10 | 20;
};
const FILTERS_KEY = 'TxFilters';

const Transactions = () => {
  const { t } = useTranslation();
  const { walletId: walletIdFromUrl } = useParams<{ walletId: string }>();
  const { user, isAuthenticated } = useAuth();

  // Wallets
  const [wallets, setWallets] = useState<UserWallet[]>([]);
  const [walletsLoading, setWalletsLoading] = useState(false);
  const [walletsError, setWalletsError] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<UserWallet | null>(null);

  // Transactions
  const [txs, setTxs] = useState<Tx[]>([]);
  const [txLoading, setTxLoading] = useState(false);
  const [txError, setTxError] = useState<string | null>(null);

  // Filters (panel + state)
  const [panelOpen, setPanelOpen] = useState(false);
  const [filter, setFilter] = useState<Filters>(() => {
    try {
      const raw = sessionStorage.getItem(FILTERS_KEY);
      return raw ? (JSON.parse(raw) as Filters) : { status: 'all', productType: null, recentCount: 10 };
    } catch {
      return { status: 'all', productType: null, recentCount: 10 };
    }
  });
  useEffect(() => {
    sessionStorage.setItem(FILTERS_KEY, JSON.stringify(filter));
  }, [filter]);

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

  /* Options & filtered list */
  const transactionTypeOptions = useMemo(() => {
    const names = new Set<string>();
    txs.forEach(tx => { if (tx.transactionTypeName) names.add(tx.transactionTypeName); });
    return Array.from(names);
  }, [txs]);

  const filteredItems = useMemo(() => {
    const out = txs.filter(tx => {
      if (filter.status !== 'all') {
        const isSuccess = tx.status === 1;
        if (filter.status === 'success' && !isSuccess) return false;
        if (filter.status === 'failed' && isSuccess) return false;
      }
      if (filter.productType && tx.transactionTypeName !== filter.productType) return false;
      return true;
    });
    return out.slice(0, filter.recentCount);
  }, [txs, filter]);

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
      <div className="flex justify-between p-4 w-full rounded-lg dark:bg-black bg-light-primary-darker">
        <Typography
          className="!font-kalameh text-white text-nowrap"
          fontWeight="semibold"
          fontSize={11}
        >
          {t('transaction.TransactionsHeader')}
        </Typography>

        <button
          type="button"
          aria-controls="tx-filter-panel"
          aria-expanded={panelOpen}
          onClick={() => setPanelOpen(p => !p)}
          className="flex gap-2 items-center text-white"
        >
          <Typography
            className="!font-kalameh text-white text-nowrap"
            fontWeight="semibold"
            fontSize={11}
          >
            {t('transaction.TransactionsFilter')}
          </Typography>
          <VscListFilter className="mt-1" />
        </button>
      </div>

      <div
        id="tx-filter-panel"
        className={`
          w-full overflow-hidden rounded-lg border
          dark:bg-black bg-light-primary-darker
          dark:border-white/10 border-black/10
          transition-all duration-300 ease-in-out
          ${panelOpen ? 'mt-2 max-h-[360px] opacity-100' : 'max-h-0 opacity-0 mt-0'}
        `}
      >
        {panelOpen && (
          <div className="p-4 space-y-6">
           
{/* تعداد نمایش */}
<section>
  <h3 className="!font-kalameh text-sm mb-2 opacity-80 text-black dark:text-white">تعداد نمایش</h3>
  <div className="flex items-center justify-between rounded-lg overflow-hidden border dark:border-white/10 border-black/10">
    {[5, 10, 20].map(n => (
      <button
        key={n}
        onClick={() => setFilter(prev => ({ ...prev, recentCount: n as 5 | 10 | 20 }))}
        className={`flex-1 px-4 py-2 text-sm transition-colors
          ${filter.recentCount === n
            ? 'bg-primary-blue dark:bg-accent-orange text-white font-bold'
            : 'bg-transparent dark:text-text-color text-light-text-color hover:bg-white/10'}
        `}
      >
        {n} تراکنش آخر
      </button>
    ))}
  </div>
</section>

            {/* نوع محصول */}
            <section>
              <h3 className="!font-kalameh text-sm mb-2 opacity-80 text-black dark:text-white">{t('transaction.typeTransaction')}</h3>
              <select
                value={filter.productType ?? ''}
                onChange={e => setFilter(prev => ({ ...prev, productType: e.target.value || null }))}
                className="w-full rounded-lg px-4 py-2 text-sm outline-none bg-light-primary-darker text-light-text-color border border-custom-gray dark:bg-black dark:text-text-color dark:border-white/10 appearance-none"
              >
                <option value="">{t('transaction.typeProduct')}</option>
                {transactionTypeOptions.map(name => (
                  <option key={name} value={name}>{name}</option>
                  
                ))}
                <option value="طلای 18 عیار">{t('transaction.typeProduct1')}</option>
                <option value="طلای 24 عیار">{t('transaction.typeProduct2')}</option>
                <option value="کارت اعتباری">{t('transaction.typeProduct3')}</option>

              </select>
            </section>

            {/* وضعیت  */}
            <section>
              <h3 className="!font-kalameh text-sm mb-2 opacity-80 text-black dark:text-white">{t('transaction.status')}</h3>
              <div className="flex items-center gap-2">
                {(['all', 'success', 'failed'] as const).map(item => (
                  <button
                    key={item}
                    onClick={() => setFilter(prev => ({ ...prev, status: item }))}
                    className={`px-3 py-2 rounded-lg text-xs border
                      ${filter.status === item
                        ? 'bg-primary-blue dark:bg-accent-orange text-white border-transparent'
                        : 'dark:border-white/10 border-custom-gray dark:text-text-color text-light-text-color'
                      }`}
                  >
                    {item === 'all' ? 'همه' : item === 'success' ? 'موفق' : 'ناموفق'}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* List */}
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
          {filteredItems.map(tx => (
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

          {filteredItems.length === 0 && (
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
