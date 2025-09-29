import { useId } from 'react';
import { CiSearch } from '../../Icons';

export type CatKey = 'Gold' | 'PaymentFailed' | 'PaymentSuccessful' | 'all';

type Props = {
    query: string;
    onQueryChange: (v: string) => void;
    categories: { key: CatKey; label: string }[];
    selected: Set<CatKey>;
    onToggle: (key: CatKey) => void;
    className?: string;
};

export default function FilterBar({
    query,
    onQueryChange,
    categories,
    selected,
    onToggle,
    className = '',
}: Props) {
    const inputId = useId();

    return (
        <div
            className={`sticky top-0 z-10 mx-auto w-full bg-light-primary-darker/90 dark:bg-black/90 flex flex-col gap-3 px-7 py-2 rounded-xl ${className}`}
        >
            <div className="relative w-full">
                <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    id={inputId}
                    dir="rtl"
                    value={query}
                    onChange={e => onQueryChange(e.target.value)}
                    className="w-full rounded-xl font-peyda pr-10 pl-3 py-2 text-sm bg-white dark:bg-black dark:text-white border dark:border-white/30 border-black/10 placeholder:opacity-60"
                    placeholder="جستجو..."
                />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar whitespace-nowrap">
                {categories.map(({ key, label }) => {
                    const active = selected.has(key) || (key === 'all' && selected.size === 0);
                    return (
                        <button
                            key={key}
                            onClick={() => onToggle(key)}
                            aria-pressed={active}
                            className={`px-3 py-1.5 font-peyda rounded-md text-xs shadow-md dark:shadow-gray-900
                                ${active ? 'bg-primary-blue dark:bg-accent-orange scale-105 text-white' : 'bg-white dark:bg-black  text-light-text-color dark:text-white'}`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
