import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { transactionService } from "../../services/transactionService";
import { formatFaDateTime, formatFaNumber } from "../../utils/transactions";
import type { TransactionWallet as Tx } from "../../types/wallet";

const TransactionDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [tx, setTx] = useState<Tx | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("شناسه تراکنش نامعتبر است");
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    transactionService
      .getById(id)
      .then((data) => {
        if (!cancelled) setTx(data);
      })
      .catch((e: any) => {
        if (!cancelled) setError(e?.message || "خطا در دریافت تراکنش");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return <div className="p-4 text-gray-500">در حال بارگذاری…</div>;
  }
  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }
  if (!tx) {
    return <div className="p-4 text-gray-500">تراکنشی یافت نشد.</div>;
  }

  const success = tx.status === 1;

  return (
    <div className="w-full mx-auto flex flex-col">
      <main className="flex-grow bg-[url('../images/main-lines-pattern.png')] bg-cover bg-center">
        <div className="flex flex-col gap-3 mb-3">
          <section>
            <div className="bg-light-primary-darker dark:bg-black rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
              <div className="p-4 flex flex-col gap-2">
                <div className="text-light-text-color dark:text-white font-semibold text-sm mb-2">
                  اطلاعات تراکنش
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                    <div className="text-gray-700 dark:text-gray-300 text-xs">تاریخ و زمان</div>
                    <div className="text-light-text-color dark:text-white text-xs font-medium">
                      {formatFaDateTime(tx.processedAt)}
                    </div>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                    <div className="text-gray-700 dark:text-gray-300 text-xs">مقدار (به تومان)</div>
                    <div className="text-light-text-color dark:text-white text-xs font-medium">
                      {formatFaNumber(tx.amount)}
                    </div>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                    <div className="text-gray-700 dark:text-gray-300 text-xs">نوع تراکنش</div>
                    <div className="text-light-text-color dark:text-white text-xs font-medium">
                      {tx.transactionTypeName || tx.transactionTypeCode}
                    </div>
                  </li>
                  {tx.reference && (
                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">مرجع/Reference</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        {tx.reference}
                      </div>
                    </li>
                  )}
                  {tx.relatedTransactionId && (
                    <li className="flex justify-between items-center py-2 border-b border-dashed border-custom-gray dark:border-gray-600">
                      <div className="text-gray-700 dark:text-gray-300 text-xs">تراکنش مرتبط</div>
                      <div className="text-light-text-color dark:text-white text-xs font-medium">
                        {tx.relatedTransactionId}
                      </div>
                    </li>
                  )}
                  <li className="flex justify-between items-center py-2">
                    <div className="text-gray-700 dark:text-gray-300 text-xs">وضعیت</div>
                    <div className="text-light-text-color dark:text-white text-xs font-medium">
                      <span className={`inline-flex justify-center items-center px-2 py-1 rounded-[0.24569rem] text-[0.49138rem] font-semibold ${success ? 'bg-green-100 text-green-600 dark:bg-green-600/20 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-600/20 dark:text-red-400'}`}>
                        {success ? 'موفق' : 'ناموفق'}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <Button className="text-white text-sm bg-primary-blue dark:bg-accent-orange">
                {'دانلود فاکتور'}
              </Button>

              <Button onClick={() => navigate('/transactions')} className="border-primary-blue dark:border-accent-orange dark:hover:text-accent-orange dark:text-white text-black hover:text-primary-blue text-sm">
                {'بازگشت به لیست تراکنش‌ها'}
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TransactionDetails;
