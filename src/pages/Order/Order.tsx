// // /* src/pages/order/OrdersPage.tsx */
// // import { useEffect, useMemo, useState } from 'react';
// // import { orderService, type OrderDto } from '../../services/orderService';

// // /** اعداد انگلیسی → فارسی (نمایش) */
// // function toFaDigits(input: string | number) {
// //   const en = '0123456789';
// //   const fa = '۰۱۲۳۴۵۶۷۸۹';
// //   return String(input).replace(/[0-9]/g, (d) => fa[en.indexOf(d)]);
// // }

// // /** تاریخ ISO → نمایشی (جلالی اگر util داری، جایگزین کن) */
// // function formatDate(iso?: string) {
// //   if (!iso) return '-';
// //   try {
// //     return new Date(iso).toLocaleString('fa-IR');
// //   } catch {
// //     return iso;
// //   }
// // }

// // /** نشان وضعیت سفارش */
// // function StatusBadge({ status }: { status?: string }) {
// //   const map: Record<string, string> = {
// //     Pending: 'در انتظار',
// //     Processing: 'در حال پردازش',
// //     Completed: 'تکمیل‌شده',
// //     Cancelled: 'لغو‌شده',
// //   };
// //   const color: Record<string, string> = {
// //     Pending: 'bg-amber-100 text-amber-700',
// //     Processing: 'bg-blue-100 text-blue-700',
// //     Completed: 'bg-emerald-100 text-emerald-700',
// //     Cancelled: 'bg-rose-100 text-rose-700',
// //   };
// //   const key = status ?? 'Pending';
// //   return (
// //     <span className={`px-2 py-1 rounded-full text-xs ${color[key] ?? 'bg-gray-100 text-gray-700'}`}>
// //       {map[key] ?? status ?? 'نامشخص'}
// //     </span>
// //   );
// // }

// // export default function OrdersPage() {
// //   const [orders, setOrders] = useState<OrderDto[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [err, setErr] = useState<string | null>(null);
// //   const [page, setPage] = useState(1);
// //   const pageSize = 10;

// //   const hasData = orders.length > 0;

// //   const totalAmountSum = useMemo(
// //     () => orders.reduce((s, o) => s + (o.totalAmount ?? 0), 0),
// //     [orders]
// //   );

// //   async function fetchOrders() {
// //     try {
// //       setLoading(true);
// //       setErr(null);
// //       const data = await orderService.list({ page, pageSize });
// //       setOrders(Array.isArray(data) ? data : []);
// //     } catch (e: any) {
// //       setErr(e?.message ?? 'خطا در دریافت سفارش‌ها');
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   async function handleCancel(id: string) {
// //     if (!confirm('سفارش لغو شود؟')) return;
// //     try {
// //       await orderService.cancel(id);
// //       // حذف/به‌روزرسانی خوش‌بینانه
// //       setOrders((prev) => prev.map(o => o.id === id ? { ...o, status: 'Cancelled' } : o));
// //     } catch (e: any) {
// //       alert(e?.message ?? 'لغو سفارش ناموفق بود');
// //     }
// //   }

// //   useEffect(() => {
// //     fetchOrders();
// //   }, [page]);

// //   return (
// //     <div dir="rtl" className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
// //       {/* هدر */}
// //       <div className="mb-4 sm:mb-6">
// //         <h1 className="text-xl sm:text-2xl font-bold">سفارش‌ها</h1>
// //         <p className="text-sm text-gray-500 mt-1">لیست سفارش‌های ثبت‌شده شما</p>
// //       </div>

// //       {/* نوار خلاصه */}
// //       <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 mb-4">
// //         <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 shadow">
// //           <div className="text-xs text-gray-500 mb-1">تعداد</div>
// //           <div className="font-bold">{toFaDigits(orders.length)}</div>
// //         </div>
// //         <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 shadow">
// //           <div className="text-xs text-gray-500 mb-1">جمع مبالغ</div>
// //           <div className="font-bold">{toFaDigits(totalAmountSum)} تومان</div>
// //         </div>
// //         <div className="rounded-2xl p-3 bg-white dark:bg-gray-800 shadow hidden sm:block">
// //           <div className="text-xs text-gray-500 mb-1">صفحه</div>
// //           <div className="font-bold">{toFaDigits(page)}</div>
// //         </div>
// //       </div>

// //       {/* حالت بارگذاری */}
// //       {loading && (
// //         <div className="space-y-3">
// //           {Array.from({ length: 4 }).map((_, i) => (
// //             <div key={i} className="rounded-2xl p-3 bg-white dark:bg-gray-800 shadow animate-pulse">
// //               <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2" />
// //               <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* ارور */}
// //       {!loading && err && (
// //         <div className="rounded-2xl p-4 bg-rose-50 text-rose-700 border border-rose-200 mb-4">
// //           {err}
// //         </div>
// //       )}

// //       {/* خالی */}
// //       {!loading && !err && !hasData && (
// //         <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 text-center shadow">
// //           <div className="text-lg font-bold mb-1">سفارشی ثبت نشده است</div>
// //           <div className="text-sm text-gray-500 mb-4">از فروشگاه یا صفحهٔ طلا می‌توانید سفارش ثبت کنید.</div>
// //           <a
// //             href="/gold" // آدرس صفحه خرید طلا در اپ تو
// //             className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
// //           >
// //             خرید طلا
// //           </a>
// //         </div>
// //       )}

// //       {/* لیست کارت‌ها */}
// //       {!loading && !err && hasData && (
// //         <div className="space-y-3">
// //           {orders.map((o) => (
// //             <div
// //               key={o.id}
// //               className="rounded-2xl p-3 bg-white dark:bg-gray-800 shadow flex items-start justify-between gap-3"
// //             >
// //               <div className="flex-1 min-w-0">
// //                 <div className="flex items-center gap-2 mb-1">
// //                   <div className="text-sm text-gray-500">شماره سفارش:</div>
// //                   <div className="font-bold truncate" title={o.id}>{o.id}</div>
// //                 </div>
// //                 <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
// //                   <div>تاریخ: {toFaDigits(formatDate(o.createdAt))}</div>
// //                   <div>مبلغ: {toFaDigits(o.totalAmount ?? 0)} تومان</div>
// //                   <StatusBadge status={o.status} />
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-2 shrink-0">
// //                 <a
// //                   href={`/order/${o.id}`}
// //                   className="px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 text-sm"
// //                 >
// //                   جزئیات
// //                 </a>
// //                 {o.status !== 'Cancelled' && o.status !== 'Completed' && (
// //                   <button
// //                     onClick={() => handleCancel(o.id)}
// //                     className="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-sm hover:bg-rose-700"
// //                   >
// //                     لغو
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* صفحه‌بندی */}
// //       <div className="flex items-center justify-between mt-4">
// //         <button
// //           onClick={() => setPage((p) => Math.max(1, p - 1))}
// //           disabled={page === 1 || loading}
// //           className="px-3 py-1.5 rounded-xl border border-gray-200 disabled:opacity-50"
// //         >
// //           قبلی
// //         </button>
// //         <span className="text-sm text-gray-500">صفحه {toFaDigits(page)}</span>
// //         <button
// //           onClick={() => setPage((p) => p + 1)}
// //           disabled={loading || orders.length < pageSize}
// //           className="px-3 py-1.5 rounded-xl border border-gray-200 disabled:opacity-50"
// //         >
// //           بعدی
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// /* src/pages/order/OrdersPage.tsx */
// import { useEffect, useMemo, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
// // import orderService, { type OrderDto } from '../../services/orderService';
// import BottomNav from '../../layouts/BottomNav';
// import { useTheme } from '../../contexts/ThemeContext';
// import { useTranslation } from 'react-i18next';

// import '../../assets/lib/Swiper/swiper-bundle.min.css';

// type StatusKey = 'Pending' | 'Processing' | 'Completed' | 'Cancelled' | string;

// function toFaDigits(input: string | number) {
//   const en = '0123456789';
//   const fa = '۰۱۲۳۴۵۶۷۸۹';
//   return String(input).replace(/[0-9]/g, (d) => fa[en.indexOf(d)]);
// }

// function formatDate(iso?: string) {
//   if (!iso) return '—';
//   try { return new Date(iso).toLocaleString('fa-IR'); } catch { return iso; }
// }

// function StatusBadge({ status }: { status?: StatusKey }) {
//   const map: Record<string, string> = {
//     Pending: 'در انتظار',
//     Processing: 'در حال پردازش',
//     Completed: 'تکمیل‌شده',
//     Cancelled: 'لغو‌شده',
//   };
//   const color: Record<string, string> = {
//     Pending: 'bg-amber-100 text-amber-700',
//     Processing: 'bg-blue-100 text-blue-700',
//     Completed: 'bg-emerald-100 text-emerald-700',
//     Cancelled: 'bg-rose-100 text-rose-700',
//   };
//   const k = status ?? 'Pending';
//   return (
//     <span className={`px-2 py-1 rounded-full text-xs ${color[k] ?? 'bg-gray-100 text-gray-700'}`}>
//       {map[k] ?? status ?? 'نامشخص'}
//     </span>
//   );
// }

// export default function OrdersPage() {
//   const { t } = useTranslation('');
//   const { theme } = useTheme();
//   const isDark = theme === 'dark';

//   const [orders, setOrders] = useState<OrderDto[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const pageSize = 10;

//   const hasData = orders.length > 0;
//   const totalAmount = useMemo(
//     () => orders.reduce((s, o) => s + (o.totalAmount ?? 0), 0),
//     [orders]
//   );

//   async function load() {
//     try {
//       setLoading(true);
//       setErr(null);
//       const data = await orderService.list({ page, pageSize });
//       setOrders(Array.isArray(data) ? data : []);
//     } catch (e: any) {
//       setErr(e?.message ?? 'خطا در دریافت سفارش‌ها');
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleCancel(id: string) {
//     if (!confirm('سفارش لغو شود؟')) return;
//     try {
//       await orderService.cancel(id);
//       setOrders(prev => prev.map(o => o.id === id ? { ...o, status: 'Cancelled' } : o));
//     } catch (e: any) {
//       alert(e?.message ?? 'لغو سفارش ناموفق بود');
//     }
//   }

//   useEffect(() => { load(); /* eslint-disable-next-line */ }, [page]);

//   return (
//     <div dir="rtl" className="min-h-screen !font-peyda text-light-text-color dark:text-white bg-white dark:bg-gray-900">
//       <main className="flex-1">
//         <div className="container mx-auto mb-3 flex flex-col gap-3 px-3 sm:px-4 py-4 sm:py-6">
          
//           {/* هدر */}
//           <section className="flex items-center justify-between">
//             <div>
//               <Typography className="!font-peyda text-light-text-color dark:text-white" fontWeight={700} fontSize={18}>
//                 {t('ordersTitle', { defaultValue: 'سفارش‌ها' })}
//               </Typography>
//               <Typography className="!font-peyda text-gray-500" fontSize={12}>
//                 {t('ordersSubtitle', { defaultValue: 'لیست سفارش‌های ثبت‌شده شما' })}
//               </Typography>
//             </div>
            
//           </section>

//           {/* خلاصه‌ها */}
//           <section className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//             <div className="rounded-3xl p-3 bg-white dark:bg-black shadow">
//               <div className="text-xs text-gray-500 text-center mb-1">{t('count', { defaultValue: 'تعداد' })}</div>
//               <div className=" text-center">{toFaDigits(orders.length)}</div>
//             </div>
//             <div className="rounded-3xl p-3 bg-white dark:bg-black shadow">
//               <div className="text-xs text-gray-500 text-center mb-1">{t('totalAmount', { defaultValue: 'جمع مبالغ' })}</div>
//               <div className="font-peyda text-center">{toFaDigits(totalAmount)} {t('toman', { defaultValue: 'تومان' })}</div>
//             </div>
//             <div className="rounded-3xl p-3 bg-white dark:bg-black shadow hidden sm:block">
//               <div className="text-xs text-gray-500 text-center mb-1">{t('page', { defaultValue: 'صفحه' })}</div>
//               <div className=" text-center">{toFaDigits(page)}</div>
//             </div>
//           </section>

//           {/* Loading skeleton */}
//           {loading && (
//             <section className="space-y-3">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <div key={i} className="rounded-3xl p-3 bg-white dark:bg-black shadow animate-pulse">
//                   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2" />
//                   <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Error */}
//           {!loading && err && (
//             <section className="rounded-3xl p-4 bg-rose-50 text-rose-700 border border-rose-200">
//               {err}
//             </section>
//           )}

//           {/* Empty */}
//           {!loading && !err && !hasData && (
//             <section className="rounded-3xl p-6 bg-white dark:bg-black text-center shadow">
//               <div className="text-lg font-bold mb-1">{t('noOrders', { defaultValue: 'هنوز سفارشی ثبت نشده است' })}</div>
//               <div className="text-sm text-gray-500 mb-4">
//                 {t('noOrdersHint', { defaultValue: 'از صفحه زیر می‌توانید سفارش ثبت کنید.' })}
//               </div>
//               <Link
//                 to="/buy"
//                 className="inline-flex items-center w-full max-w-[420px] justify-center rounded-2xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
//               >
//                 {t('buyGold', { defaultValue: 'خرید طلا' })}
//               </Link>
//             </section>
//           )}

//           {/* List */}
//           {!loading && !err && hasData && (
//             <section className="space-y-3">
//               {orders.map((o) => (
//                 <div key={o.id} className="rounded-3xl p-3 bg-white dark:bg-black shadow flex items-start justify-between gap-3">
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-2 mb-1">
//                       <Typography className="!font-peyda text-gray-500" fontSize={12}>
//                         {t('orderNo', { defaultValue: 'شماره سفارش:' })}
//                       </Typography>
//                       <div className="font-bold truncate" title={o.id}>{o.id}</div>
//                     </div>
//                     <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
//                       <div>{t('date', { defaultValue: 'تاریخ:' })} {toFaDigits(formatDate(o.createdAt))}</div>
//                       <div>{t('amount', { defaultValue: 'مبلغ:' })} {toFaDigits(o.totalAmount ?? 0)} {t('toman', { defaultValue: 'تومان' })}</div>
//                       <StatusBadge status={o.status as StatusKey} />
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 shrink-0">
//                     <Link
//                       to={`/order/${o.id}`}
//                       className="px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 text-sm"
//                     >
//                       {t('details', { defaultValue: 'جزئیات' })}
//                     </Link>
//                     {o.status !== 'Cancelled' && o.status !== 'Completed' && (
//                       <Button
//                         onClick={() => handleCancel(o.id)}
//                         size="small"
//                         sx={{ bgcolor: '#e11d48', color: 'white', '&:hover': { bgcolor: '#be123c' } }}
//                         className="rounded-xl !font-peyda"
//                       >
//                         {t('cancel', { defaultValue: 'لغو' })}
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Pagination */}
//           <section className="flex items-center justify-between mt-4">
//             <button
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               disabled={page === 1 || loading}
//               className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-50"
//             >
//               {t('prev', { defaultValue: 'قبلی' })}
//             </button>
//             <span className="text-sm text-gray-500">{t('pageX', { defaultValue: 'صفحه' })} {toFaDigits(page)}</span>
//             <button
//               onClick={() => setPage((p) => p + 1)}
//               disabled={loading || orders.length < pageSize}
//               className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 disabled:opacity-50"
//             >
//               {t('next', { defaultValue: 'بعدی' })}
//             </button>
//           </section>
//         </div>
//       </main>
//       <BottomNav />
//     </div>
//   );
// }
