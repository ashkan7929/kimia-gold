import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	disabled = false,
	loading = false,
	onClick,
	type = 'button',
	fullWidth = false,
	className = '',
	testId,
	...props
}) => {
	const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses = {
		primary: 'bg-gold-600 hover:bg-gold-700 text-white focus:ring-gold-500',
		secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
		outline: 'border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white focus:ring-gold-500',
		ghost: 'text-gold-600 hover:bg-gold-50 dark:hover:bg-gold-900/20 focus:ring-gold-500',
		danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
	};

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base',
	};

	const widthClass = fullWidth ? 'w-full' : '';

	const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClass}
    ${className}
  `.trim();

	const handleClick = () => {
		if (!disabled && !loading && onClick) {
			onClick();
		}
	};

	return (
		<button
			type={type}
			className={classes}
			disabled={disabled || loading}
			onClick={handleClick}
			data-testid={testId}
			{...props}
		>
			{loading && (
				<svg
					className="mr-2 -ml-1 w-4 h-4 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
			{children}
		</button>
	);
};

export default Button;