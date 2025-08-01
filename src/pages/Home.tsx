import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { Card, Button } from '../components/UI';
import { formatCurrency, formatPercentage } from '../utils';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAppSelector(state => state.auth);

  // Mock data for demonstration
  const goldPrice = 2045.50;
  const priceChange = 1.2;
  const portfolioValue = 125000;
  const portfolioChange = 2.5;
  const totalGold = 61.25; // ounces

  const quickActions = [
    {
      title: 'خرید طلا',
      icon: '💰',
      color: 'bg-green-500',
      path: '/trading'
    },
    {
      title: 'فروش طلا',
      icon: '💸',
      color: 'bg-red-500',
      path: '/trading'
    },
    {
      title: 'نمودار قیمت',
      icon: '📈',
      color: 'bg-blue-500',
      path: '/market'
    },
    {
      title: 'پورتفولیو',
      icon: '📊',
      color: 'bg-purple-500',
      path: '/portfolio'
    }
  ];

  const marketData = [
    { name: 'طلای ۱۸ عیار', price: '۳,۲۵۰,۰۰۰', change: '+۱.۲%', positive: true },
    { name: 'طلای ۲۴ عیار', price: '۴,۳۳۰,۰۰۰', change: '+۰.۸%', positive: true },
    { name: 'سکه بهار آزادی', price: '۲۸,۵۰۰,۰۰۰', change: '-۰.۵%', positive: false },
    { name: 'نیم سکه', price: '۱۴,۲۵۰,۰۰۰', change: '+۰.۳%', positive: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pt-12">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center ml-3">
            <span className="text-blue-900 font-bold">KI</span>
          </div>
          <div>
            <h1 className="text-white text-lg font-bold">کیمیا گلد</h1>
            <p className="text-blue-200 text-sm">
              {isAuthenticated ? `سلام ${user?.name || 'کاربر'}` : 'خوش آمدید'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12" />
            </svg>
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-sm">👤</span>
          </button>
        </div>
      </div>

      {/* Gold Price Banner */}
      <div className="mx-6 mb-6">
        <Card className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-blue-900 text-lg font-bold mb-1">قیمت طلا</h2>
              <p className="text-blue-800 text-3xl font-bold">۳,۲۵۰,۰۰۰</p>
              <p className="text-blue-700 text-sm">تومان در هر گرم</p>
            </div>
            <div className="text-left">
              <div className="flex items-center">
                <span className="text-green-700 text-lg font-bold">+۱.۲%</span>
                <svg className="w-5 h-5 text-green-700 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
              <p className="text-blue-700 text-sm">+۳۹,۰۰۰ تومان</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mx-6 mb-6">
        <h3 className="text-white text-lg font-bold mb-4">عملیات سریع</h3>
        <div className="grid grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-2 text-2xl`}>
                {action.icon}
              </div>
              <span className="text-white text-xs font-medium text-center">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Summary */}
      {isAuthenticated && (
        <div className="mx-6 mb-6">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-bold">پورتفولیو شما</h3>
              <Link to="/portfolio" className="text-yellow-400 text-sm font-medium">
                مشاهده همه
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">ارزش کل</span>
                <span className="text-white text-lg font-bold">۱۲۵,۰۰۰,۰۰۰ تومان</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">سود/زیان امروز</span>
                <span className="text-green-400 text-sm font-medium">+۲.۵% (+۳,۱۲۵,۰۰۰)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">مقدار طلا</span>
                <span className="text-white text-sm font-medium">۶۱.۲۵ گرم</span>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Market Overview */}
      <div className="mx-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-bold">بازار طلا</h3>
          <Link to="/market" className="text-yellow-400 text-sm font-medium">
            مشاهده همه
          </Link>
        </div>
        <div className="space-y-3">
          {marketData.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white text-sm font-medium">{item.name}</h4>
                  <p className="text-blue-200 text-xs">تومان</p>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-bold">{item.price}</p>
                  <p className={`text-xs font-medium ${
                    item.positive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {item.change}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* News & Updates */}
      <div className="mx-6 mb-6">
        <h3 className="text-white text-lg font-bold mb-4">اخبار و تحلیل‌ها</h3>
        <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h4 className="text-white text-sm font-medium mb-1">
                  افزایش قیمت طلا در بازارهای جهانی
                </h4>
                <p className="text-blue-200 text-xs">
                  قیمت طلا در بازارهای جهانی با افزایش ۱.۲ درصدی همراه شده است.
                </p>
                <span className="text-blue-300 text-xs">۲ ساعت پیش</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h4 className="text-white text-sm font-medium mb-1">
                  تحلیل تکنیکال هفتگی بازار طلا
                </h4>
                <p className="text-blue-200 text-xs">
                  بررسی روند قیمت طلا و پیش‌بینی تحرکات آینده بازار.
                </p>
                <span className="text-blue-300 text-xs">۵ ساعت پیش</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;