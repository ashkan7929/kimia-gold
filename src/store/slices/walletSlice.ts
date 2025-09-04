import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { walletService } from '../../services/walletService';
import type {
    UserWallet,
    UserWalletList,
    BalanceResponse,
    TransactionWallet,
    WalletCreateRequest,
    DepositRequest,
    WithdrawRequest,
    TransferRequest,
} from '../../types/wallet';

interface WalletState {
    wallets: UserWalletList;
    selectedWallet: UserWallet | null;
    balance: BalanceResponse | null;
    transactions: TransactionWallet[];
    loading: boolean;
    error: string | null;
}

const initialState: WalletState = {
    wallets: [],
    selectedWallet: null,
    balance: null,
    transactions: [],
    loading: false,
    error: null,
};

// --- Thunks ---
export const fetchUserWallets = createAsyncThunk<UserWalletList, string>(
    'wallet/fetchUserWallets',
    async userId => {
        const list = await walletService.getUserWallets(userId);
        return list;
    },
);

export const createWallet = createAsyncThunk<UserWallet, WalletCreateRequest>(
    'wallet/createWallet',
    async payload => {
        const w = await walletService.createWallet(payload);
        return w;
    },
);

export const fetchWalletById = createAsyncThunk<UserWallet, string>(
    'wallet/fetchWalletById',
    async walletId => {
        const w = await walletService.getWalletById(walletId);
        return w;
    },
);

export const fetchBalance = createAsyncThunk<BalanceResponse, string>(
    'wallet/fetchBalance',
    async walletId => {
        const b = await walletService.getBalance(walletId);
        return b;
    },
);

export const fetchTransactions = createAsyncThunk<TransactionWallet[], string>(
    'wallet/fetchTransactions',
    async walletId => {
        const tx = await walletService.getTransactions(walletId);
        return tx;
    },
);

export const deposit = createAsyncThunk<
    TransactionWallet,
    { walletId: string; payload: DepositRequest }
>('wallet/deposit', async ({ walletId, payload }) => {
    const tx = await walletService.deposit(walletId, payload);
    return tx;
});

export const withdraw = createAsyncThunk<
    TransactionWallet,
    { walletId: string; payload: WithdrawRequest }
>('wallet/withdraw', async ({ walletId, payload }) => {
    const tx = await walletService.withdraw(walletId, payload);
    return tx;
});

export const transfer = createAsyncThunk<
    TransactionWallet,
    { walletId: string; payload: TransferRequest }
>('wallet/transfer', async ({ walletId, payload }) => {
    const tx = await walletService.transfer(walletId, payload);
    return tx;
});

// --- Slice ---
const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        selectWallet(state, action: PayloadAction<UserWallet | null>) {
            state.selectedWallet = action.payload;
            state.balance = null;
            state.transactions = [];
        },
        clearWalletError(state) {
            state.error = null;
        },
    },
    extraReducers(builder) {
        // fetchUserWallets
        builder.addCase(fetchUserWallets.pending, s => {
            s.loading = true;
            s.error = null;
        });
        builder.addCase(fetchUserWallets.fulfilled, (s, a) => {
            s.loading = false;
            s.wallets = a.payload;
            if (!s.selectedWallet && a.payload.length > 0) s.selectedWallet = a.payload[0];
        });
        builder.addCase(fetchUserWallets.rejected, (s, a) => {
            s.loading = false;
            s.error = a.error.message || 'خطا در دریافت کیف‌پول کاربر';
        });

        // createWallet
        builder.addCase(createWallet.pending, s => {
            s.loading = true;
            s.error = null;
        });
        builder.addCase(createWallet.fulfilled, (s, a) => {
            s.loading = false;
            s.wallets.push(a.payload);
            s.selectedWallet = a.payload;
        });
        builder.addCase(createWallet.rejected, (s, a) => {
            s.loading = false;
            s.error = a.error.message || 'خطا در ساخت کیف‌پول';
        });

        // fetchWalletById
        builder.addCase(fetchWalletById.fulfilled, (s, a) => {
            s.selectedWallet = a.payload;
        });

        // balance
        builder.addCase(fetchBalance.fulfilled, (s, a) => {
            s.balance = a.payload;
        });

        // transactions
        builder.addCase(fetchTransactions.fulfilled, (s, a) => {
            s.transactions = a.payload;
        });

        // deposit/withdraw/transfer → تراکنش جدید را به ابتدای لیست بزن
        builder.addCase(deposit.fulfilled, (s, a) => {
            s.transactions.unshift(a.payload);
        });
        builder.addCase(withdraw.fulfilled, (s, a) => {
            s.transactions.unshift(a.payload);
        });
        builder.addCase(transfer.fulfilled, (s, a) => {
            s.transactions.unshift(a.payload);
        });

        // خطاهای عمومی
        builder.addMatcher(
            a => a.type.startsWith('wallet/') && a.type.endsWith('/rejected'),
            (s, a: any) => {
                s.loading = false;
                s.error = a?.error?.message || 'خطا';
            },
        );
        builder.addMatcher(
            a => a.type.startsWith('wallet/') && a.type.endsWith('/pending'),
            s => {
                s.loading = true;
            },
        );
        builder.addMatcher(
            a => a.type.startsWith('wallet/') && a.type.endsWith('/fulfilled'),
            s => {
                s.loading = false;
            },
        );
    },
});

export const { selectWallet, clearWalletError } = walletSlice.actions;
export default walletSlice.reducer;
