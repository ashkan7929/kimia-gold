import React from 'react';
import { Card, Button } from '../components/UI';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Header Section with Welcome Message */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KI</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Welcome to Kimia Gold</h2>
                  <p className="text-blue-200 text-sm">Your trusted gold trading platform</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <NotificationIconSVG />
                <MenuIconSVG />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Trading Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-700 to-blue-600 border-none mb-6">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <TradingIconSVG />
                  <div>
                    <h3 className="text-white font-semibold">Start Gold Trading</h3>
                    <p className="text-blue-200 text-sm">Buy and sell gold with confidence</p>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                  Trade Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Kimia Gold Page Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <Card className="bg-blue-800/50 border-blue-700">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <RefreshIconSVG />
                  <div>
                    <h3 className="text-white font-semibold">Kimia Gold Platform</h3>
                    <p className="text-blue-200 text-sm">Access all trading features and market data</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DocumentIconSVG />
                  <CalculatorIconSVG />
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium">
                Open Platform
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-blue-800/50 border-blue-700 text-center">
              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-xl flex items-center justify-center">
                  <MarketIconSVG />
                </div>
                <h4 className="text-white text-sm font-medium">Market</h4>
              </div>
            </Card>
            
            <Card className="bg-blue-800/50 border-blue-700 text-center">
              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-xl flex items-center justify-center">
                  <SellIconSVG />
                </div>
                <h4 className="text-white text-sm font-medium">Sell Gold</h4>
              </div>
            </Card>
            
            <Card className="bg-blue-800/50 border-blue-700 text-center">
              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-orange-500 rounded-xl flex items-center justify-center">
                  <ServicesIconSVG />
                </div>
                <h4 className="text-white text-sm font-medium">Services</h4>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Tracking Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Price Tracking</h3>
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <span>Compare</span>
              <span>24h</span>
              <span>Price</span>
              <span>Chart</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Card className="bg-blue-800/50 border-blue-700">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <EyeIconSVG />
                    <div>
                      <div className="text-green-400 font-semibold">+2.5%</div>
                      <div className="text-white font-bold">$1,892.45</div>
                      <div className="text-blue-200 text-sm">Gold - 1 Gram</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">AU</span>
                  </div>
                  <StarIconSVG />
                </div>
              </div>
            </Card>
            
            <Card className="bg-blue-800/50 border-blue-700">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <EyeIconSVG />
                    <div>
                      <div className="text-green-400 font-semibold">+1.8%</div>
                      <div className="text-white font-bold">$1,892.45</div>
                      <div className="text-blue-200 text-sm">Gold - 1 Gram</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">AU</span>
                  </div>
                  <StarIconSVG />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-orange-500 border-none text-center">
              <div className="p-4">
                <NewsIconSVG />
                <h4 className="text-white text-sm font-medium mt-2">News</h4>
              </div>
            </Card>
            
            <Card className="bg-orange-500 border-none text-center">
              <div className="p-4">
                <AnalyticsIconSVG />
                <h4 className="text-white text-sm font-medium mt-2">Analytics</h4>
              </div>
            </Card>
            
            <Card className="bg-orange-500 border-none text-center">
              <div className="p-4">
                <SupportIconSVG />
                <h4 className="text-white text-sm font-medium mt-2">Support</h4>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Action Bar */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex flex-col items-center gap-1">
              <HomeIconSVG />
              <span className="text-xs">Home</span>
            </Button>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl flex flex-col items-center gap-1">
              <TradingIconSVG />
              <span className="text-xs">Trading</span>
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex flex-col items-center gap-1">
              <ProfileIconSVG />
              <span className="text-xs">Profile</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home