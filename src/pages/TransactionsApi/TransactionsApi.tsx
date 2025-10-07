/* src/pages/TransactionsApi/TransactionsApi.tsx */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { transactionService } from '../../services/transactionService';
import { useAuth } from '../../stores/auth.store';
import type { TransactionWallet as Tx } from '../../types/wallet';
import { formatFaDateTime, formatFaNumber } from '../../utils/transactions';

export default function TransactionsApi() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [txs, setTxs] = useState<Tx[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        setLoading(true);
        setError(null);
        const list = user?.id
          ? await transactionService.getByUser(user.id)
          : await transactionService.getAll();
        if (!cancelled) setTxs(Array.isArray(list) ? list : []);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'خطا در دریافت تراکنش‌ها');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [user?.id]);

  if (loading) return <div className="p-4 text-gray-500">در حال بارگذاری…</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col gap-2 w-full px-1 pb-10">
      {txs.map(tx => (
        <button
          key={tx.id}
          onClick={() => navigate(`/detail/${tx.id}`)}
          className="text-left flex justify-between w-full p-2.5 dark:bg-black bg-light-primary-darker rounded-lg hover:ring-1 hover:ring-primary-blue/40 transition"
        >
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-light-text-color dark:text-white">
              {tx.transactionTypeName || tx.transactionTypeCode}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {formatFaDateTime(tx.processedAt)}
            </div>
          </div>
          <div className="text-sm font-bold text-light-text-color dark:text-white">
            {formatFaNumber(tx.amount)}
          </div>
        </button>
      ))}

      {txs.length === 0 && (
        <div className="p-4 text-gray-500">تراکنشی یافت نشد</div>
      )}
    </div>
  );
}
