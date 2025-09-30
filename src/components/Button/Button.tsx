import type { JSX } from "react"


const Button = ({ className, children, onClick, type, disabled }: { className?: string, children: JSX.Element | string, onClick?: () => void, type?: "button" | "reset" | "submit", disabled?: boolean }) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={`${className} font-peyda py-3 rounded-lg transition-colors`}>
            {children}
        </button>
    )
}

export default Button