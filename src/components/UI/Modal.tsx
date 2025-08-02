import React, { useEffect } from 'react';
import type { ModalProps } from '../../types';
import Button from './Button';

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
	size = 'md',
	closeOnOverlayClick = true,
	closeOnEscape = true,
	showCloseButton = true,
	className = '',
	testId,
}) => {
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (closeOnEscape && event.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, closeOnEscape, onClose]);

	const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (closeOnOverlayClick && event.target === event.currentTarget) {
			onClose();
		}
	};

	const sizeClasses = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-4xl',
		full: 'max-w-full mx-4',
	};

	if (!isOpen) return null;

	return (
		<div
			className="overflow-y-auto fixed inset-0 z-50"
			data-testid={testId}
		>
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
				onClick={handleOverlayClick}
			/>

			{/* Modal */}
			<div className="flex justify-center items-center p-4 min-h-full">
				<div
					className={`relative w-full bg-white rounded-lg shadow-xl transition-all transform  ${sizeClasses[size]} dark:bg-gray-800 ${className}`}
				>
					{/* Header */}
					{(title || showCloseButton) && (
						<div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
							{title && (
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									{title}
								</h3>
							)}
							{showCloseButton && (
								<Button
									variant="ghost"
									size="sm"
									onClick={onClose}
									className="-mr-2 ml-auto"
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</Button>
							)}
						</div>
					)}

					{/* Content */}
					<div className="p-4">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;