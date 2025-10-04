export type PaymentInformationProps = {
  amountToman: number;
  dateTime: string;          
  transactionType: string;   
  onApplyCoupon?: (code: string) => void;
  onPayGateway?: () => void;
  onPayWallet?: () => void;
  onCopyLink?: () => void;
  onSendSMS?: () => void;
  onSendWhatsApp?: () => void;
  className?: string;
};