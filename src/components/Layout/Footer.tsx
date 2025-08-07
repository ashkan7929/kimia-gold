import { BsWallet2 } from 'react-icons/bs';
import { MdOutlineListAlt } from 'react-icons/md';
import { PiHouseLight } from 'react-icons/pi';
import type { footerButtonProps } from '../../types/btn';
import { useTranslation } from 'react-i18next';

export const Footer = ({ home, wallet, transaction }: footerButtonProps) => {
    const { t } = useTranslation();

    return (
        <nav
            className="relative bg-primary-blue flex justify-between items-center mx-2 p-2"
            style={{
                borderRadius: '2.8125rem',
                border: '1px solid #828282',
                boxShadow: '0 0 67px 0 rgba(0, 0, 0, 0.09)',
            }}
        >
            <button className="flex flex-col items-center gap-2 mr-8">
                <PiHouseLight className="w-6 h-6" />
                <span className="font-peyda text-white font-semibold text-xs">
                    {home || t('footer.home')}
                </span>
            </button>

            <button className="flex flex-col items-center gap-2 relative -mt-10">
                <div
                    className="bg-accent-orange w-[72px] h-[72px] flex items-center justify-center shadow-md"
                    style={{ borderRadius: '38.82575rem' }}
                >
                    <BsWallet2 className="w-6 h-6 text-white" />
                </div>
                <span className="font-peyda text-white font-semibold text-xs">
                    {wallet || t('footer.wallet')}
                </span>
            </button>

            <button className="flex flex-col items-center gap-2">
                <MdOutlineListAlt className="w-6 h-6" />
                <span className="font-peyda text-white font-semibold text-xs ml-8">
                    {transaction || t('footer.transaction')}
                </span>
            </button>
        </nav>
    );
};
