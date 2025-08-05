import { useTranslation } from "react-i18next";
import type { GroupBtn } from "../../types/btn";

const GroupBtn = ({type } : GroupBtn) => {
		const { t } = useTranslation();
	
  return (
<div className="flex justify-center items-center gap-2.5">
		<button className="rounded-lg bg-accent-orange text-white
		hover:bg-custom-primary-dark font-bold text-right py-3
		 mx-8 w-3/4 flex justify-center items-center gap-2.5
		font-peyda text-xl-custom self-stretch">{t(`groupBtn.${type}`)}</button>
	</div>  )
}

export default GroupBtn

