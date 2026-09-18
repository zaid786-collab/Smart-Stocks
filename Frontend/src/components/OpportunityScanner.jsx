import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowUpRight, ArrowDownRight, RotateCcw, Filter, ShieldCheck } from 'lucide-react';
import { OPPORTUNITY_SCANNER_DATA } from '../data/mockData';

export default function OpportunityScanner({ onSelectStock }) {
  const navigate = useNavigate();

  // Filter States
  const [priceFilter, setPriceFilter] = useState('ALL');
  const [returnFilter, setReturnFilter] = useState('ALL');
  const [riskFilter, setRiskFilter] = useState('ALL');
  const [sectorFilter, setSectorFilter] = useState('ALL');
  const [horizonFilter, setHorizonFilter] = useState('ALL');

  const filteredOpportunities = useMemo(() => {
    return OPPORTUNITY_SCANNER_DATA.filter((item) => {
      if (priceFilter === 'UNDER_200' && item.price >= 200) return false;
      if (priceFilter === 'ABOVE_200' && item.price < 200) return false;
      if (returnFilter === 'ABOVE_10' && item.expectedReturn < 10) return false;
      if (returnFilter === 'ABOVE_5' && item.expectedReturn < 5) return false;
      if (riskFilter !== 'ALL' && item.risk !== riskFilter) return false;
      if (sectorFilter !== 'ALL' && item.sector !== sectorFilter) return false;
      if (horizonFilter !== 'ALL' && item.horizon !== horizonFilter) return false;
      return true;
    });
  }, [priceFilter, returnFilter, riskFilter, sectorFilter, horizonFilter]);

  const handleClearFilters = () => {
    setPriceFilter('ALL');
    setReturnFilter('ALL');
    setRiskFilter('ALL');
    setSectorFilter('ALL');
    setHorizonFilter('ALL');
  };

  const isFiltered = priceFilter !== 'ALL' || returnFilter !== 'ALL' || riskFilter !== 'ALL' || sectorFilter !== 'ALL' || horizonFilter !== 'ALL';

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
      {/* Header & Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-bold text-gray-900">
              AI Opportunity Scanner
            </h3>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">
              {filteredOpportunities.length} Filtered
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Automatically identify high-probability setups meeting your risk parameters
          </p>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Price */}
          <div className="flex items-center space-x-1 bg-gray-50/90 border border-gray-200/70 rounded-lg px-2.5 py-1.5">
            <span className="text-gray-400 font-medium text-[11px]">Price:</span>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL">All Prices</option>
              <option value="UNDER_200">Under $200</option>
              <option value="ABOVE_200">Above $200</option>
            </select>
          </div>

          {/* Expected Return */}
          <div className="flex items-center space-x-1 bg-gray-50/90 border border-gray-200/70 rounded-lg px-2.5 py-1.5">
            <span className="text-gray-400 font-medium text-[11px]">Return:</span>
            <select
              value={returnFilter}
              onChange={(e) => setReturnFilter(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL">All Returns</option>
              <option value="ABOVE_5">Above 5%</option>
              <option value="ABOVE_10">Above 10%</option>
            </select>
          </div>

          {/* Risk */}
          <div className="flex items-center space-x-1 bg-gray-50/90 border border-gray-200/70 rounded-lg px-2.5 py-1.5">
            <span className="text-gray-400 font-medium text-[11px]">Risk:</span>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL">All Risks</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
            </select>
          </div>

          {/* Sector */}
          <div className="flex items-center space-x-1 bg-gray-50/90 border border-gray-200/70 rounded-lg px-2.5 py-1.5">
            <span className="text-gray-400 font-medium text-[11px]">Sector:</span>
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer text-xs"
            >
              <option value="ALL">All Sectors</option>
              <option value="Technology">Technology</option>
              <option value="Consumer">Consumer</option>
            </select>
          </div>

          {isFiltered && (
            <button
              onClick={handleClearFilters}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              title="Clear filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Opportunities Grid (top 3–5 items) */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {filteredOpportunities.slice(0, 3).map((item) => (
            <div
              key={item.symbol}
              className="p-4 rounded-xl bg-gray-50/60 border border-gray-200/70 hover:border-gray-300 hover:bg-white transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                      {item.name}
                    </h4>
                    <span className="font-mono text-xs text-gray-500 font-bold">
                      {item.symbol}
                    </span>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border font-mono ${getSignalBadge(item.signal)}`}>
                    {item.signal}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mt-2.5 pt-2 border-t border-gray-200/50 font-mono">
                  <span className="text-base font-bold text-gray-900 tabular-nums">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="inline-flex items-center text-xs font-bold text-emerald-600">
                    <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                    <span>+{item.expectedReturn}% Expected</span>
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-500 mt-2">
                  <span>Confidence: <strong className="text-gray-800 font-mono">{item.confidence}%</strong></span>
                  <span className="text-gray-400">• Risk: <strong className="text-gray-700 font-mono">{item.risk}</strong></span>
                </div>

                <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-2">
                  "{item.reason}"
                </p>
              </div>

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
        <div className="py-8 text-center text-xs text-gray-400 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
          No opportunities match your selected filter criteria.{' '}
          <button onClick={handleClearFilters} className="text-indigo-600 font-semibold underline ml-1">
            Reset filters
          </button>
        </div>
      )}

      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
        <span>AI insights are based on analyzed market data and are for informational purposes only.</span>
      </div>
    </div>
  );
}
