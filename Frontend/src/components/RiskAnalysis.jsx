import React from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function RiskAnalysis({ risk }) {
  if (!risk) return null;

  const getMeterColor = (score) => {
    if (score < 30) return 'bg-emerald-500';
    if (score < 60) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Risk Analysis</h3>
          <p className="text-xs text-gray-400">Quantitative volatility & market risk audit</p>
        </div>
        <div className="text-right">
          <span className="font-mono text-sm font-bold text-gray-900">
            {risk.score} <span className="text-gray-400 text-xs font-normal">/ 100</span>
          </span>
          <span className="text-[10px] font-semibold block text-amber-600 uppercase tracking-wider">
            {risk.level} Risk
          </span>
        </div>
      </div>

      {/* Horizontal Risk Meter */}
      <div className="space-y-1.5">
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${getMeterColor(risk.score)}`}
            style={{ width: `${risk.score}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-400 font-mono">
          <span>Low (0)</span>
          <span>Moderate (50)</span>
          <span>High (100)</span>
        </div>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50 flex justify-between items-center">
          <span className="text-gray-500">Volatility</span>
          <span className="font-semibold text-gray-800 font-mono">{risk.volatility}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50 flex justify-between items-center">
          <span className="text-gray-500">Market Risk</span>
          <span className="font-semibold text-gray-800 font-mono">{risk.marketRisk}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50 flex justify-between items-center">
          <span className="text-gray-500">Sector Risk</span>
          <span className="font-semibold text-gray-800 font-mono">{risk.sectorRisk}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-gray-50/70 border border-gray-200/50 flex justify-between items-center">
          <span className="text-gray-500">Uncertainty</span>
          <span className="font-semibold text-gray-800 font-mono">{risk.uncertainty}</span>
        </div>
      </div>
    </div>
  );
}
