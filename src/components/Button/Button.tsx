import type { ButtonProps } from "../../types/button";

const Button = ({ className, children, onClick, type = "button",  ariaLabel, disabled= false }: ButtonProps)  => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} aria-label={ariaLabel} className={`${className} font-peyda py-3 rounded-lg transition-colors `}>
            {children}
        </button>
    )
}

export default Button