export interface WalletCreateRequest {
    userId: string;
    walletTypeId: string;
    currency: string;
}
export type Currency = 'IRT' | 'IRR' | 'USD';

export interface UserWallet {
    id: string;
    userId: string;
    walletTypeId: string;
    walletTypeName: string;
    balance: number;
    currency: Currency;
    isLocked: boolean;
    lockReason: string;
    // createdOn: Date;
    createdOn: string;
}

export type UserWalletList = UserWallet[];

// موجودی حساب
export interface BalanceResponse {
    walletId: string;
    balance: number;
    currency: string;
    lastUpdated: string;
}

// واریز وجه به حساب

export interface DepositRequest {
    // walletId: string;
    amount: number;
    description: string;
    reference: string;
    metadata: string;
}

// برداشت از کیف پول
export interface WithdrawRequest {
    // walletId: string;
    amount: number;
    description: string;
    reference: string;
    metadata: string;
}

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

export interface TransferRequest {
    fromWalletId: string;
    toWalletId: string;
    amount: number;
    description: string;
    reference: string;
    metadata?: Record<string, any> | string;
}
