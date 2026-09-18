import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import StockCard from '../components/StockCard';
import StockChart from '../components/StockChart';
import AIInsight from '../components/AIInsight';
import MarketBrief from '../components/MarketBrief';
import OpportunityScanner from '../components/OpportunityScanner';
import SectorIntelligence from '../components/SectorIntelligence';
import CopilotChat from '../components/CopilotChat';
import {
  STOCKS,
  FEATURED_STOCKS,
  getStockChartData
} from '../data/mockData';

export default function Dashboard({ selectedStock, onSelectStock }) {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState('1M');

  const currentTicker = selectedStock || 'AAPL';
  const stock = STOCKS[currentTicker] || STOCKS.AAPL;
  const chartData = getStockChartData(currentTicker, timeframe);
  const isPositive = stock.change >= 0;

  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in pb-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto pt-4 sm:pt-6">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SMART STOCKS AI</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.18]">
          AI-Powered <span className="text-indigo-600">Market Intelligence</span> For Smarter Decisions.
        </h1>

        <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Screen opportunities, evaluate multi-scenario risks, and explore AI forecasts with zero emotional bias.
        </p>

        <div className="mt-5 flex items-center justify-center space-x-3">
          <button
            onClick={() => navigate('/analysis')}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all flex items-center space-x-2"
          >
            <span>Analyze a Stock</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => navigate('/copilot')}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm transition-all"
          >
            <span>Ask AI Copilot</span>
          </button>
        </div>
      </div>

      {/* Feature 8: Today's AI Market Brief */}
      <MarketBrief onSelectStock={onSelectStock} />

      {/* Featured Stocks Quick Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-0.5">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Market Snapshot
          </span>
          <span className="text-xs text-gray-400">Click stock to update interactive snapshot</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FEATURED_STOCKS.map((ticker) => {
            const s = STOCKS[ticker];
            return (
              <StockCard
                key={ticker}
                stock={s}
                isSelected={currentTicker === ticker}
                onClick={() => onSelectStock && onSelectStock(ticker)}
              />
            );
          })}
        </div>
      </div>

      {/* Market Snapshot Canvas (Chart + AI Insight Highlight) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <div className="flex items-baseline justify-between mb-2 px-1">
            <span className="text-xs font-semibold text-gray-700">
              {stock.ticker} — {stock.name}
            </span>
            <span className="text-xs font-mono font-bold text-gray-900">
              ${stock.price.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
            </span>
          </div>
          <StockChart
            data={chartData}
            timeframe={timeframe}
            onTimeframeChange={setTimeframe}
            height={320}
          />
        </div>

        <div className="lg:col-span-1 flex flex-col">
          <AIInsight stock={stock} />
        </div>
      </div>

      {/* Feature 1: AI Opportunity Scanner */}
      <OpportunityScanner onSelectStock={onSelectStock} />

      {/* Feature 11: Sector Intelligence */}
      <SectorIntelligence onSelectStock={onSelectStock} />

      {/* Feature 10: Ask Smart Stocks AI Preview */}
      <CopilotChat onSelectStock={onSelectStock} />
    </div>
  );
}
