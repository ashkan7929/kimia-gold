import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useWalletData } from '../../hooks/useWalletData';
import { walletService } from '../../services/walletService';
import { useAuth } from '../../stores/auth.store';
import type { UserWallet } from '../../types/wallet';



const PaymentInsurance = () => {
    const navigate = useNavigate();
    const { loading } = useWalletData();
    const { user, isAuthenticated } = useAuth();
    const [isProcessing, setIsProcessing] = useState(false);
    const [usdWallet, setUsdWallet] = useState<UserWallet | null>(null);
    const [walletsLoading, setWalletsLoading] = useState(false);
    const goldPrice = 86840000;

    const insuranceCost = 25000000;
    const totalAmount = goldPrice + insuranceCost;

    const getCurrentDateTime = () => {
        const now = new Date();
        const persianDate = new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }).format(now);
        return persianDate;
    };

    useEffect(() => {
        const fetchUserWallets = async () => {
            if (!user?.id || !isAuthenticated) {
                console.log('User not authenticated or user ID missing:', { user, isAuthenticated });
                return;
            }

            setWalletsLoading(true);
            try {
                const wallets = await walletService.getUserWallets(user.id);
                const usdWalletFound = wallets.find(wallet =>
                    wallet.walletTypeName === 'USD' || wallet.currency === 'USD'
                );
                setUsdWallet(usdWalletFound || null);
            } catch (error) {
                console.error('Failed to fetch user wallets:', error);
            } finally {
                setWalletsLoading(false);
            }
        };

        fetchUserWallets();
    }, [user?.id, isAuthenticated]);

    const handlePayment = async () => {
        if (!usdWallet?.id || isProcessing) return;

        setIsProcessing(true);
        try {

            const withdrawResult = await walletService.withdraw(usdWallet.id, {
                walletId: usdWallet.id,
                amount: totalAmount,
                description: 'کیمیا',
                reference: 'INSURANCE_PAYMENT_' + Date.now()
            });


            const wallets = await walletService.getUserWallets(user!.id);
            let goldWallet = wallets.find(wallet =>
                wallet.walletTypeId === '1efe002c-ada4-4ca6-b478-e22670a1b777'
            );

            if (!goldWallet) {

                const newWallet = await walletService.createWallet({
                    userId: user!.id,
                    walletTypeId: "1efe002c-ada4-4ca6-b478-e22670a1b777",
                    currency: "IRT"
                });
                goldWallet = newWallet;
            }


            await walletService.deposit(goldWallet.id, {
                walletId: goldWallet.id,
                amount: goldPrice,
                description: 'خرید طلا از طریق بیمه',
                reference: 'GOLD_PURCHASE_' + Date.now()
            });


            navigate('/productTransaction', {
                state: {
                    transaction: withdrawResult,
                    success: true
                }
            });
        } catch (error) {
            console.error('Payment failed:', error);

            navigate('/productTransaction', {
                state: {
                    error: error,
                    success: false
                }
            });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="dark:bg-gray-800 bg-white">
            <section>
                <div className="dark:bg-black bg-light-primary-darker rounded-lg shadow-[0px_0px_67px_0px_rgba(0,0,0,0.09)]">
                    <div className="p-4 flex flex-col gap-2">
                        <div className="dark:text-white text-light-text-color font-semibold text-sm mb-2 font-peyda">
                            اطلاعات نهایی برای پرداخت بیمه عمر
                        </div>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center py-2 border-b border-dashed dark:border-gray-600 border-custom-gray">
                                <div className="dark:text-gray-300 text-gray-700 text-xs font-peyda">
                                    تاریخ و زمان :
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium font-peyda">
                                    {getCurrentDateTime()}
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed dark:border-gray-600 border-custom-gray">
                                <div className="dark:text-gray-300 text-gray-700 text-xs font-peyda">
                                    عنوان
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-sm font-peyda">
                                    کیمیا
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed dark:border-gray-600 border-custom-gray">
                                <div className="dark:text-gray-300 text-gray-700 text-xs font-peyda">
                                    طلا <small>(به گرم)</small>
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-sm">
                                    ۱
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed dark:border-gray-600 border-custom-gray">
                                <div className="dark:text-gray-300 text-gray-700 text-xs font-peyda">
                                    قیمت طلا 18 عیار
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium font-peyda">
                                    {goldPrice.toLocaleString('fa-IR')}
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed dark:border-gray-600 border-custom-gray">
                                <div className="dark:text-gray-300 text-gray-700 text-xs font-peyda">
                                    هزینه بیمه
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium font-peyda">
                                    {insuranceCost.toLocaleString('fa-IR')}
                                </div>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-dashed dark:border-gray-600 border-custom-gray">
                                <div className="dark:text-gray-300 text-gray-700 text-xs font-peyda">
                                    کل مبلغ پرداختی
                                </div>
                                <div className="text-white light:text-light-text-color text-xs font-medium font-peyda">
                                    {totalAmount.toLocaleString('fa-IR')}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <Button
                        onClick={handlePayment}
                        disabled={loading || isProcessing || walletsLoading || !usdWallet}
                        className="dark:bg-accent-orange bg-primary-blue font-peyda text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        پرداخت از طریق درگاه
                    </Button>
                    <Button
                        onClick={handlePayment}
                        disabled={loading || isProcessing || walletsLoading || !usdWallet}
                        className="dark:bg-black dark:border-gray-500 font-peyda bg-primary-blue text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isProcessing ? 'در حال پردازش...' :
                            walletsLoading ? 'در حال بارگذاری کیف پول...' :
                                !usdWallet ? 'کیف پول یافت نشد' :
                                    'پرداخت از طریق کیف پول'}
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default PaymentInsurance;
