import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "../../Icons";
import Button from "../../components/Button/Button";

type ProductStatus = "active" | "inactive";

interface ProductItem {
  id: number;
  title: string;
  insurer: string;
  initialMain: number;
  annualYears: number;
  accidentCover: number;
  duration: number;
  imageUrl: string;
  status: ProductStatus;
}

function identity<T>(arg: T): T {
  return arg;
}

const products: ProductItem[] = identity<ProductItem[]>([
  {
    id: 1,
    title: "طرح کیمیا ۱ - بیمه البرز",
    insurer: "بیمه البرز",
    initialMain: 10000,
    annualYears: 500000,
    accidentCover: 5000,
    duration: 2,
    imageUrl: "/images/gold.png",
    status: "active",
  },
  {
    id: 2,
    title: "طرح کیمیا ۲ - بیمه البرز",
    insurer: "بیمه البرز",
    initialMain: 10000,
    annualYears: 500000,
    accidentCover: 5000,
    duration: 2,
    imageUrl: "/images/gold.png",
    status: "inactive",
  },
    {
    id: 3,
    title: "طرح کیمیا ۳ - بیمه البرز",
    insurer: "بیمه البرز",
    initialMain: 5000,
    annualYears: 0,
    accidentCover: 2,
    duration: 5,
    imageUrl: "/images/gold.png",
    status: "active",
  },
]);

function ProductCard({ product }: { product: ProductItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-lg border border-custom-gray bg-white dark:bg-gray-800 p-4">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full border border-custom-gray flex items-center justify-center overflow-hidden">
          <img src={product.imageUrl} alt={product.insurer} className="w-4 h-4 object-contain" />
        </div>

        <h2 className="font-peyda text-sm text-slate-900 dark:text-white truncate">
          {product.title}
        </h2>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls={`product-extra-${product.id}`}
          className="ml-auto inline-flex items-center justify-center p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white"
        >
          {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>

      <div className="mt-3 space-y-1 text-right text-xs text-slate-700 dark:text-slate-300 font-alibaba" dir="rtl">
        <p>سرمایه اولیه: {product.initialMain.toLocaleString()} تومان</p>
        <p>حق بیمه سالانه: {product.annualYears.toLocaleString()} تومان</p>

        {open && (
          <div id={`product-extra-${product.id}`} className="space-y-1">
            <p>پوشش فوت ناشی از حادثه: {product.accidentCover.toLocaleString()} تومان</p>
            <p>مدت بیمه‌نامه: {product.duration} سال</p>
          </div>
        )}
      </div>

      <Link to={`/products/${product.id}`}>
        <Button className="mt-4 w-full rounded-md bg-primary-blue dark:bg-accent-orange text-white text-sm font-peyda">
          انتخاب
        </Button>
      </Link>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col">
      <main
        className="flex-grow bg-cover bg-center"
        style={{ backgroundImage: "url('../statics/assets/images/main-lines-pattern.png')" }}
      >
        <section className="p-4 space-y-4">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>
    </div>
  );
}
