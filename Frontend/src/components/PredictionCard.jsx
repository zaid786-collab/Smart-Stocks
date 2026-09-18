import React from 'react';
import { Sparkles, ArrowUpRight, ArrowDownRight, ShieldCheck } from 'lucide-react';

export default function PredictionCard({ stock, horizon = '30D' }) {
  if (!stock) return null;

  const isPositive = stock.expectedChange >= 0;

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-card">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {stock.ticker}
            </span>
            <span className="text-base text-gray-500 font-medium">
              {stock.name}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-mono">
              {horizon} Forecast
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Machine learning predictive model v3.4 • Updated today
          </p>
        </div>

        {/* AI Signal Pill: Prominent yet tasteful */}
        <div className="flex items-center space-x-4 self-start md:self-auto">
          <div className="text-right">
            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
              AI Recommendation
            </span>
            <span className="text-xs font-semibold text-gray-700">
              Confidence: {stock.aiConfidence}%
            </span>
          </div>

          <div className={`px-5 py-2 rounded-xl font-mono text-base font-bold tracking-wide border shadow-sm ${
            stock.aiSignal === 'BUY'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-amber-50 text-amber-700 border-amber-200'
          }`}>
            {stock.aiSignal}
          </div>
        </div>
      </div>

      {/* Primary Figures Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6">
        <div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
            Current Price
          </span>
          <div className="font-mono text-xl sm:text-2xl font-bold text-gray-900 mt-1">
            ${stock.price.toFixed(2)}
          </div>
        </div>

        <div>
          <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider block flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            AI Predicted Price
          </span>
          <div className="font-mono text-xl sm:text-2xl font-bold text-indigo-600 mt-1">
            ${stock.aiPredictedPrice.toFixed(2)}
          </div>
        </div>

        <div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
            Expected Change
          </span>
          <div className={`font-mono text-xl sm:text-2xl font-bold mt-1 flex items-center ${
            isPositive ? 'text-emerald-600' : 'text-rose-600'
          }`}>
            {isPositive ? (
              <ArrowUpRight className="w-5 h-5 mr-0.5 inline" />
            ) : (
              <ArrowDownRight className="w-5 h-5 mr-0.5 inline" />
            )}
            <span>{isPositive ? '+' : ''}{stock.expectedChange}%</span>
          </div>
        </div>

        <div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
            Model Confidence
          </span>
          <div className="font-mono text-xl sm:text-2xl font-bold text-gray-900 mt-1">
            {stock.aiConfidence}%
          </div>
        </div>
      </div>
    </div>
  );
}
