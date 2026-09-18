import React, { useState } from 'react';
import { Search, ArrowUpRight, ArrowDownRight, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StockChart from '../components/StockChart';
import MetricCard from '../components/MetricCard';
import CompanyHealth from '../components/CompanyHealth';
import RiskAnalysis from '../components/RiskAnalysis';
import WhyThisStock from '../components/WhyThisStock';
import NewsSentiment from '../components/NewsSentiment';
import { STOCKS, getStockChartData } from '../data/mockData';

export default function Analysis({ selectedStock, onSelectStock }) {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState('1M');
  const [searchQuery, setSearchQuery] = useState('');

  const currentTicker = selectedStock || 'AAPL';
  const stock = STOCKS[currentTicker] || STOCKS.AAPL;
  const chartData = getStockChartData(currentTicker, timeframe);
  const isPositive = stock.change >= 0;

  const filteredStocks = searchQuery
    ? Object.values(STOCKS).filter(
        (s) =>
          s.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Top Search & Ticker Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search stock or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200/90 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
          />

          {searchQuery && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-1 divide-y divide-gray-50 max-h-48 overflow-y-auto">
              {filteredStocks.map((s) => (
                <button
                  key={s.ticker}
                  onClick={() => {
                    if (onSelectStock) onSelectStock(s.ticker);
                    setSearchQuery('');
                  }}
                  className="w-full text-left px-3.5 py-2 hover:bg-gray-50 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold font-mono text-gray-900 mr-2">{s.ticker}</span>
                    <span className="text-gray-500">{s.name}</span>
                  </div>
                  <span className="font-mono text-gray-700">${s.price.toFixed(2)}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0">
          {Object.keys(STOCKS).map((t) => (
            <button
              key={t}
              onClick={() => onSelectStock && onSelectStock(t)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                currentTicker === t
                  ? 'bg-gray-900 text-white font-semibold shadow-sm'
                  : 'bg-white text-gray-500 hover:text-gray-900 border border-gray-200/70'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Stock Quote Header */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
            Selected Stock
          </span>
          <div className="flex items-baseline space-x-2 mt-1">
            <h1 className="font-mono text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {stock.ticker}
            </h1>
            <span className="text-base text-gray-500 font-medium">
              {stock.name}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-mono">
              {stock.sector}
            </span>
          </div>
        </div>

        <div className="flex items-baseline space-x-3 self-start sm:self-auto">
          <span className="font-mono text-3xl font-extrabold text-gray-900 tabular-nums">
            ${stock.price.toFixed(2)}
          </span>
          <span
            className={`font-mono text-sm font-semibold inline-flex items-center ${
              isPositive ? 'text-emerald-600' : 'text-rose-600'
            }`}
          >
            {isPositive ? <ArrowUpRight className="w-4 h-4 mr-0.5" /> : <ArrowDownRight className="w-4 h-4 mr-0.5" />}
            <span>{isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%</span>
          </span>
        </div>
      </div>

      {/* Large Stock Chart */}
      <StockChart
        data={chartData}
        timeframe={timeframe}
        onTimeframeChange={setTimeframe}
        height={360}
      />

      {/* Compact Metrics Row (Market Cap, P/E, 52W High, 52W Low) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard label="Market Cap" value={stock.marketCap} />
        <MetricCard label="P/E Ratio" value={stock.peRatio} />
        <MetricCard label="52W High" value={`$${stock.high52.toFixed(2)}`} />
        <MetricCard label="52W Low" value={`$${stock.low52.toFixed(2)}`} />
      </div>

      {/* Trend Analysis */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Trend Analysis</h3>
          <span className="text-xs text-indigo-600 font-semibold cursor-pointer hover:underline" onClick={() => navigate('/prediction')}>
            View AI Prediction →
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <MetricCard label="Trend" value={stock.trend} subtitle="Market regime" highlight={stock.trend === 'Bullish'} />
          <MetricCard label="Momentum" value={stock.momentum} subtitle="Relative velocity" />
          <MetricCard label="Volatility" value={stock.volatility} subtitle="Price deviation" />
        </div>
      </div>

      {/* Two-Column Layout: LEFT = Company Health, RIGHT = Risk Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <CompanyHealth health={stock.health} />
        <RiskAnalysis risk={stock.risk} />
      </div>

      {/* Feature 4: Why AI Likes This Stock */}
      <WhyThisStock whyData={stock.whyAiLikes} />

      {/* Feature 9: Latest News + AI Sentiment */}
      <NewsSentiment news={stock.news} />
    </div>
  );
}
