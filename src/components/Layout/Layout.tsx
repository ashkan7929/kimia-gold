import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import HamburgerMenu from './HamburgerMenu';
import type { BaseComponentProps } from '../../types';

interface LayoutProps extends BaseComponentProps {
  showHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '', 
  showHeader = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useAppSelector(state => state.ui);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Mobile Header - Only show if showHeader is true */}
      {showHeader && (
        <div className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-r from-blue-900 to-blue-800 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center ml-3">
                <span className="text-blue-900 font-bold text-sm">KI</span>
              </div>
              <h1 className="text-white text-lg font-bold">کیمیا گلد</h1>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <main className={`${showHeader ? 'pt-16' : ''} ${className}`}>
        {children}
      </main>
      
      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </div>
  );
};

export { Layout };
export default Layout;