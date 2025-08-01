import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { logout } from '../../store/slices/authSlice';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    onClose();
    navigate('/login');
  };

  const menuItems = [
    {
      title: 'صفحه اصلی',
      icon: '🏠',
      path: '/home',
      color: 'text-blue-400'
    },
    {
      title: 'پورتفولیو',
      icon: '📊',
      path: '/portfolio',
      color: 'text-green-400'
    },
    {
      title: 'معاملات',
      icon: '💰',
      path: '/trading',
      color: 'text-yellow-400'
    },
    {
      title: 'بازار طلا',
      icon: '📈',
      path: '/market',
      color: 'text-purple-400'
    },
    {
      title: 'پروفایل',
      icon: '👤',
      path: '/profile',
      color: 'text-pink-400'
    },
    {
      title: 'تنظیمات',
      icon: '⚙️',
      path: '/settings',
      color: 'text-gray-400'
    },
    {
      title: 'پشتیبانی',
      icon: '💬',
      path: '/support',
      color: 'text-cyan-400'
    },
    {
      title: 'درباره ما',
      icon: 'ℹ️',
      path: '/about',
      color: 'text-indigo-400'
    }
  ];

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12 border-b border-white/10">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center ml-3">
              <span className="text-blue-900 font-bold text-lg">KI</span>
            </div>
            <div>
              <h2 className="text-white text-lg font-bold">کیمیا گلد</h2>
              <p className="text-blue-200 text-sm">
                {isAuthenticated ? `${user?.name || 'کاربر عزیز'}` : 'مهمان'}
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* User Info Section */}
        {isAuthenticated && (
          <div className="p-6 border-b border-white/10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-200 text-sm">ارزش پورتفولیو</span>
                <span className="text-white text-lg font-bold">۱۲۵,۰۰۰,۰۰۰</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-200 text-sm">سود امروز</span>
                <span className="text-green-400 text-sm font-medium">+۲.۵%</span>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-2 px-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuItemClick(item.path)}
                className="w-full flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/10"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center ml-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-white text-base font-medium">{item.title}</h3>
                </div>
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6 border-t border-white/10">
          {isAuthenticated ? (
            <div className="space-y-3">
              {/* Theme Toggle */}
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center">
                  <span className="text-xl ml-3">🌙</span>
                  <span className="text-white text-sm font-medium">حالت شب</span>
                </div>
                <div className="w-12 h-6 bg-white/20 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                </div>
              </button>
              
              {/* Logout Button */}
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center p-4 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition-colors border border-red-500/30"
              >
                <span className="text-xl ml-3">🚪</span>
                <span className="text-red-300 text-base font-medium">خروج از حساب</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button 
                onClick={() => handleMenuItemClick('/login')}
                className="w-full flex items-center justify-center p-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition-colors"
              >
                <span className="text-blue-900 text-base font-bold">ورود / ثبت نام</span>
              </button>
            </div>
          )}
          
          {/* App Version */}
          <div className="mt-4 text-center">
            <p className="text-blue-300 text-xs">نسخه ۱.۰.۰</p>
            <p className="text-blue-400 text-xs mt-1">کیمیا گلد © ۲۰۲۴</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;