/* src/services/transactionService.ts */
import { api } from '../lib/apiClient';
import type { TransactionWallet } from '../types/wallet';

export const transactionService = {
  getById: (id: string): Promise<TransactionWallet> =>
    api.get<TransactionWallet>(`/api/Transaction/${id}`),

  getAll: (): Promise<TransactionWallet[]> =>
    api.get<TransactionWallet[]>(`/api/Transaction`),

  getByUser: (userId: string): Promise<TransactionWallet[]> =>
    api.get<TransactionWallet[]>(`/api/Transaction/user/${userId}`),
};
