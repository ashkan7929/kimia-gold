import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { GrGallery } from '../../Icons';
import DetaList from '../../components/List/DetaList';
import ShareBtn from '../../components/ShareBtn/ShareBtn';
import { downloadElementAsPng } from '../../utils/saveReceipt';
import { useTheme } from '../../contexts/ThemeContext';
import { transactionService } from '../../services/transactionService';

type TxStatus = 'Pending' | 'Succeeded' | 'Failed';
type Tx = {
  id: string;
  walletId: string;
  transactionTypeId: string;
  transactionTypeName: string;
  transactionTypeCode: string;
  amount: number;
  balanceAfter: number;
  description?: string;
  reference?: string;        
  idempotencyKey?: string;
  correlationId?: string;
  status: TxStatus;
  createdOn: string;     
  processedAt?: string;    
  relatedTransactionId?: string;
};

export default function SuccessfulTransaction() {
  const receiptRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { search } = useLocation();

  const id = new URLSearchParams(search).get('id') || '';
  const [tx, setTx] = useState<Tx | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const faDT = (iso?: string) => {
    if (!iso) return '—';
    try {
      const d = new Date(iso);
      const date = d.toLocaleDateString('fa-IR');
      const time = d.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
      return `${time} ${date}`;
    } catch {
      return '—';
    }
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!id) {
        setError('شناسه تراکنش پیدا نشد.');
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const data = await transactionService.getById(id);
        if (!cancelled) setTx(data as any);
      } catch (e: any) {
        const msg = e?.response?.status === 401
          ? 'دسترسی نامعتبر (401): لطفاً وارد شوید یا توکن را بررسی کنید.'
          : (e?.message || 'دریافت اطلاعات تراکنش ناموفق بود.');
        if (!cancelled) setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  const isSuccess = useMemo(() => tx?.status === 'Succeeded', [tx]);

  const fileName = useMemo(() => {
    const base = isSuccess ? 'تراکنش_موفق' : tx?.status === 'Failed' ? 'تراکنش_ناموفق' : 'تراکنش_در_انتظار';
    const code = tx?.reference ? `-${tx.reference}` : '';
    return `${base}${code}.png`;
  }, [isSuccess, tx?.status, tx?.reference]);

  const items = useMemo(() => ([
    { label: 'تاریخ ایجاد :', value: faDT(tx?.createdOn) },
    { label: 'زمان پردازش :', value: faDT(tx?.processedAt) },
    {
      label: <>مبلغ <small>(نمایش خام)</small></>,
      value: (tx?.amount ?? '—').toLocaleString?.('fa-IR') ?? '—',
    },
    { label: 'نوع تراکنش', value: tx?.transactionTypeName || '—' },
    { label: 'شرح', value: tx?.description || '—' },
    { label: 'کد رهگیری', value: tx?.reference || '—' },
    { label: 'موجودی پس از تراکنش', value: (tx?.balanceAfter ?? '—').toLocaleString?.('fa-IR') ?? '—' },
    {
      label: 'وضعیت',
      value: (
        <span
          className={[
            'flex h-[1.6365rem] px-[0.99413rem] py-[0.35088rem] justify-center items-center gap-[0.58475rem]',
            'rounded-[0.3015rem] text-center text-[0.66675rem] font-bold leading-[120%]',
            isSuccess
              ? 'text-green-500 bg-green-500/20'
              : tx?.status === 'Failed'
              ? 'text-red-500 bg-red-500/20'
              : 'text-amber-500 bg-amber-500/20',
          ].join(' ')}
        >
          {isSuccess ? 'موفق' : tx?.status === 'Failed' ? 'ناموفق' : 'در انتظار'}
        </span>
      ),
      border: false,
    },
  ]), [tx, isSuccess]);

  const handleSaveReceipt = async () => {
    if (!receiptRef.current) return;
    try {
      const isDark = theme === 'dark';
      await downloadElementAsPng(receiptRef.current, {
        fileName,
        backgroundColor: isDark ? '#000000' : '#ffffff',
        pixelRatio: 2,
      });
    } catch (e) {
      console.error('خطا در ذخیره رسید:', e);
    }
  };

  if (loading) {
    return (
      <div className="w-full mx-auto min-h-screen grid place-items-center" dir="rtl" lang="fa">
        <div className="text-sm text-gray-500 dark:text-gray-300">در حال دریافت…</div>
      </div>
    );
  }

  if (error || !tx) {
    return (
      <div className="w-full mx-auto min-h-screen grid place-items-center p-4" dir="rtl" lang="fa">
        <div className="max-w-md w-full flex justify-center items-center flex-col gap-2 rounded-lg border border-red-200 dark:border-red-900 p-4 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 text-sm">
          {error || 'تراکنشی یافت نشد.'}
          <div className="mt-3">
            <Button onClick={() => navigate('/app')} className="text-sm">
              بازگشت
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto" dir="rtl" lang="fa">
      <div className="w-full mx-auto dark:bg-black bg-white min-h-screen flex flex-col" ref={receiptRef}>
        <header>
          <div
            className="font-['Alibaba'] h-[11.5rem] w-full text-white text-[1.08331rem] font-bold leading-normal text-center flex items-center justify-center flex-col gap-[1.125rem]"
            style={{
              backgroundColor: isSuccess ? '#22c55e' : tx.status === 'Failed' ? '#ef4444' : '#f59e0b',
              textShadow: '0px 0px 46.222px rgba(245, 245, 245, 0.06)',
              boxShadow: 'inset 0px 0px 60px 0px rgb(0, 0, 0)',
            }}
          >
            <div>
              <img
                src={isSuccess ? '/images/successful.png' : tx.status === 'Failed' ? '/images/failed.png' : '/images/pending.png'}
                alt={isSuccess ? 'موفق' : tx.status === 'Failed' ? 'ناموفق' : 'در انتظار'}
              />
            </div>
            {isSuccess ? 'تراکنش با موفقیت انجام شد' : tx.status === 'Failed' ? 'تراکنش ناموفق بود' : 'تراکنش در انتظار پردازش است'}
          </div>
        </header>

        <main
          className="flex-grow relative bg-cover bg-center pb-20"
          style={{ backgroundImage: 'url("../statics/assets/images/main-lines-pattern.png")' }}
        >
          <div
            className="absolute z-[1] bottom-full w-full h-5"
            style={{
              backgroundImage:
                'linear-gradient(320deg, #040320 10px, transparent 10px), linear-gradient(40deg, #040320 10px, transparent 10px)',
              backgroundSize: '20px 20px',
              backgroundRepeat: 'repeat-x',
            }}
          />

          <div className="container mx-auto px-4">
            <div className="dark:text-[#FAFAFA] text-black text-center text-[0.9375rem] font-semibold leading-normal py-4 border-b border-[#292946]">
              مشخصات تراکنش
            </div>

            <div className="p-[0.625rem]">
              <div className="dark:text-[#FAFAFA] text-black text-center text-[0.88019rem] font-semibold leading-normal mb-4">
                {tx.transactionTypeName || '—'}
              </div>

              <DetaList items={items} />

              <div className="flex gap-3">
                <div className="w-full max-w-1/2" data-hide-when-capture>
                  <ShareBtn />
                </div>
                <button
                  onClick={handleSaveReceipt}
                  data-hide-when-capture
                  className="px-2 py-[0.65rem] text-[0.6875rem] font-semibold leading-[150%] text-center no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg bg-primary-blue dark:bg-accent-orange border-primary-bg-primary-darker text-white w-full flex items-center justify-center gap-2 transition-all duration-150 ease-in-out"
                >
                  <GrGallery />
                  ذخیره در گالری
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="bg-primary border-custom-border p-4 mx-auto w-full" data-hide-when-capture>
            <Button className="dark:text-white text-black w-full max-w-[410px] text-sm" onClick={() => navigate('/')}>
              بازگشت
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}
