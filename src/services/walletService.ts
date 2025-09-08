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
    getUserWallets: (userId: string): Promise<UserWalletList> =>
        api.get<UserWalletList>(`/api/Wallet/user/${userId}`),

    createWallet: (payload: WalletCreateRequest): Promise<UserWallet> =>
        api.post<UserWallet>('/api/Wallet', payload),

    getWalletById: (walletId: string): Promise<UserWallet> =>
        api.get<UserWallet>(`/api/Wallet/${walletId}`),

    getBalance: (walletId: string): Promise<BalanceResponse> =>
        api.get<BalanceResponse>(`/api/Wallet/${walletId}/balance`),

    getTransactions: (walletId: string): Promise<TransactionWallet[]> =>
        api.get<TransactionWallet[]>(`/api/Wallet/${walletId}/transactions`),

    deposit: (walletId: string, payload: DepositRequest): Promise<TransactionWallet> =>
        api.post<TransactionWallet>(`/api/Wallet/${walletId}/deposit`, payload),

    withdraw: (walletId: string, payload: WithdrawRequest): Promise<TransactionWallet> =>
        api.post<TransactionWallet>(`/api/Wallet/${walletId}/withdraw`, payload),

    transfer: (walletId: string, payload: TransferRequest): Promise<TransactionWallet> =>
        api.post<TransactionWallet>(`/api/Wallet/${walletId}/transfer`, payload),
};
