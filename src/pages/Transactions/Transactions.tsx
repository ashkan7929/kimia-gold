import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';
import { FaArrowDownLong } from '../../Icons';
import { useTranslation } from 'react-i18next';
import { VscListFilter } from 'react-icons/vsc';
import { MdClose } from 'react-icons/md';
import { Datepiker } from '../../components/Inputs/Index';

import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

type StatusFilter = 'all' | 'success' | 'failed';

type Filters = {
    status: StatusFilter;
    date?: string | null;
    productType?: string | null;
};

const tabInfo = [
    { id: 1, title: 'برداشت موجودی' },
    { id: 2, title: 'افزایش موجودی' },
    { id: 3, title: 'انتقال موجودی' },
];

const data = [
    { id: 1, title: 'افزایش موجودی', amount: 2566890, date: '۱۴۰۳/۰۶/۱۰ ۱۵:۲۵', status: 'success' },
    { id: 2, title: 'برداشت موجودی', amount: 350000, date: '۱۴۰۳/۰۹/۱۵ ۱۰:۱۲', status: 'failed' },
    { id: 3, title: 'انتقال موجودی', amount: 149000, date: '۱۴۰۳/۰۹/۱۶ ۱۸:۴۰', status: 'success' },
    { id: 4, title: 'انتقال موجودی', amount: 150000, date: '۱۴۰۳/۰۶/۱۰ ۱۴:۴۰', status: 'failed' },
    { id: 5, title: 'برداشت موجودی', amount: 350000, date: '۱۴۰۴/۱۱/۱۵ ۱۰:۱۲', status: 'success' },
] as const;

const toLatinDigits = (s: string) => s.replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));

const jalaliDateTimeToMs = (jalaliWithTime: string) => {
    const latin = toLatinDigits(jalaliWithTime);
    const [datePart] = latin.split(' ');
    const [y, m, d] = datePart.split('/').map(Number);

    const dobj = new DateObject({
        calendar: persian,
        locale: persian_fa,
        year: y,
        month: m,
        day: d,
    });

    return dobj.toDate().getTime();
};

const filterDayToStartMs = (pickerValue: string) => {
    if (!pickerValue) return null;
    const latin = toLatinDigits(pickerValue);
    const compact = latin.includes('-') ? latin.replaceAll('-', '') : latin;
    const year = Number(compact.slice(0, 4));
    const month = Number(compact.slice(4, 6));
    const day = Number(compact.slice(6, 8));

    const dobj = new DateObject({
        calendar: persian,
        locale: persian_fa,
        year,
        month,
        day,
    });

    return dobj.toDate().getTime();
};

const Transactions = () => {
    const [selectedTab, setSelectedTab] = useState(tabInfo[0]);
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState<Filters>({
        status: 'all',
        date: null,
        productType: null,
    });

    const handleClearFilter = () => {
        const clearData: Filters = { status: 'all', date: null, productType: null };
        setFilter(clearData);
        sessionStorage.removeItem('DataFilters');
        setOpen(false);
    };

    const filterItem = useMemo(() => {
        const fromMs = filter.date ? filterDayToStartMs(filter.date) : null;

        return data.filter(tx => {
            if (filter.status !== 'all' && tx.status !== filter.status) return false;

            if (fromMs !== null) {
                const txMs = jalaliDateTimeToMs(tx.date);
                if (txMs !== fromMs) return false;
            }

            if (filter.productType && tx.title !== filter.productType) return false;
            return true;
        });
    }, [filter]);

    return (
        <div className="flex flex-col gap-3 items-center pb-25">
            <div className="w-full px-4 py-3 rounded-lg dark:bg-black bg-light-primary-darker">
                <div className="flex w-full gap-x-4">
                    {tabInfo.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab)}
                            className={`${
                                selectedTab === tab
                                    ? 'bg-primary-blue dark:bg-gray-700 text-white dark:text-black'
                                    : 'bg-transparent'
                            } flex-1 cursor-pointer text-light-text-color dark:text-neutral-200 px-3 py-2 rounded-md`}
                        >
                            <Typography
                                className="!font-kalameh  text-nowrap"
                                fontWeight="semibold"
                                fontSize={9}
                            >
                                {tab.title}
                            </Typography>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-between p-4 w-full rounded-lg dark:bg-black bg-light-primary-darker">
                <Typography
                    className="!font-kalameh text-white light:text-light-text-color text-nowrap"
                    fontWeight="semibold"
                    fontSize={11}
                >
                    {t('transaction.TransactionsHeader')}
                </Typography>
                <div className="flex gap-2 items-center" onClick={() => setOpen(true)}>
                    <Typography
                        className="!font-kalameh text-white light:text-light-text-color text-nowrap"
                        fontWeight="semibold"
                        fontSize={11}
                    >
                        {t('transaction.TransactionsFilter')}
                    </Typography>
                    <VscListFilter className="text-white light:text-light-text-color mt-1 flex-1" />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
                {filterItem.map(tx => (
                    <div
                        key={tx.id}
                        className="flex justify-between w-full p-2.5 dark:bg-black bg-light-primary-darker rounded-lg"
                    >
                        <div className="flex gap-2 items-center">
                            <div className="flex justify-center items-center w-7 h-7 bg-green-100  rounded-full">
                                <FaArrowDownLong
                                    className="text-green-600 light:text-green-500"
                                    fontSize={11}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Typography
                                    className="!font-kalameh dark:text-white text-light-text-color"
                                    fontWeight={600}
                                    fontSize={11}
                                >
                                    {tx.title}
                                </Typography>
                                <Typography
                                    className="!font-kalameh dark:text-white text-light-text-color"
                                    fontSize={9}
                                >
                                    {tx.date}
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
                                    {tx.amount.toLocaleString('fa-IR')}
                                </Typography>
                                <img alt="" src="/images/toman.svg" width={10} height={10} />
                            </div>
                            <Typography
                                className={`!font-peyda w-fit py-0.5 px-2.5 rounded-xl !text-xs ${
                                    tx.status === 'success'
                                        ? 'text-green-500 bg-green-500/30'
                                        : 'text-red-400 bg-red-400/25'
                                }`}
                            >
                                {tx.status === 'success' ? 'موفق' : 'ناموفق'}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>

            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed bottom-2 left-1/2 rounded-lg -translate-x-1/2 w-full max-w-[410px] z-50"
                >
                    <div
                        className="absolute inset-0 dark:bg-black/60 dark:border-gray-500 bg-light-primary-darker"
                        onClick={() => setOpen(false)}
                    />

                    <div className="relative z-10 flex h-full w-full flex-col dark:text-white rounded-xl dark:bg-black bg-light-primary-darker text-light-text-color">
                        <div className="flex items-center justify-between px-4 py-3 border-b dark:border-white/10 border-white/90">
                            <Typography className="!font-kalameh" fontWeight="bold" fontSize={12}>
                                {t('transaction.TransactionsFilter')}
                            </Typography>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleClearFilter}
                                    className="px-3 py-1.5 rounded-md dark:bg-accent-orange bg-primary-blue hover:bg-white/15 text-text-color text-xs font-peyda"
                                >
                                    {t('transaction.deleteFilter')}
                                </button>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-1.5 rounded-md dark:hover:bg-white/10 hover:bg-white/90"
                                    aria-label="بستن"
                                >
                                    <MdClose size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-6">
                            <section>
                                <h3 className="!font-kalameh text-sm mb-2 opacity-80">
                                    {t('transaction.status')}
                                </h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {(['all', 'success', 'failed'] as const).map(item => (
                                        <button
                                            key={item}
                                            onClick={() =>
                                                setFilter(prev => ({ ...prev, status: item }))
                                            }
                                            className={`w-full text-right px-4 py-3 rounded-xl border text-xs ${
                                                filter.status === item
                                                    ? 'bg-primary-blue dark:bg-accent-orange border-transparent dark:text-light-text-color !text-text-color'
                                                    : ' dark:border-white/10 bg-none border-custom-gray dark:text-text-color text-light-text-color '
                                            }`}
                                        >
                                            {item === 'all'
                                                ? 'همه'
                                                : item === 'success'
                                                  ? 'تراکنش‌های موفق'
                                                  : 'تراکنش‌های ناموفق'}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="!font-kalameh text-sm mb-3 opacity-80">
                                    {t('transaction.typeTransaction')}
                                </h3>
                                <select
                                    value={filter.productType ?? ''}
                                    onChange={e =>
                                        setFilter(prev => ({
                                            ...prev,
                                            productType: e.target.value || null,
                                        }))
                                    }
                                    className="
                                            w-full rounded-lg px-4 py-2 text-sm outline-none
                                            bg-light-primary-darker text-light-text-color
                                            border border-custom-gray
                                            dark:bg-black dark:text-text-color dark:border-white/10
                                            appearance-none
                                        "
                                >
                                    <option value=""> {t('transaction.typeProduct')}</option>
                                    <option value="طلای 18 عیار">
                                        {t('transaction.typeProduct1')}
                                    </option>
                                    <option value="طلای 24 عیار">
                                        {' '}
                                        {t('transaction.typeProduct2')}
                                    </option>
                                    <option value="کارت اعتباری">
                                        {t('transaction.typeProduct3')}{' '}
                                    </option>
                                </select>
                            </section>

                            <section>
                                <h3 className="!font-kalameh text-sm mb-2 opacity-80">تاریخ</h3>
                                <Datepiker
                                    value={filter.date ?? ''}
                                    onChange={(e: any) =>
                                        setFilter(prev => ({
                                            ...prev,
                                            date: (e?.target?.value ?? '').toString() || null,
                                        }))
                                    }
                                    placeholder="انتخاب تاریخ"
                                    className="w-full placeholder:text-light-text-color 
                  "
                                />
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Transactions;
