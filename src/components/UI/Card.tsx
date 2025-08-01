import React from 'react';
import type { BaseComponentProps } from '../../types';

interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  padding = 'md',
  shadow = 'sm',
  border = true,
  hover = false,
  className = '',
  testId,
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg transition-all duration-200';
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  const borderClass = border ? 'border border-gray-200 dark:border-gray-700' : '';
  const hoverClass = hover ? 'hover:shadow-md hover:-translate-y-0.5' : '';
  
  const cardClasses = `
    ${baseClasses}
    ${shadowClasses[shadow]}
    ${borderClass}
    ${hoverClass}
    ${className}
  `.trim();
  
  const contentPadding = padding !== 'none' ? paddingClasses[padding] : '';

  return (
    <div className={cardClasses} data-testid={testId}>
      {/* Header */}
      {(title || subtitle || headerAction) && (
        <div className={`flex items-start justify-between ${padding !== 'none' ? 'px-4 pt-4 pb-2' : ''}`}>
          <div className="flex-1">
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {subtitle}
              </p>
            )}
          </div>
          {headerAction && (
            <div className="ml-4 flex-shrink-0">
              {headerAction}
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className={contentPadding}>
        {children}
      </div>
      
      {/* Footer */}
      {footer && (
        <div className={`border-t border-gray-200 dark:border-gray-700 ${padding !== 'none' ? 'px-4 py-3' : ''}`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;