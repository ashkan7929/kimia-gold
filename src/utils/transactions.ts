import type { TransactionWallet as Tx } from '../types/wallet';
import type { CatKey } from '../components/FilterBar/FilterBar';

export const TransactionStatus = { Failed: 0, Success: 1 } as const;
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];

export type TxWithDesc = Tx & { description?: string | null | undefined };

const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';

export function persianDigitsToLatin(s: unknown): string {
    return String(s ?? '').replace(/[۰-۹]/g, d => String(PERSIAN_DIGITS.indexOf(d)));
}

export function normalizeText(s: unknown): string {
    return persianDigitsToLatin(s).trim().toLowerCase();
}

export function formatFaDateTime(iso?: string | null): string {
    if (!iso) return '';
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleString('fa-IR');
}

export function formatFaNumber(n?: number | string | null): string {
    const num = Number(n ?? 0);
    return Number.isFinite(num) ? num.toLocaleString('fa-IR') : '0';
}

export function resolveErrorMessage(e: unknown, fallback: string): string {
    const err = e as { data?: string; message?: string };
    return err?.data || err?.message || fallback;
}

export function buildTransactionTags(tx: Tx): Set<CatKey> {
    const tags = new Set<CatKey>(['all']);

    if (tx.status === TransactionStatus.Success) {
        tags.add('PaymentSuccessful');
    } else {
        tags.add('PaymentFailed');
    }

    const typeNorm = normalizeText(tx.transactionTypeName);
    if (typeNorm.includes('طلا') || typeNorm.includes('طلای 18') || typeNorm.includes('طلای ۱۸')) {
        tags.add('Gold');
    }
    return tags;
}

export function matchesQuery(tx: TxWithDesc, searchQuery: string): boolean {
    const q = normalizeText(searchQuery);
    if (!q) return true;

    const haystack = [tx.transactionTypeName, tx.description ?? ''].map(normalizeText).join(' ');

    if (haystack.includes(q)) return true;

    const digits = q.replace(/[^\d]/g, '');
    return digits ? String(tx.amount ?? '').includes(digits) : false;
}

export function matchesSelectedCategories(tx: Tx, selected: Set<CatKey>): boolean {
    if (selected.size === 0) return true;
    const tags = buildTransactionTags(tx);
    for (const key of selected) if (tags.has(key)) return true;
    return false;
}
