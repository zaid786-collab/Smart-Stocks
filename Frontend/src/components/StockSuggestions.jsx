import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowUpRight, ArrowDownRight, RotateCcw, Filter, TrendingUp, Info } from 'lucide-react';
import { AI_STOCK_SUGGESTIONS } from '../data/mockData';

export default function StockSuggestions({ onSelectStock }) {
  const navigate = useNavigate();

  // Filter & Sort States
  const [priceFilter, setPriceFilter] = useState('ALL');
  const [profitFilter, setProfitFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('PROFIT_DESC');

  // Filter options
  const PRICE_OPTIONS = [
    { label: 'All Prices', value: 'ALL' },
    { label: 'Under $50', value: 'UNDER_50' },
    { label: '$50 – $100', value: '50_100' },
    { label: '$100 – $200', value: '100_200' },
    { label: 'Above $200', value: 'ABOVE_200' },
  ];

  const PROFIT_OPTIONS = [
    { label: 'All Returns', value: 'ALL' },
    { label: 'Above 5%', value: '5' },
    { label: 'Above 10%', value: '10' },
    { label: 'Above 20%', value: '20' },
    { label: 'Above 30%', value: '30' },
  ];

  const SORT_OPTIONS = [
    { label: 'Profit: High → Low', value: 'PROFIT_DESC' },
    { label: 'Profit: Low → High', value: 'PROFIT_ASC' },
    { label: 'Price: Low → High', value: 'PRICE_ASC' },
    { label: 'Price: High → Low', value: 'PRICE_DESC' },
    { label: 'AI Confidence: High → Low', value: 'CONF_DESC' },
  ];

  // Reset Filters Handler
  const handleClearFilters = () => {
    setPriceFilter('ALL');
    setProfitFilter('ALL');
    setSortBy('PROFIT_DESC');
  };

  const isFiltered = priceFilter !== 'ALL' || profitFilter !== 'ALL' || sortBy !== 'PROFIT_DESC';

  // Dynamic filtering & sorting
  const filteredAndSortedStocks = useMemo(() => {
    let result = AI_STOCK_SUGGESTIONS.filter((stock) => {
      // 1. Price filter
      if (priceFilter === 'UNDER_50' && stock.price >= 50) return false;
      if (priceFilter === '50_100' && (stock.price < 50 || stock.price > 100)) return false;
      if (priceFilter === '100_200' && (stock.price < 100 || stock.price > 200)) return false;
      if (priceFilter === 'ABOVE_200' && stock.price <= 200) return false;

      // 2. Profit / Return % filter
      if (profitFilter !== 'ALL') {
        const threshold = parseFloat(profitFilter);
        if (stock.profitPercent < threshold) return false;
      }

      return true;
    });

    // 3. Sorting
    result.sort((a, b) => {
      if (sortBy === 'PROFIT_DESC') return b.profitPercent - a.profitPercent;
      if (sortBy === 'PROFIT_ASC') return a.profitPercent - b.profitPercent;
      if (sortBy === 'PRICE_ASC') return a.price - b.price;
      if (sortBy === 'PRICE_DESC') return b.price - a.price;
      if (sortBy === 'CONF_DESC') return b.confidence - a.confidence;
      return 0;
    });

    return result;
  }, [priceFilter, profitFilter, sortBy]);

  // Display top 3 suggestions
  const displayedSuggestions = filteredAndSortedStocks.slice(0, 3);

  const handleAnalyze = (symbol) => {
    if (onSelectStock) onSelectStock(symbol);
    navigate('/analysis');
  };

  const getSignalBadge = (signal) => {
    switch (signal) {
      case 'BUY':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/90';
      case 'SELL':
        return 'bg-rose-50 text-rose-700 border-rose-200/90';
      default:
        return 'bg-amber-50 text-amber-700 border-amber-200/90';
    }
  };

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-4">
      {/* Header & Filter Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
        {/* Title & Subtitle */}
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-bold text-gray-900">
                AI Stock Suggestions
              </h3>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-semibold">
                {filteredAndSortedStocks.length} Available
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Stocks showing promising market signals
            </p>
          </div>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Price Range Filter */}
          <div className="flex items-center space-x-1.5 bg-gray-50/90 border border-gray-200/70 rounded-lg px-2.5 py-1.5">
            <span className="text-gray-400 font-medium text-[11px]">Price:</span>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer text-xs pr-1"
            >
              {PRICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Profit / Return % Filter */}
          <div className="flex items-center space-x-1.5 bg-gray-50/90 border border-gray-200/70 rounded-lg px-2.5 py-1.5">
            <span className="text-gray-400 font-medium text-[11px]">Profit:</span>
            <select
              value={profitFilter}
              onChange={(e) => setProfitFilter(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer text-xs pr-1"
            >
              {PROFIT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Option */}
          <div className="flex items-center space-x-1.5 bg-gray-50/90 border border-gray-200/70 rounded-lg px-2.5 py-1.5">
            <span className="text-gray-400 font-medium text-[11px]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer text-xs pr-1"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button (shown when filtered or non-default) */}
          {isFiltered && (
            <button
              onClick={handleClearFilters}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors flex items-center space-x-1 border border-transparent hover:border-gray-200"
              title="Reset to default filters"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Suggestion Cards Container */}
      {displayedSuggestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {displayedSuggestions.map((item) => (
            <div
              key={item.symbol}
              className="p-4 rounded-xl bg-gray-50/60 border border-gray-200/70 hover:border-gray-300 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                {/* Header: Company & Ticker + AI Signal Pill */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                      {item.name}
                    </h4>
                    <span className="font-mono text-xs text-gray-500 font-bold">
                      {item.symbol}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border font-mono tracking-wide ${getSignalBadge(
                      item.signal
                    )}`}
                  >
                    {item.signal}
                  </span>
                </div>

                {/* Price & Profit/Return % */}
                <div className="flex items-baseline justify-between mt-2.5 pt-2 border-t border-gray-200/50 font-mono">
                  <span className="text-base font-bold text-gray-900 tabular-nums">
                    ${item.price.toFixed(2)}
                  </span>

                  <span className="inline-flex items-center text-xs font-bold text-emerald-600">
                    <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                    <span>+{item.profitPercent.toFixed(1)}% Return</span>
                  </span>
                </div>

                {/* AI Confidence */}
                <div className="flex items-center justify-between text-[11px] text-gray-500 mt-2">
                  <span>AI Confidence</span>
                  <span className="font-mono font-bold text-gray-800">
                    {item.confidence}%
                  </span>
                </div>

                {/* Short Reason */}
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  "{item.reason}"
                </p>
              </div>

              {/* Action Button: Analyze → */}
              <div className="pt-2 border-t border-gray-200/60 flex items-center justify-end">
                <button
                  onClick={() => handleAnalyze(item.symbol)}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center space-x-1 py-1 px-2 rounded-md hover:bg-indigo-50/70"
                >
                  <span>Analyze</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-10 text-center space-y-3 bg-gray-50/40 rounded-xl border border-dashed border-gray-200">
          <p className="text-xs text-gray-500 font-medium">
            No stocks match your current filters.
          </p>
          <button
            onClick={handleClearFilters}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm transition-all inline-flex items-center space-x-1.5"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear Filters</span>
          </button>
        </div>
      )}

      {/* Subtle Unobtrusive Disclaimer */}
      <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-gray-400">
        <div className="flex items-center space-x-1.5">
          <Info className="w-3.5 h-3.5 shrink-0 text-gray-400" />
          <span>
            AI suggestions are based on analyzed market data and are not financial advice.
          </span>
        </div>
        <span className="text-[10px] text-gray-400">
          *Return % reflects prototype benchmark metrics.
        </span>
      </div>
    </div>
  );
}
