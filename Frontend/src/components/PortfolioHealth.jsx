import React from 'react';
import { DollarSign, TrendingUp, ShieldCheck, PieChart, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/mockData';

export default function PortfolioHealth() {
  const p = PORTFOLIO_DATA;

  return (
    <div className="space-y-6">
      {/* Top 3 Core Portfolio KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-card">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
            Total Portfolio Value
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 tabular-nums">
            ${p.totalValue.toLocaleString()}
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5 block">Net Active Equity</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-card">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
            Overall Return
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1 tabular-nums">
            +{p.overallReturn}%
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5 block">+$13,740.00 since inception</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-card">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
            Portfolio Health
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-extrabold text-indigo-600 mt-1 tabular-nums">
            {p.healthScore} <span className="text-gray-400 text-sm font-normal">/ 100</span>
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold mt-0.5 block">Optimal Growth Tilt</span>
        </div>
      </div>

      {/* 4 Simple Metrics & AI Advice Card */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Portfolio Health Analyzer</h3>
          <span className="text-xs font-medium text-gray-400">Quantitative multi-factor audit</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
            <span className="text-gray-400 text-[11px] block uppercase tracking-wider">Diversification</span>
            <span className="font-mono font-bold text-base text-gray-900 mt-0.5 block">
              {p.metrics.diversification} <span className="text-xs text-gray-400">/ 100</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
            <span className="text-gray-400 text-[11px] block uppercase tracking-wider">Risk Level</span>
            <span className="font-mono font-bold text-base text-amber-600 mt-0.5 block">
              {p.metrics.risk}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
            <span className="text-gray-400 text-[11px] block uppercase tracking-wider">Growth Potential</span>
            <span className="font-mono font-bold text-base text-emerald-600 mt-0.5 block">
              {p.metrics.growthPotential}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-gray-50/70 border border-gray-200/50">
            <span className="text-gray-400 text-[11px] block uppercase tracking-wider">Sector Concentration</span>
            <span className="font-mono font-bold text-base text-rose-600 mt-0.5 block">
              {p.metrics.sectorConcentration}
            </span>
          </div>
        </div>

        {/* AI Summary & Suggestion */}
        <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100/80 space-y-2 text-xs">
          <div className="flex items-start space-x-2 text-gray-800">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <p className="font-medium">
              <strong className="text-gray-900">AI Summary:</strong> "{p.summary}"
            </p>
          </div>
          <div className="text-gray-600 pl-6 leading-relaxed">
            <strong className="text-indigo-700">AI Suggestion:</strong> "{p.suggestion}"
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Current Holdings</h3>
            <p className="text-xs text-gray-400">Mock positions for demonstration</p>
          </div>
          <span className="text-xs font-mono text-gray-400">{p.holdings.length} Positions</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-sans text-[11px] uppercase tracking-wider">
                <th className="py-2.5 px-2 font-medium">Stock</th>
                <th className="py-2.5 px-2 font-medium">Shares</th>
                <th className="py-2.5 px-2 font-medium">Price</th>
                <th className="py-2.5 px-2 font-medium">Value</th>
                <th className="py-2.5 px-2 font-medium">Return</th>
                <th className="py-2.5 px-2 font-medium text-right">AI Signal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/70 text-gray-900">
              {p.holdings.map((h) => (
                <tr key={h.ticker} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3 px-2 font-sans font-semibold">
                    <span className="font-mono font-bold mr-1.5">{h.ticker}</span>
                    <span className="text-gray-400 text-xs hidden sm:inline">{h.name}</span>
                  </td>
                  <td className="py-3 px-2">{h.shares}</td>
                  <td className="py-3 px-2">${h.price.toFixed(2)}</td>
                  <td className="py-3 px-2 font-bold">${h.value.toLocaleString()}</td>
                  <td className="py-3 px-2 text-emerald-600 font-bold">{h.returnPct}</td>
                  <td className="py-3 px-2 text-right">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      {h.signal}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
