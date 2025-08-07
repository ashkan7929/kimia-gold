import type { JSX } from "react"

const Button = ({ className, children }: { className?: string, children: JSX.Element | string }) => {
    return (
        <button className={`${className} font-peyda py-3 rounded-lg transition-colors`}>
            {children}
        </button>
    )
}

export default Button