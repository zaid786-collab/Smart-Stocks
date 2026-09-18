import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';

export default function CompanyHealth({ health }) {
  if (!health) return null;

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Company Health</h3>
          <p className="text-xs text-gray-400">Core balance sheet & growth fundamentals</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono">
          AI Rating: {health.score}
        </span>
      </div>

      {/* 4 Fundamental Metrics */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-gray-400 text-[11px] block uppercase tracking-wider">Revenue Growth</span>
          <span className="font-mono font-bold text-base text-gray-900 mt-0.5 block">{health.revenueGrowth}</span>
        </div>
        <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-gray-400 text-[11px] block uppercase tracking-wider">Profit Growth</span>
          <span className="font-mono font-bold text-base text-emerald-600 mt-0.5 block">{health.profitGrowth}</span>
        </div>
        <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-gray-400 text-[11px] block uppercase tracking-wider">P/E Ratio</span>
          <span className="font-mono font-bold text-base text-gray-900 mt-0.5 block">{health.peRatio}</span>
        </div>
        <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
          <span className="text-gray-400 text-[11px] block uppercase tracking-wider">ROE</span>
          <span className="font-mono font-bold text-base text-gray-900 mt-0.5 block">{health.roe}</span>
        </div>
      </div>

      {/* AI Summary Statement */}
      <div className="pt-2 border-t border-gray-100">
        <p className="text-xs text-gray-600 leading-relaxed font-medium">
          "{health.summary}"
        </p>
      </div>
    </div>
  );
}
