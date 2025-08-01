import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import { Card, Button, Input, Modal } from '../components/UI';
import { formatCurrency, formatNumber } from '../utils';

const Trading: React.FC = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [amount, setAmount] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  // Mock data
  const currentPrice = 2045.50;
  const bidPrice = 2044.75;
  const askPrice = 2046.25;
  const spread = askPrice - bidPrice;
  const dailyChange = 1.2;
  const dailyHigh = 2052.30;
  const dailyLow = 2038.90;
  const volume = 125000;

  const marketDepth = {
    bids: [
      { price: 2044.75, amount: 15.5 },
      { price: 2044.50, amount: 22.3 },
      { price: 2044.25, amount: 18.7 },
      { price: 2044.00, amount: 31.2 },
      { price: 2043.75, amount: 25.8 },
    ],
    asks: [
      { price: 2046.25, amount: 12.8 },
      { price: 2046.50, amount: 19.4 },
      { price: 2046.75, amount: 16.9 },
      { price: 2047.00, amount: 28.5 },
      { price: 2047.25, amount: 21.7 },
    ],
  };

  const recentTrades = [
    { price: 2045.50, amount: 2.5, time: '14:32:15', type: 'buy' },
    { price: 2045.25, amount: 1.8, time: '14:31:45', type: 'sell' },
    { price: 2045.75, amount: 3.2, time: '14:31:20', type: 'buy' },
    { price: 2045.50, amount: 1.5, time: '14:30:55', type: 'buy' },
    { price: 2045.25, amount: 2.1, time: '14:30:30', type: 'sell' },
  ];

  const calculateTotal = () => {
    const amountNum = parseFloat(amount) || 0;
    const price = orderType === 'market' 
      ? (activeTab === 'buy' ? askPrice : bidPrice)
      : parseFloat(limitPrice) || 0;
    
    const subtotal = amountNum * price;
    const fee = subtotal * 0.005; // 0.5% fee
    const total = activeTab === 'buy' ? subtotal + fee : subtotal - fee;
    
    return { subtotal, fee, total, price };
  };

  const handleSubmitOrder = () => {
    const { subtotal, fee, total, price } = calculateTotal();
    const amountNum = parseFloat(amount) || 0;
    
    if (amountNum <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    setOrderDetails({
      type: activeTab,
      orderType,
      amount: amountNum,
      price,
      subtotal,
      fee,
      total,
    });
    setShowConfirmModal(true);
  };

  const confirmOrder = () => {
    // Here you would submit the order to your API
    console.log('Order submitted:', orderDetails);
    setShowConfirmModal(false);
    setAmount('');
    setLimitPrice('');
    // Show success message
  };

  if (!isAuthenticated) {
    return (
      <div className="p-6">
        <Card className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Start Trading Gold
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please sign in to access the trading platform
          </p>
          <Button>
            Sign In
          </Button>
        </Card>
      </div>
    );
  }

  const { subtotal, fee, total } = calculateTotal();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Gold Trading
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Buy and sell gold at real-time market prices
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trading Panel */}
        <div className="lg:col-span-1">
          <Card title="Place Order">
            {/* Buy/Sell Tabs */}
            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab('buy')}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-lg border ${
                  activeTab === 'buy'
                    ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300'
                    : 'bg-white border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab('sell')}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-lg border-t border-r border-b ${
                  activeTab === 'sell'
                    ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300'
                    : 'bg-white border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
                }`}
              >
                Sell
              </button>
            </div>

            {/* Order Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Order Type
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setOrderType('market')}
                  className={`flex-1 py-2 px-3 text-sm rounded ${
                    orderType === 'market'
                      ? 'bg-gold-100 text-gold-700 dark:bg-gold-900/20 dark:text-gold-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  Market
                </button>
                <button
                  onClick={() => setOrderType('limit')}
                  className={`flex-1 py-2 px-3 text-sm rounded ${
                    orderType === 'limit'
                      ? 'bg-gold-100 text-gold-700 dark:bg-gold-900/20 dark:text-gold-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  Limit
                </button>
              </div>
            </div>

            {/* Amount */}
            <div className="mb-4">
              <Input
                label="Amount (oz)"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={setAmount}
                step="0.01"
                min="0"
              />
            </div>

            {/* Limit Price (if limit order) */}
            {orderType === 'limit' && (
              <div className="mb-4">
                <Input
                  label="Limit Price"
                  type="number"
                  placeholder="0.00"
                  value={limitPrice}
                  onChange={setLimitPrice}
                  step="0.01"
                  min="0"
                />
              </div>
            )}

            {/* Price Info */}
            <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {orderType === 'market' ? 'Market Price' : 'Limit Price'}:
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(
                    orderType === 'market'
                      ? (activeTab === 'buy' ? askPrice : bidPrice)
                      : parseFloat(limitPrice) || 0
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal:</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Fee (0.5%):</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatCurrency(fee)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-600">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Total:</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              fullWidth
              onClick={handleSubmitOrder}
              className={activeTab === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
            >
              {activeTab === 'buy' ? 'Buy Gold' : 'Sell Gold'}
            </Button>
          </Card>
        </div>

        {/* Market Data */}
        <div className="lg:col-span-2 space-y-6">
          {/* Price Overview */}
          <Card title="Market Overview">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Price</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(currentPrice)}
                </div>
                <div className={`text-sm font-medium ${
                  dailyChange >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {dailyChange >= 0 ? '+' : ''}{dailyChange}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Bid/Ask</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(bidPrice)} / {formatCurrency(askPrice)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Spread: {formatCurrency(spread)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">24h High/Low</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(dailyHigh)}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(dailyLow)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Volume</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatNumber(volume)} oz
                </div>
              </div>
            </div>
          </Card>

          {/* Chart Placeholder */}
          <Card title="Price Chart">
            <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">
                Interactive price chart will be displayed here
              </p>
            </div>
          </Card>

          {/* Market Depth & Recent Trades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Market Depth */}
            <Card title="Market Depth">
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">ASKS</div>
                {marketDepth.asks.reverse().map((ask, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-red-600">{formatCurrency(ask.price)}</span>
                    <span className="text-gray-600 dark:text-gray-400">{ask.amount}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-600 my-2"></div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">BIDS</div>
                {marketDepth.bids.map((bid, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-green-600">{formatCurrency(bid.price)}</span>
                    <span className="text-gray-600 dark:text-gray-400">{bid.amount}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Trades */}
            <Card title="Recent Trades">
              <div className="space-y-2">
                {recentTrades.map((trade, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className={trade.type === 'buy' ? 'text-green-600' : 'text-red-600'}>
                      {formatCurrency(trade.price)}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">{trade.amount}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{trade.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Confirm Order"
        size="md"
      >
        {orderDetails && (
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Order Summary
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Type:</span>
                  <span className={`font-medium capitalize ${
                    orderDetails.type === 'buy' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {orderDetails.type} {orderDetails.orderType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {orderDetails.amount} oz
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Price:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatCurrency(orderDetails.price)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatCurrency(orderDetails.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Fee:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatCurrency(orderDetails.fee)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {formatCurrency(orderDetails.total)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                onClick={confirmOrder}
                className={orderDetails.type === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
              >
                Confirm {orderDetails.type}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Trading;