import React, { useState } from 'react';
import { Card, Button } from '../components/UI';
import { formatCurrency, formatPercentage, formatDate } from '../utils';

const Market: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [selectedMetalTab, setSelectedMetalTab] = useState('gold');

  // Mock data
  const goldData = {
    price: 2045.50,
    change: 24.75,
    changePercent: 1.23,
    high24h: 2052.30,
    low24h: 2038.90,
    volume: 125000,
    marketCap: 12500000000,
  };

  const metals = [
    {
      id: 'gold',
      name: 'Gold',
      symbol: 'XAU',
      price: 2045.50,
      change: 24.75,
      changePercent: 1.23,
      volume: 125000,
    },
    {
      id: 'silver',
      name: 'Silver',
      symbol: 'XAG',
      price: 24.85,
      change: -0.18,
      changePercent: -0.72,
      volume: 89000,
    },
    {
      id: 'platinum',
      name: 'Platinum',
      symbol: 'XPT',
      price: 1025.30,
      change: 5.20,
      changePercent: 0.51,
      volume: 45000,
    },
    {
      id: 'palladium',
      name: 'Palladium',
      symbol: 'XPD',
      price: 1850.75,
      change: -19.25,
      changePercent: -1.03,
      volume: 32000,
    },
  ];

  const marketNews = [
    {
      id: 1,
      title: 'Gold Prices Rise Amid Economic Uncertainty',
      summary: 'Gold continues its upward trend as investors seek safe-haven assets amid global economic concerns.',
      source: 'Financial Times',
      time: '2024-01-15T14:30:00Z',
      category: 'Market Analysis',
    },
    {
      id: 2,
      title: 'Central Bank Gold Purchases Reach Record High',
      summary: 'Central banks worldwide increased their gold reserves by 15% in the last quarter.',
      source: 'Reuters',
      time: '2024-01-15T12:15:00Z',
      category: 'Economic News',
    },
    {
      id: 3,
      title: 'Mining Production Faces Supply Chain Challenges',
      summary: 'Major gold mining operations report delays due to supply chain disruptions.',
      source: 'Bloomberg',
      time: '2024-01-15T10:45:00Z',
      category: 'Industry News',
    },
    {
      id: 4,
      title: 'Technical Analysis: Gold Shows Strong Support at $2000',
      summary: 'Chart patterns suggest gold has established strong support levels around the $2000 mark.',
      source: 'MarketWatch',
      time: '2024-01-15T09:20:00Z',
      category: 'Technical Analysis',
    },
  ];

  const marketIndicators = [
    { name: 'Fear & Greed Index', value: 65, status: 'Greed', color: 'text-orange-600' },
    { name: 'VIX (Volatility)', value: 18.5, status: 'Low', color: 'text-green-600' },
    { name: 'USD Index', value: 103.2, status: 'Strong', color: 'text-blue-600' },
    { name: 'Bond Yield (10Y)', value: 4.25, status: 'High', color: 'text-red-600' },
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y', 'ALL'];

  const selectedMetal = metals.find(m => m.id === selectedMetalTab) || metals[0];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Market Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time precious metals market data and analysis
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button variant="outline">
            Export Data
          </Button>
        </div>
      </div>

      {/* Market Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metals.map((metal) => (
          <Card 
            key={metal.id} 
            className={`cursor-pointer transition-all ${
              selectedMetalTab === metal.id 
                ? 'ring-2 ring-gold-500 bg-gold-50 dark:bg-gold-900/10' 
                : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedMetalTab(metal.id)}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {metal.name}
              </h3>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {formatCurrency(metal.price)}
              </div>
              <div className={`text-sm font-medium ${
                metal.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {metal.changePercent >= 0 ? '+' : ''}{formatCurrency(metal.change)}
                <span className="ml-1">
                  ({formatPercentage(metal.changePercent)})
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Vol: {metal.volume.toLocaleString()}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Chart and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Price Chart */}
        <div className="lg:col-span-2">
          <Card 
            title={`${selectedMetal.name} Price Chart`}
            headerAction={
              <div className="flex space-x-1">
                {timeframes.map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      selectedTimeframe === timeframe
                        ? 'bg-gold-100 text-gold-700 dark:bg-gold-900/20 dark:text-gold-300'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            }
          >
            <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Interactive {selectedMetal.name} price chart
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Timeframe: {selectedTimeframe}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Market Details */}
        <div className="space-y-6">
          {/* Price Details */}
          <Card title="Price Details">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Current Price</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(selectedMetal.price)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">24h Change</span>
                <span className={`text-sm font-medium ${
                  selectedMetal.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formatCurrency(selectedMetal.change)} ({formatPercentage(selectedMetal.changePercent)})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">24h High</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(goldData.high24h)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">24h Low</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(goldData.low24h)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Volume</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {selectedMetal.volume.toLocaleString()}
                </span>
              </div>
              {selectedMetal.id === 'gold' && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Market Cap</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    ${(goldData.marketCap / 1000000000).toFixed(1)}B
                  </span>
                </div>
              )}
            </div>
          </Card>

          {/* Market Indicators */}
          <Card title="Market Indicators">
            <div className="space-y-3">
              {marketIndicators.map((indicator, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {indicator.name}
                    </div>
                    <div className={`text-xs ${indicator.color}`}>
                      {indicator.status}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {indicator.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Market News */}
      <Card title="Market News & Analysis">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketNews.map((news) => (
            <div key={news.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800 dark:bg-gold-900/20 dark:text-gold-300">
                  {news.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formatDate(news.time, 'time')}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {news.summary}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {news.source}
                </span>
                <button className="text-xs text-gold-600 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300 font-medium">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Economic Calendar */}
      <Card title="Economic Calendar">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Impact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Previous
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Forecast
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  15:30
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  US Retail Sales
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                    High
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  0.3%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  0.2%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  16:00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  Fed Chair Speech
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                    High
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  -
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  -
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  Tomorrow 14:00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  CPI Data
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
                    Medium
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  3.2%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  3.1%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Market;