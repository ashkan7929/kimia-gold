import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import { Card, Button, Modal } from '../components/UI';
import { formatCurrency, formatPercentage, formatDate } from '../utils';

const Portfolio: React.FC = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  // Mock data for demonstration
  const portfolioSummary = {
    totalValue: 125000,
    totalGold: 61.25,
    averageCost: 1980.50,
    unrealizedGain: 3125.75,
    unrealizedGainPercent: 2.56,
    realizedGain: 1250.00,
    totalReturn: 4375.75,
    totalReturnPercent: 3.62,
  };

  const holdings = [
    {
      id: 1,
      type: 'Physical Gold',
      amount: 45.5,
      averageCost: 1975.25,
      currentPrice: 2045.50,
      value: 93070.75,
      gain: 3196.375,
      gainPercent: 3.56,
    },
    {
      id: 2,
      type: 'Gold ETF',
      amount: 15.75,
      averageCost: 1990.00,
      currentPrice: 2045.50,
      value: 32216.625,
      gain: 873.375,
      gainPercent: 2.79,
    },
  ];

  const transactions = [
    {
      id: 1,
      date: '2024-01-15T10:30:00Z',
      type: 'buy',
      amount: 2.5,
      price: 2040.00,
      total: 5100.00,
      fees: 25.50,
      status: 'completed',
    },
    {
      id: 2,
      date: '2024-01-12T14:15:00Z',
      type: 'sell',
      amount: 1.0,
      price: 2035.50,
      total: 2035.50,
      fees: 10.18,
      status: 'completed',
    },
    {
      id: 3,
      date: '2024-01-10T09:45:00Z',
      type: 'buy',
      amount: 5.0,
      price: 2030.25,
      total: 10151.25,
      fees: 50.76,
      status: 'completed',
    },
    {
      id: 4,
      date: '2024-01-08T16:20:00Z',
      type: 'buy',
      amount: 3.25,
      price: 2025.75,
      total: 6583.69,
      fees: 32.92,
      status: 'pending',
    },
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y', 'ALL'];

  const handleTransactionClick = (transaction: any) => {
    setSelectedTransaction(transaction);
    setShowTransactionModal(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="p-6">
        <Card className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Your Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please sign in to view your gold investment portfolio
          </p>
          <Button>
            Sign In
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your gold investments and performance
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline">
            Export Report
          </Button>
          <Button>
            Add Investment
          </Button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Total Portfolio Value
            </h3>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(portfolioSummary.totalValue)}
            </div>
            <div className={`text-sm font-medium mt-1 ${
              portfolioSummary.totalReturnPercent >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatPercentage(portfolioSummary.totalReturnPercent)}
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Total Gold Holdings
            </h3>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {portfolioSummary.totalGold} oz
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Avg: {formatCurrency(portfolioSummary.averageCost)}
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Unrealized Gain/Loss
            </h3>
            <div className={`text-2xl font-bold ${
              portfolioSummary.unrealizedGain >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatCurrency(portfolioSummary.unrealizedGain)}
            </div>
            <div className={`text-sm font-medium mt-1 ${
              portfolioSummary.unrealizedGainPercent >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatPercentage(portfolioSummary.unrealizedGainPercent)}
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Total Return
            </h3>
            <div className={`text-2xl font-bold ${
              portfolioSummary.totalReturn >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatCurrency(portfolioSummary.totalReturn)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Realized: {formatCurrency(portfolioSummary.realizedGain)}
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card 
        title="Portfolio Performance"
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
        <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">
            Portfolio performance chart will be displayed here
          </p>
        </div>
      </Card>

      {/* Holdings */}
      <Card title="Holdings">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Asset Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Avg Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Market Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Gain/Loss
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {holdings.map((holding) => (
                <tr key={holding.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {holding.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {holding.amount} oz
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(holding.averageCost)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(holding.currentPrice)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(holding.value)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className={holding.gain >= 0 ? 'text-green-600' : 'text-red-600'}>
                      {formatCurrency(holding.gain)}
                      <div className="text-xs">
                        {formatPercentage(holding.gainPercent)}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Recent Transactions */}
      <Card title="Recent Transactions">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((transaction) => (
                <tr 
                  key={transaction.id} 
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                  onClick={() => handleTransactionClick(transaction)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatDate(transaction.date, 'datetime')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.type === 'buy'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                    }`}>
                      {transaction.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {transaction.amount} oz
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(transaction.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {formatCurrency(transaction.total)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Transaction Detail Modal */}
      <Modal
        isOpen={showTransactionModal}
        onClose={() => setShowTransactionModal(false)}
        title="Transaction Details"
        size="md"
      >
        {selectedTransaction && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Transaction ID
                </label>
                <p className="text-sm text-gray-900 dark:text-white">
                  #{selectedTransaction.id.toString().padStart(6, '0')}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date
                </label>
                <p className="text-sm text-gray-900 dark:text-white">
                  {formatDate(selectedTransaction.date, 'datetime')}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Type
                </label>
                <p className="text-sm text-gray-900 dark:text-white capitalize">
                  {selectedTransaction.type}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Amount
                </label>
                <p className="text-sm text-gray-900 dark:text-white">
                  {selectedTransaction.amount} oz
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Price per oz
                </label>
                <p className="text-sm text-gray-900 dark:text-white">
                  {formatCurrency(selectedTransaction.price)}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Fees
                </label>
                <p className="text-sm text-gray-900 dark:text-white">
                  {formatCurrency(selectedTransaction.fees)}
                </p>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Total Amount
                </label>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(selectedTransaction.total + selectedTransaction.fees)}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;