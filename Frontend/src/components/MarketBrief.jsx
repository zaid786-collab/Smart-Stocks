import React from 'react';
import { Sparkles, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AI_MARKET_BRIEF } from '../data/mockData';

export default function MarketBrief({ onSelectStock }) {
  const brief = AI_MARKET_BRIEF;

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Today's AI Market Brief
            </h3>
            <p className="text-xs text-gray-400">
              {brief.updated} • Automated daily macro synthesis
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono">
          {brief.sentiment}
        </span>
      </div>

      {/* Narrative */}
      <div className="text-xs text-gray-700 leading-relaxed font-medium">
        <p>"{brief.headline} {brief.narrative}"</p>
      </div>

      {/* Key Macro Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-gray-100 text-xs">
        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Strong Sector</span>
          <span className="font-semibold text-emerald-600 mt-0.5 block">{brief.strongSector}</span>
        </div>

        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Weak Sector</span>
          <span className="font-semibold text-rose-600 mt-0.5 block">{brief.weakSector}</span>
        </div>

        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Stocks to Watch</span>
          <div className="flex items-center space-x-1.5 mt-0.5">
            {brief.stocksToWatch.map((s) => (
              <button
                key={s}
                onClick={() => onSelectStock && onSelectStock(s)}
                className="font-mono font-bold text-indigo-600 hover:text-indigo-800 text-[11px]"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Market Risk</span>
          <span className="font-semibold text-amber-600 mt-0.5 block">{brief.riskLevel}</span>
        </div>
      </div>
    </div>
  );
}
