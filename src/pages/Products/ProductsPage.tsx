
import { useProductsData } from '../../hooks/useProducts';

export default function ProductsPage() {
  const { items, totalPages, pageNumber, loading, setSearch, setPageNumber } =
    useProductsData({ pageSize: 12 });

  return (
    <div className="p-4 space-y-4">
      <input
        className="border rounded px-3 py-2 w-full"
        placeholder="جستجو…"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <div>در حال دریافت…</div>}

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((p) => (
          <li key={p.id} className="border rounded p-3">
            <div className="font-semibold">{p.name}</div>
            <div className="text-xs text-gray-500">کد: {p.code}</div>
            <div className="text-sm mt-1">
              {p.priceFrom?.amount} {p.priceFrom?.currency}
            </div>
            <a href={`/products/${p.id}`} className="text-blue-600 text-sm mt-2 inline-block">
              جزئیات
            </a>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center gap-2 justify-center">
          <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)} className="px-3 py-1 border rounded">قبلی</button>
          <span>صفحه {pageNumber} از {totalPages}</span>
          <button disabled={pageNumber >= totalPages} onClick={() => setPageNumber(pageNumber + 1)} className="px-3 py-1 border rounded">بعدی</button>
        </div>
      )}
    </div>
  );
}
