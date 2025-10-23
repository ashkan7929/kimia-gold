import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DetaList from '../../components/List/DetaList';
import ShareBtn from '../../components/ShareBtn/ShareBtn';
import { downloadElementAsPng } from '../../utils/saveReceipt';
import { useTheme } from '../../contexts/ThemeContext';
import { transactionService } from '../../services/transactionService';
import type { TransactionDto as Tx } from '../../types/wallet';
import { GrGallery } from 'react-icons/gr';


export default function TransactionResult() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id') || '';
    const [tx, setTx] = useState<Tx | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const receiptRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const handleSaveReceipt = async () => {
        if (!receiptRef.current) return;
        try {
            const isDark = theme === 'dark';

            await downloadElementAsPng(receiptRef.current, {
                fileName,
                backgroundColor: isDark ? '#000' : '#ffffff',
                pixelRatio: 2, //وضوح
            });
        } catch (e) {
            console.error('خطا در ذخیره رسید:', e);
        }
    };
    useEffect(() => {
        if (!id) {
            setError('شناسه تراکنش نامعتبر است');
            setLoading(false);
            return;
        }
        let cancelled = false;
        setLoading(true);
        transactionService
            .getById(id)
            .then((d: any) => {
                if (!cancelled) setTx(d);
            })
            .catch(e => {
                if (!cancelled) setError(e?.message || 'خطا در دریافت تراکنش');
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => {
            cancelled = true;
        };
    }, [id]);

    if (loading) return <div className="p-4 text-gray-500">در حال بارگذاری…</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;
    if (!tx) return null;

    const isSuccess = tx.status === 'Success';
    const fileName = `${isSuccess ? 'تراکنش_موفق' : 'تراکنش_ناموفق'}-${tx.id}.png`;

    return (
        <div className="w-full mx-auto flex flex-col">
            <main className="flex-grow bg-[url('../images/main-lines-pattern.png')] bg-cover bg-center">
                <div className="p-4 max-w-[480px] mx-auto" ref={receiptRef}>
                    <DetaList
                        items={[
                            { label: 'نوع تراکنش', value: tx.transactionTypeName },
                            { label: 'کد نوع', value: tx.transactionTypeCode },
                            { label: 'مبلغ', value: `${tx.amount.toLocaleString()} تومان` },
                            { label: 'وضعیت', value: tx.status },
                            {
                                label: 'تاریخ تراکنش',
                                value: new Date(tx.createdOn).toLocaleString('fa-IR'),
                            },
                        ]}
                    />
                </div>

                <footer
                    className="p-4 max-w-[480px] mx-auto flex flex-col gap-2"
                    data-hide-when-capture
                >
                    <ShareBtn />
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
                    <Button className="w-full" onClick={() => navigate('/')}>
                        بازگشت
                    </Button>
                </footer>
            </main>
        </div>
    );
}
