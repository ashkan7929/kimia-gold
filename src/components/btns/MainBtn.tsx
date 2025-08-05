import { useTranslation } from "react-i18next";
import type { LoginProps } from "../../types/btn"

const MainBtn = ({type } : LoginProps) => {
	const { t } = useTranslation();


  return (
	<div className="flex justify-center items-center gap-2.5">
		<button className="rounded-lg bg-primary-blue text-white
		hover:bg-custom-primary-dark font-bold text-right py-3
		 mx-8 w-3/4 flex justify-center items-center gap-2.5
		font-peyda text-xl-custom self-stretch"> {t(`buttons.${type}`)}</button>
	</div>
  )
}

export default MainBtn