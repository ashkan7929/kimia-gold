import { useState, useMemo } from "react";
import Button from "../../components/Button/Button";
import TextField from "../../components/Inputs/TextField";

import type {PaymentInformationProps} from "../../types/peymentInformation";

const formatToman = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const rowBorderCls =
  "flex justify-between items-center border-b border-dashed border-gray-600 pb-3";

const cardCls =
  "bg-custom-bg-card rounded-[0.625rem] shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]";

const headerTextCls = "text-white text-sm font-semibold font-peyda text-center py-3";
const labelTextCls = "text-gray-300 text-sm font-peyda";
const valueTextCls = "text-neutral-300 font-semibold font-peyda";

const InfoRow = ({ label, value }: { label: React.ReactNode; value: React.ReactNode }) => (
  <li className={rowBorderCls}>
    <div className={labelTextCls}>{label}</div>
    <div className={valueTextCls}>{value}</div>
  </li>
);

const PaymentInformation = ({
  amountToman,
  dateTime,
  transactionType,
  onApplyCoupon,
  onPayGateway,
  onPayWallet,
  onCopyLink,
  onSendSMS,
  onSendWhatsApp,
  className,
}: PaymentInformationProps) => {
  const [coupon, setCoupon] = useState("");

  const actions = useMemo(
    () => [
      { label: "پرداخت از طریق درگاه بانکی", onClick: onPayGateway },
      { label: "پرداخت از طریق کیف پول", onClick: onPayWallet },
      { label: "کپی کردن لینک پرداخت", onClick: onCopyLink },
      { label: "ارسال لینک پرداخت با پیامک", onClick: onSendSMS },
      { label: "ارسال لینک پرداخت از طریق واتس‌اپ", onClick: onSendWhatsApp },
    ],
    [onPayGateway, onPayWallet, onCopyLink, onSendSMS, onSendWhatsApp]
  );

  const handleApply = () => {
    if (!coupon.trim()) return;
    onApplyCoupon?.(coupon.trim());
  };

  return (
    <div className={`w-full mx-auto flex flex-col ${className ?? ""}`}>
      <main className="flex-1">
        <section className="payment-information">
          <div className={cardCls}>
            <div className="p-4 flex flex-col gap-2">
              <div className={headerTextCls}>اطلاعات نهایی برای پرداخت</div>

              <ul className="space-y-2">
                <InfoRow
                  label={
                    <>
                      مقدار <small>(به تومان)</small>
                    </>
                  }
                  value={formatToman(amountToman)}
                />
                <InfoRow label="تاریخ و زمان:" value={dateTime} />
                <InfoRow label="نوع تراکنش" value={transactionType} />
              </ul>

              <div className="py-2">
                <label
                  className="block text-white text-xs font-peyda mb-2 font-semibold"
                  htmlFor="coupon"
                >
                  کد تخفیف
                </label>
                <div className="flex gap-2">
                  <TextField
                    className="w-full"
                    placeholder="کد تخفیف را وارد نمایید"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCoupon(e.target.value)}
                    aria-label="Coupon Code"
                  />
                  <Button
                    className="bg-accent-orange text-white text-xs px-4"
                    onClick={handleApply}
                    aria-label="اعمال کد تخفیف"
                  >
                    اعمال
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {actions.map(({ label, onClick }) => (
                  <Button
                    key={label}
                    className="bg-accent-orange text-white px-4 text-xs"
                    onClick={onClick}
                    disabled={!onClick}
                    aria-label={label}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentInformation;
