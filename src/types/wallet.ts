// src/types/wallet.ts
export type WalletCreateRequest = {
  userId: string     
  walletTypeId: string; 
  currency: 'IRT' | 'IRR' | 'USD';
};

export type UserWallet = {
  id: string; userId: string; walletTypeId: string; walletTypeName: string;
  balance: number; currency: string; isLocked: boolean; lockReason: string | null; createdOn: string;
};
export type UserWalletList = UserWallet[];

export type BalanceResponse = { walletId: string; balance: number; currency: string; lastUpdated: string };

export type Tx = {
  id: string; walletId: string; amount: number; status: number;
  transactionTypeCode: string; transactionTypeName: string; processedAt: string;
};

export type DepositRequest  = { walletId: string; amount: number; description?: string; reference?: string; metadata?: string };
export type WithdrawRequest = { walletId: string; amount: number; description?: string; reference?: string; metadata?: string };
export type TransferRequest = { fromWalletId?: string; toWalletId: string; amount: number; description?: string; reference?: string; metadata?: string };


export interface WithdrawResponse {
    success: boolean;
    message: string;
    transaction: {
        id: string;
        walletId: string;
        transactionTypeId: string;
        transactionTypeName: string;
        transactionTypeCode: string;
        amount: number;
        balanceAfter: number;
        description: string;
        reference: string;
        status: number;
        processedAt: string;
        relatedTransactionId: string;
    };
    errors: string[];
}

export interface TransactionWallet {
    id: string;
    walletId: string;
    transactionTypeId: string;
    transactionTypeName: string;
    transactionTypeCode: string;
    amount: number;
    balanceAfter: number;
    description: string;
    reference: string;
    status: number;
    processedAt: string;
    relatedTransactionId: string;
}


export type CardOption = {
  value: string;
  bankName: string;
  icon: string;
  display: string; 
};