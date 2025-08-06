import type { ServiceBtnPropsoups } from "../../types/btn"

const ServiceBtn = ({text}: ServiceBtnPropsoups) => {
  return (
	 <button className="bg-accent-orange text-11xl-custom font-normal font-kalameh 
           flex justify-center items-center gap-xl text-white" style={{ padding: '0.5349rem 0.6419rem', borderRadius: "0.8439375rem" }}>{text}</button>
  )
}

export default ServiceBtn