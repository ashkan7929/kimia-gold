import { api } from '../lib/apiClient';
import type {
    WalletCreateRequest,
    UserWallet,
    UserWalletList,
    BalanceResponse,
    TransactionWallet,
    DepositRequest,
    WithdrawRequest,
    TransferRequest,
} from './../types/wallet';

export const walletService = {
    async getUserWallets(userId: string): Promise<UserWalletList> {
        const res = await api.get<UserWalletList>(`/api/Wallet/user/${userId}`);
        return res;
    },

    async createWallet(payload: WalletCreateRequest): Promise<UserWallet> {
        const res = await api.post<UserWallet>('/api/Wallet', payload);
        return res;
    },

    async getWalletById(walletId: string): Promise<UserWallet> {
        const res = await api.get<UserWallet>(`/api/Wallet/${walletId}`);
        return res;
    },

    async getBalance(walletId: string): Promise<BalanceResponse> {
        const res = await api.get<BalanceResponse>(`/api/Wallet/${walletId}/balance`);
        return res;
    },

    async getTransactions(walletId: string): Promise<TransactionWallet[]> {
        const res = await api.get<TransactionWallet[]>(`/api/Wallet/${walletId}/transactions`);
        return res;
    },

    async deposit(walletId: string, payload: DepositRequest): Promise<TransactionWallet> {
        const res = await api.post<TransactionWallet>(`/api/Wallet/${walletId}/deposit`, payload);
        return res;
    },

    async withdraw(walletId: string, payload: WithdrawRequest): Promise<TransactionWallet> {
        const res = await api.post<TransactionWallet>(`/api/Wallet/${walletId}/withdraw`, payload);
        return res;
    },

    async transfer(walletId: string, payload: TransferRequest): Promise<TransactionWallet> {
        const res = await api.post<TransactionWallet>(`/api/Wallet/${walletId}/transfer`, payload);
        return res;
    },
};
