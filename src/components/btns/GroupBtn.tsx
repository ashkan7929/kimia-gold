
import { useTranslation } from 'react-i18next';
import type { GroupBtnPropsoups } from "../../types/btn";

const GroupBtn = ({ type }: GroupBtnPropsoups) => {
  const { t } = useTranslation();

  const variantStyles: Record<string, string> = {
    continue: 'bg-accent-orange',
    addNewCard: 'bg-accent-orange',
    save: 'bg-yellow-500',
    delete: 'bg-custom-bg-danger',
	back: 'bg-primery-blue',
  };

  const selectedClass = variantStyles[type] || 'bg-primary-blue';

  return (
    <div className="flex justify-center items-center gap-2.5">
      <button
        className={`
          rounded-lg text-white font-bold text-right py-3 mx-8 w-3/4
          flex justify-center items-center gap-2.5 font-peyda text-xl-custom self-stretch
          ${selectedClass}
        `}
      >
        {t(`groupBtn.${type}`)}
      </button>
    </div>
  );
};

export default GroupBtn;

